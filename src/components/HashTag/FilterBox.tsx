import React, { ChangeEventHandler, useState } from 'react';
import { temp } from './data';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setDetail2 } from '@/feature/SummarySlice';
import { RootState } from '@/app/store';

export interface PinkType {
  idx: number;
  name: string;
  origName: string;
}

interface HoverEvent {
  hover: boolean;
}

interface IArrowBox {
  filterState: boolean;
}

const FilterBox = () => {
  const [filterState, setFilterState] = useState(true);
  const [resultList, setResultList] = useState([...temp]);
  let [pinkList, setPinktList] = useState<PinkType[]>([]);
  const [hoverState, setHoverState] = useState<number | undefined>();
  const dispatch = useDispatch();
  const { img, content, title, tag } = useSelector(
    (state: RootState) => state.summary,
  );

  const searchBoxOpen = () => {
    setResultList([...temp]);
    setFilterState((prev) => !prev);
  };

  const replaceAll = (str: string, searchStr: string, replaceStr: string) => {
    return str.split(searchStr).join(replaceStr);
  };

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const tx = e.target.value;
    const boldChange = temp.map((obj) => {
      const tempObj = { ...obj };
      if (tempObj.name.indexOf(tx) > -1) {
        tempObj.name = replaceAll(
          tempObj.name,
          tx,
          `<b style='color:black'>${tx}</b>`,
        );
      }
      return tempObj;
    });
    const filterList = boldChange.filter((obj) => obj.name.indexOf(tx) > -1);
    setResultList([...filterList]);
  };

  const pinkHandler = (obj: PinkType) => () => {
    searchBoxOpen();
    const isDuplicate = pinkList.some((item) => item.idx === obj.idx);

    if (!isDuplicate) {
      const set = new Set([...pinkList, obj]);
      const newPinkList = [...pinkList, obj];
      setPinktList([...Array.from(set)]);
      dispatch(
        setDetail2({
          tag: newPinkList.map((item) => item),
          img: img,
          content: content,
          title: title,
        }),
      );
    }
  };

  const removeTag = (idx: number) => {
    const removeList = pinkList.filter((obj) => obj.idx !== idx);
    setPinktList([...removeList]);
    dispatch(
      setDetail2({
        tag: removeList.map((item) => item),
        img: img,
        content: content,
        title: title,
      }),
    );
  };
  if (tag.length !== 0) {
    pinkList = [...tag];
  }

  return (
    <NormalBox>
      <MainBox onClick={searchBoxOpen}>
        <FilterBar>
          <BoldTypo>태그를 선택해주세요.</BoldTypo>
          <ArrowBox filterState={filterState} />
        </FilterBar>
      </MainBox>
      {!filterState ? (
        <SearchBox>
          <SearchBar onChange={searchHandler} placeholder='태그 검색하기' />
          <SearchIconSet />
          <ResultBox>
            {resultList?.map((obj) => {
              return (
                <ResultTypo
                  onClick={pinkHandler(obj)}
                  key={obj.idx}
                  dangerouslySetInnerHTML={{ __html: obj.name }}
                />
              );
            })}
          </ResultBox>
        </SearchBox>
      ) : (
        <PickBox>
          {pinkList?.map((obj) => {
            return (
              <PickTag
                hover={obj.idx === hoverState}
                onMouseOver={() => {
                  setHoverState(obj.idx);
                }}
                onMouseOut={() => {
                  setHoverState(undefined);
                }}
                onClick={() => {
                  removeTag(obj.idx);
                }}
                key={obj.idx}
              >
                {obj.origName}
              </PickTag>
            );
          })}
        </PickBox>
      )}
    </NormalBox>
  );
};

export default FilterBox;

const NormalBox = styled.div`
  width:100%;
`;

const MainBox = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  display: inline-block;
  &:last-child {
    padding-bottom: 10px;
  }
`;

const FilterBar = styled.div`
  cursor: pointer;
`;

const BoldTypo = styled.div`
  font-size: 15px;
  float: left;
  color: #8e8e8e;
`;

const ArrowBox = styled.div<IArrowBox>`
  width: 25px;
  height: 15px;
  float: right;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SearchIconSet = styled.div`
  color: #1f1f45;
  font-size: 29px;
  position: absolute;
`;

const ResultBox = styled.div`
  width: 300px;
  height: 165px;
  padding: 5px;
  margin-right: 5px;
  overflow-y: auto;
`;

const PickBox = styled.div`
  width: 300px;
  margin-top: 10px;
`;

const SearchBar = styled.input`
  width: 280px;
  height: 30px;
  border-radius: 5px;
  padding: 3px;
  border: 1px solid #3f3f3f;
  margin-right: 5px;
`;

const SearchBox = styled.div`
  width: 300px;
  height: 215px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

const PickTag = styled.div<HoverEvent>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  position: relative;
  background-color: #1f1f45;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 6px;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: 500;
  height: 30px;
  ${() =>
    `
    &:after {
      position: absolute;
      right: -5px;
      top: -7px;
      content: '✖︎';
      font-size: 10px;
      transition: all 0.2s ease;
      color: black;
    }
    `}
`;

const ResultTypo = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1f1f45;
    color: black;
  }
`;
