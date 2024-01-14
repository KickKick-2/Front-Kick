import { customMedia } from '@/util/GlobalStyle';
import { teamnametoFullname } from '@/util/teamnameConvertImg';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  team_id: number;
  follower: number;
  logo_img_url: string;
  original_team_name: string;
  recruit_end: number;
  recruit_ing: number;
  team_color_main: string;
  team_color_sub: string;
  toggleSide: ()=>void;
};

const CheeringTeam = (props: Props) => {


  const navigate = useNavigate()

  return (
    <div>
    <Alter onClick={() =>{
              navigate('/signup/onboarding')
              props.toggleSide()
            }}>변경
    </Alter>
    <Form>
      <FlexContainer>
        <ColorContainer1 teamcolor={props.team_color_main}>
          <Img src={props.logo_img_url} alt={props.original_team_name} />
        </ColorContainer1>
        <ColorContainer2 teamcolor={props.team_color_sub}>
          <Title teamcolor={props.team_color_main}>
            {teamnametoFullname(props.original_team_name)}
          </Title>
          <VerticalContainer>
            <Team teamcolor={props.team_color_main}>
              {props.follower} 팔로워
            </Team>
            <Team teamcolor={props.team_color_main}>
              {props.recruit_ing} 팀 동행중
            </Team>
            <Team teamcolor={props.team_color_main}>
              {props.recruit_end} 팀 마감
            </Team>
          </VerticalContainer>
        </ColorContainer2>
      </FlexContainer>
    </Form>
    </div>
  );
};


const Alter = styled.li`
  display:flex;
  margin-left: 75%;
  margin-bottom: 10px;
  align-items:center;
  justify-content: left;
  font-size: 1rem;
  color: #b6b6b6;
  ${customMedia.lessThan('tablet')`
     margin-left: 85%;
	`}
  ${customMedia.lessThan('mobile')`
     margin-left: 60%;
	`}
`;

const Title = styled.div<{ teamcolor: string }>`
  font-size: 20px;
  font-weight: 700;
  flex-direction: column;
  color: ${(props) => props.teamcolor || '#FFFFFF'};
`;
const Team = styled.p<{ teamcolor: string }>`
  font-size: 14px;
  font-weight: 500;

  color: ${(props) => props.teamcolor || '#FFFFFF'};
`;
const Form = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 15px;
`;
const Img = styled.img`
  width: 70px;
  height: 70px;
`;
const FlexContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const ColorContainer1 = styled.div<{ teamcolor: string }>`
  position: absolute;
  width: 40%;
  height: 100%;

  top: 0;
  left: 0;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 0 0 12px;
`;
const ColorContainer2 = styled.div<{ teamcolor: string }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  top: 0;
  width: 60%;
  height: 100%;
  left: 40%;
  background-color: ${(props) => props.teamcolor || '#FFFFFF'};
  border-radius: 0 12px 12px 0;
`;
const Current = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export default CheeringTeam;
