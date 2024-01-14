import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import PlaceCard from '../SelectCard/PlaceCard';

type Props = {};

function Summary({}: Props) {
  const {
    img,
    title,
    stadium,
    date,
    homename,
    awayname,
    meetingPlace,
    detailMeetingPlace,
    term,
    minNum,
    maxNum,
    content,
    tag,
  } = useSelector((state: RootState) => state.summary);
  const cardInfo = useSelector((state: RootState) => state.selecteditem);
  const accomodation = useSelector(
    (state: RootState) => state.selecteditem.house,
  );
  const restaurant = useSelector((state: RootState) => state.selecteditem.food);
  const attraction = useSelector(
    (state: RootState) => state.selecteditem.attraction,
  );
  return (
    <Form>
      {/* 이미지 박스 */}
      {/* <ImgBox>
        <IMG src={img} alt='선택한 배경 사진이 없습니다.(No Image)' />
      </ImgBox> */}

      {/* 제목 */}
      <Title>{title}</Title>

      {/* 매치 정보 */}
      <Box>
        <TitleText>🔥 매치 정보</TitleText>
        <MatchInfo>
          <FlexContainer>
            <FlexContainerLeft>
              <FlexText>
                <FlexItem>{date}</FlexItem>
              </FlexText>
              <FlexText>
                <FlexItem>{stadium} 경기장</FlexItem>
              </FlexText>
            </FlexContainerLeft>
            <FlexContainerRight>
              <Text>
                {' '}
                {homename && awayname ? homename + ' vs ' + awayname : ''}{' '}
              </Text>
            </FlexContainerRight>
          </FlexContainer>
        </MatchInfo>
      </Box>
      {/* 동행 정보 */}
      <Box>
        <TitleText>🔥 동행 정보</TitleText>
        <JoinInfo>
          {minNum && maxNum && meetingPlace && detailMeetingPlace && term ? (
            <FlexContainer>
              <FlexContainerLeft>
                <FlexText>
                  <Text>희망 인원 </Text>
                  <Text>
                    {' '}
                    {minNum} ~ {maxNum} 명
                  </Text>
                </FlexText>
              </FlexContainerLeft>
              <FlexContainerRight>
                <Text>
                  {' '}
                  동행 장소 {meetingPlace} {detailMeetingPlace}
                </Text>
                <Text> 동행 기간 {term} </Text>
              </FlexContainerRight>
            </FlexContainer>
          ) : (
            <></>
          )}
        </JoinInfo>
      </Box>

      {/* 태그 정보 */}
      <Box>
        <TitleText>🔥 태그 정보</TitleText>
        <TagInfo>
          {tag.map((tagItem, index) => (
            <TagWrapper key={index}>{tagItem.origName}</TagWrapper>
          ))}
        </TagInfo>
      </Box>
      {/* 카드 정보 */}
      <Box>
        <TitleText>🔥 카드 정보</TitleText>
        <CardInfo>
          <ScrollContainer>
            <CardContainer>
              {cardInfo.house.length > 0 && (
                <PlaceCard index={0} ischk={false} list={accomodation} />
              )}
              {cardInfo.food.length > 0 && (
                <PlaceCard index={1} ischk={false} list={restaurant} />
              )}
              {cardInfo.attraction.length > 0 && (
                <PlaceCard index={2} ischk={false} list={attraction} />
              )}
            </CardContainer>
          </ScrollContainer>
        </CardInfo>
      </Box>
      {/* 내용 */}
      <Content>{content}</Content>
    </Form>
  );
}

export default Summary;

const Form = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  justify-content: left;
  align-items: left;
`;
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
`;

const IMG = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  font-size: 12px;
`;

const Title = styled.div`
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  font-size: 25px;
  /* border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc; */
`;

const MatchInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`;

const FlexItem = styled.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`;

const FlexText = styled.div`
  align-items: center;
  gap: 10px;
`;

const TitleText = styled.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Text = styled.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexContainerLeft = styled.div`
  justify-content: left;
  align-items: center;
`;

const FlexContainerRight = styled.div`
  gap: 15px;
`;

const JoinInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`;

const TagInfo = styled.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`;

const TagWrapper = styled.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`;

const Content = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  word-break:break-all;
  /* border: none;
  outline: none; */
`;

const CardInfo = styled.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
`;

const CardContainer = styled.div`
  display: flex;
`;

const ScrollContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  /* Chrome 브라우저 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
`;
