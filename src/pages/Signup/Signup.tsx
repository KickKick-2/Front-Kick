import styled from 'styled-components';
import SignupForm from '../../components/Signup/SignupForm';
import React from 'react';

type Props = {};

const Signup = (props: Props) => {
  return (
    <Wrap>
      <Title>회원가입</Title>
      <SignupForm />
    </Wrap>
  );
};
const Title = styled.p`
  font-size: 27px;
  font-weight: 700;
  margin-top: 30px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 0 300px;
`;

export default Signup;
