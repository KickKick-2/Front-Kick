import MultiFilter from '../Filter/MultiFilter';
import CruitFilter from './Header/CruitFilter';
import DateFilter from './Header/DateFilter';
import TeamFilter from './Header/TeamFilter';
import styled from 'styled-components';
type Props = {};

const AccompanyHeader = (props: Props) => {
  return (
    <Header>
      {/* <TeamFilter />
      <DateFilter />
      <CruitFilter /> */}
      <MultiFilter />
    </Header>
  );
};
const Header = styled.div`
  margin: 0 auto;
  display: flex;
  width: auto;
  justify-content: center;
  align-content: center;
  /* gap: 20px;
  margin-bottom: 10px; */
`;

export default AccompanyHeader;
