import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
type Props = {
  postId: number;
};

const DetailInfo = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Form>
      <Participants>
        <PersonIcon src='public/assets/People.svg' />
        <Current>
          <Now>3</Now>
          <Part>/</Part>
          <Total>4</Total>
        </Current>
      </Participants>
      <AccompanyInfo>
        <Date>
          <DateTitle>동행 일자</DateTitle>
          <DateContent>23.07.11 ~ 23.07.12</DateContent>
        </Date>
        <Location>
          <LocationTitle>동행 장소</LocationTitle>
          <LocationContent>서울역 광장</LocationContent>
        </Location>
      </AccompanyInfo>
      <DetailBtn
        onClick={() => navigate(`/findaccompany/detail/${props.postId}`)}
      >
        상세정보 &gt;{' '}
      </DetailBtn>
    </Form>
  );
};
const Form = styled.div`
  width: 312px;
  height: 36px;
  background: #d9d9d9;
  border-radius: 0 0 12px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Participants = styled.div`
  display: flex;
  gap: 5px;
`;
const PersonIcon = styled.img`
  width: 15px;
  height: 15px;
`;
const Current = styled.div`
  display: flex;
`;
const Now = styled.p``;
const Part = styled.p``;
const Total = styled.p``;
const AccompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const Date = styled.div`
  display: flex;
  gap: 13px;
`;
const DateTitle = styled.p`
  color: #000;
  font-size: 10px;
  font-weight: 500;
`;
const DateContent = styled.p`
  color: #000;
  font-size: 9px;
  font-weight: 400;
`;
const Location = styled.div`
  display: flex;
  gap: 13px;
`;
const LocationTitle = styled.p`
  color: #000;
  font-size: 10px;
  font-weight: 500;
`;
const LocationContent = styled.p`
  color: #000;
  font-size: 9px;
  font-weight: 400;
`;

const DetailBtn = styled.div`
  width: 60px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #898989;
  color: #fff;
  font-size: 8px;
  border-radius: 8px;
  padding: 4px 5px;
`;
export default DetailInfo;
