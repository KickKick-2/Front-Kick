import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "@/lib/api";
import { InitialState, setUser } from "@/feature/authSlice";
import * as Signup from "../../styles/SignUp";
import { yearsArray, monthsArray, daysArray } from "@/util/birthDate";

interface IAuthForm {
  email: string;
  name: string;
  phone_number: string;
  password: string;
  passwordConfirm: string;
  gender: string;
  birth_year: string;
  birth_month: string;
  birth_day: string;
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
  } = useForm<IAuthForm>({ mode: "onBlur" });

  const onValid = async (data: IAuthForm) => {
    const { agree_terms_of_service1, agree_terms_of_service2 } = getValues();
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm", // 에러 핸들링할 input요소 name
        { message: "비밀번호가 일치하지 않습니다." }, // 에러 메세지
        { shouldFocus: true } // 에러가 발생한 input으로 focus 이동
      );
    } else {
      try {
        let {
          email,
          password,
          name,
          phone_number,
          gender,
          birth_year,
          birth_month,
          birth_day,
          agree_terms_of_service,
        } = data;

        const formattedDate = `${birth_year}-${birth_month}-${birth_day}`;
        if (agree_terms_of_service1 && agree_terms_of_service2) {
          agree_terms_of_service = true;
        } else {
          setError(
            "agree_terms_of_service",
            { message: "약관에 모두 동의해야합니다." },
            { shouldFocus: true }
          );
        }
        const res = await signup(
          email,
          password,
          name,
          phone_number,
          gender,
          formattedDate,
          agree_terms_of_service
        );
        console.log(
          email,
          password,
          name,
          phone_number,
          gender,
          formattedDate,
          agree_terms_of_service
        );

        // navigate("/login");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const autoHyphen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    target.value = target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      .replace(/(\-{1,2})$/g, "");
  };

  const initialDate = new Date();

  return (
    <Signup.Form onSubmit={handleSubmit(onValid)}>
      <Signup.FormTitle>입력사항</Signup.FormTitle>
      <div>
        <Signup.Field>
          <Signup.Input
            {...register("email", {
              required: "이메일을 올바르게 입력해주세요.",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "이메일을 올바르게 입력해주세요.",
              },
            })}
            placeholder="이메일을 입력해주세요."
          />
          <Signup.Warn>{errors?.email?.message}</Signup.Warn>
          <Signup.Input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message:
                  "비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.",
              },
              // pattern: {
              //   value:
              //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              //   message:
              //     '비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.',
              // },
            })}
            placeholder="비밀번호를 입력해주세요."
          />
          <Signup.Warn>{errors?.password?.message}</Signup.Warn>

          <Signup.Input
            type="password"
            {...register("passwordConfirm", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message:
                  "비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다.",
              },
            })}
            placeholder="비밀번호를 한번 더 입력해주세요."
          />
          <Signup.Warn>{errors?.passwordConfirm?.message}</Signup.Warn>
          <Signup.Input
            {...register("name", {
              required: "이름을 입력해주세요",
              minLength: {
                value: 3,
                message: "3글자 이상 입력해주세요.",
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{3,10}$/,
                message: "가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자",
              },
            })}
            placeholder="이름을 입력해주세요."
          />
          <Signup.Warn>{errors?.name?.message}</Signup.Warn>
          <Signup.PhoneNumberForm>
            <Signup.InputPhonenumber
              {...register("phone_number", {
                required: "휴대폰 번호를 올바르게 입력해주세요.",
                pattern: {
                  value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
                  message: "휴대폰 번호를 올바르게 입력해주세요.",
                },
              })}
              onInput={autoHyphen}
              placeholder="휴대폰 번호를 입력해주세요."
            />
          </Signup.PhoneNumberForm>
          <Signup.Warn>{errors?.phone_number?.message}</Signup.Warn>
          <Signup.GenderList>
            <Signup.GenderItem>
              <input
                type="radio"
                id="gender1"
                value="male"
                {...register("gender", { required: true })}
              />
              <label htmlFor="gender1">남성</label>
            </Signup.GenderItem>
            <Signup.GenderItem>
              <input
                type="radio"
                id="gender2"
                value="female"
                {...register("gender", { required: true })}
              />
              <label htmlFor="gender2">여성</label>
            </Signup.GenderItem>
          </Signup.GenderList>
          <Signup.Title>생년월일</Signup.Title>
          <Signup.SelectedDateBox>
            <Signup.Wrap {...register("birth_year", { required: true })}>
              {yearsArray.map((Y) => {
                return (
                  <Signup.RadioWrap value={Y} key={Y}>
                    {Y}
                  </Signup.RadioWrap>
                );
              })}
            </Signup.Wrap>
            <Signup.Wrap {...register("birth_month")}>
              {monthsArray.map((Y) => {
                return (
                  <Signup.RadioWrap value={Y} key={Y}>
                    {Y}
                  </Signup.RadioWrap>
                );
              })}
            </Signup.Wrap>
            <Signup.Wrap {...register("birth_day")}>
              {daysArray.map((Y) => {
                return (
                  <Signup.RadioWrap value={Y} key={Y}>
                    {Y}
                  </Signup.RadioWrap>
                );
              })}
            </Signup.Wrap>
          </Signup.SelectedDateBox>
        </Signup.Field>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            {...register("agree_terms_of_service1", {
              required: "약관을 동의해주세요",
            })}
          />
          [필수] 약관 1에 동의합니다.
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            {...register("agree_terms_of_service2", {
              required: "약관을 동의해주세요",
            })}
          />
          [필수] 약관 2에 동의합니다.
        </label>
      </div>
      <Signup.Warn>
        {errors?.agree_terms_of_service1?.message ||
          errors?.agree_terms_of_service2?.message}
      </Signup.Warn>

      <Signup.SubmitBtn type="submit">가입하기</Signup.SubmitBtn>
      {errors?.extraError?.message && <p>{errors?.extraError?.message}</p>}
    </Signup.Form>
  );
};

export default SignupForm;
