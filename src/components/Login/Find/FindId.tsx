import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
type Props = {};

const FindId = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Form>
      <TextForm>
        <Title>이메일 찾기</Title>
      </TextForm>
      <FormContainer>
        <InputForm>
          <Input placeholder='휴대폰 번호' />
          <Button>인증하기</Button>
        </InputForm>
        <InputForm>
          <Input type='number' placeholder='인증번호입력' />
          <Button>01:00</Button>
        </InputForm>
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
              navigate('/find/useremail');
            }}
          >
            인증하기
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
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  margin-bottom: 10px;
  border-radius: 12px;
  gap: 3px;
`;

const Input = styled.input`
  width: 240px;
  height: 30px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 12px;
  padding: 18px 16px;
`;
const Button = styled.button`
  background-color: #5c5c5c;
  width: 60px;
  height: 30px;
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 10px;
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
export default FindId;
