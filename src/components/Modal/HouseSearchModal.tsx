import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { BASE_URL } from '@/config';
import { cardData, cardList } from '@/lib/interface';
import { closeModal } from '@/feature/ModalSlice';
import { SelectedHouseItem } from '@/feature/SelectedItemsSlice';
import { teamnameConvertteamId } from '@/util/teamnameConvertImg';
import { customMedia } from '@/util/GlobalStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Props = {};

const HouseSearchModal = (props: Props) => {
  const stadium = useSelector((state: RootState) => state.summary.stadium);
  const homename = useSelector((state: RootState) => state.summary.homename);
  const [Value, setValue] = useState('');

  // 입력 폼 변화 감지하여 입력 값을 state에 담아주는 함수
  const keywordChange = (e: {
    preventDefault: () => void;
    target: { value: string };
  }) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  // 제출한 검색어 관리
  const [Keyword, setKeyword] = useState('');
  const [searchData, setsearchData] = useState<cardList>();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `${BASE_URL}/api/tour_api/keyword/?keyword=${Keyword}&content_type_id=32`,
          {
            method: 'get',
          },
        );
        const data = await res.json();
        setsearchData(data);
      } catch (error) {
        toast.error('에러 발생');
      }
    }
    fetchData();
  }, [Keyword]);
  // 제출한 검색어 state에 담아주는 함수
  const submitKeyword = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setKeyword(Value);
  };

  // 검색어를 입력하지 않고 검색 버튼을 눌렀을 경우
  const valueChecker = () => {
    if (Value === '') {
      alert('검색어를 입력해주세요.');
    }
  };
  const [recommendList, setrecommendList] = useState<cardList>();
  const getRecommendList = useCallback(async () => {
    const res = await fetch(
      // `${BASE_URL}/api/tour_api/?team_id=4&content_type_id=39`,
      `${BASE_URL}/api/tour_api/recommend/?team_id=${teamnameConvertteamId(
        homename,
      )}&content_type_id=32`,
      {
        method: 'GET',
      },
    );
    const data = await res.json();
    setrecommendList(data);
  }, []);
  useEffect(() => {
    getRecommendList();
  }, [getRecommendList]);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState<cardData[]>([]);

  const handleCheckboxChange = (item: cardData) => {
    // 이미 선택된 아이템인지 확인 후 추가하거나 제거
    if (
      selectedItems.some((selectedItem) => selectedItem.title === item.title)
    ) {
      setSelectedItems(
        selectedItems.filter(
          (selectedItem) => selectedItem.title !== item.title,
        ),
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const handleCompleteSelection = () => {
    // console.log('선택 완료 버튼 클릭됨, selectedItem:', selectedItems);
    // 선택 완료 버튼 클릭 시, 선택된 아이템 정보로 PlaceCard에 전달
    if (selectedItems.length > 0) {
      selectedItems.map((item) => dispatch(SelectedHouseItem(item)));
    }
  };

  return (
    <Box>
      <Title>숙박 코스 추가</Title>
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
                        placeholder='가고싶은 장소를 검색해보세요!'
                      />
                      <BtnBox>
                        <CustomIcon
                          className='btn form__submit'
                          type='submit'
                          value='검색'
                          onClick={valueChecker}
                        />
                      </BtnBox>
                    </FormLabel>
                  </SearchForm>
                </CourseAddBtn>
              </LandingPageInner>
            </LandingPage>
          </BoxContainer>
        </SettingBox>
      </Form>
      <ResultContainer>
      <SubTitle>⚽️ {stadium} 경기장 주변 추천 장소</SubTitle>
        <FlexContainer1>
          <DIV>
            {recommendList &&
              recommendList?.item.map((item: cardData, index) => (
                <Box2 key={index}>
                  <FlexContainer2>
                    <InfoContainer>
                      <CheckboxContainer>
                        <Checkbox
                          type='checkbox'
                          onChange={() => {
                            handleCheckboxChange(item);
                          }}
                        />
                      </CheckboxContainer>
                      <IMG src={item.firstimage} alt={item.title} />
                      <FlexContainerRight>
                        <Name>{item.title}</Name>
                        <Loc>{item.addr1}</Loc>
                      </FlexContainerRight>
                    </InfoContainer>
                  </FlexContainer2>
                </Box2>
              ))}
          </DIV>
        </FlexContainer1>
        {searchData?.item && <SearchTitle>⚽️ 검색 결과</SearchTitle>}

        <FlexContainer1>
          <DIV>
            {searchData?.item &&
              searchData?.item.map((item: cardData, index) => (
                <Box2 key={index}>
                  <FlexContainer2>
                    <InfoContainer>
                      <CheckboxContainer>
                        <Checkbox
                          type='checkbox'
                          onChange={() => {
                            handleCheckboxChange(item);
                          }}
                        />
                      </CheckboxContainer>
                      <IMG src={item.firstimage} alt={item.title} />
                      <FlexContainerRight>
                        <Name>{item.title}</Name>
                        <Loc>{item.addr1}</Loc>
                      </FlexContainerRight>
                    </InfoContainer>
                  </FlexContainer2>
                </Box2>
              ))}
          </DIV>
        </FlexContainer1>
      </ResultContainer>
      <NextButtonContainer>
        <RegisterBtn
          onClick={() => {
            handleCompleteSelection(), dispatch(closeModal());
          }}
        >
          선택 완료
        </RegisterBtn>
      </NextButtonContainer>
    </Box>
  );
};

export default HouseSearchModal;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 40%;
  height: 70%;
  margin-top: 100px;
  overflow-x: auto;
  overflow-y: scroll;
  z-index: 100;

  ${customMedia.lessThan('mobile')`
    width:80%;
    height:70%;
	`}
  
`;
const ResultContainer = styled.div`
  height: 60%;
  width: 90%;
  overflow-y: scroll;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;
const FlexContainer1 = styled.div`
  padding: 10px 0;
  display: flex;
  /* gap: 10px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  height: 100%;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
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
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 40px 0; */
`;

const CourseAddBtn = styled.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  /* margin-bottom:40px; */
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 420px;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 14px;
    ${customMedia.lessThan('tablet')`
      width: 200px;
      height: 40px;
	`}
    ${customMedia.lessThan('mobile')`
      width: 230px;
      height: 40px;
	`}
  }
`;

const CustomIcon = styled(FaSearch)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const LandingPage = styled.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`;

const LandingPageInner = styled.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;

const SearchForm = styled.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`;

const FormLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`;

const FormInput = styled.input`
  width: 100%;
  height: 100%;
`;
const BtnBox = styled.div``;

const SubTitle = styled.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`;
const SearchTitle = styled.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`;

const Box2 = styled.div`
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
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Loc = styled.div`
  font-size: 11px;
  font-weight: bold;
  padding-right: 5px;
`;

const CheckboxContainer = styled.div`
  margin-left: 10px;
`;
const DIV = styled.div`
  height: 400px;
  width: 100%;
  overflow-y: scroll;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Checkbox = styled.input``;
const FlexContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexContainerRight = styled.div`
  align-items: center;
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
  color: #ffffff;
  bottom: 0; /* 화면 아래에 고정 */
  z-index: 1; 
`;

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
