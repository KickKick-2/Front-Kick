import { useState } from 'react';
import styled from 'styled-components';

type Props = {
  handleAccompanyComponent: (number: number) => void;
};
interface PageProps {
  page: number;
}
const ComponentSelectMenu = (props: Props) => {
  const [componentPage, setcomponentPage] = useState<number>(1);
  return (
    <Container>
      <Box1
        page={componentPage}
        onClick={() => {
          setcomponentPage(1), props.handleAccompanyComponent(1);
        }}
      >
        <Text1 page={componentPage}>내가 모집한 동행</Text1>
      </Box1>
      <Box2
        page={componentPage}
        onClick={() => {
          setcomponentPage(2), props.handleAccompanyComponent(2);
        }}
      >
        <Text2 page={componentPage}>내가 참여한 동행</Text2>
      </Box2>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f45;
  padding: 2px 3px;
`;
const Box1 = styled.div<PageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${(props) => (props.page === 1 ? '#1f1f45' : 'white')};
`;
const Box2 = styled.div<PageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${(props) => (props.page === 1 ? 'white' : '#1f1f45')};
`;
const Text1 = styled.p<PageProps>`
  color: ${(props) => (props.page === 1 ? 'white' : 'black')};
  font-weight: bold;
  font-size: 14px;
`;
const Text2 = styled.p<PageProps>`
  color: ${(props) => (props.page === 1 ? 'black' : 'white')};
  font-weight: bold;
  font-size: 14px;
`;
export default ComponentSelectMenu;
