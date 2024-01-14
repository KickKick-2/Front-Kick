import { RootState } from '@/app/store';
import { setMatch } from '@/feature/SummarySlice';
import { customMedia } from '@/util/GlobalStyle';
import { teamnameConvertImg } from '@/util/teamnameConvertImg';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

export interface MatchingInfoProps {
  event: any;
  onClose: () => void;
}

export interface itemsProps {
  game_schedule_id: string;
  date: Date;
  home_team_name: string;
  away_team_name: string;
  stadium: string;
  team_id: number;
  team_logo_img_url: string;
  opponent_team_id: number;
  opponent_team_logo_img_url: string;
}

const MatchingInfo = (props: MatchingInfoProps) => {
  const [boxColor, setBoxColor] = useState('#eeeeee');
  const dispatch = useDispatch();

  useEffect(() => {
    setBoxColor('#eeeeee');
  }, [props.event]);

  const handleSelectClick = (item: {
    extendedProps: {
      game_schedule_id: string;
      home_team_name: string;
      away_team_name: string;
      stadium: string;
      team_id: number;
      team_logo_img_url: string;
      opponent_team_id: number;
      opponent_team_logo_img_url: string;
    };
    start: Date;
  }) => {
    setBoxColor('#efd44c');
    dispatch(
      setMatch({
        game_schedule_id: item.extendedProps.game_schedule_id,
        homename: item.extendedProps.home_team_name,
        awayname: item.extendedProps.away_team_name,
        team_id: item.extendedProps.team_id,
        date: item.start.toLocaleString('ko-KR'),
        stadium: item.extendedProps.stadium,
        team_logo_img_url: item.extendedProps.team_logo_img_url,
        opponent_team_id: item.extendedProps.opponent_team_id,
        opponent_team_logo_img_url:
          item.extendedProps.opponent_team_logo_img_url,
      }),
    );
    // console.log(item.start.toLocaleString('ko-KR'));
  };
  // console.log(props.event.extendedProps);

  const handleCancelClick = (item: {
    extendedProps: {
      game_schedule_id: string;
      home_team_name: string;
      away_team_name: string;
      stadium: string;
      team_id: number;
      team_logo_img_url: string;
      opponent_team_id: number;
      opponent_team_logo_img_url: string;
    };
    start: Date;
  }) => {
    setBoxColor('#eeeeee');
    dispatch(
      setMatch({
        game_schedule_id: '',
        homename: '',
        awayname: '',
        team_id: '',
        date: '',
        stadium: '',
        team_logo_img_url: '',
        opponent_team_id: '',
        opponent_team_logo_img_url:'',
      }),
    );
    // console.log(item.start.toLocaleString('ko-KR'));
  };

  return (
    <div>
      <Box style={{ background: boxColor }}>
        <FlexContainer>
          <FlexContainerLeft>
            <IMG
              src={teamnameConvertImg(props.event.extendedProps.home_team_name)}
              alt={props.event.extendedProps.home_team_name}
            />
            <Text> vs </Text>
            <IMG
              src={teamnameConvertImg(props.event.extendedProps.away_team_name)}
              alt={props.event.extendedProps.away_team_name}
            />
          </FlexContainerLeft>
          <FlexContainerRight>
            <FlexText>
              <DIV>경기 일정</DIV>
              <FlexItem>{props.event.start.toLocaleString('ko-KR').slice(0, -3)}</FlexItem>
            </FlexText>
            <FlexText>
              <DIV>경기 장소</DIV>
              <FlexItem>{props.event.extendedProps.stadium} 경기장</FlexItem>
            </FlexText>
          </FlexContainerRight>
        </FlexContainer>
        <FlexContainer>
          {boxColor  === '#efd44c' ? <Btn onClick={() => handleCancelClick(props.event)}>선택 해제</Btn>
          : <Btn onClick={() => handleSelectClick(props.event)}>선택</Btn>
          }

        </FlexContainer>
      </Box>
    </div>
  );
};

export default MatchingInfo;

const Text = styled.div`
  font-size: 30px;
  padding: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: black;
  ${customMedia.lessThan('mobile')`
     padding: 5px;
     font-size: 15px;
	`}
`;

const Btn = styled.div`
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: black;
  /* background-color: white;
  border-radius: 15px; */
  ${customMedia.lessThan('mobile')`
     padding: 5px;
     font-size: 15px;
	`}
`;

const Box = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eeeeee;
  border-radius: 20px;
  margin: 10px auto;
  ${customMedia.lessThan('mobile')`
	`}
`;

const IMG = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  ${customMedia.lessThan('mobile')`
    height: 40px;
    width: 40px;
	`}
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10%;
  ${customMedia.lessThan('mobile')`
     padding: 3px;
     gap: 3%;
	`}
`;

const FlexContainerLeft = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  ${customMedia.lessThan('mobile')`
     padding: 3px;
	`}
`;

const FlexContainerRight = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 15px;
  ${customMedia.lessThan('mobile')`
     padding: 3px;
     gap: 3px;
	`}
`;

const FlexItem = styled.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  ${customMedia.lessThan('mobile')`
    font-size: 12px;
	`}
`;

const FlexText = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 20px;
  color: black;
  ${customMedia.lessThan('mobile')`
     padding: 5px;
	`}
`;

const DIV = styled.div`
  align-items: center;
  font-size: 20px;
  ${customMedia.lessThan('mobile')`
     font-size: 10px;
	`}
`;
