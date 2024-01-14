import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import TeamDateSelect from './MatchDate/TeamDateSelect';
import PlaceSearch from './MeetingPlace/PlaceSearch';
import Detailinfo_1 from './Detailinfo/Detailinfo_1';
import Detailinfo_2 from './Detailinfo/Detailinfo_2';
import Summary from './Summary/Summary';
import SelectCard from './SelectCard/SelectCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Props = {};
import { removeAll } from '@/feature/SelectedItemsSlice';
import { removeSummary } from '@/feature/SummarySlice';
import { postAccompany } from '@/feature/fetchSlice';
import { tourCardList } from '@/lib/interface';
import { customMedia } from '@/util/GlobalStyle';
const StepHeader = () => {
  const [check, setcheck] = useState(false);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { post, loading } = useSelector((state: RootState) => state.accompany);
  const titles = [
    '경기 일정 선택',
    '모임장소',
    '일정 카드 선택',
    '상세 내용',
    '상세 내용',
    '내 동행 일정',
  ];
  // const host = useSelector((state: RootState) => state.auth.name);
  // const {
  //   img,
  //   title,
  //   date,
  //   stadium,
  //   homename,
  //   awayname,
  //   meetingPlace,
  //   meetingPlaceAddress,
  //   detailMeetingPlace,
  //   term,
  //   tag,
  //   minNum,
  //   maxNum,
  //   content,
  // } = useSelector((state: RootState) => state.summary);
  // const { house, food, attraction } = useSelector(
  //   (state: RootState) => state.selecteditem,
  // );
  const schedule = useSelector(
    (state: RootState) => state.summary.game_schedule_id,
  );
  const attraction = useSelector(
    (state: RootState) => state.selecteditem.attraction,
  );
  const restaurant = useSelector((state: RootState) => state.selecteditem.food);
  const accommodation = useSelector(
    (state: RootState) => state.selecteditem.house,
  );

  const tourCardIdList: tourCardList = {
    accommodation: accommodation.map((item) => ({
      content_id: item.content_id,
      title: item.title,
      firstimage: item.firstimage,
    })),
    restaurant: restaurant.map((item) => ({
      content_id: item.content_id,
      title: item.title,
      firstimage: item.firstimage,
    })),
    attraction: attraction.map((item) => ({
      content_id: item.content_id,
      title: item.title,
      firstimage: item.firstimage,
    })),
  };

  const [titleIndex, setTitleIndex] = useState(0);
  // const id = useSelector((state: RootState) => state.auth.id);

  const handleBackClick = () => {
    if (titleIndex > 0) {
      setTitleIndex((prevIndex) => prevIndex - 1);
    }
  };
  const tags = useSelector((state: RootState) => state.summary.tag);
  const tagString = tags.map((tag) => tag.name).join(',');
  const requestBody = {
    token: useSelector((state: RootState) => state.auth.token),
    schedule_id: useSelector(
      (state: RootState) => state.summary.game_schedule_id,
    ),
    home_team_name: useSelector((state: RootState) => state.summary.homename),
    team_id: useSelector((state: RootState) => state.summary.team_id),
    thumbnail:
      /*useSelector((state: RootState) => state.summary.img)*/ 'dummyimg',
    title: useSelector((state: RootState) => state.summary.title),
    content: useSelector((state: RootState) => state.summary.content),
    tag_list: tagString,
    tour_card_id_list: tourCardIdList,
    meeting_place: useSelector(
      (state: RootState) => state.summary.meetingPlace,
    ),
    meeting_place_address: useSelector(
      (state: RootState) => state.summary.meetingPlaceAddress,
    ),
    detail_meeting_place: useSelector(
      (state: RootState) => state.summary.detailMeetingPlace,
    ),
    term: useSelector((state: RootState) => state.summary.date),
    min_num: useSelector((state: RootState) => state.summary.minNum),
    max_num: useSelector((state: RootState) => state.summary.maxNum),
    now_status: 0,
  };

  useEffect(() => {
    dispatch(postAccompany(requestBody));
  }, [check]);

  const handleNextClick = async () => {
    if (titleIndex < titles.length - 1) {
      if (titleIndex === 0) {
        if (schedule === '') {
          toast.info('일정을 선택해주세요');
        } else {
          return setTitleIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        setTitleIndex((prevIndex) => prevIndex + 1);
      }
    } else if (titleIndex === titles.length - 1) {
      setcheck(true);
      console.log(post, loading);
      setTimeout(() => {
        dispatch(removeAll());
        dispatch(removeSummary());
        navigate('/');
      }, 3000);
    }
  };

  const nextButtonText = titleIndex === 5 ? '완료' : '다음';

  let CurrentStepComponent = null;

  switch (titleIndex) {
    case 0:
      CurrentStepComponent = TeamDateSelect;
      break;
    case 1:
      CurrentStepComponent = PlaceSearch;
      break;
    case 2:
      CurrentStepComponent = SelectCard;
      break;
    case 3:
      CurrentStepComponent = Detailinfo_1;
      break;
    case 4:
      CurrentStepComponent = Detailinfo_2;
      break;
    case 5:
      CurrentStepComponent = Summary;
      break;
    default:
      CurrentStepComponent = TeamDateSelect;
  }

  return (
    <Wrap>
      <DIV>
        <BackIcon onClick={handleBackClick} />
        <RoomTitle>{titles[titleIndex]}</RoomTitle>
        <CloseIcon onClick={() => navigate('/')} />
      </DIV>
      <Form>
        <CurrentStepComponent></CurrentStepComponent>
      </Form>
      <NextButtonContainer>
        <RegisterBtn onClick={handleNextClick}>{nextButtonText}</RegisterBtn>
      </NextButtonContainer>
    </Wrap>
  );
};

export default StepHeader;

const RoomTitle = styled.h1`
  display: flex;
  color: #000;
  font-size: 30px;
  font-weight: bold;
  ${customMedia.lessThan('mobile')`
		font-size: 20px;
	`}
`;

const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Wrap = styled.div`
  font-weight: bold;
  background-color: #ffffff;
`;

const BackIcon = styled(IoIosArrowBack)`
  width: 30px;
  height: 30px;
  color: #000000;
  ${customMedia.lessThan('mobile')`
		width:25px;
    height:25px;
	`}
`;

const CloseIcon = styled(AiOutlineClose)`
  width: 40px;
  height: 40px;
  color: #000000;
  justify-content: right;
  align-items: right;
  ${customMedia.lessThan('mobile')`
		width:25px;
    height:25px;
	`}
`;

const Form = styled.div`
  display: flex;
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RegisterBtn = styled.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  color: #ffffff;
  ${customMedia.lessThan('mobile')`
    margin-top: 20px;
    margin-bottom: 50px;
	`}
`;
