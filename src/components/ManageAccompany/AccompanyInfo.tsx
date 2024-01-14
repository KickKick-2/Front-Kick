import styled from 'styled-components';
type Props = {};

const AccompanyInfo = (props: Props) => {
  return (
    <Container>
      <Title>동행 정보</Title>
      <Body>
        <TextZone>
          <Location>
            <TitleText>장소</TitleText>
            <ContentText>서울역 광장</ContentText>
          </Location>
          <Date>
            <TitleText>날짜</TitleText>
            <ContentText>23.09.13 13:00</ContentText>
          </Date>
          <Personnel>
            <TitleText>인원</TitleText>
            <ContentText>3/4</ContentText>
          </Personnel>
        </TextZone>
        <TagZone>
          <Tags>
            <Tag>#절대강자</Tag>
            <Tag>#축구지존</Tag>
            <Tag>#제주도</Tag>
            <Tag>#맛집탐방</Tag>
          </Tags>
        </TagZone>
      </Body>
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
const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
const TextZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`;
const TitleText = styled.p`
  font-size: 10px;
  font-weight: 500;
`;
const ContentText = styled.p`
  font-size: 10px;
  font-weight: 400;
`;
const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const Personnel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
const TagZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Tags = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;
const Tag = styled.p`
  color: #898989;
  font-size: 8px;
  font-weight: 350;
`;
export default AccompanyInfo;
