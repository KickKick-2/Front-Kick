import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MapContainer from './MapContainer';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setPlace } from '@/feature/SummarySlice';
import { RootState } from '@/app/store';
import { customMedia } from '@/util/GlobalStyle';

export interface propsType {
  searchKeyword: string;
  handleSearchLocation?: (loc: string, address: string) => void;
}

const PlaceSearch = (): JSX.Element => {
  const dispatch = useDispatch();
  const { meetingPlace, detailMeetingPlace, meetingPlaceAddress } = useSelector(
    (state: RootState) => state.summary,
  );
  const [SearchLocation, setSearchLocation] = useState<string>('');
  const [SearchAddress, setSearchAddress] = useState<string>('');
  const handleSearchLocation = (loc: string, address: string) => {
    setSearchLocation(loc);
    setSearchAddress(address);
    // console.log(loc);
  };
  let [loc, setLoc] = useState<string>('');

  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState('');
  // 제출한 검색어 관리
  const [Keyword, setKeyword] = useState('');

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(Value);
  };

  const searchWithIcon = () => {
    // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
    if (Value === '') {
      alert('검색어를 입력해주세요.');
    } else {
      submitKeyword({ preventDefault: () => {} });
    }
  };

  return (
    <Form>
      <SettingBox>
        <BoxContainer>
          <LandingPage>
            <LandingPageInner>
              <CourseAddBtn>
                <SearchForm onSubmit={submitKeyword}>
                  <FormLabel htmlFor='place' className='form__label'>
                    <FormInput
                      type='text'
                      id='movie-title'
                      className='form__input'
                      name='place'
                      onChange={keywordChange}
                      placeholder='장소를 입력해보세요!'
                      required
                    />
                    <BtnBox>
                      <CustomIcon
                        className='btn form__submit'
                        type='submit'
                        value='검색'
                        onClick={searchWithIcon}
                      />
                    </BtnBox>
                  </FormLabel>
                </SearchForm>
              </CourseAddBtn>
              {/* 제출한 검색어 넘기기 */}
              <MapContainer
                searchKeyword={Keyword}
                handleSearchLocation={handleSearchLocation}
              />
            </LandingPageInner>
          </LandingPage>
          <Detailinput>
            <div className='SearchContainer'>
              <LocationName>{SearchLocation || meetingPlace}</LocationName>
              <LocationAddress>
                {SearchAddress || meetingPlaceAddress}
              </LocationAddress>
            </div>
          </Detailinput>
          <Detailinput>
            <input
              className='detail'
              type='text'
              id='loc'
              value={loc || detailMeetingPlace}
              onChange={(e) => {
                setLoc(e.target.value);
                dispatch(
                  setPlace({
                    detailMeetingPlace: e.target.value,
                    meetingPlace: meetingPlace,
                    meetingPlaceAddress: meetingPlaceAddress,
                  }),
                );
              }}
              placeholder='상세 위치를 입력해주세요.'
            />
          </Detailinput>
        </BoxContainer>
      </SettingBox>
    </Form>
  );
};

export default PlaceSearch;

const Form = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SettingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${customMedia.lessThan('mobile')`
     margin-bottom: 10px;
	`}
`;

const CourseAddBtn = styled.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .SearchContainer {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    min-height: 50px;

  }
  .detail {
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 16px;
  }
`;

const Detailinput = styled.div`
  width: 100%;
  height: 70px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .SearchContainer {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    min-height: 50px;
  }
  .detail {
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 15px;
    /* border: none; 
    outline: none;  */
    font-size: 16px;
  }

  ${customMedia.lessThan('mobile')`
    .detail {
      border-radius: 12px;
      border: 1px solid #ccc;
      padding: 10px;
      /* border: none; 
      outline: none;  */
    }
     
	`}
`;

const CustomIcon = styled(FaSearch)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  ${customMedia.lessThan('mobile')`
     width:20px;
     height:20px;
	`}
`;

const LandingPage = styled.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`;

const LandingPageInner = styled.div``;

const SearchFormContainer = styled.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;

const SearchForm = styled.form`
  width: 100%;
`;

const FormLabel = styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  font-size: 16px;
  background-color: rgb(248, 248, 248);
  ${customMedia.lessThan('mobile')`
     font-size:12px;
	`}
`;

const BtnBox = styled.div`
  padding: 10px;
  ${customMedia.lessThan('mobile')`
     padding: 3px;
	`}
`;

const FormSubmitButton = styled.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;
const LocationName = styled.p`
  font-size: 18px;
  font-weight: 500;
  ${customMedia.lessThan('mobile')`
     font-size:10px;
	`}
`;
const LocationAddress = styled.p`
  font-size: 14px;
  font-weight: 400;
  ${customMedia.lessThan('mobile')`
     font-size:10px;
	`}
`;
