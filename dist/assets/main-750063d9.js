import{s as t,a as e,j as r,u as z,e as d,k as j,m as C,S}from"./vendor-f20b940a.js";import{S as k}from"./react-slick-0d300e11.js";/* empty css                       */import{c as n,t as _,g as B,B as b}from"./common-01e7a8b8.js";import A from"./FindAccompany-ba6b9906.js";import{A as I}from"./shared/MyAccompany/main-f0772fb9.js";import"./react-icons-63f6c30d.js";const E=()=>e(R,{className:"carousel",children:r(k,{...{dots:!0,autoplay:!0,Infinite:!0,slidesToshow:1,slidesToscroll:1,swipeToslide:!0,autoplaySpeed:3e3,speed:500},children:[e(h,{children:e(g,{children:e(x,{src:"/assets/banner4.png",alt:"logo"})})}),e(h,{children:e(g,{children:e(x,{src:"/assets/banner3.png",alt:"logo"})})}),e(h,{children:e(g,{children:e(x,{src:"/assets/banner2.png",alt:"logo"})})}),e(h,{children:e(g,{children:e(x,{src:"/assets/banner1.png",alt:"logo"})})})]})}),h=t.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,g=t.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,x=t.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`,R=t.div`
    width: 100%;
`,D=()=>{z();const[a,m]=d.useState([]),p=d.useCallback(async()=>{const s=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();m(s)},[]);d.useEffect(()=>{p()},[p]);const i=[...a||[]].sort((o,s)=>s.recruit_ing-o.recruit_ing);return e(G,{className:"carousel",children:e(M,{...{dots:!1,autoplay:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,prevArrow:e(K,{children:"‹"}),nextArrow:e(O,{children:"›"}),responsive:[{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2,autoplay:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!1}}]},children:i==null?void 0:i.map((o,s)=>s!==12&&r(N,{backgroundColor:o.team_color_sub,children:[e(P,{backgroundColor:o.team_color_main,children:e(V,{children:s+1})}),r(q,{children:[e(Y,{children:e(L,{src:_(o.original_team_name),alt:o.original_team_name})}),r(H,{children:[e(U,{children:o.original_team_name}),r(J,{children:[r(y,{children:[e(v,{children:"팔로워"}),e(w,{children:o.follower})]}),r(y,{children:[e(v,{children:"현재 동행팀"}),e(w,{children:o.recruit_ing})]})]})]})]})]},s))})})},G=t.div`
  padding: 0 50px;
`,M=t(k)`
  .slick-slide {
  }


  .slick-list {
    margin-right: -15px;
  }

  .slick-slide > div {
    margin-right: 40px;
  }

  .slick-prev{
  }
`,N=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 343px;
  background-color: ${a=>a.backgroundColor||"#FFFFFF"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
  ${n.lessThan("mobile")`
		height: 200px;
    margin-left:2%;
    margin-right:2%;
    margin-bottom: 10px;
	`}
`,P=t.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: ${a=>a.backgroundColor||"#FFFFFF"};
  border-radius: 20px 20px 0 0;
  width: 100%;
  ${n.lessThan("mobile")`
		height:60px;
    padding: 5px;
	`}
`,V=t.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${n.lessThan("mobile")`
		font-size: 30px;
    padding: 2px;
	`}
  @font-face {
    font-family: 'Giants-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Giants-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`,Y=t.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%; 
  left: 50%; 
  background-color: #FFFFFF;
  border-radius:50%;
  ${n.lessThan("tablet")`
		width: 90px;
    height: 90px;
	`}
  transform: translate(-50%, -50%);
   ${n.lessThan("mobile")`
		width: 70px;
    height: 70px;
    top: 30%;
	`}
  
`,L=t.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  ${n.lessThan("tablet")`
		width: 80px;
    height: 80px;
	`}
  ${n.lessThan("mobile")`
		width:60px;
    height:60px;
	`}
`,U=t.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: white;
  ${n.lessThan("mobile")`
		font-size: 20px;
    padding:1px;
	`}
`,q=t.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${n.lessThan("mobile")`
		padding: 0px;
	`}
`,H=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  ${n.lessThan("mobile")`
		margin-top: 50px;
	`}
`,J=t.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
   ${n.lessThan("mobile")`
	`}
`,w=t.div`
  font-size: 20px;
  color: white;
   ${n.lessThan("mobile")`
		font-size: 15px;
	`}
`,y=t.div`
  display: flex;
  width: 100%;
  padding: 5px;
  gap:40px;
  font-size:10px;
  align-items: center;
  justify-content: space-between;
`,v=t.div`
  font-size: 20px;
  color: white;
  ${n.lessThan("mobile")`
		font-size: 10px;
	`}
`;t.div`
  margin-top: 10px;
  box-sizing: border-box;
  width: 60px;
  height: 24px;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  text-align: center;
  font-size: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;t.div`
  width: 80px;
  height: 29px;
  display: flex;
  border: none;
  border-radius: 12px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;const K=t.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,O=t.div`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,Q=B("token"),T={Authorization:`Bearer ${Q}`},me=a=>{const[m,p]=d.useState([]),[i,u]=d.useState([]),{token:o,isAuthenticated:s}=j(l=>l.auth);d.useEffect(()=>{async function l(){try{const f=await(await fetch(`${b}/api/my-recruitment`,{method:"get",headers:T})).json();p(f)}catch(c){console.error("Error:",c)}}async function F(){try{const f=await(await fetch(`${b}/api/my-applied-recruitment`,{method:"get",headers:T})).json();u(f)}catch(c){console.error("Error:",c)}}l(),F()},[o]);const $=C();return r("div",{children:[s?r(W,{children:[r(ne,{children:["👋 현재 나의 동행일정 (",i==null?void 0:i.length,")"]}),(i==null?void 0:i.length)===0?e(oe,{children:e(ie,{children:"예정 중인 동행이 없어요 🥲"})}):e(X,{children:i.length>0&&(i==null?void 0:i.map(l=>e("div",{onClick:()=>$(`/findaccompany/detail/${l.recruitmentBoardId}`),children:e(I,{post:l})},l.recruitmentBoardId)))})]}):e(S,{}),e(ee,{children:e(E,{})}),r(Z,{children:[e(se,{children:"🏆 구단별 응원순위"}),e(le,{children:"구단별 모집이 완료된 동행팀 수"}),e(D,{})]}),r(te,{children:[e(re,{children:"🙋‍♂️ 동행 구경하기"}),e(ae,{children:"나의 동행을 찾아보세요!"}),e(A,{})]})]})},W=t.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`,X=t.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 20px;
  background: #eeeeee;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
`,Z=t.div`
  background-color: #1f1f45;
  border-radius: 15px;
  padding: 10px 0;
  ${n.lessThan("mobile")`
		padding: 5px 0;
	`}
`,ee=t.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`,te=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  ${n.lessThan("mobile")`

	`}
`,ne=t.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`,ie=t.div`
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #5c5c5c;
  font-size: 20px;
  font-weight: bold;
`,oe=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  height: 30vh;
  background: #eeeeee;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
`,re=t.div`
  border: 1px;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
  ${n.lessThan("mobile")`
		font-size: 20px;
    padding: 10px 0;
	`}
`,se=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  color: white;
  ${n.lessThan("mobile")`
		font-size: 20px;
	`}
`,ae=t.div`
  font-size: 15px;
  margin-left: 20px;
  font-weight: bold;
  ${n.lessThan("mobile")`
		margin-left: 0px;
	`}
`,le=t.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 30px;
  color: white;
`;export{me as default};
