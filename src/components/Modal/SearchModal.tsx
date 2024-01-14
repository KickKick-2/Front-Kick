import { useState } from 'react';
import styled from 'styled-components';
import { BiFootball } from 'react-icons/bi';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { GrPowerReset } from 'react-icons/gr';
import TeamSelect from './TeamSelect';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../feature/ModalSlice';
type Props = {};

const SearchModal = (props: Props) => {
  const dispatch = useDispatch();
  const [isTeamOpen, setisTeamOpen] = useState(false);
  const [isCalenderOpen, setisCalenderOpen] = useState(false);
  const [isPersonnelOpen, setisPersonnelOpen] = useState(false);
  const handleOpen = (isOpen: string) => {
    if (isOpen === 'isTeamOpen') {
      setisTeamOpen(!isTeamOpen);
    }
    if (isOpen === 'isCalenderOpen') {
      setisCalenderOpen(!isCalenderOpen);
    }
    if (isOpen === 'isPersonnelOpen') {
      setisPersonnelOpen(!isPersonnelOpen);
    }
  };
  return (
    <Container>
      <SelectBtns>
        <SelectBtn onClick={() => handleOpen('isTeamOpen')}>
          <TextSection>
            <Icon>
              <BiFootball size='30' />
            </Icon>
            <Choice>구단 선택하기</Choice>
          </TextSection>
          <DownScroll>
            {isTeamOpen ? (
              <>
                <AiFillCaretUp size='24' />
              </>
            ) : (
              <AiFillCaretDown size='24' />
            )}
          </DownScroll>
        </SelectBtn>
        {isTeamOpen ? (
          <TeamBox>
            <TeamSelect />
          </TeamBox>
        ) : (
          <></>
        )}
        <SelectBtn onClick={() => handleOpen('isCalenderOpen')}>
          <TextSection>
            <Icon>
              <SlCalender size='30' />
            </Icon>
            <Choice>날짜 선택하기</Choice>
          </TextSection>
          <DownScroll>
            {isCalenderOpen ? (
              <>
                <AiFillCaretUp size='24' />
              </>
            ) : (
              <AiFillCaretDown size='24' />
            )}
          </DownScroll>
        </SelectBtn>
        {isCalenderOpen ? (
          <TeamBox>
            <p>달력은 수정할 예정</p>
          </TeamBox>
        ) : (
          <></>
        )}
        <SelectBtn onClick={() => handleOpen('isPersonnelOpen')}>
          <TextSection>
            <Icon>
              <MdPeopleAlt size='30' />
            </Icon>
            <Choice>인원 선택하기</Choice>
          </TextSection>
          <DownScroll>
            {isPersonnelOpen ? (
              <>
                <AiFillCaretUp size='24' />
              </>
            ) : (
              <AiFillCaretDown size='24' />
            )}
          </DownScroll>
        </SelectBtn>
        {isPersonnelOpen ? <TeamBox></TeamBox> : <></>}
        <Buttons>
          <Button>
            <GrPowerReset />
            초기화
          </Button>
          <Button onClick={() => dispatch(closeModal())}>적용하기</Button>
        </Buttons>
      </SelectBtns>
    </Container>
  );
};
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 74px;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  gap: 15px;
  font-size: 20px;
`;
const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 547px;
  background-color: #fff;
  border: none;
  border-radius: 12px 12px 0 0;
  z-index: 10000;
  padding: 50px 24px;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const TeamBox = styled.div`
  width: 312px;
  height: auto;
`;
const SelectBtns = styled.div`
  width: 100%;
  min-height: 60%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  gap: 30px;
`;
const SelectBtn = styled.div`
  width: 312px;
  height: 74px;
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;
const TextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;
const Icon = styled.div``;
const Choice = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const DownScroll = styled.div``;
export default SearchModal;
