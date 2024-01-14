import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import SearchMapContainer from './SearchMapContainer';

const SearchBar = () => {
  // 입력 폼 변화 감지하여 입력 값 관리
  const [Value, setValue] = useState('');

  let [loc, setLoc] = useState<string>('');

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
  );
};

export default SearchBar;

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
    width: 320px;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 14px;
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

const SearchFormContainer = styled.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
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
  width: 1000px;
  height: 100%;
`;

const BtnBox = styled.div``;

const FormSubmitButton = styled.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;
