import{s as e,e as r,m as h,k as g,j as i,a as t,a4 as l,a5 as p,S as a}from"./vendor-f20b940a.js";import{O as u}from"./shared/ModifyPersonalData/Onboarding-657e7eb5.js";import"./react-slick-0d300e11.js";/* empty css                       */import"./common-01e7a8b8.js";const m=n=>{const[o,s]=r.useState(!1),d=()=>{s(!o)},f=h(),c=g(x=>x.auth.isAuthenticated);return r.useEffect(()=>{c||f("/")},[c]),i(y,{children:[i(b,{children:[t(w,{children:"계정 설정"}),t(v,{onClick:d,children:o?t(l,{size:"30"}):t(p,{size:"30"})})]}),o?i(j,{children:[i(z,{children:[t(B,{src:"",alt:"사용자 프로필 이미지"}),t(k,{children:"프로필 이미지 변경"})]}),i($,{children:[t(O,{children:"닉네임"}),t(C,{placeholder:"닉네임"})]}),t(S,{children:"저장하기"})]}):t(a,{})]})},y=e.div`
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,b=e.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`,w=e.h1`
  font-size: 32px;
  font-weight: bold;
`,v=e.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`,j=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,z=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,B=e.img`
  width: 214px;
  height: 214px;
  border-radius: 180px;
  border: 1px solid black;
`,k=e.div`
  width: 270px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #777;
  border-radius: 12px;
`,$=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`,O=e.p`
  font-size: 24px;
  font-weight: bold;
`,C=e.input`
  width: 560px;
  height: 64px;
  font-size: 24px;
  padding: 17px 30px;
  border: 1px solid #777;
  border-radius: 12px;
  &::placeholder {
    font-size: 24px;
    font-weight: bold;
    color: #999;
  }
`;e.div`
  width: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;e.div`
  font-size: 24px;
  font-weight: bold;
  width: 250px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({isSelected:n})=>n?"1px solid #fff":"1px solid #000"};
  border-radius: 12px;

  background-color: ${({isSelected:n})=>n?"#418DFF":"#fff"};
  color: ${({isSelected:n})=>n?"#fff":"#000"};
`;const S=e.div`
  width: 560px;
  height: 64px;
  background-color: #418dff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`,A=n=>{const[o,s]=r.useState(!1);return i(T,{children:[i(D,{children:[t(F,{children:"나의 응원팀 설정"}),t(H,{onClick:()=>{s(!o)},children:o?t(l,{size:"30"}):t(p,{size:"30"})})]}),o?i(I,{children:[t(E,{children:t(P,{children:t(u,{})})}),t(M,{children:"저장하기"})]}):t(a,{})]})},T=e.div`
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,D=e.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,F=e.h1`
  font-size: 32px;
  font-weight: bold;
`,H=e.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`,I=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,M=e.div`
  width: 560px;
  height: 64px;
  background-color: #418dff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`,E=e.div`
  height: 100%;
  overflow-x: hidden;
`,P=e.div`
  height: 100%;
  background-color: #1f1f45;
  overflow-x: hidden;
`,Q=n=>t(W,{children:i(L,{children:[t(N,{children:"개인정보변경"}),t(m,{}),t(A,{})]})}),W=e.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,L=e.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
`,N=e.div`
  font-size: 40px;
  font-weight: bold;
`;export{Q as default};
