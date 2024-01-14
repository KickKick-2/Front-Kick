import { RootState } from '@/app/store'
import { setDetail2 } from '@/feature/SummarySlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

type Props = {}

const TitleName = (props: Props) => {
  const dispatch = useDispatch();
  const { img, content, tag, title } = useSelector((state: RootState) => state.summary);
  let [titlename, setTitle] = useState<string>('')

  return (

      <StyledInput>
        <input type="text" id="title" value={titlename || title} placeholder="제목을 입력해주세요." onChange={(e) => {
          setTitle(e.target.value) 
          dispatch(setDetail2({
            img: img,
            title: e.target.value,
            content: content,
            tag: tag
            }
          ))
        }}
        />
      </StyledInput>
  )
}

export default TitleName


const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width:100%;
  

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px; 
    /* border: none; 
    outline: none;  */
    font-size: 16px; 
    
  }
`;
