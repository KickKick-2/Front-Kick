import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SlCalender } from 'react-icons/sl';
import { openModal } from '../../../feature/ModalSlice';
type Props = {};

const DateFilter = (props: Props) => {
  const dispatch = useDispatch();
  const handleOpenSearchModal = () => {
    dispatch(
      openModal({
        modalType: 'DateModal',
        isOpen: true,
      }),
    );
  };

  return (
    <FilterBtn onClick={handleOpenSearchModal}>
      <SlCalender size='20' />
      <FilterTxt>날짜</FilterTxt>
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
export default DateFilter;
