import styled from 'styled-components';
import { VscAccount } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { autoCheck } from '@/feature/authSlice';
import { customMedia } from '@/util/GlobalStyle';
const Account = () => {
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  return (
    <div>
      {' '}
      {isLogin ? (
        <></>
      ) : (
        <P
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </P>
      )}
    </div>
  );
};

const CustomIcon1 = styled(VscAccount)`
  //color: white;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const P = styled.div`
  cursor: pointer;
  //color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  font-size: 20px;
  ${customMedia.lessThan('mobile')`
		font-size: 15px;
	`}
`;

export default Account;
