import{s as o,u as j,m as z,k as A,e as L,a as t,j as s,Y as g,Q as r}from"./vendor-f20b940a.js";import{u as F}from"./react-hook-form-7a7e70d4.js";import{l as Z}from"./shared/EmailLogin/Signup-759a9594.js";import{w as $,x as u}from"./common-01e7a8b8.js";import{L as q}from"./shared/EmailLogin/Login-0162286c.js";const B=w=>{const b=j(),y=z(),a=A(i=>i.auth.isAuthenticated);L.useEffect(()=>{a&&(y("/"),location.reload())},[a]);const{register:c,handleSubmit:k,formState:{errors:n},getValues:v}=F({mode:"onSubmit",reValidateMode:"onChange"});return t(C,{onSubmit:k(async i=>{var d,l,p;try{const{email:m,password:S}=i,e=await Z(m,S);e!==void 0?"user"in e&&(b($({id:e.user.id,email:(d=e==null?void 0:e.user)==null?void 0:d.email,name:(l=e==null?void 0:e.user)==null?void 0:l.name,token:(p=e==null?void 0:e.token)==null?void 0:p.access,isAuthenticated:!0})),e.token.access&&(r.success("로그인 성공!"),u("token",`${e.token.access}`,{path:"/"}),u("refresh",`${e.token.refresh}`,{path:"/"}))):(console.error("res is undefined"),r.error("로그인 실패!"))}catch{r.error("로그인 실패!")}}),children:s(D,{children:[t(f,{id:"email",type:"text",placeholder:"이메일 또는 아이디",...c("email",{required:"이메일은 필수 입력입니다.",pattern:{value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,message:"이메일 형식에 맞지 않습니다."}})}),n.email&&t(h,{role:"alert",children:n.email.message}),t(f,{id:"password",type:"password",placeholder:"비밀번호",...c("password",{required:"비밀번호는 필수 입력입니다.",minLength:{value:7,message:"7자리 이상 비밀번호를 입력하세요."},validate:{check:i=>{if(v("password")!==i)return"비밀번호가 일치하지 않습니다."}}})}),n.password&&t(h,{role:"alert",children:n.password.message}),s(E,{children:[t(x,{to:"/find/id",children:"이메일 찾기"}),t(x,{to:"/find/password",children:"비밀번호 찾기"}),t(M,{to:"/signup",children:"회원가입"})]}),t(V,{type:"submit",children:"로그인"})]})})},C=o.form`
  margin-top: 100px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,D=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
`,f=o.input`
  width: 339px;
  height: 55px;
  border: 1px solid #818181;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
`,E=o.div`
  width: 330px;
  justify-content: space-between;
  padding: 0;
  display: flex;
  gap: 5px;
`,x=o(g)`
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: black;
`,M=o(g)`
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  color: black;
`,V=o.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  margin: 40px 0;
`,h=o.small`
  color: red;
`,Y=w=>s(_,{children:[t(q,{}),t(H,{children:t(B,{})})]}),_=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`,H=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;export{Y as default};
