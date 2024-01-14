import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAction } from '../../feature/TeamSlice';
import { useEffect } from 'react';

type Props = {
  cheering_team_id?: number;
};

const RegisterTeam = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return props.cheering_team_id ? (
    <Form>
      <Comment>아직 선택한 구단 카드가 없어요</Comment>
      <RegistBtn onClick={() => navigate('/selectteam')}>
        함께 응원할 구단 정하기
      </RegistBtn>
    </Form>
  ) : (
    <TeamWrap>
      {/* <TeamForm>
        <TeamContainer1>
          <TeamImg>
            <Img src={states.teamImg} />
          </TeamImg>
          <UsersTeam>
            <FavTeam>김승준님의 관심구단</FavTeam>
            <TeamNameGrade>
              <TeamName>{states.teamName}</TeamName>
              <TeamGrade>{states.teamGrade}</TeamGrade>
              <TeamDelete
                onClick={() => (dispatch(deleteAction()), console.log('click'))}
              >
                팀 정보 삭제
              </TeamDelete>
            </TeamNameGrade>
            <TeamSchedule>
              <Dday>D-3</Dday>
              <Schedule>2023.06.22(목)</Schedule>
            </TeamSchedule>
            <TextInfo>
              <TeamLocation>
                <InfoText>연고지</InfoText>
                <StateText>{states.location}</StateText>
              </TeamLocation>
              <TeamStadium>
                <InfoText>홈구장</InfoText>
                <StateText>{states.teamStadium}</StateText>
              </TeamStadium>
            </TextInfo>
          </UsersTeam>
        </TeamContainer1>
        <TeamContainer2>
          <CurrentTeam>
            <Current>현재</Current>
            <CurrentLabel>
              <CurrentTeamNumber>{states.totalMatching}</CurrentTeamNumber>
              <Current>팀</Current>
            </CurrentLabel>
          </CurrentTeam>
          <Find>
            <Blue>달려갈 준비가 끝난 동행 팀</Blue>
            <Black>수원삼성보다 4팀이나 적어요</Black>
            <FindBtn>
              <BtnText onClick={() => navigate('/matchmaking')}>
                동행찾기
              </BtnText>
            </FindBtn>
          </Find>
        </TeamContainer2>
      </TeamForm> */}
    </TeamWrap>
  );
};

//구단 미등록 폼
const Form = styled.div`
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
const Comment = styled.p`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #868686;
`;
const RegistBtn = styled.button`
  width: 156px;
  height: 41px;
  font-weight: 700;
  font-size: 14px;
  border: 1px solid #000000;
  border-radius: 20px;
`;
const TeamWrap = styled.div`
  background-color: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const TeamForm = styled.div`
  width: 90%;
  margin: 0 auto;
  border-radius: 15.684px;
  background: #ffec86;
  box-shadow: 0px 2.0911853313446045px 2.0911853313446045px 0px
    rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TeamContainer1 = styled.div`
  display: flex;
  margin-top: -20px;
`;
const TeamImg = styled.div``;
const Img = styled.img`
  width: 107px;
`;
const UsersTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
  padding: 4px;
`;
const FavTeam = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
const TeamNameGrade = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;
  margin-top: 20px;
`;
const TeamName = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 700;
`;
const TeamGrade = styled.p`
  color: #c70f0f;
  font-size: 20px;
  font-weight: 700;
`;
const TeamDelete = styled.div`
  font-size: 8px;
`;
const TeamSchedule = styled.div`
  display: flex;
  gap: 20px;
  border-radius: 9.096px;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
const Dday = styled.p`
  color: #c70f0f;
  font-size: 20px;
  font-weight: 700;
`;
const Schedule = styled.p`
  color: #000;
  font-size: 10px;
  font-weight: 700;
`;
const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`;
const TeamLocation = styled.div`
  display: flex;
  gap: 5px;
`;
const TeamStadium = styled.div`
  display: flex;
  gap: 5px;
`;
const InfoText = styled.p`
  color: #000;
  font-size: 10px;
  font-weight: 700;
`;
const StateText = styled.p`
  color: #000;
  font-size: 10px;
  font-family: Noto Sans KR;
  font-weight: 400;
`;
const TeamContainer2 = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
`;
const CurrentTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 93px;
  height: 93px;
  flex-shrink: 0;
  border-radius: 93px;
  background: #1f1f45;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const Current = styled.p`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`;
const CurrentTeamNumber = styled.p`
  color: #fff;
  font-size: 28px;
  font-weight: 700;
`;
const CurrentLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Find = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const FindBtn = styled.div`
  width: 183px;
  height: 28px;
  border-radius: 14.163px;
  border: 0.472px solid #5956ff;
  background: #fff;
  box-shadow: 0px 1.8884425163269043px 1.8884425163269043px 0px
    rgba(0, 0, 0, 0.25);
`;
const BtnText = styled.p`
  color: #000;
  font-size: 16px;
  margin: 5px;
  text-align: center;
  vertical-align: middle;
`;
const Blue = styled.p`
  color: #1f1f45;
  font-size: 14px;
  font-weight: 700;
`;
const Black = styled.p`
  color: #0b0b0b;
  font-size: 12px;
`;

export default RegisterTeam;
