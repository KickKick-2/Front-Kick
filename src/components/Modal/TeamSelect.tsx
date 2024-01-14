import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTeamFilter,
  removeTeamFilter,
  clearTeamFilters,
} from '@/feature/teamFilterSlice';
import { closeModal } from '@/feature/ModalSlice';
import { teamCheck } from '../../feature/teamFilterSlice';
import { getTeamDetail } from '@/lib/api';
import { useEffect, useState } from 'react';
import { GetTeamType, GetTeamList } from '@/lib/interface';
export const teams = [
  {
    teamName: '울산 현대 축구단',
    teamImg: 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png',
    teamGrade: 1,
    teamStadium: '울산 문수축구경기장',
    location: '울산광역시',
    teamCardOwner: '999',
    totalMatching: '19392',
    currentMatching: 190,
    follower: 133,
  },
  {
    teamName: '포항 스틸러스',
    teamImg:
      'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png',
    teamGrade: 2,
    teamStadium: '포항스틸야드',
    location: '포항시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 9,
    follower: 133,
  },
  {
    teamName: 'FC 서울',
    teamImg: 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.png',
    teamGrade: 3,
    teamStadium: '서울월드컵경기장',
    location: '서울특별시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 6,
    follower: 133,
  },
  {
    teamName: '제주 유나이티드 FC',
    teamImg: 'https://kickstorage.blob.core.windows.net/logo/jeju_united.png',
    teamGrade: 4,
    teamStadium: '제주월드컵경기장',
    location: '제주특별자치도',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 12,
    follower: 133,
  },
  {
    teamName: '전북 현대 모터스',
    teamImg:
      'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png',
    teamGrade: 5,
    teamStadium: '전주월드컵경기장',
    location: '전라북도',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 112,
    follower: 133,
  },
  {
    teamName: '대구 FC',
    teamImg: 'https://kickstorage.blob.core.windows.net/logo/daegu_fc.png',
    teamGrade: 6,
    teamStadium: 'DGB 대구은행파크',
    location: '대구광역시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 972,
    follower: 133,
  },
  {
    teamName: '대전 하나 시티즌',
    teamImg:
      'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png',
    teamGrade: 7,
    teamStadium: '대전월드컵경기장',
    location: '대전광역시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 912,
    follower: 133,
  },
  {
    teamName: '광주 FC',
    teamImg: 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png',
    teamGrade: 8,
    teamStadium: '광주축구전용구장',
    location: '광주광역시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 912,
    follower: 133,
  },
  {
    teamName: '인천 유나이티드 FC',
    teamImg:
      'https://kickstorage.blob.core.windows.net/logo/incheon_united.png',
    teamGrade: 9,
    teamStadium: '인천축구전용경기장',
    location: '인천광역시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 12,
    follower: 133,
  },
  {
    teamName: '수원 FC',
    teamImg: 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.png',
    teamGrade: 10,
    teamStadium: '수원종합운동장',
    location: '수원시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 12,
    follower: 133,
  },
  {
    teamName: '강원 FC',
    teamImg: 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png',
    teamGrade: 11,
    teamStadium: '강릉종합운동장, 춘천 종합운동장',
    location: '강원도',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 12,
    follower: 133,
  },
  {
    teamName: '수원 삼성 블루윙즈',
    teamImg:
      'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png',
    teamGrade: 12,
    teamStadium: '수원월드컵경기장',
    location: '수원시',
    teamCardOwner: '1289',
    totalMatching: '19392',
    currentMatching: 12,
    follower: 133,
  },
];
type Props = {};

interface BoxProps {
  backgroundColor: boolean;
}

const TeamSelect = (props: Props) => {
  // const [teamList, setteamList] = useState<GetTeamList>();
  const dispatch = useDispatch();
  const teamFilters = useSelector(
    (state: teamCheck) => state.teamfilter.teamNames,
  );
  // 박스 클릭 시, state 내의 팀 이름이 있는지 없는지 판별 후 redux에 추가, 삭제
  const handleBoxClick = (teamName: string) => {
    if (teamFilters.includes(teamName)) {
      dispatch(removeTeamFilter(teamName));
    } else {
      dispatch(addTeamFilter(teamName));
    }
  };
  // api에서 team 목록 불러오기
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await getTeamDetail();
  //       setteamList(response);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  // redux state에 저장된 팀들 전부 삭제
  const handleClearFilters = () => {
    dispatch(clearTeamFilters());
    console.log(teamFilters);
  };
  return (
    <Wrap>
      <Container>
        {teams.map((team: GetTeamType) => (
          <Box
            backgroundColor={teamFilters.includes(team.teamName)}
            key={team.teamGrade}
            onClick={() => handleBoxClick(team.teamName)}
          >
            <Logo src={team.teamImg} />
            <Name>{team.teamName}</Name>
          </Box>
        ))}
      </Container>
      <ButtonBox>
        <Button onClick={handleClearFilters}>필터 지우기</Button>
        <Button onClick={() => dispatch(closeModal())}>찾기</Button>
      </ButtonBox>
    </Wrap>
  );
};

const Button = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 25px;
  background-color: #272727;
  color: white;
  border-radius: 12px;
`;
const ButtonBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 80%;
  height: 547px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
  gap: 10px;
`;
const Container = styled.div`
  width: 312px;
  padding: 300px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`;
const Box = styled.div<BoxProps>`
  padding: 10px;
  width: 140px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${(props) => (props.backgroundColor ? '#A4BBF9' : 'white')};
  border: ${(props) =>
    props.backgroundColor ? '1px solid #fff' : '1px solid #d9d9d9'};
  color: ${(props) => (props.backgroundColor ? 'white' : 'black')};
`;
const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
const Name = styled.p`
  font-size: 10px;
  font-weight: bold;
`;
export default TeamSelect;
