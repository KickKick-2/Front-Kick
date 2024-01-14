import styled from 'styled-components';

import MultiFilter from '@/components/Filter/MultiFilter';

type props = {};

const FindAccompany = (props: props) => {
  return (
    <Form>
      <MultiFilter />
    </Form>
  );
};

export default FindAccompany;

const Form = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
