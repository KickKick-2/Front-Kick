import React, { Component, useEffect } from 'react'
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setDetail1 } from '@/feature/SummarySlice';
import { RootState } from '@/app/store';

type Props = {}

const DatePickerRange = (props: Props) => {
  const dispatch = useDispatch();
  const { minNum, maxNum, term } = useSelector((state: RootState) => state.summary);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (dates: [Date, Date] | null) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  useEffect(() => {
    if (startDate && endDate) {
      const startDateString = startDate.toLocaleDateString('ko-KR');
      const endDateString = endDate.toLocaleDateString('ko-KR');
      const term = `${startDateString} ~ ${endDateString}`
      
      dispatch(setDetail1({
         term: term,
         minNum: minNum,
         maxNum: maxNum
        }
      ));
    }
  }, [startDate, endDate])
  return (
    <div>
      <SelectedDateBox>
          {(startDate && endDate || term) ? (
            term ? <><Font>{term}</Font></> : 
            <>
              <Font>{startDate?.toLocaleDateString('ko-KR')}</Font>
              <Font> ~ </Font>
              <Font>{endDate?.toLocaleDateString('ko-KR')}</Font>
            </>
          ) : (
            <div>날짜를 선택해주세요.</div>
          )}
        </SelectedDateBox>
        
      <StyledDatePicker
        locale={ko} 
        dateFormat="yyyy년 MM월 dd일"
        dateFormatCalendar="yyyy년 MM월"
        minDate={new Date()} // minDate 이전 날짜 선택 불가
        placeholderText="날짜를 선택해주세요."
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
    </div>
  )
}

export default DatePickerRange


const StyledDatePicker = styled(DatePicker)`
  width: 350px; 
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  align-items:center;


`;

const SelectedDateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`;

const Font = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;