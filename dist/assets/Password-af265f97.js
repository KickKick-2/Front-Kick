import{s as n,m as g,j as o,a as e}from"./vendor-f20b940a.js";import{u as h}from"./react-hook-form-7a7e70d4.js";const w=p=>{var i,s;const{register:r,formState:{errors:t},handleSubmit:m,setError:u}=h({mode:"onBlur"}),x=d=>{d.newPassword!==d.passwordConfirm&&u("passwordConfirm",{message:"비밀번호가 일치하지 않습니다."},{shouldFocus:!0})},f=g();return o(b,{onSubmit:m(x),children:[e(y,{children:e(v,{children:"비밀번호 변경"})}),o(j,{children:[e(a,{children:e(l,{type:"password",...r("newPassword",{required:"비밀번호를 입력해주세요.",minLength:{value:8,message:"비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."},pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,message:"비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."}}),placeholder:"비밀번호를 입력해주세요."})}),e(c,{children:(i=t==null?void 0:t.newPassword)==null?void 0:i.message}),e(a,{children:e(l,{type:"password",...r("passwordConfirm",{required:"비밀번호를 입력해주세요.",minLength:{value:8,message:"비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."}}),placeholder:"비밀번호를 한번 더 입력해주세요."})}),e(c,{children:(s=t==null?void 0:t.passwordConfirm)==null?void 0:s.message}),o(C,{children:[e(F,{onClick:()=>{f("/emaillogin")},children:"취소하기"}),e(k,{type:"submit",children:"변경하기"})]})]})]})},b=n.form`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,y=n.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`,v=n.p`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`,j=n.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 3px;
`,a=n.div`
  width: 319px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  margin: 10px 0;
  border-radius: 12px;
  gap: 3px;
`,c=n.p`
  width: 320px;
  font-size: 14px;
  color: red;
`,l=n.input`
  width: 319px;
  height: 30px;
  background-color: #d9d9d9;
  border: none;
  border-radius: 12px;
  padding: 18px 16px;
`,C=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,F=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: #898989;
  font-size: 10px;
`,k=n.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 148px;
  height: 48px;
  border-radius: 12px;
  border: none;
  background-color: #898989;
  font-size: 10px;
`,P=p=>e(w,{});export{P as default};
