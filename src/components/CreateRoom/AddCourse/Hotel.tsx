import React from 'react';
import styled from 'styled-components';
import { RestaurantData } from '../../../../public/dummy/dummyCourse';
import Box from './Box';
type Props = {};

const Hotel = (props: Props) => {
  return (
    <Container>
      {RestaurantData.map((res, idx) => (
        <Box
          key={idx}
          img={res.img}
          name={res.name}
          type={res.type}
          review={res.review}
        ></Box>
      ))}
    </Container>
  );
};
const Container = styled.div`
  padding: 10px 0;
  width: 90%;
  display: grid;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;

  grid-template-columns: repeat(2, 150px);
`;
export default Hotel;
