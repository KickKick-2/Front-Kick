import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { AiFillSetting } from 'react-icons/ai';
import { autoCheck } from '@/feature/authSlice';
import { RootState } from '@/app/store';
import { IoPersonCircleSharp } from 'react-icons/io5';
type Props = {
  profileImg?: string;
  nickname?: string;
  name?: string;
  email?: string;
  toggleSide: () => void;
};

const RegisterTeam = (props: Props) => {
  const navigate = useNavigate();
  // const profileImg = useSelector((state: RootState) => state.auth.profileImg);
  // const email = useSelector((state: autoCheck) => state.auth.email);
  // const name = useSelector((state: autoCheck) => state.auth.name);
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);
  // console.log(props.profileImg);

  return isLogin ? (
    <Form>
      <FlexContainer>
        {props.profileImg !== undefined || '' ? (
          <IMG src={props.profileImg} />
        ) : (
          <Circle>
            <IoPersonCircleSharp size='60' />
          </Circle>
        )}

        <VerticalContainer>
          {props.name !== '' && <NickName>{props.name} 님</NickName>}
          {props.nickname !== '' && <NickName>{props.nickname} 님</NickName>}
          <ID>{props.email}</ID>
        </VerticalContainer>
        <AiFillSetting
          size='30'
          onClick={() => {navigate('/mypage')
          props.toggleSide()}}
        ></AiFillSetting>
      </FlexContainer>
    </Form>
  ) : (
    <Form>
      <FlexContainer>
        <VerticalContainer
          onClick={() => {
            navigate('/login');
          }}
        >
          <NickName>로그인을 해주세요</NickName>
        </VerticalContainer>
      </FlexContainer>
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 15px;
`;
const NickName = styled.p`
  font-weight: 500;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
`;

const ID = styled.p`
  font-weight: 500;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #585858;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 10px;
`;

const IMG = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: contain;
  margin-right: 5px;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;
export default RegisterTeam;
