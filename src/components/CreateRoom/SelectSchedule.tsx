import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SelectScheduleBox from './SelectScheduleBox';

interface itemsProps {
  home: string;
  away: string;
  date: string;
  location: string;
}

const items: itemsProps[] = [
  {
    home: 'FC서울',
    away: '전북현대모터스',
    date: '8월 3일 14:00',
    location: '서울월드컵경기장',
  },
  {
    home: 'FC서울',
    away: '전북현대모터스',
    date: '8월 3일 14:00',
    location: '서울월드컵경기장',
  },
  {
    home: 'FC서울',
    away: '전북현대모터스',
    date: '8월 3일 14:00',
    location: '서울월드컵경기장',
  },
  {
    home: 'FC서울',
    away: '전북현대모터스',
    date: '8월 3일 14:00',
    location: '서울월드컵경기장',
  },
  {
    home: 'FC서울',
    away: '전북현대모터스',
    date: '8월 3일 14:00',
    location: '서울월드컵경기장',
  },
];

const SelectSchedule = () => {
  const settings = {
    dots: false,
    autoplay: false,
    Infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToslide: true,
    speed: 500,
  };

  return (
    <Container>
      <Slider {...settings}>
        {items.map((item, index) => (
          <SelectScheduleBox
            key={index}
            home={item.home}
            away={item.away}
            date={item.date}
            location={item.location}
          />
        ))}
      </Slider>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 20px;
  width: 100%;
`;
export default SelectSchedule;
