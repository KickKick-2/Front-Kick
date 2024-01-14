import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { customMedia } from '@/util/GlobalStyle';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate('/');
        location.reload();
      }}
    >
      <IMG src='/assets/officiallogo.png' alt='logo' />
    </Button>
  );
};

export default Logo;

const IMG = styled.img`
  height: 30px;
  font-size: 20px;
  ${customMedia.lessThan('mobile')`
		height: 20px;
	`}
`;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 25px;
`;
