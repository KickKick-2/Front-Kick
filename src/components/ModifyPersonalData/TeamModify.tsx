import styled from 'styled-components';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useState } from 'react';
import OnboardingTeamSelect from '../OnboardingTeamSelect/OnboardingTeamSelect';
type Props = {};

const TeamModify = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => {
    setisOpen(!isOpen);
  };

  return (
    <Container>
      <Header>
        <Title>나의 응원팀 설정</Title>
        <ArrowButton onClick={handleOpen}>
          {isOpen ? <BiDownArrow size='30' /> : <BiUpArrow size='30' />}
        </ArrowButton>
      </Header>
      {isOpen ? (
        <Body>
          <TeamCardContainer>
            <CarouselContainer>
              <OnboardingTeamSelect />
            </CarouselContainer>
          </TeamCardContainer>
          <SubmitButton>저장하기</SubmitButton>
        </Body>
      ) : (
        <></>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;
const Header = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;
const ArrowButton = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.div`
  width: 560px;
  height: 64px;
  background-color: #418dff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;
const TeamCardContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
`;

const CarouselContainer = styled.div`
  height: 100%;
  background-color: #1f1f45;
  overflow-x: hidden;
`;
export default TeamModify;
