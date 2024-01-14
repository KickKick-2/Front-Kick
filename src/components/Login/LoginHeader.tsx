import { customMedia } from '@/util/GlobalStyle';
import styled from 'styled-components';

type Props = {};

const LoginHeader = (props: Props) => {
  return (
    <Header>
      <Logos>
        <IMG src='/assets/LogoTotal.svg' alt='logo' />
      </Logos>
    </Header>
  );
};
const Header = styled.div`
  margin-top: 50px;
  width: 175px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  
`;
const Logos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const IMG = styled.img`
  margin-right: 10px;
  ${customMedia.lessThan('mobile')`
		width:300px;
    height:300px;
	`}
`;

export default LoginHeader;
