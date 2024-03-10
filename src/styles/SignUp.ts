import styled from "styled-components";

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 20px;
`;
export const FormTitle = styled.h1`
  font-weight: bold;
`;
export const Field = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background-color: #e7e7e7;
  border-radius: 17px;
  padding: 20px 17px;
`;
export const Input = styled.input`
  width: 275px;
  height: 48px;
  border: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`;
export const PhoneNumberForm = styled.div`
  width: 275px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));

  border-radius: 12px;
`;
export const InputPhonenumber = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`;
export const AuthBtn = styled.button`
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

export const Title = styled.p`
  width: 100%;
  padding-left: 20px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  justify-content: left;
  align-items: left;
`;

export const Warn = styled.p`
  width: 320px;
  font-size: 14px;
  color: red;
`;
export const SubmitBtn = styled.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`;

export const GenderList = styled.ul`
  list-style: none;
  width: 70%;
  display: flex;
`;
export const GenderItem = styled.li`
  width: 50%;
  input {
    border-radius: 0;
    border: none;
    background: 0 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
    text-decoration: none;
    cursor: pointer;
    -webkit-text-size-adjust: none;
  }
  input:checked + label {
    z-index: 1;
    border-color: #1f1f45;
    font-weight: 500;
    color: #1f1f45;
  }
  label {
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 6px 0;
    border-radius: inherit;
    border: 1px solid #c6c6c6;
    font-size: 13px;
    line-height: 18px;
    color: #929294;
    text-align: center;
    cursor: pointer;
  }
`;
export const Wrap = styled.select`
  margin-bottom: 3px;
  width: 60px;
  height: 30px;
  display: flex;
  gap: 15px;
`;
export const RadioWrap = styled.option`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  input {
    display: none;
    font-weight: bold;
  }
  span {
    margin-left: 4px;
    margin-top: 1px;
  }
`;

export const SelectedDateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`;
