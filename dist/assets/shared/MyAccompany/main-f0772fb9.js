import{s as n,m as B,j as i,a as t}from"../../vendor-f20b940a.js";import{B as N}from"../../react-icons-63f6c30d.js";import{a,b as H}from"../../common-01e7a8b8.js";const _=e=>e.length>20?e.slice(0,20)+"...":e,S=e=>e.split("오")[0],E=e=>e===0?"모집중":e===1?"모집완료":"모집종료",s=e=>e>0,dt=e=>{var l,h,u,g,m,y,b,w,v,j,I,C,k;const p=B();return i(D,{onClick:()=>p(`/findaccompany/detail/${e.post.recruitmentBoardId}`),children:[i(V,{children:[t($,{children:t(M,{src:a(e.post.TeamId),alt:e.post.title})}),i("div",{children:[t(R,{children:_(e.post.title)}),t(U,{children:(l=H(e.post.tagList))==null?void 0:l.map((A,P)=>i(W,{children:["#",A]},P))})]})]}),i(Q,{children:[s(e.post.tourCardIdList.attraction.length)?t(r,{children:i(o,{children:[t(c,{children:t(x,{src:(u=(h=e.post.tourCardIdList)==null?void 0:h.attraction[0])==null?void 0:u.firstimage})}),t(d,{children:(m=(g=e.post.tourCardIdList)==null?void 0:g.attraction[0])==null?void 0:m.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"No Image"}),t(d,{children:"관광지 선택안함"})]})}),s(e.post.tourCardIdList.restaurant.length)?t(r,{children:i(o,{children:[t(c,{children:t(x,{src:(b=(y=e.post.tourCardIdList)==null?void 0:y.restaurant[0])==null?void 0:b.firstimage})}),t(d,{children:(v=(w=e.post.tourCardIdList)==null?void 0:w.restaurant[0])==null?void 0:v.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"No Image"}),t(d,{children:"식당 선택안함"})]})}),s(e.post.tourCardIdList.accommodation.length)?t(r,{children:i(o,{children:[t(c,{children:t(x,{src:(I=(j=e.post.tourCardIdList)==null?void 0:j.accommodation[0])==null?void 0:I.firstimage})}),t(d,{children:(k=(C=e.post.tourCardIdList)==null?void 0:C.accommodation[0])==null?void 0:k.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"No Image"}),t(d,{children:"숙박 선택안함"})]})})]}),i(X,{children:[i(q,{children:[i(J,{children:[t(T,{src:a(e.post.TeamId)}),t(f,{children:"Home"})]}),t(f,{children:"VS"}),i(K,{children:[t(T,{src:a(e.post.opponentTeamId)}),t(f,{children:"Away"})]})]}),t(F,{}),i(et,{children:[t(L,{children:t(z,{children:S(e.post.term)})}),t(nt,{children:t(L,{children:t(z,{children:e.post.meetingPlace})})})]}),i(Y,{children:[i(it,{children:[t(Z,{children:t(N,{})}),i(tt,{children:[e.post.nowHeadCount,"/",e.post.maxNum]})]}),t(G,{children:t(O,{now_status:e.post.now_status,children:E(e.post.now_status)})})]})]})]})},D=n.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 15px 10px;
  /* margin-top: 20px; */
  gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #1f1f45;
  color: white;
  font-weight: bold;
`,F=n.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`,V=n.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 4px;
`,$=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,M=n.img`
  width: 50px;
  height: 50px;
  object-fit: fill;
  border: none;
  border-radius: 100%;
`,q=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,G=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,J=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,K=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,T=n.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  /* background-color: #9b9b9b; */
`,f=n.p`
  font-size: 8px;
  color: black;
`,O=n.div`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>{if(e.now_status===0)return"#35CB00";if(e.now_status===1)return"#ffa500";if(e.now_status===2)return"#E72E2E"}};
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 8px;
  font-weight: 350;
`,Q=n.div`
  display: flex;
  width: 340px;
  height: 138px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`,R=n.p`
  font-size: 16px;
  color: white;
`,r=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`,o=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  width: 108px;
  height: 122px;
`,c=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  font-size: 6px;
  background-color: #9b9b9b;
`,x=n.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
`,d=n.div`
  width: 80%;
  font-size: 12px;
  color: black;
  word-break: break-all;
  text-align: center;
`,U=n.ul`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`,W=n.li`
  font-size: 11px;
  font-weight: 350;
  color: #d8d7d7;
`,X=n.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  background-color: white;
  border-radius: 180px;
`,Y=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3px; */
`,Z=n.div``,tt=n.p`
  font-size: 12px;
`,et=n.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`,nt=n.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`,L=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`,it=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,z=n.p`
  font-size: 12px;
`;export{dt as A};
