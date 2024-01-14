import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface itemsProps {
    item: string,
    name: string,
    loc: string,
    stadium: string
  }
  
const items:itemsProps[] = [
  {
    item: 'public/assets/teams/강원FC.png',
    name: '강원FC',
    loc: '강원자치도',
    stadium:'강릉종합운동장, 춘천송암스포츠타운'
    },
    {
    item: 'public/assets/teams/광주FC.png',
    name: '광주FC',
    loc: '광주광역시',
    stadium:'광주축구전용구장'
    },
    {
    item: 'public/assets/teams/대구FC.png',
    name: '대구FC',
    loc: '대구광역시',
    stadium:'DGB 대구은행파크'
    },
    {
    item: 'public/assets/teams/대전하나시티즌.png',
    name: '대전하나시티즌',
    loc: '대전광역시',
    stadium:'대전월드컵경기장'
    },
    {
    item: 'public/assets/teams/수원삼성블루윙즈.png',
    name: '수원삼성블루윙즈',
    loc: '경기도 수원시',
    stadium:'수원월드컵경기장'
    },
    {
    item: 'public/assets/teams/수원FC.png',
    name: '수원FC',
    loc: '경기도 수원시',
    stadium:'수원종합운동장'
    },
    {
    item: 'public/assets/teams/울산현대.png',
    name: '울산현대',
    loc: '울산광역시',
    stadium:'울산문수월드컵경기장'

    },
    {
    item: 'public/assets/teams/인천유나이티드.png',
    name: '인천유나이티드',
    loc: '인천광역시',
    stadium:'인천축구전용경기장'
    },
    {
    item: 'public/assets/teams/전북현대모터스.png',
    name: '전북현대모터스',
    loc: '전라북도',
    stadium:'전주월드컵경기장'
    },
    {
    item: 'public/assets/teams/제주유나이티드.png',
    name: '제주유나이티드',
    loc: '제주특별자치도',
    stadium:'제주월드컵경기장'
    },
    {
    item: 'public/assets/teams/포항스틸러스.png',
    name: '포항스틸러스',
    loc: '경상북도 포항시',
    stadium:'포항스틸야드'
    },
    {
    item: 'public/assets/teams/FC서울.png',
    name: 'FC서울',
    loc: '서울특별시',
    stadium: '서울월드컵경기장'
    }  
]



const DateCardCarousel = () => {

    const settings = {
        dots: true,
        autoplay: false,
        Infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        swipeToslide: true,
        autoplaySpeed:3000,
        speed: 500
    }
  
    return (
        <DIV className="carousel">
            <CustomSlider {...settings}>
                {items.map((item, index) => (  
                    <Box key={index}>
                            <IMG src ={item.item} alt={item.name} />
                            <Name>{item.name}</Name>
                            <StadiumName> 8월 3일 14:00 </StadiumName>
                            <StadiumName>{item.stadium}</StadiumName>
                    </Box>
                ))}    
            </CustomSlider>           
        </DIV>
    );
}

export default DateCardCarousel;

const DIV = styled.div`
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    margin-right: 20px;

  }
  .slick-dots {
    bottom: 100px; 
  }
`;



const Box = styled.div`
    background-color : #EEEEEE;
    width: 100%;
    height: 200px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
`;

const IMG = styled.img`
    width: 100%;
    height: 50%;
    object-fit: contain;
`;

const Name = styled.div`
font-size: 25px;
margin-Top: 30px;
font-weight: bold;
text-align: center;
`;

const StadiumName = styled.div`
font-size: 15px;
font-weight: bold;
text-align: center;
`;
