import { AccompanyPostReal } from '@/lib/interface';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import AccompanyBox from './AccompanyBox';
import { getCookie } from '@/util/cookieFn';
import { BASE_URL } from '@/config';
import { useNavigate } from 'react-router-dom';
const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
type Props = {};

const ApplyForMe = (props: Props) => {
  const navigate = useNavigate();
  const [accompanyList, setaccompanyList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${BASE_URL}/api/my-applied-recruitment`, {
          method: 'get',
          headers: headers,
        });
        const data = await response.json();
        setaccompanyList(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <Wrap>
      <Container>
        {accompanyList?.map((post: AccompanyPostReal, idx) => (
          <div
            key={post.recruitmentBoardId}
            onClick={() =>
              navigate(`/findaccompany/detail/${post.recruitmentBoardId}`)
            }
          >
            <AccompanyBox post={post} />
          </div>
        ))}
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100%;
`;
const Container = styled.div`
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`;
export default ApplyForMe;
