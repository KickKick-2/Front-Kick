import styled from 'styled-components';
type Props = {};

const MatchInfo = (props: Props) => {
  return (
    <Container>
      <Title>매치 정보</Title>
      <Content>
        <Info>
          <MatchDate>23.07.13</MatchDate>
          <MatchTime>목요일 오후 2시</MatchTime>
          <MatchPlace>제주 월드컵경기장</MatchPlace>
        </Info>
        <Match>
          <Home>
            <TeamImg>구단로고</TeamImg>
            <Text>
              <TextTitle>Home</TextTitle>
              <TextName>제주</TextName>
            </Text>
          </Home>
          <Versus>VS</Versus>
          <Away>
            <TeamImg>구단로고</TeamImg>
            <Text>
              <TextTitle>Away</TextTitle>
              <TextName>서울</TextName>
            </Text>
          </Away>
        </Match>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`;
const Title = styled.div`
  font-size: 14px;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`;
const Match = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MatchDate = styled.div`
  font-size: 10px;
`;
const MatchTime = styled.div`
  font-size: 10px;
`;
const MatchPlace = styled.div`
  font-size: 10px;
`;
const Home = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const Versus = styled.div`
  font-size: 8px;
  color: #6d6d6d;
`;
const Away = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const TeamImg = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #9b9b9b;
  font-size: 10px;
`;
const Text = styled.div``;
const TextTitle = styled.p`
  font-size: 6px;
  color: #6d6d6d;
`;
const TextName = styled.p`
  font-size: 10px;
  color: #6d6d6d;
`;
export default MatchInfo;
