import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setDetail2 } from '@/feature/SummarySlice';
import { RootState } from '@/app/store';
import { Link } from 'react-router-dom';

type Props = {};

const Thumbnail = (props: Props) => {
  const dispatch = useDispatch();
  const { title, content, tag, img } = useSelector((state: RootState) => state.summary);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataURL = reader.result as string; // 이미지 데이터 URL 저장
        setSelectedImage(imageDataURL);
        dispatch(setDetail2(
          {
            img: imageDataURL,
            title: title,
            content: content,
            tag: tag
          }
        ))
      };
      
      reader.readAsDataURL(file);
    }
  };

  return (
    <StyledInput>
      <label htmlFor="imageInput">
        <UploadBox>
          {(selectedImage || img) ? (
            <ImagePreview src={selectedImage || img} alt="Selected" />
          ) : (
            <>
              <CustomIcon />
              <DIV>대표 이미지 선택</DIV>
            </>
          )}
        </UploadBox>
      </label>
      <input
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </StyledInput>
  );
};

export default Thumbnail;

const StyledInput = styled.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* border: 1px solid #ccc; */
  width: 300px;
  height: 300px;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const CustomIcon = styled(AiOutlinePlusCircle)`
  width: 40px;
  height: 40px;
  color: #ccc;
`;

const DIV = styled.div`
  margin-top: 10px;
  color: #ccc;
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
