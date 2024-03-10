import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { customMedia } from '@/util/GlobalStyle';
import { Outlet } from 'react-router-dom';

const Layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <Main><Outlet/></Main>

      <Footer />
    </>
  );
};

const Main = styled.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  padding-top: 180px;
  /* padding: 200px 0; */
  ${customMedia.lessThan('mobile')`
      max-width: 1500px;
	`}
`;

export default Layout;
