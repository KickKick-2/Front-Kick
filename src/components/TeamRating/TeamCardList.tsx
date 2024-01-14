import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

interface itemsProps {
    rating: number,
    item: string,
    name: string,
    ing: number,
    follower: number,
  }
  
const items:itemsProps[] = [
  {
    rating: 1,
    item: 'https://kickstorage.blob.core.windows.net/logo/강원FC.png',
    name: '강원FC',
    ing: 12,
    follower: 23,
    },
    {
    rating: 2,
    item: 'https://kickstorage.blob.core.windows.net/logo/광주FC.png',
    name: '광주FC',
    ing: 12,
    follower: 23,
    },
    {
    rating: 3,
    item: 'https://kickstorage.blob.core.windows.net/logo/대구FC.png',
    name: '대구FC',
    ing: 12,
    follower: 23,
    },
    {
    rating: 4,
    item: 'https://kickstorage.blob.core.windows.net/logo/대전하나시티즌.png',
    name: '대전하나시티즌',
    ing: 12,
    follower: 23,
    },
    {
    rating: 5,
    item: 'https://kickstorage.blob.core.windows.net/logo/수원삼성블루윙즈.png',
    name: '수원삼성블루윙즈',
    ing: 12,
    follower: 23,
    },
    {
    rating: 6,
    item: 'https://kickstorage.blob.core.windows.net/logo/수원FC.png',
    name: '수원FC',
    ing: 12,
    follower: 23,
    },
    {
    rating: 7,
    item: 'https://kickstorage.blob.core.windows.net/logo/울산현대.png',
    name: '울산현대',
    ing: 12,
    follower: 23,
    },
    {
    rating: 8,
    item: 'https://kickstorage.blob.core.windows.net/logo/인천유나이티드.png',
    name: '인천유나이티드',
    ing: 12,
    follower: 23,
    },
    {
    rating: 9,
    item: 'https://kickstorage.blob.core.windows.net/logo/전북현대모터스.png',
    name: '전북현대모터스',
    ing: 12,
    follower: 23,

    },
    {
    rating: 10,
    item: 'https://kickstorage.blob.core.windows.net/logo/제주유나이티드.png',
    name: '제주유나이티드',
    ing: 12,
    follower: 23,

    },
    {
    rating: 11,
    item: 'https://kickstorage.blob.core.windows.net/logo/포항스틸러스.png',
    name: '포항스틸러스',
    ing: 12,
    follower: 23,

    },
    {
    rating: 12,
    item: 'https://kickstorage.blob.core.windows.net/logo/FC서울.png',
    name: 'FC서울',
    ing: 12,
    follower: 23,
    }  
]



const TeamCardBox = () => {

    const navigate = useNavigate();
    const sortedItems = items.sort((a, b) => a.rating - b.rating);
    const top3Items = sortedItems.slice(0, 3);

  return (
    <div className="list">
  
        {top3Items.map((item, index) => (
            


            <Box key={index}>
                <Rate>TOP {item.rating}</Rate>
                <FlexContainer>
                    <IMG src ={item.item} alt={item.name} />
                    <FlexContainerRight>
                        <Name>{item.name}</Name>
                        <FlexColumnInside>
                            <FlexColumn>
                                <FlexText>
                                    <FlexItem>{item.follower}</FlexItem>
                                    <DIV>팔로워</DIV>
                                </FlexText>
                            </FlexColumn>
                            <FlexColumn>
                                <FlexText>
                                    <FlexItem>{item.ing}</FlexItem> 
                                    <DIV>현재 동행팀</DIV>
                                </FlexText>
                            </FlexColumn>
                        </FlexColumnInside>
                        <InfoBox onClick={() => navigate('/roominfo')}>상세정보</InfoBox>

                    </FlexContainerRight>
                </FlexContainer>
            </Box>
        ))}
    </div>
  )
}

export default TeamCardBox


const Box = styled.div`
    position: relative; 
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 150px;
    background: #eeeeee;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 20px;
`;

const Rate = styled.div`
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top:-5px;
    left:5px;
    
`

const IMG = styled.img`
    width: 90px;
    height: 90px;
    object-fit: contain;
    margin-right: 30px;
`;

const Name = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

`;

const FlexContainerRight = styled.div`
  align-items: center;

`;


const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexColumnInside = styled.div`
  display: flex;
`;

const FlexItem = styled.div`
 
    font-size: 18px;
    font-weight: bold;
    text-align: center;

`;

const FlexText = styled.div`
    margin-right: 14px;
    display: flex;
    align-items: center;

`;

const DIV = styled.div`
    margin-left: 6px;
    font-size: 12px;
    
`;

const InfoBox = styled.div`
  margin-top: 10px;
  box-sizing: border-box;
  width: 60px;
  height: 24px;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  text-align: center;
  font-size: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center; 
`;