import { RootState } from '@/app/store'
import { setDetail2 } from '@/feature/SummarySlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'


type Props = {}

const ContentInput = (props: Props) => {
  const dispatch = useDispatch();
  const { title, img, tag, content } = useSelector((state: RootState) => state.summary);
  let [contents, setContents] = useState<string>('');

  return (
      <StyledInput>
         <StyledTextarea
        value={contents || content}
        onChange={(e) => {
          setContents(e.target.value)
          dispatch(setDetail2({
            img: img,
            title: title,
            content:e.target.value,
            tag: tag
          }
          ))
        }}

        placeholder="내용을 입력해주세요."
      />
      </StyledInput>
  )
}

export default ContentInput


const StyledTextarea = styled.textarea`
  flex-shrink: 0;
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: vertical;
  font-size: 16px;
  /* border: none;
  outline: none; */
`;

const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width:100%;
`;





