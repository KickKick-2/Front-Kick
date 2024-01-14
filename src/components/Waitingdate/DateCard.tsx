import React from 'react'
import styled from "styled-components";
import DateCardCarousel from './DateCardCarousel';


const DateCard = () => {
  




  return (
    <div>
    <Title>
        대기중인 일정
    </Title>
    <DateCardCarousel/> 

    </div>
    
  )
}

export default DateCard



const Title = styled.div`
  font-size: 30px;
  margin-Top: 30px;
  margin-bottom: 30px;
  font-weight: bold;
`;
