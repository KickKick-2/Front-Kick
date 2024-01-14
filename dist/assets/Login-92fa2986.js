import{m as s,j as t,a as i,s as e}from"./vendor-f20b940a.js";import{L as r}from"./shared/EmailLogin/Login-0162286c.js";import{c as o}from"./common-01e7a8b8.js";const u=x=>{const n=s();return t(a,{children:[i(r,{}),i(c,{children:"함께 가는 축구 여행, 킥킥"}),i(d,{children:i(l,{onClick:()=>{n("/emaillogin")},children:"이메일 로그인"})}),t(p,{children:[i("div",{children:"아직 계정이 없으신가요?"}),i(g,{onClick:()=>{n("/signup")},children:"회원가입"})]})]})},a=e.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 60px 0;
`,c=e.h1`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 5rem;
   ${o.lessThan("mobile")`
		font-size: 20px;
	`}
`,l=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 60px;
  border-radius: 5px;
  background-color: #898989;
  cursor: pointer;
   ${o.lessThan("mobile")`
		width: 250px;
	`}
`,d=e.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`,p=e.div`
  width: 360px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,g=e.p`
  font-weight: bold;
  cursor: pointer;
`;export{u as default};
