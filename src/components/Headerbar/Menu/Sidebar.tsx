import { useRef, useEffect, useState, useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';
import MyInfoBox from '../../MyInfo/MyInfoBox';
import ScheduledAccompany from '../../ScheduledAccompany/ScheduledAccompany';
import { useDispatch, useSelector } from 'react-redux';
import { autoCheck, logOutAction } from '@/feature/authSlice';
import axios from 'axios';
import { RootState } from '@/app/store';
import { BASE_URL } from '@/config';
import CheeringTeam from './CheeringTeam';
import { customMedia } from '@/util/GlobalStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { logout } from '@/lib/api';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: any }) {
  const outside = useRef<any>();
  const [profileData, setprofileData] = useState() as any;
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);
  const { email,passwords } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });
  // const getUserProfile = useCallback(async () => {
  //   const res = await fetch(`${BASE_URL}/api/user/profile/?id=${id}`, {
  //     method: 'get',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   const data = await res.json();
  //   setprofileData(data);
  // }, []);
  // useEffect(() => {
  //   getUserProfile();
  // }, [getUserProfile]);

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  // const KakaoLogout = () => {
  //   axios
  //     .post(
  //       `https://kapi.kakao.com/v1/user/logout`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           'Content-type': 'application/x-www-form-urlencoded',
  //         },
  //       },
  //     )
  //     .then((res: any) => {
  //       console.log(res);
  //     })
  //     .catch((Error: any) => {
  //       console.error(Error);
  //     });
  // };
  const toggleSide = () => {
    setIsOpen(false);
  };
  // console.log(profileData);
  const handleLogout = async() => {
    const resp = await logout(email, passwords)
    alert(resp.message)
  }
  return isLogin ? (
    <>
      {isOpen && <Backdrop onClick={toggleSide} />}

      <SideBarWrap id='sidebar' ref={outside} className={isOpen ? 'open' : ''}>
        <AiOutlineClose
          size='30'
          color='#ffffff'
          alt='close'
          onClick={toggleSide}
          onKeyDown={toggleSide}
        />

        <ul>
          <DIV>
            <Menu>내 정보</Menu>
            <MyInfoBox
              toggleSide={toggleSide}
              profileImg={profileData?.profile?.profileImg}
              name={profileData?.profile?.name}
              nickname={profileData?.profile?.nickname}
              email={profileData?.profile?.email}
            />
          </DIV>

          <DIV>
            <Menu>나의 응원팀</Menu>
            <CheeringTeam
              toggleSide={toggleSide}
              team_id={profileData?.profile?.cheering_team_id}
              follower={profileData?.cheering_team?.follower}
              logo_img_url={`https://kickstorage.blob.core.windows.net${profileData?.cheering_team?.logo_img_url}`}
              original_team_name={
                profileData?.cheering_team?.original_team_name
              }
              recruit_end={profileData?.cheering_team?.recruit_end}
              recruit_ing={profileData?.cheering_team?.recruit_ing}
              team_color_main={profileData?.cheering_team?.team_color_main}
              team_color_sub={profileData?.cheering_team?.team_color_sub}
            />
          </DIV>

          <Logout>
            <LogoutBtn
              onClick={() => {
                handleLogout();
                dispatch(logOutAction());
                toggleSide();
                toast.info('로그아웃되었습니다.');
              }}
            >
              로그아웃
            </LogoutBtn>
          </Logout>
        </ul>
      </SideBarWrap>
    </>
  ) : (
    <SideBarWrap id='sidebar' ref={outside} className={isOpen ? 'open' : ''}>
      <AiOutlineClose
        size='30'
        color='#ffffff'
        alt='close'
        onClick={toggleSide}
        onKeyDown={toggleSide}
      />

      <ul>
        <DIV onClick={() => toggleSide()}>
          <Menu>내 정보</Menu>
          <MyInfoBox toggleSide={toggleSide}/>
        </DIV>
      </ul>
    </SideBarWrap>
  );
}

export default Sidebar;

const SideBarWrap = styled.div`
  z-index: 5000;
  padding: 10px;
  background-color: #1f1f45;
  height: 100%;
  width: 25%;
  right: -25%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }

  ${customMedia.lessThan('tablet')`
    width:35%;
    right:-35%;
	`}

  ${customMedia.lessThan('mobile')`
    width:85%;
    right:-85%;
	`}
`;

const Menu = styled.li`
  margin: 15px 0px;
  font-size: 1rem;
  color: #ffffff;
  ${customMedia.lessThan('mobile')`
    margin: 10px 0px;
	`}
`;


const DIV = styled.div`
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 12px;
`;
const Logout = styled.div`
  width: 85%;
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const LogoutBtn = styled.div`
  width: 80px;
  padding: 10px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  border-radius: 12px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경색과 투명도 조절 */
  z-index: 4; /* 배경 레이어가 사이드바 레이어 위에 나타나도록 설정 */
`;
