import { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccompanyBox from '../MyAccompany/AccompanyBox';
import { AccompanyPostReal } from '@/lib/interface';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { getCookie } from '@/util/cookieFn';
import { BASE_URL } from '@/config';
const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
type Props = {};

const AccompanyList = (props: Props) => {
  const navigate = useNavigate();
  const id = useSelector((state: RootState) => state.auth.id);
  const [accompanyList, setaccompanyList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}/api/recruitments-list/`, {
          method: 'get',
        });
        const data = await res.json();
        setaccompanyList(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <ListContainer>
      {accompanyList.map((post: AccompanyPostReal) => (
        <div
          key={post.recruitmentBoardId}
          onClick={() =>
            navigate(`/findaccompany/detail/${post.recruitmentBoardId}`)
          }
        >
          <AccompanyBox post={post} />
        </div>
      ))}
    </ListContainer>
  );
};
const ListContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`;
export default AccompanyList;
