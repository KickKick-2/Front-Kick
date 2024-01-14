import styled from 'styled-components';
type Props = {
  home: string;
  away: string;
  date: string;
  location: string;
};

const SelectScheduleBox = (props: Props) => {
  const changeNameToLogo = (teamName: string) => {
    if (teamName === 'FC서울') return 'public/assets/teams/FC서울.png';
    else if (teamName === '강원FC') return 'public/assets/teams/강원FC.png';
    else if (teamName === '광주FC') return 'public/assets/teams/광주FC.png';
    else if (teamName === '대구FC') return 'public/assets/teams/대구FC.png';
    else if (teamName === '대전하나시티즌')
      return 'public/assets/teams/대전하나시티즌.png';
    else if (teamName === '수원삼성블루윙즈')
      return 'public/assets/teams/수원삼성블루윙즈.png';
    else if (teamName === '수원FC') return 'public/assets/teams/수원FC.png';
    else if (teamName === '울산현대') return 'public/assets/teams/울산현대.png';
    else if (teamName === '인천유나이티드')
      return 'public/assets/teams/인천유나이티드.png';
    else if (teamName === '전북현대모터스')
      return 'public/assets/teams/전북현대모터스.png';
    else if (teamName === '제주유나이티드')
      return 'public/assets/teams/제주유나이티드.png';
    else if (teamName === '포항스틸러스')
      return 'public/assets/teams/포항스틸러스.png';
  };
  return (
    <Box>
      <LogoForm>
        <TeamLogo src={changeNameToLogo(props.home)} />
        <p>vs</p>
        <TeamLogo src={changeNameToLogo(props.away)} />
      </LogoForm>
      <TextForm>
        <Date>{props.date}</Date>
        <Location>{props.location}</Location>
      </TextForm>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 100px;
  border-radius: 25px;
  border: 1px solid black;
`;
const LogoForm = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const TeamLogo = styled.img`
  width: 32px;
  height: 38px;
`;
const TextForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Date = styled.p``;
const Location = styled.p``;
export default SelectScheduleBox;
