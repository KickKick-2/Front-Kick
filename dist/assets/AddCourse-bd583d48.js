import{s as a,a as t,m as h,e as d,j as c}from"./vendor-f20b940a.js";import{R as o,B as p}from"./AddCourse-1cceaf79.js";const v=r=>t(y,{children:o.map((e,i)=>t(p,{img:e.img,name:e.name,type:e.type,review:e.review},i))}),y=a.div`
  padding: 10px 0;
  width: 90%;
  display: grid;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;

  grid-template-columns: repeat(2, 150px);
`,f=r=>t(w,{children:o.map((e,i)=>t(p,{img:e.img,name:e.name,type:e.type,review:e.review},i))}),w=a.div`
  padding: 10px 0;
  width: 90%;
  display: grid;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;

  grid-template-columns: repeat(2, 150px);
`,C=r=>t(b,{children:o.map((e,i)=>t(p,{img:e.img,name:e.name,type:e.type,review:e.review},i))}),b=a.div`
  padding: 10px 0;
  width: 90%;
  display: grid;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;

  grid-template-columns: repeat(2, 150px);
`,s=[{index:0,name:"🍽️ 맛집",content:t(v,{})},{index:1,name:"🏝️ 관광지",content:t(f,{})},{index:2,name:"🛏️ 숙소",content:t(C,{})}],j=r=>{const e=h(),[i,l]=d.useState(0),[m,x]=d.useState(0),g=n=>{l(n)},u=n=>{x(n)};return c("div",{children:[c(k,{children:[t(T,{onClick:()=>e("/createroom"),children:"코스 추가하기"}),t(B,{children:s.map(n=>t(R,{active:m===n.index,onClick:()=>(g(n.index),u(n.index)),children:n.name},n.index))})]}),t("div",{children:s[i].content})]})},k=a.div`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`,T=a.div`
  width: 326px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14.163px;
  border: 0.472px solid #5956ff;
  background: #fff;
  box-shadow: 0px 1.8884425163269043px 1.8884425163269043px 0px
    rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`,B=a.div`
  margin-top: 20px;

  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`,R=a.p`
  color: ${r=>r.active?"black":"rgba(0, 0, 0, 0.50)"};
`,A=r=>t("div",{children:t(j,{})});export{A as default};
