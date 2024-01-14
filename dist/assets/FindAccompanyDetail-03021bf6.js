import{m as en,e as r,k as dn,a3 as on,j as d,a as e,Q as m,s as o}from"./vendor-f20b940a.js";import{P as h}from"./shared/CreateRoom/FindAccompanyDetail-5b43383d.js";import{g as sn,ay as _,az as P,aA as g,b as z,B as a}from"./common-01e7a8b8.js";import{a as cn}from"./react-icons-63f6c30d.js";const rn=sn("token"),S={Authorization:`Bearer ${rn}`},In=()=>{var L,T;const J=en(),[Q,W]=r.useState(0),[G,K]=r.useState(0),[V,X]=r.useState(""),[Y,Z]=r.useState(),l=dn(s=>s.auth.id),[n,q]=r.useState(),{recruitment_board_id:C}=on(),[k,I]=r.useState("신청");r.useEffect(()=>{(n==null?void 0:n.hostId)===l&&I("모집중");for(const s in n==null?void 0:n.applyingUserIdList)n!=null&&n.applyingUserIdList.hasOwnProperty(s)&&(n==null?void 0:n.applyingUserIdList[s]).user_id===l&&I("신청완료");for(const s in n==null?void 0:n.appliedUserIdList)n!=null&&n.appliedUserIdList.hasOwnProperty(s)&&(n==null?void 0:n.appliedUserIdList[s]).user_id===l&&I("참여완료")},[n,l]);const j=(s,i,f)=>{K(s),X(i),Z(f),W(f+1),setTimeout(()=>{D()},100)},D=async()=>{try{const i=await(await fetch(`${a}/api/my-recruitment/?recruitment_board_id=${G}&applying_user_id=${V}&is_accept=${Y}`,{method:"PATCH",headers:S})).json()}catch(s){console.log(s)}};r.useEffect(()=>{async function s(){try{const f=await(await fetch(`${a}/api/recruitment/?recruitment_board_id=${C}`,{method:"get"})).json();q(f)}catch(i){console.error("Error:",i)}}s()},[Q]);const u=n==null?void 0:n.tagList,nn=async()=>{try{(n==null?void 0:n.hostId)!==l&&k==="신청"?await(await fetch(`${a}/api/recruitment/?recruitment_board_id=${C}`,{method:"PATCH",headers:S})).json()&&(m.success("🤝 동행 신청 완료!"),J("/")):k==="모집중"?m.warning("본인의 동행에는 신청할 수 없습니다."):m.warning("이미 신청한 동행입니다.")}catch{m.error("동행 신청 실패!")}};return l!==(n==null?void 0:n.hostId)?d(U,{children:[e(B,{children:n==null?void 0:n.title}),d(t,{children:[e(p,{children:"🔥 매치 정보"}),e(F,{children:d(y,{children:[d(w,{children:[e(x,{children:e(b,{children:_(n==null?void 0:n.createdDate)})}),e(x,{children:e(b,{children:P(n==null?void 0:n.TeamId)})})]}),e(v,{children:d(c,{children:[" ",g(n==null?void 0:n.TeamId)," vs"," ",g(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(t,{children:[e(p,{children:"🔥 동행 정보"}),e($,{children:d(y,{children:[e(w,{children:d(x,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(v,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(t,{children:[e(p,{children:"🔥 태그 정보"}),e(N,{children:(L=z(u))==null?void 0:L.map((s,i)=>e(E,{children:s},i))})]}),d(t,{children:[e(p,{children:"🔥 카드 정보"}),e(M,{children:e(H,{children:d(R,{children:[e(h,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(h,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(h,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(O,{children:n==null?void 0:n.content})]}),l?e(A,{onClick:()=>nn(),children:k}):e("div",{children:e(A,{onClick:()=>m.warning("로그인을 해주세요!"),children:"신청"})})]}):d(U,{children:[e(B,{children:n==null?void 0:n.title}),d(tn,{children:[d("h1",{children:["동행 신청 인원"," ",(n==null?void 0:n.applyingUserIdList)&&Object.values(n==null?void 0:n.applyingUserIdList).length,"/",n==null?void 0:n.maxNum," 예약 인원"," ",Object.values(n==null?void 0:n.appliedUserIdList).length]}),e(pn,{children:Object.values(n==null?void 0:n.applyingUserIdList).map((s,i)=>d(ln,{children:[d(hn,{children:[e(xn,{children:e(cn,{size:"29"})}),e(mn,{children:s.user_id})]}),d(bn,{children:[e(fn,{onClick:()=>j(n==null?void 0:n.recruitmentBoardId,s.user_id,0),children:"수락"}),e(gn,{onClick:()=>j(n==null?void 0:n.recruitmentBoardId,s.user_id,1),children:"거절"})]})]},i))})]}),d(t,{children:[e(p,{children:"🔥 매치 정보"}),e(F,{children:d(y,{children:[d(w,{children:[e(x,{children:e(b,{children:_(n==null?void 0:n.createdDate)})}),e(x,{children:e(b,{children:P(n==null?void 0:n.TeamId)})})]}),e(v,{children:d(c,{children:[" ",g(n==null?void 0:n.TeamId)," vs"," ",g(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(t,{children:[e(p,{children:"🔥 동행 정보"}),e($,{children:d(y,{children:[e(w,{children:d(x,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(v,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(t,{children:[e(p,{children:"🔥 태그 정보"}),e(N,{children:(T=z(u))==null?void 0:T.map((s,i)=>e(E,{children:s},i))})]}),d(t,{children:[e(p,{children:"🔥 카드 정보"}),e(M,{children:e(H,{children:d(R,{children:[e(h,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(h,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(h,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(O,{children:n==null?void 0:n.content})]})]})},A=o.div`
  background-color: #1f1f45;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`,U=o.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,t=o.div`
  justify-content: left;
  align-items: left;
  width: 50%;
`;o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;o.img`
  max-width: 50%;
  max-height: 100%;
  object-fit: contain;
`;const B=o.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  word-break: break-all;
  width: 50%;
  height: auto;
  font-size: 24px;
`,F=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`,b=o.div`
  font-size: 14px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,x=o.div`
  align-items: center;
  gap: 10px;
`,p=o.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,c=o.div`
  font-size: 14px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,y=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,w=o.div`
  justify-content: left;
  align-items: center;
`,v=o.div`
  gap: 15px;
`,$=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`,N=o.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
`,E=o.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,O=o.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 18px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`,M=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  height: 200px;
`,R=o.div`
  display: flex;
`,H=o.div`
  max-height: 200px;
  overflow-y: auto;
  /* Chrome 브라우저 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
`,tn=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 50%;
`,pn=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`,ln=o.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,hn=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,xn=o.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #898989;
`,mn=o.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 120px;
  max-height: 34px;
  padding: 8px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 14px;
`,fn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`,gn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`,bn=o.div`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;export{In as default};
