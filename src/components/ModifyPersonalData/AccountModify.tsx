import styled from 'styled-components';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useNavigate } from 'react-router-dom';
type Props = {};

const AccountModify = (props: Props) => {
  const [isOpen, setisOpen] = useState(false);
  const handleOpen = () => {
    setisOpen(!isOpen);
  };
  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated);
  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  return (
    <Container>
      <Header>
        <Title>계정 설정</Title>
        <ArrowButton onClick={handleOpen}>
          {isOpen ? <BiDownArrow size='30' /> : <BiUpArrow size='30' />}
        </ArrowButton>
      </Header>
      {isOpen ? (
        <Body>
          <ProfileImg>
            <Img src='' alt='사용자 프로필 이미지' />
            <Button>프로필 이미지 변경</Button>
          </ProfileImg>

          <Box>
            <BoxTitle>닉네임</BoxTitle>
            <BoxInput placeholder='닉네임' />
          </Box>

          <SubmitButton>저장하기</SubmitButton>
        </Body>
      ) : (
        <></>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;
const ArrowButton = styled.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;
const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Img = styled.img`
  width: 214px;
  height: 214px;
  border-radius: 180px;
  border: 1px solid black;
`;
const Button = styled.div`
  width: 270px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #777;
  border-radius: 12px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const BoxTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
const BoxInput = styled.input`
  width: 560px;
  height: 64px;
  font-size: 24px;
  padding: 17px 30px;
  border: 1px solid #777;
  border-radius: 12px;
  &::placeholder {
    font-size: 24px;
    font-weight: bold;
    color: #999;
  }
`;
const Gender = styled.div`
  width: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GenderBtn = styled.div<{ isSelected: boolean }>`
  font-size: 24px;
  font-weight: bold;
  width: 250px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ isSelected }) =>
    isSelected ? '1px solid #fff' : '1px solid #000'};
  border-radius: 12px;

  background-color: ${({ isSelected }) => (isSelected ? '#418DFF' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
`;
const SubmitButton = styled.div`
  width: 560px;
  height: 64px;
  background-color: #418dff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`;
export default AccountModify;
