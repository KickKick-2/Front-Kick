import React from 'react';
import styled from 'styled-components';
type Props = {
  img: string;
  name: string;
  type: string;
  review: string;
};

const Box = (props: Props) => {
  return (
    <Container>
      <Image src={props.img} />
      <Title>{props.name}</Title>
      <Info>
        <Type>{props.type}</Type>
        <Bar>| 후기</Bar>
        <Review>{props.review}</Review>
      </Info>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 180px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #1f1f45;
  gap: 15px;
`;
const Image = styled.img`
  width: 118px;
  height: 81px;
`;
const Title = styled.p`
  color: #000;
  font-size: 18px;
`;
const Info = styled.div`
  display: flex;
  gap: 5px;
`;
const Type = styled.p`
  color: #000;
  font-size: 14px;
`;
const Bar = styled.p`
  color: #000;
  font-size: 14px;
`;
const Review = styled.p`
  color: #5956ff;
  font-size: 14px;
`;
export default Box;
