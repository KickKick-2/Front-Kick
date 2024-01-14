import { RootState } from '@/app/store';
import { setDetail1 } from '@/feature/SummarySlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

type Props = {};

const MinMaxCnt = (props: Props) => {
  const dispatch = useDispatch();
  const { term,minNum,maxNum } = useSelector((state: RootState) => state.summary);
  const [minValue, setMinValue] = useState<number | undefined>(1);
  const [maxValue, setMaxValue] = useState<number | undefined>(1);
  
  return (
    <BoxContainer>
      <SettingTxt>최소</SettingTxt>
      <StyledInput>
        <input
          type="number"
          value={minValue || minNum}
          onChange={(e) => {
            setMinValue(Number(e.target.value) || minNum)
            dispatch(setDetail1({
              term: term,
              minNum: Number(e.target.value) || minNum,
              maxNum: maxValue || maxNum
            }
            ))
          }}
            
        />
      </StyledInput>
      <SettingTxt>명</SettingTxt>
      <SettingTxt>-</SettingTxt>
      <SettingTxt>최대</SettingTxt>
      <StyledInput>
        <input
          type="number"
          value={maxValue || maxNum}
          onChange={(e) => {
            setMaxValue(Number(e.target.value) || maxNum)
            dispatch(setDetail1({
              term: term,
              minNum: minValue || minNum,
              maxNum: Number(e.target.value) || maxNum
            }
            )) 
          }}
        />
      </StyledInput>
      <SettingTxt>명</SettingTxt>
    </BoxContainer>
  );
};

export default MinMaxCnt;

const BoxContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SettingTxt = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 40px;
    padding: 10px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    text-align: center;
    
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`;
