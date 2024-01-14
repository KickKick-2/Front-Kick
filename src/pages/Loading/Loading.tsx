import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  const SEC = 2000;
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/home');
  }, SEC);
  return (
    <Wrap>
      <IMG1 src='/public/assets/loading1.png' alt='로딩1' />
      <IMG2 src='/public/assets/loading2.png' alt='로딩2' />
      <IMG3 src='/public/assets/loading3.png' alt='로딩3' />
      <IMG4 src='/public/assets/loading4.png' alt='로딩4' />
      <IMG5 src='/public/assets/loading5.png' alt='로딩5' />
    </Wrap>
  );
};
const loader1 = keyframes`
      0% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 0.5;
    }
    60% {
      opacity: 0.2;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
`;
const loader2 = keyframes`
      0% {
      opacity: 0.5;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
`;
const loader3 = keyframes`
      0% {
      opacity: 0.2;
    }
    20% {
      opacity: 0.5;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      opacity: 0.2;
    }
`;
const loader4 = keyframes`
      0% {
      opacity: 0;
    }
    20% {
      opacity: 0.2;
    }
    40% {
      opacity: 0.5;
    }
    60% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
`;
const loader5 = keyframes`
      0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    40% {
      opacity: 0.2;
    }
    60% {
      opacity: 0.5;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity:1;
    }
`;
const IMG1 = styled.img`
  position: absolute;
  animation: ${loader1} 2s;
`;
const IMG2 = styled.img`
  position: absolute;

  animation: ${loader2} 2s;
`;
const IMG3 = styled.img`
  position: absolute;

  animation: ${loader3} 2s;
`;
const IMG4 = styled.img`
  position: absolute;

  animation: ${loader4} 2s;
`;
const IMG5 = styled.img`
  position: absolute;

  animation: ${loader5} 2s;
`;
// const Loader = styled.div`
//   position: absolute;
//   display: inline-block;
//   width: 40px;
//   height: 40px;
//   &&::after {
//     content: ' ';
//     display: block;
//     width: 30px;
//     height: 30px;
//     margin: 1px;
//     border-radius: 50%;
//     border: 5px solid black;
//     border-color: black transparent black transparent;
//     animation: ${loader} 1.2s linear infinite;
//   }
// `;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Loading;
