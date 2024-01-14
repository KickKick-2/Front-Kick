import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { login } from '@/lib/api';
import { setCookie } from '@/util/cookieFn';
import { useDispatch, useSelector } from 'react-redux';
import { autoCheck, setUser } from '@/feature/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormValue {
  email: string;
  password: string;
}

const LoginForm = (props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state: autoCheck) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isLogin) {
      navigate('/');
      location.reload();
    }
  }, [isLogin]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValue>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      const { email, password } = data;
      const res = await login(email, password);
      if (res !== undefined) {
        if ('user' in res) {
          dispatch(
            setUser({
              id: res.user.id,
              email: res?.user?.email,
              name: res?.user?.name,
              token: res?.token?.access,
              isAuthenticated: true,
            }),
          );
          if (res.token.access) {
            toast.success('로그인 성공!');
            setCookie('token', `${res.token.access}`, {
              path: '/',
            });
            setCookie('refresh', `${res.token.refresh}`, {
              path: '/',
            });
          }
        }
      } else {
        console.error('res is undefined');
        toast.error('로그인 실패!');
      }
    } catch (error) {
      toast.error('로그인 실패!');
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DivForm>
        <Input
          id='email'
          type='text'
          placeholder='이메일 또는 아이디'
          {...register('email', {
            required: '이메일은 필수 입력입니다.',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
        />
        {errors.email && <Small role='alert'>{errors.email.message}</Small>}
        <Input
          id='password'
          type='password'
          placeholder='비밀번호'
          {...register('password', {
            required: '비밀번호는 필수 입력입니다.',
            minLength: {
              value: 7,
              message: '7자리 이상 비밀번호를 입력하세요.',
            },
            validate: {
              check: (val) => {
                if (getValues('password') !== val) {
                  return '비밀번호가 일치하지 않습니다.';
                }
              },
            },
          })}
        />
        {errors.password && (
          <Small role='alert'>{errors.password.message}</Small>
        )}
        <TextBox>
          <Find to='/find/id'>이메일 찾기</Find>
          <Find to='/find/password'>비밀번호 찾기</Find>
          <Signup to='/signup'>회원가입</Signup>
        </TextBox>
        <Button type='submit'>로그인</Button>
      </DivForm>
    </Form>
  );
};

const Form = styled.form`
  margin-top: 100px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;
const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;
const Input = styled.input`
  width: 339px;
  height: 55px;
  border: 1px solid #818181;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
`;
const TextBox = styled.div`
  width: 330px;
  justify-content: space-between;
  padding: 0;
  display: flex;
  gap: 5px;
`;
const Find = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: black;
`;
const Signup = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  color: black;
`;
const Button = styled.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin: 40px 0;
`;
const Small = styled.small`
  color: red;
`;
export default LoginForm;
