import{s as e,j as n,a as t,e as a,a2 as j,m as z}from"./vendor-f20b940a.js";import{a as k,I as T}from"./react-icons-63f6c30d.js";const C=i=>n(A,{children:[t(q,{children:"동행 정보"}),n(I,{children:[n(R,{children:[n(M,{children:[t(h,{children:"장소"}),t(g,{children:"서울역 광장"})]}),n(N,{children:[t(h,{children:"날짜"}),t(g,{children:"23.09.13 13:00"})]}),n(S,{children:[t(h,{children:"인원"}),t(g,{children:"3/4"})]})]}),t(B,{children:n($,{children:[t(f,{children:"#절대강자"}),t(f,{children:"#축구지존"}),t(f,{children:"#제주도"}),t(f,{children:"#맛집탐방"})]})})]})]}),A=e.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`,q=e.div`
  font-size: 14px;
`,I=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`,R=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
`,h=e.p`
  font-size: 10px;
  font-weight: 500;
`,g=e.p`
  font-size: 10px;
  font-weight: 400;
`,M=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,N=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,S=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,B=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,$=e.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`,f=e.p`
  color: #898989;
  font-size: 8px;
  font-weight: 350;
`,H=i=>n(P,{children:[t(L,{children:"내용"}),t(D,{children:"I just wanna love myself 난 좋을 때도 나쁠 때도, love my weakness 화려했던 기대와는 달리 왠지 볼품없다 해도, find the good parts, the good parts (ah) 얄궂은 phone 화면 위로 애꿎은 내 손가락만, tick, tick Oh, my, 기분은 falling down Pic of mine, zoom in, out, pretend I'm fine"})]}),P=e.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`,L=e.div`
  font-size: 14px;
`,D=e.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
`,F=i=>n(E,{children:[t(V,{children:"매치 정보"}),n(Z,{children:[n(K,{children:[t(W,{children:"23.07.13"}),t(G,{children:"목요일 오후 2시"}),t(J,{children:"제주 월드컵경기장"})]}),n(O,{children:[n(Q,{children:[t(m,{children:"구단로고"}),n(y,{children:[t(v,{children:"Home"}),t(b,{children:"제주"})]})]}),t(U,{children:"VS"}),n(X,{children:[t(m,{children:"구단로고"}),n(y,{children:[t(v,{children:"Away"}),t(b,{children:"서울"})]})]})]})]})]}),E=e.div`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
`,V=e.div`
  font-size: 14px;
`,Z=e.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
`,K=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`,O=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,W=e.div`
  font-size: 10px;
`,G=e.div`
  font-size: 10px;
`,J=e.div`
  font-size: 10px;
`,Q=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,U=e.div`
  font-size: 8px;
  color: #6d6d6d;
`,X=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,m=e.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #9b9b9b;
  font-size: 10px;
`,y=e.div``,v=e.p`
  font-size: 6px;
  color: #6d6d6d;
`,b=e.p`
  font-size: 10px;
  color: #6d6d6d;
`,Y=({request:i,onAccept:c,onReject:r})=>{const[s,l]=a.useState(!1),[p,d]=a.useState(!1),o=()=>{l(!0),c(i.id)},x=()=>{d(!0),r(i.id)};return n(_,{children:[n(ee,{children:[t(te,{children:t(k,{size:"29"})}),t(ne,{children:i.requesterName})]}),!s&&!p&&n(u,{children:[t(ie,{onClick:o,children:"수락"}),t(ce,{onClick:x,children:"거절"})]}),s&&t(u,{children:t("p",{children:"참여 완료"})}),p&&t(u,{children:t("p",{children:"참여 거절"})})]})},_=e.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,ee=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,te=e.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #898989;
`,ne=e.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
  max-height: 34px;
  padding: 8px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 14px;
`,ie=e.div`
  padding: 8px 20px;
  font-size: 9px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`,ce=e.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`,u=e.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`,se=({requests:i,onAccept:c,onReject:r})=>t(oe,{className:"meeting-requests-list",children:i.map(s=>t(Y,{request:s,onAccept:c,onReject:r},s.id))}),oe=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`,re=[{id:1,requesterName:"Alice"},{id:2,requesterName:"Bob"},{id:3,requesterName:"Kim"},{id:4,requesterName:"Son"}],de=()=>{const[i,c]=a.useState(re),[r,s]=a.useState([]),l=d=>{const o=i.find(x=>x.id===d);o&&s(x=>[...x,o])},p=d=>{};return n(le,{children:[n("h1",{children:["동행 신청 인원 ",r.length,"/4 예약 인원"," ",i.length]}),t(se,{requests:i,onAccept:l,onReject:p})]})},le=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 100%;
`,ae=i=>{const[c,r]=a.useState(0),[s,l]=a.useState(0);return n(pe,{children:[n(xe,{children:["호스트 평가 : ",c,"점"]}),n("div",{children:[" ",[...Array(5)].map((p,d)=>{const o=d+1;return n(fe,{children:[t("input",{type:"radio",name:"rating",value:o,onClick:()=>r(o)}),t(j,{className:"star",size:20,color:o<=(s||c)?"#ffc107":"#e4e5e9",onMouseEnter:()=>l(o),onMouseLeave:()=>l(0)})]},d)})]})]})},pe=e.div`
  width: 100%;
  padding: 11px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  border: 1px solid black;
  border-radius: 12px;
`,xe=e.p`
  font-size: 12px;
  font-weight: 500;
`,fe=e.label`
  input[type='radio'] {
    display: none;
  }
  .star {
    cursor: pointer;
  }
`,Ae=i=>{const c=z();return n(he,{children:[t(ge,{children:t(T,{size:"24px",onClick:()=>c(-1)})}),n(ue,{children:[t(we,{children:"우천으로 취소돼도, 제주 맛집 부수고 돌아가요!"}),n(me,{children:[t(w,{children:"수정"}),t(w,{children:"삭제"})]}),n(ye,{children:[t(ve,{}),n(be,{children:[t(je,{children:"호스트"}),t(ze,{children:"2023.08.24 20:56"})]})]})]}),t(ae,{}),t(de,{}),t(F,{}),t(C,{}),t(H,{}),t(ke,{children:"모집 확정"})]})},he=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 25px;
  gap: 14px;
`,ge=e.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`,ue=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`,me=e.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;
`,ye=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,ve=e.div`
  width: 29px;
  height: 29px;
  border: none;
  border-radius: 100%;
  background-color: #9b9b9b;
`,be=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`,we=e.p`
  font-size: 20px;
  font-weight: 500;
`,w=e.p`
  font-size: 12px;
  font-weight: 500;
`,je=e.p`
  font-size: 10px;
  font-weight: 500;
`,ze=e.p`
  font-size: 10px;
  font-weight: 500;
`,ke=e.div`
  width: 100%;
  border: none;
  border-radius: 12px;
  background-color: #d9d9d9;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;export{Ae as default};
