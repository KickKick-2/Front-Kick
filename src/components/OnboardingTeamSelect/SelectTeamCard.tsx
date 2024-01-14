import { RootState } from '@/app/store';
import { BASE_URL } from '@/config';
import { getCookie } from '@/util/cookieFn';
import { teamnameConvertImg } from '@/util/teamnameConvertImg';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const token = getCookie('token');
const headers = {
  authorization: `Bearer ${token}`,
  'Content-Type': `application/json`,
};

type SelectTeamCardProps = {
  football_team_id: number;
  original_team_name: string;
  follower: number;
  recruit_ing: number;
  team_name: string;
  logo_img_url: string;
  team_color_main: string;
  team_color_sub: string;
  recruit_end: number;
};

const SelectTeamCard = (props: SelectTeamCardProps) => {
  const id = useSelector((state: RootState) => state.auth.id);
  const navigate = useNavigate();
  const handleSelectButtonClick = async () => {
    const body = {
      id: id,
      nickname: '',
      cheering_team_id: props.football_team_id,
    };
    const res = await fetch(`${BASE_URL}/api/user/profile/`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({
        ...body,
      }),
    });
    const data = await res.json();
    // console.log(data);
    navigate('/');
    location.reload();
  };

  return (
    <Wrap>
      <BodyContainer teamcolor={props?.team_color_sub}>
        <BodyHead teamcolor={props?.team_color_main}></BodyHead>
        <HeadLogo>
          <Circle>
            <IMG src={teamnameConvertImg(props?.logo_img_url)} />
          </Circle>
        </HeadLogo>
        <BodyBody>
          <TeamName>{props?.team_name}</TeamName>
          <TeamInfo>
            <TeamCount>
              <Number>{props?.recruit_ing}</Number>
              <About>모집 중인 동행 팀</About>
            </TeamCount>
            <Dot></Dot>
            <Follower>
              <Number>{props?.follower}</Number>
              <About>팔로워</About>
            </Follower>
            <Dot></Dot>
            <EndTeamCount>
              <Number>{props?.recruit_end}</Number>
              <About>마감된 동행 팀</About>
            </EndTeamCount>
          </TeamInfo>
        </BodyBody>
      </BodyContainer>
      <ButtonContainer>
        <SelectButton onClick={handleSelectButtonClick}>선택하기</SelectButton>
        <SkipButton onClick={() => navigate('/')}>취소</SkipButton>
      </ButtonContainer>
    </Wrap>
  );
};

export default SelectTeamCard;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;
const BodyContainer = styled.div<{ teamcolor: string }>`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 360px;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
  border-radius: 12px;
`;
const BodyHead = styled.div<{ teamcolor: string }>`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 120px;
  width: 100%;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
  border-radius: 12px 12px 0 0;
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  background-color: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const HeadLogo = styled.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  object-fit: cover;
  font-weight: bold;
  margin-bottom: 120px;
  width: 180px;
  height: 180px;
  border: none;
  border-radius: 90px;
`;

const IMG = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const BodyBody = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  top: 120px;
  z-index: 2;
  width: 264px;
  height: 240px;
  padding: 0 25px 50px;

  border-radius: 12px;
  gap: 9px;
`;
const TeamName = styled.div`
  font-size: 25px;
  font-weight: bold;
  font-weight: medium;
  color: #ffffff;
  margin-bottom: 20px;
`;
const TeamInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #ffffff;
`;
const Dot = styled.div`
  width: 4px;
  height: 4px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`;
const TeamCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`;
const Follower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`;
const EndTeamCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`;
const Number = styled.p`
  font-size: 15px;
  font-weight: bolder;
  color: #ffffff;
`;
const About = styled.p`
  font-size: 10px;
  font-weight: bolder;
  color: #ffffff;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px;
`;

const SelectButton = styled.button`
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const SkipButton = styled.button`
  background-color: transparent;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`;
