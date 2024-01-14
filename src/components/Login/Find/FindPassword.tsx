import styled from 'styled-components';
import { useForm, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
type Props = {};
interface FormValue {
  newPassword: string;
  passwordConfirm: string;
}

const FindPassword = (props: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<FormValue>({ mode: 'onBlur' });
  const onValid = (data: FormValue) => {
    if (data.newPassword !== data.passwordConfirm) {
      setError(
        'passwordConfirm', // 에러 핸들링할 input요소 name
        { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
        { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
      );
    }
  };
  const navigate = useNavigate();
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <TextForm>
        <Title>비밀번호 변경</Title>
      </TextForm>
      <FormContainer>
        <InputForm>
          <Input
            type='password'
            {...register('newPassword', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
            })}
            placeholder='비밀번호를 입력해주세요.'
          />
        </InputForm>
        <Warn>{errors?.newPassword?.message}</Warn>
        <InputForm>
          <Input
            type='password'
            {...register('passwordConfirm', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
            })}
            placeholder='비밀번호를 한번 더 입력해주세요.'
          />
        </InputForm>
        <Warn>{errors?.passwordConfirm?.message}</Warn>

        <BtnContainer>
          <BackBtn
            onClick={() => {
              navigate('/emaillogin');
            }}
          >
            취소하기
          </BackBtn>
          <NextBtn type='submit'>변경하기</NextBtn>
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
  gap: 3px;
`;
const InputForm = styled.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  margin: 10px 0;
  border-radius: 12px;
  gap: 3px;
`;
const Warn = styled.p`
  width: 320px;
  font-size: 14px;
  color: red;
`;
const Input = styled.input`
  width: 319px;
  height: 30px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 12px;
  padding: 18px 16px;
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
const NextBtn = styled.button`
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
export default FindPassword;
