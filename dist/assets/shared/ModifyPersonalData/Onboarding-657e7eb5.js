import{s as t,k as T,m as C,j as r,a as n,e as d}from"../../vendor-f20b940a.js";import{S as z}from"../../react-slick-0d300e11.js";/* empty css                           */import{g as B,t as j,B as F,c}from"../../common-01e7a8b8.js";const $=B("token"),A={authorization:`Bearer ${$}`,"Content-Type":"application/json"},N=e=>{const f=T(l=>l.auth.id),s=C(),m=async()=>{const l={id:f,nickname:"",cheering_team_id:e.football_team_id};await(await fetch(`${F}/api/user/profile/`,{method:"PATCH",headers:A,body:JSON.stringify({...l})})).json(),s("/"),location.reload()};return r(I,{children:[r(E,{teamcolor:e==null?void 0:e.team_color_sub,children:[n(G,{teamcolor:e==null?void 0:e.team_color_main}),n(L,{children:n(H,{children:n(M,{src:j(e==null?void 0:e.logo_img_url)})})}),r(O,{children:[n(W,{children:e==null?void 0:e.team_name}),r(D,{children:[r(P,{children:[n(g,{children:e==null?void 0:e.recruit_ing}),n(h,{children:"모집 중인 동행 팀"})]}),n(k,{}),r(Y,{children:[n(g,{children:e==null?void 0:e.follower}),n(h,{children:"팔로워"})]}),n(k,{}),r(J,{children:[n(g,{children:e==null?void 0:e.recruit_end}),n(h,{children:"마감된 동행 팀"})]})]})]})]}),r(R,{children:[n(U,{onClick:m,children:"선택하기"}),n(V,{onClick:()=>s("/"),children:"취소"})]})]})},I=t.div`
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`,E=t.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 360px;
  background-color: ${e=>e.teamcolor||"#FFFFFF"};
  border-radius: 12px;
`,G=t.div`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 120px;
  width: 100%;
  background-color: ${e=>e.teamcolor||"#FFFFFF"};
  border-radius: 12px 12px 0 0;
`,H=t.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 50%;
  background-color: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`,L=t.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  object-fit: cover;
  font-weight: bold;
  margin-bottom: 120px;
  width: 180px;
  height: 180px;
  border: none;
  border-radius: 90px;
`,M=t.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`,O=t.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  top: 120px;
  z-index: 2;
  width: 264px;
  height: 240px;
  padding: 0 25px 50px;

  border-radius: 12px;
  gap: 9px;
`,W=t.div`
  font-size: 25px;
  font-weight: bold;
  font-weight: medium;
  color: #ffffff;
  margin-bottom: 20px;
`,D=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #ffffff;
`,k=t.div`
  width: 4px;
  height: 4px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`,P=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`,Y=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`,J=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`,g=t.p`
  font-size: 15px;
  font-weight: bolder;
  color: #ffffff;
`,h=t.p`
  font-size: 10px;
  font-weight: bolder;
  color: #ffffff;
`,R=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px;
`,U=t.button`
  background-color: #000000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`,V=t.button`
  background-color: transparent;
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
`,fe=()=>{var x,u,p,b,_,y,w,v;const[e,f]=d.useState("강원"),[s,m]=d.useState([]),l=d.useCallback(async()=>{const a=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();m(a)},[]);d.useEffect(()=>{l()},[l]);const o=[...s||[]].sort((i,a)=>a.recruit_ing-i.recruit_ing),S=i=>{f(i)};return r(Q,{children:[n(q,{...{dots:!1,autoplay:!1,infinite:!0,slidesToShow:7,slidesToScroll:2,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,accessibility:!0,prevArrow:n(oe,{children:"‹"}),nextArrow:n(re,{children:"›"}),responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}}]},children:o.map((i,a)=>a!==12&&r(K,{isSelected:e===i.original_team_name,children:[n(X,{children:n(Z,{onClick:()=>S(i.original_team_name),children:n(ie,{children:n(ee,{src:j(i.original_team_name),alt:i.original_team_name})})})},a),n(ne,{children:n(te,{children:i.team_name})})]},a))}),e&&n(N,{original_team_name:e,football_team_id:((x=o.find(i=>i.original_team_name===e))==null?void 0:x.football_team_id)||1,team_color_main:((u=o.find(i=>i.original_team_name===e))==null?void 0:u.team_color_main)||"",team_name:((p=o.find(i=>i.original_team_name===e))==null?void 0:p.team_name)||"",team_color_sub:((b=o.find(i=>i.original_team_name===e))==null?void 0:b.team_color_sub)||"",logo_img_url:((_=o.find(i=>i.original_team_name===e))==null?void 0:_.original_team_name)||"",recruit_ing:((y=o.find(i=>i.original_team_name===e))==null?void 0:y.recruit_ing)||1,follower:((w=o.find(i=>i.original_team_name===e))==null?void 0:w.follower)||1,recruit_end:((v=o.find(i=>i.original_team_name===e))==null?void 0:v.recruit_end)||1})]})},q=t(z)`
  max-width: 100vw;
  width: 100%;
  overflow: hidden;

  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
    ${c.lessThan("mobile")`
      margin-right: -30%;
	`}
  }

  .slick-slide > div {
    margin-right: 20%;
    ${c.lessThan("mobile")`
      margin-right: -30%;
	`}
  }

  .slick-prev {
    left: 12px;
  }
  .slick-next {
    right: 12px;
  }
`,K=t.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* background-color: ${e=>e.isSelected?"#49496d":"transparent"}; */
`,Q=t.div`
  display: flex;
  flex-direction: column;
`,X=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Z=t.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 10%;
  overflow: hidden;
  ${c.lessThan("mobile")`
      margin-top: 5%;
	`}
`;t.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;const ee=t.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  ${c.lessThan("mobile")`
		width:50px;
    height:50px;
	`}
`,te=t.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${c.lessThan("tablet")`
		font-size: 10px;
    margin-top:1%;
    margin-bottom:5%;
	`}
`,ie=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ne=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,oe=t.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,re=t.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`;export{fe as O};
