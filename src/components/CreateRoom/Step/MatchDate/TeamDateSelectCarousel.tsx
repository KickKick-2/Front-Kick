import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TeamDateCalendar from './TeamDateCalendar';
import { useState, useEffect, useCallback } from 'react';
import { customMedia } from '@/util/GlobalStyle';

interface itemsProps {
  item: string;
  home_team_name: string;
  name: string;
}

const items: itemsProps[] = [
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg',
    home_team_name: '강원',
    name: '강원FC',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg',
    home_team_name: '광주',
    name: '광주FC',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg',
    home_team_name: '대구',
    name: '대구FC',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg',
    home_team_name: '대전',
    name: '대전하나시티즌',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg',
    home_team_name: '수원',
    name: '수원삼성블루윙즈',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg',
    home_team_name: '수원FC',
    name: '수원FC',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg',
    home_team_name: '울산',
    name: '울산현대',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/incheon_united.svg',
    home_team_name: '인천',
    name: '인천유나이티드',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg',
    home_team_name: '전북',
    name: '전북현대모터스',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/jeju_united.svg',
    home_team_name: '제주',
    name: '제주유나이티드',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg',
    home_team_name: '포항',
    name: '포항스틸러스',
  },
  {
    item: 'https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg',
    home_team_name: '서울',
    name: 'FC서울',
  },
];

const TeamDateSelectCarousel = () => {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    swipeToSlide: true,
    accessibility: true,
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow: <PrevArrow>&#8249;</PrevArrow>,
    nextArrow: <NextArrow>&#8250;</NextArrow>,
  };
  const [matchData, setmatchData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState<string>('강원');

  const handleBoxClick = (teamName: string) => {
    setSelectedTeam(teamName);
  };

  const getMatchData = useCallback(async (home_team_name: string) => {
    const res = await fetch(
      `https://kick-back.azurewebsites.net/api/game_schedule/?team_name=${home_team_name}`,
      {
        method: 'GET',
      },
    );

    const data = await res.json();

    setmatchData(data);
  }, []);

  return (
    <CarouselContainer>
      <CustomSlider {...settings}>
        {items.map((item, index) => (
          <DIV
            key={index}
            onClick={() => {
              handleBoxClick(item.home_team_name),
                getMatchData(item.home_team_name);
            }}
            isSelected={selectedTeam === item.home_team_name}
          >
            <BoxWrapper key={index}>
              <Box>
                <FlexContainer>
                  <IMG src={item.item} alt='정보가 없습니다.' />
                </FlexContainer>
              </Box>
              <NameWrapper>
                <Name>{item.home_team_name}</Name>
              </NameWrapper>
            </BoxWrapper>
          </DIV>
        ))}
      </CustomSlider>
      {selectedTeam && (
        <TeamCalendarContainer>
          <TeamDateCalendar teamName={selectedTeam} teamEvents={matchData} />
        </TeamCalendarContainer>
      )}
    </CarouselContainer>
  );
};

export default TeamDateSelectCarousel;

const CustomSlider = styled(Slider)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
  }

  .slick-slide > div {
    margin-right: 20%;
  }

  .slick-prev{
    left: 12px;
  }
  .slick-next{
    right: 12px;
  }

  ${customMedia.lessThan('mobile')`
    font-size: 12px;
	`}
`;

interface BoxProps {
  isSelected?: boolean;
}

const DIV = styled.div<BoxProps>`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.isSelected ? '#49496d' : 'transparent'};
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TeamCalendarContainer = styled.div`
  background-color: white;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  overflow: hidden;
`;

const IMG = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  ${customMedia.lessThan('mobile')`
      width: 40px;
      height: 40px;
	`}
`;

const Name = styled.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${customMedia.lessThan('mobile')`
      font-size: 1px;
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
