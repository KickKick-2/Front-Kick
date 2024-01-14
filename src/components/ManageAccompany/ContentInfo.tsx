import styled from 'styled-components';

type Props = {};

const ContentInfo = (props: Props) => {
  return (
    <Container>
      <Title>내용</Title>
      <Content>
        I just wanna love myself 난 좋을 때도 나쁠 때도, love my weakness
        화려했던 기대와는 달리 왠지 볼품없다 해도, find the good parts, the good
        parts (ah) 얄궂은 phone 화면 위로 애꿎은 내 손가락만, tick, tick Oh, my,
        기분은 falling down Pic of mine, zoom in, out, pretend I'm fine
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
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
`;
export default ContentInfo;
