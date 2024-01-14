import React from 'react'
import styled from "styled-components";
import TeamDateSelectCarousel from './TeamDateSelectCarousel';
import TeamDateCalendar from './TeamDateCalendar';
import MatchingInfo from './MatchingInfo';

const TeamDateSelect = () => {
  
  return (
  
    <TeamCardContainer>
      <CarouselContainer>
        <TeamDateSelectCarousel/>
      </CarouselContainer>
    </TeamCardContainer>

  )
}

export default TeamDateSelect

const TeamCardContainer = styled.div`
  height:100%;
  overflow-x: hidden;
`;

const CarouselContainer = styled.div`
  height:100%;
  background-color: #1F1F45;
  overflow-x: hidden;
`;