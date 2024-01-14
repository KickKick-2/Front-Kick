import styled from 'styled-components';
import OnboardingTeamSelect from '@/components/OnboardingTeamSelect/OnboardingTeamSelect';

const Onboarding = () => {
  return (
    <div>
      <TitleForm>
        <H1>환영해요!</H1>
        <H1>응원하는 K리그 팀이 있나요?</H1>
      </TitleForm>
      <TeamCardContainer>
        <CarouselContainer>
          <OnboardingTeamSelect />
        </CarouselContainer>
      </TeamCardContainer>
    </div>
  );
};

const TeamCardContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
`;

const CarouselContainer = styled.div`
  height: 100%;
  background-color: #1f1f45;
  overflow-x: hidden;
`;

const TitleForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;
const H1 = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;

export default Onboarding;
