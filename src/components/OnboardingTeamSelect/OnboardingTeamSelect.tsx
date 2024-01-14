import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCallback, useEffect, useState } from 'react';
import SelectTeamCard from './SelectTeamCard';
import { customMedia } from '@/util/GlobalStyle';
import { teamnameConvertImg } from '@/util/teamnameConvertImg';

const OnboardingTeamSelect = () => {
  const [selectedTeam, setSelectedTeam] = useState<any | null>('강원');

  const [rating, setrating] = useState<
    {
      football_team_id: number;
      original_team_name: string;
      team_name: string;
      follower: number;
      recruit_ing: number;
      logo_img_url: string;
      team_color_main: string;
      team_color_sub: string;
      recruit_end: number;
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

  const handleBoxClick = (teamName: string) => {
    setSelectedTeam(teamName);
  };

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    speed: 500,
    accessibility: true,
    prevArrow: <PrevArrow>&#8249;</PrevArrow>,
    nextArrow: <NextArrow>&#8250;</NextArrow>,
    responsive: [
      // 반응형 속성 설정
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <CustomSlider {...settings}>
        {sortedItems.map(
          (item, index) =>
            index !== 12 && (
              <DIV2
                key={index}
                isSelected={selectedTeam === item.original_team_name}
              >
                <BoxWrapper key={index}>
                  <Box onClick={() => handleBoxClick(item.original_team_name)}>
                    <FlexContainer>
                      <IMG
                        src={teamnameConvertImg(item.original_team_name)}
                        alt={item.original_team_name}
                      />
                    </FlexContainer>
                  </Box>
                </BoxWrapper>
                <NameWrapper>
                  <Name>{item.team_name}</Name>
                </NameWrapper>
              </DIV2>
            ),
        )}
      </CustomSlider>
      {selectedTeam && (
        <SelectTeamCard
          original_team_name={selectedTeam}
          football_team_id={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.football_team_id || 1
          }
          team_color_main={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.team_color_main || ''
          }
          team_name={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.team_name || ''
          }
          team_color_sub={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.team_color_sub || ''
          }
          logo_img_url={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.original_team_name || ''
          }
          recruit_ing={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.recruit_ing || 1
          }
          follower={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.follower || 1
          }
          recruit_end={
            sortedItems.find((item) => item.original_team_name === selectedTeam)
              ?.recruit_end || 1
          }
          // name={selectedTeam || ''}
        />
      )}
    </CarouselContainer>
  );
};

export default OnboardingTeamSelect;

const CustomSlider = styled(Slider)`
  max-width: 100vw;
  width: 100%;
  overflow: hidden;

  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
    ${customMedia.lessThan('mobile')`
      margin-right: -30%;
	`}
  }

  .slick-slide > div {
    margin-right: 20%;
    ${customMedia.lessThan('mobile')`
      margin-right: -30%;
	`}
  }

  .slick-prev {
    left: 12px;
  }
  .slick-next {
    right: 12px;
  }
`;

interface BoxProps {
  isSelected?: boolean;
}

const DIV2 = styled.div<BoxProps>`
  display: flex;
  width: 100%;
  height: 100%;
  /* background-color: ${(props) =>
    props.isSelected ? '#49496d' : 'transparent'}; */
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface BoxProps {
  backgroundColor?: string;
}

const Box = styled.div<BoxProps>`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 10%;
  overflow: hidden;
  ${customMedia.lessThan('mobile')`
      margin-top: 5%;
	`}
`;

const DIV = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const IMG = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan('mobile')`
		width:50px;
    height:50px;
	`}
`;

const Name = styled.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${customMedia.lessThan('tablet')`
		font-size: 10px;
    margin-top:1%;
    margin-bottom:5%;
	`}
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`;

const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`;
