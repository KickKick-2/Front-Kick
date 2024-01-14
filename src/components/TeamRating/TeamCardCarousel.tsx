import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect, useCallback } from 'react';

import { customMedia } from '@/util/GlobalStyle';
import { teamnameConvertImg } from '@/util/teamnameConvertImg';
const TeamCardCarousel = () => {
  // const [teamList, setteamList] = useState<GetTeamList>();
  const dispatch = useDispatch();  


  const [rating, setrating] = useState<
    {
      football_team_id: number;
      original_team_name: string;
      follower: number;
      recruit_ing: number;
      logo_img_url: string;
      team_color_main: string;
      team_color_sub: string;

    }[]
  >([]);
  const ratingList = useCallback(async () => {
    const res = await fetch(
      `https://kick-back.azurewebsites.net/api/team_info/list_detail`,
      {
        method: 'GET',
      },
    );
    const data = await res.json();
    setrating(data);
  }, []);

  useEffect(() => {
    ratingList();
  }, [ratingList]);
  const sortedItems = [...(rating || [])].sort(
    (a, b) => b.recruit_ing - a.recruit_ing,
  );
  
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow: <PrevArrow>&#8249;</PrevArrow>,
    nextArrow: <NextArrow>&#8250;</NextArrow>,
    responsive: [ // 반응형 웹 구현 옵션
    {  
      breakpoint: 960, //화면 사이즈 960px
      settings: {
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:2,
        slidesToScroll: 2,
        autoplay: false
      } 
    },
    { 
      breakpoint: 768, //화면 사이즈 768px
      settings: {	
        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
        slidesToShow:1,
        slidesToScroll: 1,
        autoplay: false
      } 
    }
  ]
  };
  

  // // api에서 team 목록 불러오기
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getTeamDetail();
  //       setteamList(response);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const handleOpenSearchModal = () => {
  //   dispatch(
  //     openModal({
  //       modalType: 'TeamCardModal',
  //       isOpen: true,
  //     }),
  //   );
  // };

  return (
    <DIV className='carousel'>
      <CustomSlider {...settings}>
        {sortedItems?.map((item, index) => (
          index !== 12 && (
          <Box key={index} backgroundColor={item.team_color_sub} >
            <TitleBox backgroundColor={item.team_color_main} >
              <Rate>{index + 1}</Rate>
            </TitleBox>
            <FlexContainer>
              <Circle>
                <IMG
                  src={teamnameConvertImg(item.original_team_name)}
                  alt={item.original_team_name}
                />
              </Circle>
              <FlexContainerRight>
                <Name>{item.original_team_name}</Name>
                <FlexColumnInside>
                  <FlexText>
                    <Font>팔로워</Font>
                    <FlexItem>{item.follower}</FlexItem>
                  </FlexText>
                  <FlexText>
                    <Font>현재 동행팀</Font>
                    <FlexItem>{item.recruit_ing}</FlexItem>
                  </FlexText>
                </FlexColumnInside>
                {/* <FilterBtn onClick={handleOpenSearchModal}>
                  <InfoBox>상세정보</InfoBox>
                </FilterBtn> */}
              </FlexContainerRight>
            </FlexContainer>
          </Box>
          )
        ))}
      </CustomSlider>
    </DIV>
  );
};

export default TeamCardCarousel;

const DIV = styled.div`
  padding: 0 50px;
`

const CustomSlider = styled(Slider)`
  .slick-slide {
  }


  .slick-list {
    margin-right: -15px;
  }

  .slick-slide > div {
    margin-right: 40px;
  }

  .slick-prev{
  }
`;

interface BoxProps {
  backgroundColor?: string;
}

const Box = styled.div<BoxProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 343px;
  background-color: ${(props) => props.backgroundColor || '#FFFFFF'};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
  ${customMedia.lessThan('mobile')`
		height: 200px;
    margin-left:2%;
    margin-right:2%;
    margin-bottom: 10px;
	`}
`;

const TitleBox = styled.div<BoxProps>`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: ${(props) => props.backgroundColor || '#FFFFFF'};
  border-radius: 20px 20px 0 0;
  width: 100%;
  ${customMedia.lessThan('mobile')`
		height:60px;
    padding: 5px;
	`}
`;

const Rate = styled.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${customMedia.lessThan('mobile')`
		font-size: 30px;
    padding: 2px;
	`}
  @font-face {
    font-family: 'Giants-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Giants-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`;

const Circle = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%; 
  left: 50%; 
  background-color: #FFFFFF;
  border-radius:50%;
  ${customMedia.lessThan('tablet')`
		width: 90px;
    height: 90px;
	`}
  transform: translate(-50%, -50%);
   ${customMedia.lessThan('mobile')`
		width: 70px;
    height: 70px;
    top: 30%;
	`}
  
`

const IMG = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  ${customMedia.lessThan('tablet')`
		width: 80px;
    height: 80px;
	`}
  ${customMedia.lessThan('mobile')`
		width:60px;
    height:60px;
	`}
`;

const Name = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: white;
  ${customMedia.lessThan('mobile')`
		font-size: 20px;
    padding:1px;
	`}
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan('mobile')`
		padding: 0px;
	`}
`;

const FlexContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  ${customMedia.lessThan('mobile')`
		margin-top: 50px;
	`}
`;

const FlexColumnInside = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
   ${customMedia.lessThan('mobile')`
	`}
`;

const FlexItem = styled.div`
  font-size: 20px;
  color: white;
   ${customMedia.lessThan('mobile')`
		font-size: 15px;
	`}
`;

const FlexText = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  gap:40px;
  font-size:10px;
  align-items: center;
  justify-content: space-between;
`;

const Font = styled.div`
  font-size: 20px;
  color: white;
  ${customMedia.lessThan('mobile')`
		font-size: 10px;
	`}
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

const FilterBtn = styled.div`
  width: 80px;
  height: 29px;
  display: flex;
  border: none;
  border-radius: 12px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`;

const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`;

