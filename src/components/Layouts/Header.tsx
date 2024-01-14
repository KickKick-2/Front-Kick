import styled from 'styled-components';
import Menu from '../Headerbar/Menu/Menu';
import Logo from '../Headerbar/Logo';
import Account from '../Headerbar/Account';
import Navbar from '../Headerbar/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { autoCheck } from '@/feature/authSlice';
import { customMedia } from '@/util/GlobalStyle';

const Header = () => {
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);

  return (
    <Container>
      <Head className={isLogin ? '' : 'no-header'}>
        <Logo />
        <Account />
        {isLogin && <Menu />}
      </Head>
      <Separator />
      <Navbar />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  z-index: 9999;
`;

const Head = styled.header`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background: #ffffff;
  //background: #1F1F45;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${customMedia.lessThan('mobile')`
		font-size: 15px;
	`}
`;

const Separator = styled.div`
  display: flex;
  height: 1px;
  background-color: #ccc;
  ${customMedia.lessThan('mobile')`
		margin: 1px 0;
	`}
`;
