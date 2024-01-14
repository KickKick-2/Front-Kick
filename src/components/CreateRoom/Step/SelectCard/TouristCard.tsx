import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import PlaceCard from './PlaceCard';
import { openModal } from '@/feature/ModalSlice';
import { useDispatch } from 'react-redux';

type ContainerProps = {
  index: number;
};

type Props = {
  title: string;
  index: number;
};

const TouristCard = ({ title, index }: Props) => {
  const dispatch = useDispatch();
  const handleOpenSelectCardModal = () => {
    if (index === 0) {
      dispatch(
        openModal({
          modalType: 'HouseSearchModal',
          isOpen: true,
        }),
      );
    } else if (index === 1) {
      dispatch(
        openModal({
          modalType: 'FoodSearchModal',
          isOpen: true,
        }),
      );
    } else if (index === 2) {
      dispatch(
        openModal({
          modalType: 'AttractionSearchModal',
          isOpen: true,
        }),
      );
    }
  };

  return (
    <DIV>
      <Text>{title}</Text>
      <Form>
        <Container index={index} onClick={handleOpenSelectCardModal}>
          <CustomIcon />
        </Container>
        <PlaceCard index={index} ischk={true} />
        {/* <PlaceCard selectedItem={selecteditemlist?.item?.length > 0 ? selecteditemlist.item[0] : null} /> */}
      </Form>
    </DIV>
  );
};

export default TouristCard;

const DIV = styled.div`
  width:100%;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Form = styled.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  justify-content: left;
  align-items: left;
  padding: 10px 0;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${(props) => {
    switch (props.index) {
      case 0:
        return '#F0B86E'; // 첫 번째 카드 배경색
      case 1:
        return '#9F91CC'; // 두 번째 카드 배경색
      case 2:
        return '#D4E2D4'; // 세 번째 카드 배경색
    }
  }};
  gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const CustomIcon = styled(AiOutlinePlusCircle)`
  width: 40px;
  height: 40px;
  color: white;
`;
