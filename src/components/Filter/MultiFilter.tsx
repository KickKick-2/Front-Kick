import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCookie } from '@/util/cookieFn';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { BASE_URL } from '@/config';
import { AccompanyPostReal } from '@/lib/interface';
import AccompanyBox from '../MyAccompany/AccompanyBox';
import { customMedia } from '@/util/GlobalStyle';
const token = getCookie('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
type Props = {};

const MultiFilter = (props: Props) => {
  const { id, isAuthenticated } = useSelector((state: RootState) => state.auth);

  const [cardList, setCardList] = useState<[]>();
  const navigate = useNavigate();
  const { search } = useLocation();

  const filterDom = useRef<HTMLUListElement | null>(null);
  const [nowRecruitState, setnowRecruitState] = useState<number>();
  const [isContentsShowed, setIsContentsShowed] = useState(false);
  const [clickedCategory, setClickedCategory] = useState(Number);
  const [isSelectedTeam, setisSelectedTeam] = useState<string[]>([]);
  const [clickedCheckList, setClickedCheckList] = useState<
    { id: number; content: string; sort_type: string }[]
  >([]);
  const appendTeam = (team: string) => {
    const isTeamSelected = isSelectedTeam.includes(team);
    if (isTeamSelected) {
      setisSelectedTeam(isSelectedTeam.filter((item) => item !== team));
    } else {
      setisSelectedTeam([...isSelectedTeam, team]);
    }
  };
  const handleCheckList = (id: number, content: string, sort_type: string) => {
    const index = clickedCheckList.findIndex(
      (item) => item.content === content,
    );
    if (index !== -1) {
      // 이미 있으면 해당 항목을 제거
      setClickedCheckList((prevCheckList) =>
        prevCheckList.filter((item, idx) => idx !== index),
      );
    } else {
      // 없으면 새 항목을 추가
      setClickedCheckList((prevCheckList) => [
        ...prevCheckList,
        { id, content, sort_type },
      ]);
    }
  };
  useOutsideClick(filterDom, () => setIsContentsShowed(false));
  const getCardListData = useCallback(async () => {
    if (clickedCheckList.length === 0) {
      const res = await fetch(`${BASE_URL}/api/recruitments-list/`, {
        method: 'GET',
      });
      const data = await res.json();
      setCardList(data);
    } else {
      const res = await fetch(`${BASE_URL}/api/recruitments-list/${search}`, {
        method: 'GET',
      });
      const data = await res.json();
      setCardList(data);
    }
  }, [search]);

  useEffect(() => {
    getCardListData();
  }, [getCardListData]);

  const makeQueryString = () => {
    const queryString = clickedCheckList
      .map(({ id, sort_type }) => {
        if (sort_type === 'home_team') {
          return `team_id=${id + 1}`;
        }
        if (sort_type === 'recruit') {
          return `now_status=${nowRecruitState}`;
        }
      })
      .filter((item) => item !== undefined)
      .map((item, index) => {
        if (index === 0) {
          return item;
        }
        return '&' + item;
      })
      .join('');

    navigate(`?${queryString}`);
  };
  return (
    <Wrapper>
      <FilterList ref={filterDom}>
        {FILTER_CATEGORYS.map(({ sort_type, title, contents }, idx) => {
          if (sort_type === 'home_team') {
            return (
              <Filter key={idx}>
                <Title
                  className={clickedCategory === idx ? 'show' : 'hide'}
                  onClick={() => {
                    setClickedCategory(idx);
                    setIsContentsShowed(true);
                  }}
                >
                  {title}
                </Title>
                <TeamContents
                  className={
                    clickedCategory === idx && isContentsShowed
                      ? 'show'
                      : 'hide'
                  }
                >
                  {contents.map((content, idx) => (
                    <TeamContent
                      key={idx}
                      onClick={() =>
                        handleCheckList(idx, content[1], sort_type)
                      }
                    >
                      <TeamLabel
                        isSelected={isSelectedTeam.includes(content[1])}
                        onClick={() => appendTeam(content[1])}
                      >
                        <TeamLogo src={content[0]} alt='팀로고' />
                      </TeamLabel>
                    </TeamContent>
                  ))}
                  <Btns>
                    <Button
                      onClick={() => {
                        makeQueryString();
                        setIsContentsShowed(false);
                      }}
                    >
                      필터 적용
                    </Button>
                  </Btns>
                </TeamContents>
              </Filter>
            );
          } else if (sort_type === 'recruit') {
            return (
              <Filter key={idx}>
                <Title
                  className={clickedCategory === idx ? 'show' : 'hide'}
                  onClick={() => {
                    setClickedCategory(idx);
                    setIsContentsShowed(true);
                  }}
                >
                  {title}
                </Title>
                <Contents
                  className={
                    clickedCategory === idx && isContentsShowed
                      ? 'show'
                      : 'hide'
                  }
                >
                  {contents.map((content, idx) => (
                    <Content
                      key={idx}
                      onClick={() => {
                        setnowRecruitState(parseInt(content[1]));
                        handleCheckList(idx, content[1], sort_type);
                      }}
                    >
                      <Label>
                        <input type='radio' name='recruits' />
                        {content[0]}
                      </Label>
                    </Content>
                  ))}
                  <Btns>
                    <Button
                      onClick={() => {
                        makeQueryString();
                        setIsContentsShowed(false);
                      }}
                    >
                      필터 적용
                    </Button>
                  </Btns>
                </Contents>
              </Filter>
            );
          }
        })}
      </FilterList>
      <ListContainer>
        {cardList?.map((post: AccompanyPostReal, idx) => (
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
    </Wrapper>
  );
};
const FILTER_CATEGORYS = [
  {
    sort_type: 'home_team',
    title: '구단별',
    contents: [
      [
        'https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg',
        '강원FC',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg',
        '광주FC',
      ],
      ['https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg', '대구FC'],
      [
        'https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg',
        '대전하나시티즌',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg',
        '수원삼성블루윙즈',
      ],
      ['https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg', 'FC서울'],
      [
        'https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg',
        '포항스틸러스',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/jeju_united.svg',
        '제주유나이티드',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/incheon_united.svg',
        '인천유나이티드',
      ],
      [
        'https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg',
        '울산현대',
      ],
      ['https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg', '수원FC'],

      [
        'https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg',
        '전북현대모터스',
      ],
    ],
  },
  {
    sort_type: 'recruit',
    title: '모집 여부',
    contents: [
      ['모집중', '0'],
      ['모집완료', '1'],
      ['모집종료', '2'],
    ],
  },
];
const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void,
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FilterList = styled.ul`
  display: flex;
`;
const Filter = styled.li`
  position: relative;
`;
const Title = styled.div`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &.show {
    background-color: #1f1f45;
    color: white;
  }
`;
const Contents = styled.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  width: 240px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: block;
  }
`;

const TeamContents = styled.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  /* width: 100%; */
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3개의 열로 그리드 설정 */
    grid-gap: 5px; /* 열 사이의 간격 설정 */
    justify-content: flex-start;
    align-items: center;
  }
`;
const Content = styled.div`
  margin: 10px 0;
  cursor: pointer;
`;
const TeamContent = styled.div`
  width: 100px;
  /* margin: 5px 0; */
  /* padding: 5px 5px; */
  cursor: pointer;
`;
const TeamLabel = styled.label<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* border-bottom: 1px solid #dbdbdb; */
  padding: 10px 5px;
  border-radius: 12px;
  background-color: ${(props) => (props.isSelected ? '#ffcd40' : 'white')};
`;
const Label = styled.label`
  display: flex;
  gap: 10px;
`;
const TeamLogo = styled.img`
  height: 40px;
  pointer-events: none;
`;
const Btns = styled.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`;

const Button = styled.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;

const ListContainer = styled.div`
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
  ${customMedia.lessThan('mobile')`
      /* 모바일 스타일 설정 */
      grid-template-columns: repeat(1, 1fr);
    `}
`;

export default MultiFilter;
