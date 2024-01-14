import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { BiFootball } from 'react-icons/bi';
import { openModal } from '../../../feature/ModalSlice';
type Props = {};

const TeamFilter = (props: Props) => {
  const dispatch = useDispatch();
  const handleOpenSearchModal = () => {
    dispatch(
      openModal({
        modalType: 'TeamModal',
        isOpen: true,
      }),
    );
  };

  return (
    <FilterBtn onClick={handleOpenSearchModal}>
      <BiFootball size='20' />
      <FilterTxt>구단</FilterTxt>
    </FilterBtn>
  );
};

const FilterBtn = styled.div`
  width: 80px;
  height: 29px;
  display: flex;
  border: none;
  border-radius: 12px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const FilterTxt = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
export default TeamFilter;
