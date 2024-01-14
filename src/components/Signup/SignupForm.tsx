import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '@/lib/api';
import { InitialState, setUser } from '@/feature/authSlice';
interface IAuthForm {
  email: string;
  name: string;
  phone_number: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  birth_date: string;
  agree_terms_of_service: boolean;
  agree_terms_of_service1: boolean;
  agree_terms_of_service2: boolean;
  extraError?: string;
}

const SignupForm = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    control,
    getValues,
  } = useForm<IAuthForm>({ mode: 'onBlur' });

  const onValid = async (data: IAuthForm) => {
    const { agree_terms_of_service1, agree_terms_of_service2 } = getValues();
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm', // 에러 핸들링할 input요소 name
        { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
        { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
      );
    } else {
      try {
        let {
          email,
          password,
          name,
          phone_number,
          gender,
          birth_date,
          agree_terms_of_service,
        } = data;
        const date = new Date(birth_date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        if (agree_terms_of_service1 && agree_terms_of_service2) {
          agree_terms_of_service = true;
        } else {
          setError(
            'agree_terms_of_service',
            { message: '약관에 모두 동의해야합니다.' },
            { shouldFocus: true },
          );
        }
        const res = await signup(
          email,
          password,
          name,
          phone_number,
          gender,
          formattedDate,
          agree_terms_of_service,
        );
        navigate('/login');
      } catch (error) {
        console.error(error);
      }
    }
  };

  const autoHyphen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.value = target.value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, '');
  };

  const initialDate = new Date();

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <FormTitle>입력사항</FormTitle>
      <div>
        <Field>
          <Input
            {...register('email', {
              required: '이메일을 올바르게 입력해주세요.',
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: '이메일을 올바르게 입력해주세요.',
              },
            })}
            placeholder='이메일을 입력해주세요.'
          />
          <Warn>{errors?.email?.message}</Warn>
          <Input
            type='password'
            {...register('password', {
              required: '비밀번호를 입력해주세요.',
              minLength: {
                value: 8,
                message:
                  '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              },
              // pattern: {
              //   value:
              //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              //   message:
              //     '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              // },
            })}
            placeholder='비밀번호를 입력해주세요.'
          />
          <Warn>{errors?.password?.message}</Warn>

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
          <Warn>{errors?.passwordConfirm?.message}</Warn>
          <Input
            {...register('name', {
              required: '이름을 입력해주세요',
              minLength: {
                value: 3,
                message: '3글자 이상 입력해주세요.',
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{3,10}$/,
                message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
              },
            })}
            placeholder='이름을 입력해주세요.'
          />
          <Warn>{errors?.name?.message}</Warn>
          <PhoneNumberForm>
            <InputPhonenumber
              {...register('phone_number', {
                required: '휴대폰 번호를 올바르게 입력해주세요.',
                pattern: {
                  value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
                  message: '휴대폰 번호를 올바르게 입력해주세요.',
                },
              })}
              onInput={autoHyphen}
              placeholder='휴대폰 번호를 입력해주세요.'
            />
          </PhoneNumberForm>
          <Warn>{errors?.phone_number?.message}</Warn>
          <GenderWrap
            id='gender'
            {...register('gender', {
              required: true,
            })}
          >
            <optgroup label='gender'>
              <RadioWrap id='male' value='male'>
                남성
              </RadioWrap>
              <RadioWrap id='female' value='female'>
                여성
              </RadioWrap>
            </optgroup>
          </GenderWrap>
          <Title>생년월일</Title>
          <Controller
            name='birth_date'
            control={control}
            render={({ field }) => (
              <StyledDatePicker2
                locale={ko}
                selected={field.value ? new Date(field.value) : initialDate}
                onChange={(date) => field.onChange(date)}
                showYearDropdown
                dateFormatCalendar='MMMM'
                yearDropdownItemNumber={15}
                scrollableYearDropdown
              />
            )}
          />
        </Field>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            {...register('agree_terms_of_service1', {
              required: '약관을 동의해주세요',
            })}
          />
          [필수] 약관 1에 동의합니다.
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            {...register('agree_terms_of_service2', {
              required: '약관을 동의해주세요',
            })}
          />
          [필수] 약관 2에 동의합니다.
        </label>
      </div>
      <Warn>
        {errors?.agree_terms_of_service1?.message ||
          errors?.agree_terms_of_service2?.message}
      </Warn>

      <SubmitBtn type='submit'>가입하기</SubmitBtn>
      {errors?.extraError?.message && <p>{errors?.extraError?.message}</p>}
    </Form>
  );
};

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 20px;
`;
const FormTitle = styled.h1`
  font-weight: bold;
`;
const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background-color: #e7e7e7;
  border-radius: 17px;
  padding: 20px 17px;
`;
const Input = styled.input`
  width: 275px;
  height: 48px;
  border: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`;
const PhoneNumberForm = styled.div`
  width: 275px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));

  border-radius: 12px;
`;
const InputPhonenumber = styled.input`
  width: 210px;
  height: 48px;
  border: none;
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`;
const AuthBtn = styled.button`
  width: 51px;
  height: 24px;
  color: white;
  background-color: #898989;
  border-radius: 21px;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-right: 10px;
`;

const Title = styled.p`
  width: 100%;
  padding-left: 20px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  justify-content: left;
  align-items: left;
`;

const Warn = styled.p`
  width: 320px;
  font-size: 14px;
  color: red;
`;
const SubmitBtn = styled.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;

const GenderWrap = styled.select`
  margin-bottom: 3px;
  display: flex;
  gap: 15px;
`;
const RadioWrap = styled.option`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  input {
    display: none;
    font-weight:bold;
  }
  span {
    margin-left: 4px;
    margin-top: 1px;
  }
`;
const StyledDatePicker2 = styled(DatePicker)`
  width: 275px;
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  align-items: center;
  border: none;
  background-color: #d9d9d9;
  outline: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  
`;

const SelectedDateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`;

const InputDate = styled.div`
  width: 275px;
  background-color: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  padding: 3px;
  border: none;
  text-align: center;
`;
const InputDateDiv = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  text-align: center;
`;

export default SignupForm;
