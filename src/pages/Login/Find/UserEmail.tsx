import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
type Props = {};

const UserEmail = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Form>
      <TextForm>
        <Title>이메일 확인</Title>
      </TextForm>
      <FormContainer>
        <InputForm>{'footballjoa123@naver.com'}</InputForm>
        <BtnContainer>
          <BackBtn
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </BackBtn>
          <NextBtn
            onClick={() => {
              navigate('/find/password');
            }}
          >
            비밀번호 변경
          </NextBtn>
        </BtnContainer>
      </FormContainer>
    </Form>
  );
};
const Form = styled.form`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextForm = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const InputForm = styled.div`
  width: 319px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid black;
  padding: 16px 10px;
  margin-bottom: 10px;
  border-radius: 12px;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const BackBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: #898989;
  font-size: 10px;
`;
const NextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: #898989;
  font-size: 10px;
`;
export default UserEmail;
