import styled from 'styled-components';
import LoginForm from '../../components/Login/LoginForm';
import LoginHeader from '../../components/Login/LoginHeader';
type Props = {};

const Login = (props: Props) => {
  return (
    <Wrap>
      <LoginHeader />
      <Main>
        <LoginForm />
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;
export default Login;
