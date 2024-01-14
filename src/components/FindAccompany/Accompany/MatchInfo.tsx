import styled from 'styled-components';
type Props = {};

const MatchInfo = (props: Props) => {
  return (
    <Form>
      <HostInfo>
        <ProfileImg src='public/assets/프로필이미지.png' />
        <HostName>호스트 이름</HostName>
      </HostInfo>
      <Partition></Partition>
      <MatchTeam>
        <HomeImg src='public/assets/구단로고.png' />
        <HomeTeam>
          <Home>Home</Home>
          <HomeName>제주</HomeName>
        </HomeTeam>
        <Versus>VS</Versus>
        <AwayImg src='public/assets/구단로고.png' />
        <AwayTeam>
          <Away>Away</Away>
          <AwayName>서울</AwayName>
        </AwayTeam>
      </MatchTeam>
      <NowInfo>
        <Now>
          <Info>모집중</Info>
        </Now>
      </NowInfo>
    </Form>
  );
};
// 호스트 이름, 경기 정보, 남은 기간, 모집중 정보
const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 312px;
  height: 55px;
  background-color: #d9d9d9;
  border-radius: 12px 12px 0 0;
  gap: 10px;
  padding: 10px 0 6px;
`;
const HostInfo = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;
const ProfileImg = styled.img`
  width: 30px;
`;
const HostName = styled.p`
  font-size: 10px;
  font-weight: 500;
`;
const Partition = styled.div`
  width: 0.5px;
  height: 20px;
  background-color: #9b9b9b;
`;
const MatchTeam = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const HomeImg = styled.img`
  width: 26px;
`;
const HomeTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Home = styled.p`
  font-size: 6px;
  font-weight: 500;
  color: #6d6d6d;
`;
const HomeName = styled.p`
  color: #6d6d6d;
  font-size: 9px;
  font-weight: 900;
`;
const Versus = styled.p`
  color: #9b9b9b;
  font-size: 8px;
  font-weight: 900;
`;
const AwayImg = styled.img`
  width: 26px;
`;
const AwayTeam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Away = styled.p`
  font-size: 6px;
  font-weight: 500;
  color: #6d6d6d;
`;
const AwayName = styled.p`
  color: #6d6d6d;
  font-size: 9px;
  font-weight: 900;
`;
const NowInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-top: 10px;
`;
const Dday = styled.p`
  color: #000;
  font-size: 10px;
  font-weight: 700;
`;
const Now = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  border-radius: 8px;
  background: #898989;
`;
const Info = styled.p`
  color: #fff;
  text-align: center;
  font-size: 8px;
  font-weight: 300;
`;

export default MatchInfo;
