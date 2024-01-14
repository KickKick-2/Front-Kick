import { useState } from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import { compareDate } from '@/util/compareDate';
type props = {};
const Calendar = (props: props) => {
  const [selectedDate, setselectedDate] = useState<string | null>(null);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  const handleDateClick = (arg: any) => {
    if (selectedDate) {
      if (compareDate(selectedDate, arg.dateStr)) {
        console.log('선택한 날짜 : ', selectedDate, '~ ', arg.dateStr);
        setselectedDate(null);
        const dates = [];
        let startDate = new Date(selectedDate);
        let endDate = new Date(arg.dateStr);
        while (startDate <= endDate) {
          dates.push(startDate.toISOString().slice(0, 10));
          startDate.setDate(startDate.getDate() + 1);
          setSelectedDates(dates);
        }
      } else {
        console.log('유효한 기간을 설정해주세요.');
        setselectedDate(null);
      }
    } else {
      setselectedDate(arg.dateStr);
    }
  };
  const dayCellContent = (arg: any) => {
    if (selectedDates.includes(arg.dateStr)) {
      return <StyledSelectedDate>{arg.dayNumberText}</StyledSelectedDate>;
    }
    return <>{arg.dayNumberText}</>;
  };

  return (
    <FullCalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today',
        }}
        dragScroll={false}
        firstDay={1}
        selectable={true} // 선택 가능하도록 설정
        dateClick={handleDateClick}
        titleFormat={(date) => {
          let year = date.date.year;
          let month = date.date.month + 1;

          return year + '년 ' + month + '월';
        }}
      />
    </FullCalendarWrapper>
  );
};
const FullCalendarWrapper = styled.div`
  .fc-header-toolbar {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 10px; /* 요소들 간에 아래쪽 간격을 10px로 지정합니다. */
  }
  .fc-day-sun a {
    color: red;
  }
  .fc-day-sat a {
    color: blue;
  }
  .fc-toolbar-title {
    font-size: 16px;
    font-weight: bold;
  }
  .fc-button {
    padding: 5px;
    border-radius: 12px;
  }
  .fc-col-header-cell {
    font-size: 12px;
  }
  .fc-scrollgrid-liquid {
    height: 200%;
  }
  .selected-date {
    background-color: yellow; /* 선택한 날짜의 배경색을 노란색으로 지정 */
    color: black; /* 선택한 날짜의 텍스트 색상을 검정으로 지정 */
    font-weight: bold; /* 선택한 날짜의 텍스트를 굵게 표시 */
  }
  display: flex;
  justify-content: center;
  margin-top: -150px;
  width: 100%;
`;
const StyledSelectedDate = styled.div`
  background-color: yellow; /* 선택한 날짜의 배경색을 노란색으로 지정 */
  color: black; /* 선택한 날짜의 텍스트 색상을 검정으로 지정 */
  font-weight: bold; /* 선택한 날짜의 텍스트를 굵게 표시 */
`;
export default Calendar;
