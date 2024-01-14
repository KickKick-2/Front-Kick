import { useEffect } from 'react';
import { Kakao_API_KEY, Kakao_REDIRECT_URL } from '@/config';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '@/feature/authSlice';
import { useNavigate } from 'react-router-dom';
type Props = {};

const KakaoCallBack = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grantType = 'authorization_code';
    const REST_API_KEY = `${Kakao_API_KEY}`;
    const REDIRECT_URL = `${Kakao_REDIRECT_URL}`;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_url=${REDIRECT_URL}&code=${code}`,
        {},
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset-utf-8',
          },
        },
      )
      .then((res: any) => {
        const { access_token } = res.data;
        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-type': 'application/x-www-formencoded;charset=utf-8',
              },
            },
          )
          .then((res: any) => {
            console.log(res);
            dispatch(
              setUser({
                token: access_token,
                email: res.data.kakao_account.email,
                name: res.data.kakao_account.profile.nickname,
                profileImg: res.data.properties.thumbnail_image,
              }),
            );
          });
      })
      .catch((Error: any) => {
        console.error(Error);
      });
    navigate('/home');
  }, []);
  return <></>;
};

export default KakaoCallBack;
