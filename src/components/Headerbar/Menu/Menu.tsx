import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import { customMedia } from '@/util/GlobalStyle';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <div role='button' onClick={toggleSide}>
        <CustomIcon />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

const CustomIcon = styled(GiHamburgerMenu)`
  color: black;
  width: 40px;
  height: 40px;
  margin-right: 40px;
  ${customMedia.lessThan('mobile')`
    width: 30px;
		height: 30px;
	`}
`;

export default Menu;
