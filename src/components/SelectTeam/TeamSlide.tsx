import styled from 'styled-components';
import { dummyTeams } from '../../../public/dummy/dummyTeams';
import Slider from 'react-slick';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
type Props = {
  settab: (value: number) => void;
};
const TeamSlide = (props: Props) => {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: 'linear',
    nextArrow: <IoIosArrowDroprightCircle color='#fff' />,
    prevArrow: <IoIosArrowDropleftCircle color='#fff' />,
  };
  return (
    <TeamSlider {...settings}>
      {dummyTeams.map((team, index) => (
        <TEAMS key={index} onClick={() => props.settab(index + 1)}>
          <TeamLogo>
            <TeamIMG src={team.teamImg} />
          </TeamLogo>
          <TeamName>{team.teamName}</TeamName>
        </TEAMS>
      ))}
    </TeamSlider>
  );
};
const TeamSlider = styled(Slider)`
  margin: 0 auto;
  /* background-color: #1f1f45; */
  width: 85%;
  display: flex;
  gap: 11px;
`;
const TEAMS = styled.div`
  display: flex;
  gap: 3px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
`;
const TeamLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TeamIMG = styled.img`
  width: 48px;
  height: 55px;
`;
const TeamName = styled.p`
  padding: 0 10px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #ffffff;
`;

export default TeamSlide;
