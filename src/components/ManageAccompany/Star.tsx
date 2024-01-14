import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
type Props = {};

const Star = (props: Props) => {
  const [rating, setrating] = useState<number>(0);
  const [hover, sethover] = useState(0);
  return (
    <Container>
      <P>호스트 평가 : {rating}점</P>
      <div>
        {' '}
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <Label key={index}>
              <input
                type='radio'
                name='rating'
                value={currentRating}
                onClick={() => setrating(currentRating)}
              />
              <FaStar
                className='star'
                size={20}
                color={
                  currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'
                }
                onMouseEnter={() => sethover(currentRating)}
                onMouseLeave={() => sethover(0)}
              />
            </Label>
          );
        })}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 11px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border: 1px solid black;
  border-radius: 12px;
`;
const P = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
const Label = styled.label`
  input[type='radio'] {
    display: none;
  }
  .star {
    cursor: pointer;
  }
`;
export default Star;
