import React from 'react';
import styled from 'styled-components';
import PlaceInfoCarousel from './PlaceInfoCarousel';

type Props = {
  index: number;
};
const PlaceRecommandInfo = (props: Props) => {
  return (
    <DIV>
      <Title>⚽️ 킥킥 추천 장소</Title>
      <PlaceInfoCarousel index={props.index} />
    </DIV>
  );
};

export default PlaceRecommandInfo;

const DIV = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  border: 1px;
  font-size: 22px;
  font-weight: bold;
`;
