import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import DatePickerRange from './DatePickerRange';
type Props = {};

const Date = (props: Props) => {
  return (
    <Wrap>
      <Container>
        {/* <Calendar /> */}
        <DatePickerRange />
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;

  position: absolute;
  width: 80%;
  height: 547px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
`;
const Container = styled.div`
  height: auto;
`;
export default Date;
