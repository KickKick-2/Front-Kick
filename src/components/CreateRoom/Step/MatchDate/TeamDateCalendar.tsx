import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventContentArg } from '@fullcalendar/core/index.js';
import styled from 'styled-components';
import MatchingInfo from './MatchingInfo';
import { customMedia } from '@/util/GlobalStyle';
interface TeamDateCalendarProps {
  teamName: string;
  teamEvents: {
    game_schedule_id: string;
    date: Date;
    home_team_name: string;
    away_team_name: string;
    stadium: string;
    opponent_team_logo_img_url: string;
    team_id: number;
    team_logo_img_url: string;
    opponent_team_id: number;
  }[];
}

const TeamDateCalendar: React.FC<TeamDateCalendarProps> = ({
  teamName,
  teamEvents,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>();

  const filteredEvents = teamEvents.map((event) => ({
    ...event,
    start: new Date(event.date),
  }));
  // console.log(filteredEvents);

  const renderEventContent = (eventInfo: EventContentArg) => {
    const { home_team_name, opponent_team_logo_img_url } =
      eventInfo.event.extendedProps;

    return (
      <EventContainer>
        {/* <EventTitle>{home_team_name}</EventTitle> */}
        {home_team_name && (
          <EventImage
            src={`https://kickstorage.blob.core.windows.net${opponent_team_logo_img_url}`}
            alt={home_team_name}
          />
        )}
      </EventContainer>
    );
  };

  const handleEventClick = (eventInfo: any) => {
    setSelectedEvent(eventInfo.event);
  };
  // console.log(selectedEvent);

  const handleCloseMatchingInfo = () => {
    setSelectedEvent(null);
  };

  return (
    <CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        events={filteredEvents}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />
      {selectedEvent && (
        <MatchingInfoContainer>
          <MatchingInfo
            event={selectedEvent}
            onClose={handleCloseMatchingInfo}
          />
        </MatchingInfoContainer>
      )}
    </CalendarContainer>
  );
};

export default TeamDateCalendar;

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  //캘린더 전체 사이즈
  .fc {
    width: 100%;
    height: 100%;
  }

  // toolbar container
  .fc .fc-toolbar.fc-header-toolbar {
    margin-top: 20px;
    padding: 0 30px;
    background-color: #1f1f45;
    height: 63px;
    font-weight: 600;
    font-size: 13px;
    /* line-height: 29px; */
    color: white;
    border-radius: 20px 20px 20px 20px;
    ${customMedia.lessThan('mobile')`
      font-size:10px;
      padding: 0 20px;
	`}
  }

  // toolbar 버튼
  .fc .fc-button-primary {
    background-color: transparent;
    border: none;

    span {
      font-size: 30px;
    }

    :hover {
      background-color: transparent;
    }
  }

  // 요일 부분
  .fc-theme-standard th {
    height: 32px;
    padding-top: 3.5px;
    background: #1f1f45;
    border: 1px solid #dddee0;
    font-weight: 100;
    font-size: 16px;
    color: white;
  }

  // 오늘 날짜 배경색
  .fc .fc-daygrid-day.fc-day-today {
    color: #1f1f45;
  }

  // 날짜별 그리드
  .fc .fc-daygrid-day-frame {
    ${customMedia.lessThan('mobile')`
      display:flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 5px;
      margin-bottom: 5px;
	`}
  }

  // 날짜  ex) 2일
  .fc .fc-daygrid-day-top {
    flex-direction: row;
    padding: 10px 0 0 10px;
    ${customMedia.lessThan('mobile')`
      padding: 3px 0 0 3px;
	`}
    
  }

  // 각 이벤트 요소
  .fc-event {
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    /* background-color:#1F1F45; */
  }
  /* 일요일 날짜 빨간색 */
  .fc-day-sun a {
    color: red;
    text-decoration: none;
  }

  /* 토요일 날짜 파란색 */
  .fc-day-sat a {
    color: blue;
    text-decoration: none;
  }
`;

const EventContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: -30%;
  color: black;
  ${customMedia.lessThan('tablet')`
    margin-bottom: -10%;

	`}
`;

const EventTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const MatchingInfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const EventImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan('tablet')`
    width: 40%;
    height: 40%;
    object-fit: contain;
	`}
  ${customMedia.lessThan('mobile')`
    width: 100%;
    height: 100%;
    object-fit: contain;
	`}
`;
