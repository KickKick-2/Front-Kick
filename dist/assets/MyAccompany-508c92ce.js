import{s as r,m as p,e as i,a as e,j as l}from"./vendor-f20b940a.js";import{A as m}from"./shared/MyAccompany/main-f0772fb9.js";import{g as h,B as f}from"./common-01e7a8b8.js";import"./react-icons-63f6c30d.js";const g=h("token"),u={Authorization:`Bearer ${g}`},x=t=>{const a=p(),[o,s]=i.useState([]);return i.useEffect(()=>{async function n(){try{const d=await(await fetch(`${f}/api/my-applied-recruitment`,{method:"get",headers:u})).json();s(d)}catch(c){console.error("Error:",c)}}n()},[]),e(y,{children:e($,{children:o==null?void 0:o.map((n,c)=>e("div",{onClick:()=>a(`/findaccompany/detail/${n.recruitmentBoardId}`),children:e(m,{post:n})},n.recruitmentBoardId))})})},y=r.div`
  width: 100%;
`,$=r.div`
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,w=t=>{const[a,o]=i.useState(1);return l(k,{children:[e(v,{page:a,onClick:()=>{o(1),t.handleAccompanyComponent(1)},children:e(B,{page:a,children:"내가 모집한 동행"})}),e(C,{page:a,onClick:()=>{o(2),t.handleAccompanyComponent(2)},children:e(j,{page:a,children:"내가 참여한 동행"})})]})},k=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f45;
  padding: 2px 3px;
`,v=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${t=>t.page===1?"#1f1f45":"white"};
`,C=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${t=>t.page===1?"white":"#1f1f45"};
`,B=r.p`
  color: ${t=>t.page===1?"white":"black"};
  font-weight: bold;
  font-size: 14px;
`,j=r.p`
  color: ${t=>t.page===1?"black":"white"};
  font-weight: bold;
  font-size: 14px;
`,A=h("token"),b={Authorization:`Bearer ${A}`},E=t=>{const a=p(),[o,s]=i.useState([]);return i.useEffect(()=>{async function n(){try{const d=await(await fetch(`${f}/api/my-recruitment`,{method:"get",headers:b})).json();s(d)}catch(c){console.error("Error:",c)}}n()},[]),e(S,{children:e(M,{children:o==null?void 0:o.map((n,c)=>e("div",{onClick:()=>a(`/findaccompany/detail/${n.recruitmentBoardId}`),children:e(m,{post:n})},n.recruitmentBoardId))})})},S=r.div`
  width: 100%;
`,M=r.div`
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,T=t=>{const[a,o]=i.useState(1);return l(z,{children:[e(w,{handleAccompanyComponent:n=>{o(n)}}),a===1?e(E,{}):e(x,{})]})},z=r.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 25px;
`;export{T as default};
