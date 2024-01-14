import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MdPeopleAlt } from 'react-icons/md';
import { openModal } from '../../../feature/ModalSlice';
type Props = {};

const CruitFilter = (props: Props) => {
  const dispatch = useDispatch();
  const handleOpenSearchModal = () => {
    dispatch(
      openModal({
        modalType: 'CruitModal',
        isOpen: true,
      }),
    );
  };

  return (
    <FilterBtn onClick={handleOpenSearchModal}>
      <MdPeopleAlt size='20' />
      <FilterTxt>모집중</FilterTxt>
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
export default CruitFilter;
