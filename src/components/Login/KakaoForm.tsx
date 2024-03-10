import styled from 'styled-components';
import { Kakao_API_KEY, Kakao_JS_KEY, Kakao_REDIRECT_URL } from '@/config';
type Props = {};

const KakaoForm = (props: Props) => {
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Kakao_API_KEY}&redirect_uri=${Kakao_REDIRECT_URL}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <div onClick={handleLogin}>
      <KakaoLoginButton src='public/assets/ServiceLogo/kakao_login_medium_wide.png' />
    </div>
  );
};
const KakaoLoginButton = styled.img`
  width: 360px;
`;
export default KakaoForm;
