import { useState } from 'react';
import styled from 'styled-components';
type Props = {};

const Cruit = (props: Props) => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleBtnClick = (buttonName: string) => {
    // 이미 선택한 버튼이라면 해당 버튼을 배열에서 제거합니다.
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonName));
    } else {
      // 선택한 버튼이 배열에 없으면 해당 버튼을 배열에 추가합니다.
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const handlePrintSelectedButtons = () => {
    // 선택된 버튼들을 콘솔에 출력합니다.
    console.log(selectedButtons);
  };
  return (
    <Container>
      <BtnContainer>
        <Btn1 onClick={() => handleBtnClick('모집중')}>
          {' '}
          {selectedButtons.includes('모집중') ? '해제' : '모집중'}
        </Btn1>
        <Btn3 onClick={() => handleBtnClick('모집마감임박')}>
          {' '}
          {selectedButtons.includes('모집마감임박') ? '해제' : '모집마감임박'}
        </Btn3>
        <Btn2 onClick={() => handleBtnClick('모집마감')}>
          {' '}
          {selectedButtons.includes('모집마감') ? '해제' : '모집마감'}
        </Btn2>{' '}
      </BtnContainer>

      <button onClick={handlePrintSelectedButtons}>선택한 버튼 확인</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  width: auto;
  height: 25%;
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
const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const Btn1 = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: green;
  color: white;
`;
const Btn2 = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: black;
  color: white;
`;
const Btn3 = styled.div`
  width: 80px;
  height: 30px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: red;
  color: white;
`;
export default Cruit;
