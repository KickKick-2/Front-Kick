import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { closeModal } from '@/feature/ModalSlice';
import { useDispatch } from 'react-redux';
import {
  SelectedAttractionItem,
  SelectedFoodItem,
  SelectedHouseItem,
} from '@/feature/SelectedItemsSlice';

export interface itemsProps {
  IMG: string;
  name: string;
}
export interface cardItem {
  firstimage: string;
  title: string;
  addr1: string;
  content_id: string;
}
type Props = {
  index: number;
};
const items: itemsProps[] = [
  {
    IMG: 'public/assets/teams/강원FC.png',
    name: '안녕호텔',
  },
  {
    IMG: 'public/assets/teams/광주FC.png',
    name: '나이스민박',
  },
  {
    IMG: 'public/assets/teams/대구FC.png',
    name: '게스트하우스',
  },
  {
    IMG: 'public/assets/teams/대전하나시티즌.png',
    name: '우리집',
  },
  {
    IMG: 'public/assets/teams/수원삼성블루윙즈.png',
    name: '하이숙박',
  },
];

const PlaceInfoCarousel = (props: Props) => {
  const [selectedItems, setSelectedItems] = useState<itemsProps[]>([]);
  const dispatch = useDispatch();
  const handleCheckboxChange = (item: itemsProps) => {
    // 이미 선택된 아이템인지 확인 후 추가하거나 제거
    if (selectedItems.some((selectedItem) => selectedItem.name === item.name)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.name !== item.name),
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCompleteSelection = () => {
    // console.log('선택 완료 버튼 클릭됨, selectedItem:', selectedItems);
    // 선택 완료 버튼 클릭 시, 선택된 아이템 정보로 PlaceCard에 전달
    if (selectedItems.length > 0) {
      // 선택된 아이템들 처리
      if (props.index === 0) {
        selectedItems.map((item) => dispatch(SelectedHouseItem(item)));
      }
      if (props.index === 1) {
        selectedItems.map((item) => dispatch(SelectedFoodItem(item)));
      }
      if (props.index === 2) {
        selectedItems.map((item) => dispatch(SelectedAttractionItem(item)));
      }

      // setSelectedItems([]); // 선택 완료 후 정보 초기화
    }
  };

  return (
    <DIV className='carousel'>
      {items.map((item, index) => (
        <Box key={index}>
          <FlexContainer>
            <InfoContainer>
              <CheckboxContainer>
                <Checkbox
                  type='checkbox'
                  onChange={() => {
                    handleCheckboxChange(item);
                  }}
                />
              </CheckboxContainer>
              <IMG src={item.IMG} alt={item.name} />
              <FlexContainerRight>
                <Name>{item.name}</Name>
                {/* <Loc>{item.loc}</Loc>     */}
              </FlexContainerRight>
            </InfoContainer>
          </FlexContainer>
        </Box>
      ))}

      <NextButtonContainer>
        <RegisterBtn
          onClick={() => {
            handleCompleteSelection(), dispatch(closeModal());
          }}
        >
          선택 완료
        </RegisterBtn>
      </NextButtonContainer>
    </DIV>
  );
};

export default PlaceInfoCarousel;

const DIV = styled.div`
  display: flex;
  height: 100%;
  width: 360px;
  padding: 20px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: #eeeeee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
`;

const IMG = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-left: 20px;
  margin-right: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexContainerRight = styled.div`
  align-items: center;
`;

const Loc = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const CheckboxContainer = styled.div`
  margin-left: 10px;
`;

const Checkbox = styled.input``;

const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
