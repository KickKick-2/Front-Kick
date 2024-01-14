import React from 'react'
import styled from 'styled-components'
import MinMaxCnt from './MinMaxCnt'
import MeetingTime from '../MeetingDate.tsx/MeetingTime'
import DatePickerRange from '../MeetingDate.tsx/DatePickerRange'



type Props = {}

function Detailinfo_1({}: Props) {
  return (
    <Form>
        <MinMaxCnt></MinMaxCnt>
        <DatePickerRange></DatePickerRange>
        <MeetingTime></MeetingTime>
    </Form>
  )
}

export default Detailinfo_1


const Form = styled.div`
margin: 20px auto;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;