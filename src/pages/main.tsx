import styled from 'styled-components';
import { useState, useEffect } from 'react';
import BannerCarousel from '../components/Banner/BannerCarousel';
import { useSelector } from 'react-redux';
import TeamCardCarousel from '@/components/TeamRating/TeamCardCarousel';
import FindAccompany from './FindAccompany';
import { customMedia } from '@/util/GlobalStyle';
import { BASE_URL } from '@/config';
import { getCookie } from '@/util/cookieFn';
import { AccompanyPostReal } from '@/lib/interface';
import AccompanyBox from '@/components/MyAccompany/AccompanyBox';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/app/store';

const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
type Props = {};

const Main = (props: Props) => {
  const [accompanyList1, setaccompanyList1] = useState<AccompanyPostReal[]>([]);
  const [accompanyList2, setaccompanyList2] = useState<AccompanyPostReal[]>([]);
  // window.location.reload();
  const { token, isAuthenticated } = useSelector(
    (state: RootState) => state.auth,
  );
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}/api/my-recruitment`, {
          method: 'get',
          headers: headers,
        });
        const data = await response.json();
        setaccompanyList1(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    async function fetchData2() {
      try {
        const response = await fetch(`${BASE_URL}/api/my-applied-recruitment`, {
          method: 'get',
          headers: headers,
        });
        const data = await response.json();
        setaccompanyList2(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
    fetchData2();
  }, [token]);
  const navigate = useNavigate();

  return (
    <div>
      {isAuthenticated ? (
        <DIV>
          <P>👋 현재 나의 동행일정 ({accompanyList2?.length})</P>
          {accompanyList2?.length === 0 ? (
            <Mypage>
              <Font>예정 중인 동행이 없어요 🥲</Font>
            </Mypage>
          ) : (
            <ListContainer>
              {/* {accompanyList1.length > 0 &&
                accompanyList1?.map((post: AccompanyPostReal) => (
                  <div
                    key={post.recruitmentBoardId}
                    onClick={() =>
                      navigate(
                        `/findaccompany/detail/${post.recruitmentBoardId}`,
                      )
                    }
                  >
                    <AccompanyBox post={post} />
                  </div>
                ))} */}
              {accompanyList2.length > 0 &&
                accompanyList2?.map((post: AccompanyPostReal) => (
                  <div
                    key={post.recruitmentBoardId}
                    onClick={() =>
                      navigate(
                        `/findaccompany/detail/${post.recruitmentBoardId}`,
                      )
                    }
                  >
                    <AccompanyBox post={post} />
                  </div>
                ))}
            </ListContainer>
          )}
        </DIV>
      ) : (
        <></>
      )}
      <BannerCarouselContainer>
        <BannerCarousel />
      </BannerCarouselContainer>
      <RatingContainer>
        <RatingTitle>🏆 구단별 응원순위</RatingTitle>
        <RatingSubTitle>구단별 모집이 완료된 동행팀 수</RatingSubTitle>
        <TeamCardCarousel />
      </RatingContainer>
      <Container>
        <Title>🙋‍♂️ 동행 구경하기</Title>
        <SubTitle>나의 동행을 찾아보세요!</SubTitle>
        <FindAccompany />
      </Container>
    </div>
  );
};
export default Main;

const DIV = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const ListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 20px;
  background: #eeeeee;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
`;
const RatingContainer = styled.div`
  background-color: #1f1f45;
  border-radius: 15px;
  padding: 10px 0;
  ${customMedia.lessThan('mobile')`
		padding: 5px 0;
	`}
`;

const BannerCarouselContainer = styled.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  ${customMedia.lessThan('mobile')`

	`}
`;

const P = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const Font = styled.div`
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #5c5c5c;
  font-size: 20px;
  font-weight: bold;
`;

const Mypage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  height: 30vh;
  background: #eeeeee;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
`;

const Title = styled.div`
  border: 1px;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
  ${customMedia.lessThan('mobile')`
		font-size: 20px;
    padding: 10px 0;
	`}
`;

const RatingTitle = styled.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  color: white;
  ${customMedia.lessThan('mobile')`
		font-size: 20px;
	`}
`;

const SubTitle = styled.div`
  font-size: 15px;
  margin-left: 20px;
  font-weight: bold;
  ${customMedia.lessThan('mobile')`
		margin-left: 0px;
	`}
`;

const RatingSubTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 30px;
  color: white;
`;
