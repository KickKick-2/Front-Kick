import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Restaurant from './Restaurant';
import Spots from './Spots';
import Hotel from './Hotel';

type Props = {};
interface TabProps {
  active: boolean;
}

const tabs = [
  { index: 0, name: '🍽️ 맛집', content: <Restaurant /> },
  { index: 1, name: '🏝️ 관광지', content: <Spots /> },
  { index: 2, name: '🛏️ 숙소', content: <Hotel /> },
];
const CourseTab = (props: Props) => {
  const navigate = useNavigate();
  const [tab, settab] = useState(0);
  const [Click, setClick] = useState(0);
  const handleTab = (state: number) => {
    settab(state);
  };
  const handleClick = (tabIndex: number) => {
    setClick(tabIndex);
  };
  return (
    <div>
      <Header>
        <AddBtn onClick={() => navigate('/createroom')}>코스 추가하기</AddBtn>
        <TabContainer>
          {tabs.map((tab) => (
            <TabTitle
              key={tab.index}
              active={Click === tab.index}
              onClick={() => (handleTab(tab.index), handleClick(tab.index))}
            >
              {tab.name}
            </TabTitle>
          ))}
        </TabContainer>
      </Header>
      <div>{tabs[tab].content}</div>
    </div>
  );
};
const Header = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const AddBtn = styled.div`
  width: 326px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14.163px;
  border: 0.472px solid #5956ff;
  background: #fff;
  box-shadow: 0px 1.8884425163269043px 1.8884425163269043px 0px
    rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TabContainer = styled.div`
  margin-top: 20px;

  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const TabTitle = styled.p<TabProps>`
  color: ${(props) => (props.active ? 'black' : 'rgba(0, 0, 0, 0.50)')};
`;
export default CourseTab;
