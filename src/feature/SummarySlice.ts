import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  //대표 이미지
  img: string;
  //제목
  title: string;
  //매치정보(날짜, 경기장, 홈 이름, 어웨이 이름)
  game_schedule_id: string;
  date: string;
  stadium: string;
  homename: string;
  team_id: number;
  awayname: string;
  //모임정보(장소, 세부장소, 동행기간, 태그, 최소 인원, 최대 인원)
  meetingPlace: string;
  meetingPlaceAddress: string;
  detailMeetingPlace: string;
  term: string;
  tag: tagType[];
  minNum: number;
  maxNum: number;
  //내용
  content: string;
  team_logo_img_url: string;
  opponent_team_id: number;
  opponent_team_logo_img_url: string;
}
interface tagType {
  idx: number;
  name: string;
  origName: string;
}
const initialState: InitialState = {
  //대표 이미지
  img: '',
  //제목
  title: '',
  //매치정보(날짜, 경기장, 홈 이름, 어웨이 이름)
  game_schedule_id: '',
  date: '',
  stadium: '',
  team_id: 13,
  homename: '',
  awayname: '',
  //모임정보(장소, 세부장소, 세부장소 주소, 동행기간, 태그, 최소 인원, 최대 인원)
  meetingPlace: '',
  meetingPlaceAddress: '',
  detailMeetingPlace: '',
  term: '',
  tag: [],
  minNum: 0,
  maxNum: 0,
  //내용
  content: '',
  team_logo_img_url: '',
  opponent_team_id: 13,
  opponent_team_logo_img_url: '',
};

const SummarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    setMatch: (state: InitialState, action) => {
      state.game_schedule_id = action.payload.game_schedule_id;
      state.date = action.payload.date;
      state.stadium = action.payload.stadium;
      state.team_id = action.payload.team_id;
      state.homename = action.payload.homename;
      state.awayname = action.payload.awayname;
      state.team_logo_img_url = action.payload.team_logo_img_url;
      state.opponent_team_id = action.payload.opponent_team_id;
      state.opponent_team_logo_img_url =
        action.payload.opponent_team_logo_img_url;
    },
    setPlace: (state: InitialState, action) => {
      state.meetingPlace = action.payload.meetingPlace;
      state.detailMeetingPlace = action.payload.detailMeetingPlace;
      state.meetingPlaceAddress = action.payload.meetingPlaceAddress;
    },
    setDetail1: (state: InitialState, action) => {
      state.minNum = action.payload.minNum;
      state.maxNum = action.payload.maxNum;
      state.term = action.payload.term;
    },
    setDetail2: (state: InitialState, action) => {
      state.img = action.payload.img;
      state.title = action.payload.title;
      state.content = action.payload.content;
      state.tag = action.payload.tag;
    },
    removeSummary: (state) => {
      //대표 이미지
      state.img = '';
      //제목
      state.title = '';
      //매치정보(날짜, 경기장, 홈 이름, 어웨이 이름)
      state.game_schedule_id = '';
      state.date = '';
      state.stadium = '';
      state.homename = '';
      state.team_id = 0;
      state.awayname = '';
      //모임정보(장소, 세부장소, 세부장소 주소, 동행기간, 태그, 최소 인원, 최대 인원)
      state.meetingPlace = '';
      state.meetingPlaceAddress = '';
      state.detailMeetingPlace = '';
      state.term = '';
      state.tag = [];
      state.minNum = 0;
      state.maxNum = 0;
      //내용
      state.content = '';
      state.team_logo_img_url = '';
      state.opponent_team_id = 13;
      state.opponent_team_logo_img_url = '';
    },
  },
});

export default SummarySlice.reducer;
export const { setMatch, setPlace, setDetail1, setDetail2, removeSummary } =
  SummarySlice.actions;
