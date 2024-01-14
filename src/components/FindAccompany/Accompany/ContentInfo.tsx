import styled from 'styled-components';
type Props = {};

const ContentInfo = (props: Props) => {
  return (
    <Form>
      <TitleSection>
        <Title>우천으로 취소돼도, 제주 맛집 부수고 돌아가요!</Title>
      </TitleSection>
      <CardSection>
        <Card>
          <CardImg src='public/assets/카드사진.png' />
          <CardName>카드 이름</CardName>
        </Card>
        <Card>
          <CardImg src='public/assets/카드사진.png' />
          <CardName>카드 이름</CardName>
        </Card>
      </CardSection>
      <TagSection>
        <Tag>#절대강자</Tag>
        <Tag>#축구지존</Tag>
        <Tag>#제주도</Tag>
        <Tag>#맛집탐방</Tag>
      </TagSection>
    </Form>
  );
};
const Form = styled.div`
  width: 312px;
  height: 171px;
  box-sizing: border-box;
  padding: 0 15px;
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const TitleSection = styled.div`
  padding: 8px 0;
`;
const Title = styled.h1`
  color: #000;
  font-size: 12px;
  font-weight: 500;
`;
const CardSection = styled.div`
  height: 122px;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const Card = styled.div`
  width: 108px;
  height: 122px;
  border-radius: 25px;
  background: rgb(217, 217, 217);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const CardImg = styled.img`
  width: 51px;
`;
const CardName = styled.p``;
const TagSection = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
const Tag = styled.p`
  color: #898989;
  font-size: 8px;
  font-weight: 300;
`;
export default ContentInfo;
