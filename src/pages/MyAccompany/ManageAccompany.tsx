import AccompanyInfo from '@/components/ManageAccompany/AccompanyInfo';
import ContentInfo from '@/components/ManageAccompany/ContentInfo';
import MatchInfo from '@/components/ManageAccompany/MatchInfo';
import MeetingRequest from '@/components/ManageAccompany/MeetingRequest';
import Star from '@/components/ManageAccompany/Star';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
type Props = {};

const ManageAccompany = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <BackBtn>
        <IoIosArrowBack size='24px' onClick={() => navigate(-1)} />
      </BackBtn>
      <Header>
        <Title>우천으로 취소돼도, 제주 맛집 부수고 돌아가요!</Title>
        <Btns>
          <Btn>수정</Btn>
          <Btn>삭제</Btn>
        </Btns>
        <Host>
          <HostImg></HostImg>
          <HostInfo>
            <HostName>호스트</HostName>
            <CreatedTime>2023.08.24 20:56</CreatedTime>
          </HostInfo>
        </Host>
      </Header>
      <Star />
      <MeetingRequest />
      <MatchInfo />
      <AccompanyInfo />
      <ContentInfo />
      <Confirm>모집 확정</Confirm>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  gap: 14px;
`;
const BackBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const Btns = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;
`;
const Host = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const HostImg = styled.div`
  width: 29px;
  height: 29px;
  border: none;
  border-radius: 100%;
  background-color: #9b9b9b;
`;
const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
const Btn = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
const HostName = styled.p`
  font-size: 10px;
  font-weight: 500;
`;
const CreatedTime = styled.p`
  font-size: 10px;
  font-weight: 500;
`;
const Confirm = styled.div`
  width: 100%;
  border: none;
  border-radius: 12px;
  background-color: #d9d9d9;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;
export default ManageAccompany;
