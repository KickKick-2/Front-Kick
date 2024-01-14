import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BannerCarousel = () => {
    const settings = {
        dots: true,
        autoplay: true,
        Infinite: true,
        slidesToshow: 1,
        slidesToscroll: 1,
        swipeToslide: true,
        autoplaySpeed:3000,
        speed: 500
    }
  
    return (
        <Container className="carousel">
            <Slider {...settings}>
                <Box>
                    <CenteredContent>
                    <IMG src='/assets/banner4.png' alt='logo'/>
                    </CenteredContent>
                </Box>
                <Box>
                    <CenteredContent>
                    <IMG src='/assets/banner3.png' alt='logo'/>
                    </CenteredContent>
                </Box>
                <Box>
                    <CenteredContent>
                    <IMG src='/assets/banner2.png' alt='logo'/>
                    </CenteredContent>
                </Box>
                <Box>
                    <CenteredContent>
                    <IMG src='/assets/banner1.png' alt='logo'/>
                    </CenteredContent>
                </Box>

            </Slider>
        </Container>
    );
}

export default BannerCarousel;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenteredContent = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`;
const Container = styled.div`
    width: 100%;
`