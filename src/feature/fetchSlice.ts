import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '@/util/cookieFn';
import { tourCardList } from '@/lib/interface';
const token = getCookie('token');
// 비동기 액션 크리에이터를 생성합니다.
interface postBody {
  schedule_id: string;
  team_id: number;
  thumbnail: string;
  title: string;
  content: string;
  tag_list: string;
  tour_card_id_list: tourCardList;
  meeting_place: string;
  meeting_place_address: string;
  detail_meeting_place: string;
  term: string;
  min_num: number;
  max_num: number;
  now_status: number;
}
export const postAccompany = createAsyncThunk(
  'accompany/post',
  async (requestBody: postBody, thunkAPI) => {
    try {
      // console.log(requestBody);

      const res = await fetch(
        `https://kick-back.azurewebsites.net/api/recruitment/?team_id=${requestBody.team_id}`,
        {
          method: 'post',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(requestBody),
        },
      );
      const data = await res.json();
      return data; // 성공한 경우 반환할 데이터
    } catch (error) {
      // 실패한 경우 에러를 던지거나 에러를 처리할 수 있습니다.
      throw error;
    }
  },
);

// 슬라이스를 생성합니다.
const accompanySlice = createSlice({
  name: 'accompany',

  initialState: {
    post: {
      token: '',
      game_schedule_id: '',
      home_team_id: 0,
      home_team_name: '',
      thumbnail: '',
      title: '',
      content: '',
      tagList: '',
      tourCardIdList: {},
      meetingPlace: '',
      meetingPlaceAddress: '',
      detailMeetingPlace: '',
      term: '',
      minNum: 0,
      maxNum: 0,
      nowStatus: 0,
    },
    loading: 'idle',
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAccompany.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(postAccompany.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.post = action.payload;
    });
    builder.addCase(postAccompany.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

// 리듀서를 내보냅니다.
export default accompanySlice.reducer;
