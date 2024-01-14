import{s as n,k as A,e as c,m as z,Z as G,j as p,a as o}from"./vendor-f20b940a.js";import{g as D,c as M,B as L}from"./common-01e7a8b8.js";import{A as O}from"./shared/MyAccompany/main-f0772fb9.js";import"./react-icons-63f6c30d.js";D("token");const q=a=>{A(e=>e.auth);const[d,u]=c.useState(),g=z(),{search:w}=G(),k=c.useRef(null),[B,I]=c.useState(),[x,m]=c.useState(!1),[h,C]=c.useState(Number),[b,v]=c.useState([]),[f,y]=c.useState([]),N=e=>{const t=b.includes(e);v(t?b.filter(i=>i!==e):[...b,e])},S=(e,t,i)=>{const r=f.findIndex(s=>s.content===t);y(r!==-1?s=>s.filter((l,R)=>R!==r):s=>[...s,{id:e,content:t,sort_type:i}])};U(k,()=>m(!1));const _=c.useCallback(async()=>{if(f.length===0){const t=await(await fetch(`${L}/api/recruitments-list/`,{method:"GET"})).json();u(t)}else{const t=await(await fetch(`${L}/api/recruitments-list/${w}`,{method:"GET"})).json();u(t)}},[w]);c.useEffect(()=>{_()},[_]);const j=()=>{const e=f.map(({id:t,sort_type:i})=>{if(i==="home_team")return`team_id=${t+1}`;if(i==="recruit")return`now_status=${B}`}).filter(t=>t!==void 0).map((t,i)=>i===0?t:"&"+t).join("");g(`?${e}`)};return p(W,{children:[o(Y,{ref:k,children:Q.map(({sort_type:e,title:t,contents:i},r)=>{if(e==="home_team")return p(T,{children:[o(F,{className:h===r?"show":"hide",onClick:()=>{C(r),m(!0)},children:t}),p(H,{className:h===r&&x?"show":"hide",children:[i.map((s,l)=>o(K,{onClick:()=>S(l,s[1],e),children:o(P,{isSelected:b.includes(s[1]),onClick:()=>N(s[1]),children:o(X,{src:s[0],alt:"팀로고"})})},l)),o(E,{children:o($,{onClick:()=>{j(),m(!1)},children:"필터 적용"})})]})]},r);if(e==="recruit")return p(T,{children:[o(F,{className:h===r?"show":"hide",onClick:()=>{C(r),m(!0)},children:t}),p(Z,{className:h===r&&x?"show":"hide",children:[i.map((s,l)=>o(J,{onClick:()=>{I(parseInt(s[1])),S(l,s[1],e)},children:p(V,{children:[o("input",{type:"radio",name:"recruits"}),s[0]]})},l)),o(E,{children:o($,{onClick:()=>{j(),m(!1)},children:"필터 적용"})})]})]},r)})}),o(ee,{children:d==null?void 0:d.map((e,t)=>o("div",{onClick:()=>g(`/findaccompany/detail/${e.recruitmentBoardId}`),children:o(O,{post:e})},e.recruitmentBoardId))})]})},Q=[{sort_type:"home_team",title:"구단별",contents:[["https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg","강원FC"],["https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg","광주FC"],["https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg","대구FC"],["https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg","대전하나시티즌"],["https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg","수원삼성블루윙즈"],["https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg","FC서울"],["https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg","포항스틸러스"],["https://kickstorage.blob.core.windows.net/logo/jeju_united.svg","제주유나이티드"],["https://kickstorage.blob.core.windows.net/logo/incheon_united.svg","인천유나이티드"],["https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg","울산현대"],["https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg","수원FC"],["https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg","전북현대모터스"]]},{sort_type:"recruit",title:"모집 여부",contents:[["모집중","0"],["모집완료","1"],["모집종료","2"]]}],U=(a,d)=>{c.useEffect(()=>{const u=g=>{!a.current||a.current.contains(g.target)||d(g)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[a,d])},W=n.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Y=n.ul`
  display: flex;
`,T=n.li`
  position: relative;
`,F=n.div`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &.show {
    background-color: #1f1f45;
    color: white;
  }
`,Z=n.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  width: 240px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: block;
  }
`,H=n.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  /* width: 100%; */
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3개의 열로 그리드 설정 */
    grid-gap: 5px; /* 열 사이의 간격 설정 */
    justify-content: flex-start;
    align-items: center;
  }
`,J=n.div`
  margin: 10px 0;
  cursor: pointer;
`,K=n.div`
  width: 100px;
  /* margin: 5px 0; */
  /* padding: 5px 5px; */
  cursor: pointer;
`,P=n.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* border-bottom: 1px solid #dbdbdb; */
  padding: 10px 5px;
  border-radius: 12px;
  background-color: ${a=>a.isSelected?"#ffcd40":"white"};
`,V=n.label`
  display: flex;
  gap: 10px;
`,X=n.img`
  height: 40px;
  pointer-events: none;
`,E=n.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`,$=n.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`,ee=n.div`
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
  ${M.lessThan("mobile")`
      /* 모바일 스타일 설정 */
      grid-template-columns: repeat(1, 1fr);
    `}
`,re=a=>o(te,{children:o(q,{})}),te=n.div`
  display: flex;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;export{re as default};
