import ApplyForMe from '@/components/MyAccompany/ApplyForMe';
import ComponentSelectMenu from '@/components/MyAccompany/ComponentSelectMenu';
import MadeByMe from '@/components/MyAccompany/MadeByMe';
import { useState } from 'react';
import styled from 'styled-components';

type Props = {};

const MyAccompany = (props: Props) => {
  const [first, setfirst] = useState(1);
  const handleAccompanyComponent = (number: number) => {
    setfirst(number);
  };
  return (
    <Wrap>
      <ComponentSelectMenu
        handleAccompanyComponent={handleAccompanyComponent}
      />
      {first === 1 ? <MadeByMe /> : <ApplyForMe />}
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 25px;
`;
export default MyAccompany;
