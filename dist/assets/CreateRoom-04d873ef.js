import{e as _,R as ae,a0 as Pe,s as r,u as I,a as s,j as v,k as T,E as Ve,B as Ue,S as oe,D as qe,a1 as Ke,m as Ye,T as Ze,Q as Je}from"./vendor-f20b940a.js";import{I as Qe}from"./react-icons-63f6c30d.js";import{S as Xe}from"./react-slick-0d300e11.js";/* empty css                       */import{C as et,y as tt,z as nt,A as Ne,D as Ie,E as it,F as ge,H as le,I as st,J as j,K as F,L as x,M as at,N as ot,O as rt,P as B,R as W,Q as lt,_ as N,T as L,U as dt,V as ct,W as gt,X as Q,Y as he,Z as ht,$ as pe,a0 as pt,a1 as mt,a2 as de,a3 as ft,a4 as ut,a5 as xt,a6 as yt,a7 as bt,a8 as me,a9 as vt,aa as fe,ab as wt,ac as St,ad as Ct,ae as kt,af as Rt,ag as te,ah as Et,ai as Tt,aj as _t,ak as Dt,al as Mt,am as zt,an as Pt,c as S,t as ue,ao as xe,ap as je,aq as re,ar as X,as as ne,at as Nt,au as It,av as jt}from"./common-01e7a8b8.js";import{P as J}from"./shared/CreateRoom/FindAccompanyDetail-5b43383d.js";const Ft=parseInt(String(ae.version).split(".")[0]),Ht=Ft<18;class Fe extends _.Component{constructor(){super(...arguments),this.elRef=_.createRef(),this.isUpdating=!1,this.isUnmounting=!1,this.state={customRenderingMap:new Map},this.requestResize=()=>{this.isUnmounting||(this.cancelResize(),this.resizeId=requestAnimationFrame(()=>{this.doResize()}))}}render(){const e=[];for(const t of this.state.customRenderingMap.values())e.push(ae.createElement(Bt,{key:t.id,customRendering:t}));return ae.createElement("div",{ref:this.elRef},e)}componentDidMount(){const e=new et;this.handleCustomRendering=e.handle.bind(e),this.calendar=new tt(this.elRef.current,Object.assign(Object.assign({},this.props),{handleCustomRendering:this.handleCustomRendering})),this.calendar.render();let t;e.subscribe(n=>{const o=Date.now(),a=!t;(Ht||a||this.isUpdating||this.isUnmounting||o-t<100?He:Pe.flushSync)(()=>{this.setState({customRenderingMap:n},()=>{t=o,a?this.doResize():this.requestResize()})})})}componentDidUpdate(){this.isUpdating=!0,this.calendar.resetOptions(Object.assign(Object.assign({},this.props),{handleCustomRendering:this.handleCustomRendering})),this.isUpdating=!1}componentWillUnmount(){this.isUnmounting=!0,this.cancelResize(),this.calendar.destroy()}doResize(){this.calendar.updateSize()}cancelResize(){this.resizeId!==void 0&&(cancelAnimationFrame(this.resizeId),this.resizeId=void 0)}getApi(){return this.calendar}}Fe.act=He;class Bt extends _.PureComponent{render(){const{customRendering:e}=this.props,{generatorMeta:t}=e,n=typeof t=="function"?t(e.renderProps):t;return Pe.createPortal(n,e.containerEl)}}function He(i){i()}var $t=':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';nt($t);function U(i,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of i)t[n.row].push(n);return t}function q(i,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of i)t[n.firstCol].push(n);return t}function ye(i,e){let t=[];if(i){for(let n=0;n<e;n+=1)t[n]={affectedInstances:i.affectedInstances,isEvent:i.isEvent,segs:[]};for(let n of i.segs)t[n.row].segs.push(n)}else for(let n=0;n<e;n+=1)t[n]=null;return t}const Be=Ne({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function $e(i){let{display:e}=i.eventRange.ui;return e==="list-item"||e==="auto"&&!i.eventRange.def.allDay&&i.firstCol===i.lastCol&&i.isStart&&i.isEnd}class Oe extends de{render(){let{props:e}=this;return x(ft,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:Be,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}}class Ae extends de{render(){let{props:e,context:t}=this,{options:n}=t,{seg:o}=e,a=n.eventTimeFormat||Be,l=ut(o,a,t,!0,e.defaultDisplayEventEnd);return x(yt,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:xt(e.seg,t),defaultGenerator:Ot,timeText:l,isResizing:!1,isDateSelecting:!1}))}}function Ot(i){return x(N,null,x("div",{className:"fc-daygrid-event-dot",style:{borderColor:i.borderColor||i.backgroundColor}}),i.timeText&&x("div",{className:"fc-event-time"},i.timeText),x("div",{className:"fc-event-title"},i.event.title||x(N,null," ")))}class At extends de{constructor(){super(...arguments),this.compileSegs=j(Wt)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:n}=this.compileSegs(e.singlePlacements);return x(Tt,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let o=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return x(N,null,t.map(a=>{let l=a.eventRange.instance.instanceId;return x("div",{className:"fc-daygrid-event-harness",key:l,style:{visibility:o[l]?"hidden":""}},$e(a)?x(Ae,Object.assign({seg:a,isDragging:!1,isSelected:l===e.eventSelection,defaultDisplayEventEnd:!1},L(a,e.todayRange))):x(Oe,Object.assign({seg:a,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:l===e.eventSelection,defaultDisplayEventEnd:!1},L(a,e.todayRange))))}))}})}}function Wt(i){let e=[],t=[];for(let n of i)e.push(n.seg),n.isVisible||t.push(n.seg);return{allSegs:e,invisibleSegs:t}}const Lt=Ne({week:"narrow"});class Gt extends B{constructor(){super(...arguments),this.rootElRef=F(),this.state={dayNumberId:bt()},this.handleRootEl=e=>{me(this.rootElRef,e),me(this.props.elRef,e)}}render(){let{context:e,props:t,state:n,rootElRef:o}=this,{options:a,dateEnv:l}=e,{date:d,dateProfile:h}=t;const m=t.showDayNumber&&Ut(d,h.currentRange,l);return x(St,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:Vt,date:d,dateProfile:h,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:m,extraRenderProps:t.extraRenderProps},(u,C)=>x("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&x(vt,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:fe(e,d,"week"),date:d,defaultFormat:Lt}),!C.isDisabled&&(t.showDayNumber||wt(a)||t.forceDayTop)?x("div",{className:"fc-daygrid-day-top"},x(u,{elTag:"a",elClasses:["fc-daygrid-day-number",m&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},fe(e,d)),{id:n.dayNumberId})})):t.showDayNumber?x("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},x("a",{className:"fc-daygrid-day-number"}," ")):void 0,x("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,x("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},x(At,{allDayDate:d,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:o,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),x("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}}function Vt(i){return i.dayNumberText||x(N,null," ")}function Ut(i,e,t){const{start:n,end:o}=e,a=Ct(o,-1),l=t.getYear(n),d=t.getMonth(n),h=t.getYear(a),m=t.getMonth(a);return!(l===h&&d===m)&&(i.valueOf()===n.valueOf()||t.getDay(i)===1&&i.valueOf()<o.valueOf())}function We(i){return i.eventRange.instance.instanceId+":"+i.firstCol}function Le(i){return We(i)+":"+i.lastCol}function qt(i,e,t,n,o,a,l){let d=new Zt(b=>{let g=i[b.index].eventRange.instance.instanceId+":"+b.span.start+":"+(b.span.end-1);return o[g]});d.allowReslicing=!0,d.strictOrder=n,e===!0||t===!0?(d.maxCoord=a,d.hiddenConsumes=!0):typeof e=="number"?d.maxStackCnt=e:typeof t=="number"&&(d.maxStackCnt=t,d.hiddenConsumes=!0);let h=[],m=[];for(let b=0;b<i.length;b+=1){let g=i[b],f=Le(g);o[f]!=null?h.push({index:b,span:{start:g.firstCol,end:g.lastCol+1}}):m.push(g)}let u=d.addSegs(h),C=d.toRects(),{singleColPlacements:k,multiColPlacements:y,leftoverMargins:R}=Kt(C,i,l),w=[],E=[];for(let b of m){y[b.firstCol].push({seg:b,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let g=b.firstCol;g<=b.lastCol;g+=1)k[g].push({seg:H(b,g,g+1,l),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let b=0;b<l.length;b+=1)w.push(0);for(let b of u){let g=i[b.index],f=b.span;y[f.start].push({seg:H(g,f.start,f.end,l),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let p=f.start;p<f.end;p+=1)w[p]+=1,k[p].push({seg:H(g,p,p+1,l),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let b=0;b<l.length;b+=1)E.push(R[b]);return{singleColPlacements:k,multiColPlacements:y,moreCnts:w,moreMarginTops:E}}function Kt(i,e,t){let n=Yt(i,t.length),o=[],a=[],l=[];for(let d=0;d<t.length;d+=1){let h=n[d],m=[],u=0,C=0;for(let y of h){let R=e[y.index];m.push({seg:H(R,d,d+1,t),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:y.levelCoord-u}),u=y.levelCoord+y.thickness}let k=[];u=0,C=0;for(let y of h){let R=e[y.index],w=y.span.end-y.span.start>1,E=y.span.start===d;C+=y.levelCoord-u,u=y.levelCoord+y.thickness,w?(C+=y.thickness,E&&k.push({seg:H(R,y.span.start,y.span.end,t),isVisible:!0,isAbsolute:!0,absoluteTop:y.levelCoord,marginTop:0})):E&&(k.push({seg:H(R,y.span.start,y.span.end,t),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:C}),C=0)}o.push(m),a.push(k),l.push(C)}return{singleColPlacements:o,multiColPlacements:a,leftoverMargins:l}}function Yt(i,e){let t=[];for(let n=0;n<e;n+=1)t.push([]);for(let n of i)for(let o=n.span.start;o<n.span.end;o+=1)t[o].push(n);return t}function H(i,e,t,n){if(i.firstCol===e&&i.lastCol===t-1)return i;let o=i.eventRange,a=o.range,l=kt(a,{start:n[e].date,end:le(n[t-1].date,1)});return Object.assign(Object.assign({},i),{firstCol:e,lastCol:t-1,eventRange:{def:o.def,ui:Object.assign(Object.assign({},o.ui),{durationEditable:!1}),instance:o.instance,range:l},isStart:i.isStart&&l.start.valueOf()===a.start.valueOf(),isEnd:i.isEnd&&l.end.valueOf()===a.end.valueOf()})}class Zt extends Rt{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){const t=super.addSegs(e),{entriesByLevel:n}=this,o=a=>!this.forceHidden[te(a)];for(let a=0;a<n.length;a+=1)n[a]=n[a].filter(o);return t}handleInvalidInsertion(e,t,n){const{entriesByLevel:o,forceHidden:a}=this,{touchingEntry:l,touchingLevel:d,touchingLateral:h}=e;if(this.hiddenConsumes&&l){const m=te(l);if(!a[m])if(this.allowReslicing){const u=Object.assign(Object.assign({},l),{span:Et(l.span,t.span)}),C=te(u);a[C]=!0,o[d][h]=u,this.splitEntry(l,t,n)}else a[m]=!0,n.push(l)}return super.handleInvalidInsertion(e,t,n)}}class Ge extends B{constructor(){super(...arguments),this.cellElRefs=new W,this.frameElRefs=new W,this.fgElRefs=new W,this.segHarnessRefs=new W,this.rootElRef=F(),this.state={framePositions:null,maxContentHeight:null,segHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:n}=this,{options:o}=n,a=e.cells.length,l=q(e.businessHourSegs,a),d=q(e.bgEventSegs,a),h=q(this.getHighlightSegs(),a),m=q(this.getMirrorSegs(),a),{singleColPlacements:u,multiColPlacements:C,moreCnts:k,moreMarginTops:y}=qt(lt(e.fgEventSegs,o.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,o.eventOrderStrict,t.segHeights,t.maxContentHeight,e.cells),R=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return x("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map((w,E)=>{let b=this.renderFgSegs(E,e.forPrint?u[E]:C[E],e.todayRange,R),g=this.renderFgSegs(E,Jt(m[E],C),e.todayRange,{},!!e.eventDrag,!!e.eventResize,!1);return x(Gt,{key:w.key,elRef:this.cellElRefs.createRef(w.key),innerElRef:this.frameElRefs.createRef(w.key),dateProfile:e.dateProfile,date:w.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&E===0,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:w.extraRenderProps,extraDataAttrs:w.extraDataAttrs,extraClassNames:w.extraClassNames,extraDateSpan:w.extraDateSpan,moreCnt:k[E],moreMarginTop:y[E],singlePlacements:u[E],fgContentElRef:this.fgElRefs.createRef(w.key),fgContent:x(N,null,x(N,null,b),x(N,null,g)),bgContent:x(N,null,this.renderFillSegs(h[E],"highlight"),this.renderFillSegs(l[E],"non-business"),this.renderFillSegs(d[E],"bg-event")),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){let n=this.props;this.updateSizing(!Ie(e,n))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,n,o,a,l,d){let{context:h}=this,{eventSelection:m}=this.props,{framePositions:u}=this.state,C=this.props.cells.length===1,k=a||l||d,y=[];if(u)for(let R of t){let{seg:w}=R,{instanceId:E}=w.eventRange.instance,b=R.isVisible&&!o[E],g=R.isAbsolute,f="",p="";g&&(h.isRtl?(p=0,f=u.lefts[w.lastCol]-u.lefts[w.firstCol]):(f=0,p=u.rights[w.firstCol]-u.rights[w.lastCol])),y.push(x("div",{className:"fc-daygrid-event-harness"+(g?" fc-daygrid-event-harness-abs":""),key:We(w),ref:k?null:this.segHarnessRefs.createRef(Le(w)),style:{visibility:b?"":"hidden",marginTop:g?"":R.marginTop,top:g?R.absoluteTop:"",left:f,right:p}},$e(w)?x(Ae,Object.assign({seg:w,isDragging:a,isSelected:E===m,defaultDisplayEventEnd:C},L(w,n))):x(Oe,Object.assign({seg:w,isDragging:a,isResizing:l,isDateSelecting:d,isSelected:E===m,defaultDisplayEventEnd:C},L(w,n)))))}return y}renderFillSegs(e,t){let{isRtl:n}=this.context,{todayRange:o}=this.props,{framePositions:a}=this.state,l=[];if(a)for(let d of e){let h=n?{right:0,left:a.lefts[d.lastCol]-a.lefts[d.firstCol]}:{left:0,right:a.rights[d.firstCol]-a.rights[d.lastCol]};l.push(x("div",{key:gt(d.eventRange),className:"fc-daygrid-bg-harness",style:h},t==="bg-event"?x(dt,Object.assign({seg:d},L(d,o))):ct(t)))}return x(N,{},...l)}updateSizing(e){let{props:t,state:n,frameElRefs:o}=this;if(!t.forPrint&&t.clientWidth!==null){if(e){let h=t.cells.map(m=>o.currentMap[m.key]);if(h.length){let m=this.rootElRef.current,u=new Q(m,h,!0,!1);(!n.framePositions||!n.framePositions.similarTo(u))&&this.setState({framePositions:new Q(m,h,!0,!1)})}}const a=this.state.segHeights,l=this.querySegHeights(),d=t.dayMaxEvents===!0||t.dayMaxEventRows===!0;this.safeSetState({segHeights:Object.assign(Object.assign({},a),l),maxContentHeight:d?this.computeMaxContentHeight():null})}}querySegHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let n in e){let o=Math.round(e[n].getBoundingClientRect().height);t[n]=Math.max(t[n]||0,o)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}}Ge.addStateEquality({segHeights:Ie});function Jt(i,e){if(!i.length)return[];let t=Qt(e);return i.map(n=>({seg:n,isVisible:!0,isAbsolute:!0,absoluteTop:t[n.eventRange.instance.instanceId],marginTop:0}))}function Qt(i){let e={};for(let t of i)for(let n of t)e[n.seg.eventRange.instance.instanceId]=n.absoluteTop;return e}class Xt extends B{constructor(){super(...arguments),this.splitBusinessHourSegs=j(U),this.splitBgEventSegs=j(U),this.splitFgEventSegs=j(U),this.splitDateSelectionSegs=j(U),this.splitEventDrag=j(ye),this.splitEventResize=j(ye),this.rowRefs=new W}render(){let{props:e,context:t}=this,n=e.cells.length,o=this.splitBusinessHourSegs(e.businessHourSegs,n),a=this.splitBgEventSegs(e.bgEventSegs,n),l=this.splitFgEventSegs(e.fgEventSegs,n),d=this.splitDateSelectionSegs(e.dateSelectionSegs,n),h=this.splitEventDrag(e.eventDrag,n),m=this.splitEventResize(e.eventResize,n),u=n>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return x(zt,{unit:"day"},(C,k)=>x(N,null,e.cells.map((y,R)=>x(Ge,{ref:this.rowRefs.createRef(R),key:y.length?y[0].date.toISOString():R,showDayNumbers:n>1,showWeekNumbers:e.showWeekNumbers,todayRange:k,dateProfile:e.dateProfile,cells:y,renderIntro:e.renderRowIntro,businessHourSegs:o[R],eventSelection:e.eventSelection,bgEventSegs:a[R].filter(en),fgEventSegs:l[R],dateSelectionSegs:d[R],eventDrag:h[R],eventResize:m[R],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:u,forPrint:e.forPrint}))))}componentDidMount(){this.registerInteractiveComponent()}componentDidUpdate(){this.registerInteractiveComponent()}registerInteractiveComponent(){if(!this.rootEl){const e=this.rowRefs.currentMap[0].getCellEls()[0],t=e?e.closest(".fc-daygrid-body"):null;t&&(this.rootEl=t,this.context.registerInteractiveComponent(this,{el:t,isHitComboAllowed:this.props.isHitComboAllowed}))}}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new Q(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new Q(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:n,rowPositions:o}=this,a=n.leftToIndex(e),l=o.topToIndex(t);if(l!=null&&a!=null){let d=this.props.cells[l][a];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(l,a),allDay:!0},d.extraDateSpan),dayEl:this.getCellEl(l,a),rect:{left:n.lefts[a],right:n.rights[a],top:o.tops[l],bottom:o.bottoms[l]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let n=this.props.cells[e][t].date,o=le(n,1);return{start:n,end:o}}}function en(i){return i.eventRange.def.allDay}class tn extends B{constructor(){super(...arguments),this.elRef=F(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:n,expandRows:o}=e,a=n===!0||t===!0;a&&!o&&(a=!1,t=null,n=null);let l=["fc-daygrid-body",a?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",o?"":"fc-daygrid-body-natural"];return x("div",{ref:this.elRef,className:l.join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},x("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:o?e.clientHeight:""}},e.colGroupNode,x("tbody",{role:"presentation"},x(Xt,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:n,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){const e=nn(this.elRef.current,this.props.dateProfile);if(e){const t=e.closest(".fc-daygrid-body"),n=t.closest(".fc-scroller"),o=e.getBoundingClientRect().top-t.getBoundingClientRect().top;n.scrollTop=o?o+1:0}this.needsScrollReset=!1}}}function nn(i,e){let t;return e.currentRangeUnit.match(/year|month/)&&(t=i.querySelector(`[data-date="${_t(e.currentDate)}-01"]`)),t||(t=i.querySelector(`[data-date="${Dt(e.currentDate)}"]`)),t}class sn extends Mt{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}}class an extends B{constructor(){super(...arguments),this.slicer=new sn,this.tableRef=F()}render(){let{props:e,context:t}=this;return x(tn,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}}class on extends it{buildRenderRange(e,t,n){let o=super.buildRenderRange(e,t,n),{props:a}=this;return rn({currentRange:o,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:a.fixedWeekCount,dateEnv:a.dateEnv})}}function rn(i){let{dateEnv:e,currentRange:t}=i,{start:n,end:o}=t,a;if(i.snapToWeek&&(n=e.startOfWeek(n),a=e.startOfWeek(o),a.valueOf()!==o.valueOf()&&(o=ge(a,1))),i.fixedWeekCount){let l=e.startOfWeek(e.startOfMonth(le(t.end,-1))),d=Math.ceil(st(l,o));o=ge(o,6-d)}return{start:n,end:o}}class ln extends B{constructor(){super(...arguments),this.headerElRef=F()}renderSimpleLayout(e,t){let{props:n,context:o}=this,a=[],l=he(o.options);return e&&a.push({type:"header",key:"header",isSticky:l,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),a.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),x(pe,{elClasses:["fc-daygrid"],viewSpec:o.viewSpec},x(ht,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:a}))}renderHScrollLayout(e,t,n,o){let a=this.context.pluginHooks.scrollGridImpl;if(!a)throw new Error("No ScrollGrid implementation");let{props:l,context:d}=this,h=!l.forPrint&&he(d.options),m=!l.forPrint&&pt(d.options),u=[];return e&&u.push({type:"header",key:"header",isSticky:h,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),u.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),m&&u.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:mt}]}),x(pe,{elClasses:["fc-daygrid"],viewSpec:d.viewSpec},x(a,{liquid:!l.isHeightAuto&&!l.forPrint,forPrint:l.forPrint,collapsibleWidth:l.forPrint,colGroups:[{cols:[{span:n,minWidth:o}]}],sections:u}))}}class dn extends ln{constructor(){super(...arguments),this.buildDayTableModel=j(cn),this.headerRef=F(),this.tableRef=F()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:n}=this,o=this.buildDayTableModel(n.dateProfile,t),a=e.dayHeaders&&x(at,{ref:this.headerRef,dateProfile:n.dateProfile,dates:o.headerDates,datesRepDistinctDays:o.rowCnt===1}),l=d=>x(an,{ref:this.tableRef,dateProfile:n.dateProfile,dayTableModel:o,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:d.tableColGroupNode,tableMinWidth:d.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:d.clientWidth,clientHeight:d.clientHeight,forPrint:n.forPrint});return e.dayMinWidth?this.renderHScrollLayout(a,l,o.colCnt,e.dayMinWidth):this.renderSimpleLayout(a,l)}}function cn(i,e){let t=new ot(i.renderRange,e);return new rt(t,/year|month|week/.test(i.currentRangeUnit))}var gn=Pt({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:dn,dateProfileGeneratorClass:on},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}});const hn=i=>{const[e,t]=_.useState("#eeeeee"),n=I();_.useEffect(()=>{t("#eeeeee")},[i.event]);const o=l=>{t("#efd44c"),n(xe({game_schedule_id:l.extendedProps.game_schedule_id,homename:l.extendedProps.home_team_name,awayname:l.extendedProps.away_team_name,team_id:l.extendedProps.team_id,date:l.start.toLocaleString("ko-KR"),stadium:l.extendedProps.stadium,team_logo_img_url:l.extendedProps.team_logo_img_url,opponent_team_id:l.extendedProps.opponent_team_id,opponent_team_logo_img_url:l.extendedProps.opponent_team_logo_img_url}))},a=l=>{t("#eeeeee"),n(xe({game_schedule_id:"",homename:"",awayname:"",team_id:"",date:"",stadium:"",team_logo_img_url:"",opponent_team_id:"",opponent_team_logo_img_url:""}))};return s("div",{children:v(mn,{style:{background:e},children:[v(we,{children:[v(fn,{children:[s(ve,{src:ue(i.event.extendedProps.home_team_name),alt:i.event.extendedProps.home_team_name}),s(pn,{children:" vs "}),s(ve,{src:ue(i.event.extendedProps.away_team_name),alt:i.event.extendedProps.away_team_name})]}),v(un,{children:[v(Ce,{children:[s(ke,{children:"경기 일정"}),s(Se,{children:i.event.start.toLocaleString("ko-KR").slice(0,-3)})]}),v(Ce,{children:[s(ke,{children:"경기 장소"}),v(Se,{children:[i.event.extendedProps.stadium," 경기장"]})]})]})]}),s(we,{children:e==="#efd44c"?s(be,{onClick:()=>a(i.event),children:"선택 해제"}):s(be,{onClick:()=>o(i.event),children:"선택"})})]})})},pn=r.div`
  font-size: 30px;
  padding: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: black;
  ${S.lessThan("mobile")`
     padding: 5px;
     font-size: 15px;
	`}
`,be=r.div`
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: black;
  /* background-color: white;
  border-radius: 15px; */
  ${S.lessThan("mobile")`
     padding: 5px;
     font-size: 15px;
	`}
`,mn=r.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eeeeee;
  border-radius: 20px;
  margin: 10px auto;
  ${S.lessThan("mobile")`
	`}
`,ve=r.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  ${S.lessThan("mobile")`
    height: 40px;
    width: 40px;
	`}
`,we=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10%;
  ${S.lessThan("mobile")`
     padding: 3px;
     gap: 3%;
	`}
`,fn=r.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  ${S.lessThan("mobile")`
     padding: 3px;
	`}
`,un=r.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 15px;
  ${S.lessThan("mobile")`
     padding: 3px;
     gap: 3px;
	`}
`,Se=r.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  ${S.lessThan("mobile")`
    font-size: 12px;
	`}
`,Ce=r.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 20px;
  color: black;
  ${S.lessThan("mobile")`
     padding: 5px;
	`}
`,ke=r.div`
  align-items: center;
  font-size: 20px;
  ${S.lessThan("mobile")`
     font-size: 10px;
	`}
`,xn=({teamName:i,teamEvents:e})=>{const[t,n]=_.useState(),o=e.map(h=>({...h,start:new Date(h.date)}));return v(yn,{children:[s(Fe,{plugins:[gn],initialView:"dayGridMonth",events:o,eventContent:h=>{const{home_team_name:m,opponent_team_logo_img_url:u}=h.event.extendedProps;return s(bn,{children:m&&s(wn,{src:`https://kickstorage.blob.core.windows.net${u}`,alt:m})})},eventClick:h=>{n(h.event)}}),t&&s(vn,{children:s(hn,{event:t,onClose:()=>{n(null)}})})]})},yn=r.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  //캘린더 전체 사이즈
  .fc {
    width: 100%;
    height: 100%;
  }

  // toolbar container
  .fc .fc-toolbar.fc-header-toolbar {
    margin-top: 20px;
    padding: 0 30px;
    background-color: #1f1f45;
    height: 63px;
    font-weight: 600;
    font-size: 13px;
    /* line-height: 29px; */
    color: white;
    border-radius: 20px 20px 20px 20px;
    ${S.lessThan("mobile")`
      font-size:10px;
      padding: 0 20px;
	`}
  }

  // toolbar 버튼
  .fc .fc-button-primary {
    background-color: transparent;
    border: none;

    span {
      font-size: 30px;
    }

    :hover {
      background-color: transparent;
    }
  }

  // 요일 부분
  .fc-theme-standard th {
    height: 32px;
    padding-top: 3.5px;
    background: #1f1f45;
    border: 1px solid #dddee0;
    font-weight: 100;
    font-size: 16px;
    color: white;
  }

  // 오늘 날짜 배경색
  .fc .fc-daygrid-day.fc-day-today {
    color: #1f1f45;
  }

  // 날짜별 그리드
  .fc .fc-daygrid-day-frame {
    ${S.lessThan("mobile")`
      display:flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 5px;
      margin-bottom: 5px;
	`}
  }

  // 날짜  ex) 2일
  .fc .fc-daygrid-day-top {
    flex-direction: row;
    padding: 10px 0 0 10px;
    ${S.lessThan("mobile")`
      padding: 3px 0 0 3px;
	`}
    
  }

  // 각 이벤트 요소
  .fc-event {
    cursor: pointer;
    padding: 5px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    /* background-color:#1F1F45; */
  }
  /* 일요일 날짜 빨간색 */
  .fc-day-sun a {
    color: red;
    text-decoration: none;
  }

  /* 토요일 날짜 파란색 */
  .fc-day-sat a {
    color: blue;
    text-decoration: none;
  }
`,bn=r.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: -30%;
  color: black;
  ${S.lessThan("tablet")`
    margin-bottom: -10%;

	`}
`;r.div`
  font-size: 12px;
  font-weight: bold;
`;const vn=r.div`
  width: 100%;
  margin-top: 20px;
`,wn=r.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  ${S.lessThan("tablet")`
    width: 40%;
    height: 40%;
    object-fit: contain;
	`}
  ${S.lessThan("mobile")`
    width: 100%;
    height: 100%;
    object-fit: contain;
	`}
`,Sn=[{item:"https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg",home_team_name:"강원",name:"강원FC"},{item:"https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg",home_team_name:"광주",name:"광주FC"},{item:"https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg",home_team_name:"대구",name:"대구FC"},{item:"https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg",home_team_name:"대전",name:"대전하나시티즌"},{item:"https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg",home_team_name:"수원",name:"수원삼성블루윙즈"},{item:"https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg",home_team_name:"수원FC",name:"수원FC"},{item:"https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg",home_team_name:"울산",name:"울산현대"},{item:"https://kickstorage.blob.core.windows.net/logo/incheon_united.svg",home_team_name:"인천",name:"인천유나이티드"},{item:"https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg",home_team_name:"전북",name:"전북현대모터스"},{item:"https://kickstorage.blob.core.windows.net/logo/jeju_united.svg",home_team_name:"제주",name:"제주유나이티드"},{item:"https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg",home_team_name:"포항",name:"포항스틸러스"},{item:"https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg",home_team_name:"서울",name:"FC서울"}],Cn=()=>{const i={dots:!1,autoplay:!1,infinite:!0,slidesToShow:7,slidesToScroll:2,swipeToSlide:!0,accessibility:!0,autoplaySpeed:3e3,speed:500,prevArrow:s(In,{children:"‹"}),nextArrow:s(jn,{children:"›"})},[e,t]=_.useState([]),[n,o]=_.useState("강원"),a=d=>{o(d)},l=_.useCallback(async d=>{const m=await(await fetch(`https://kick-back.azurewebsites.net/api/game_schedule/?team_name=${d}`,{method:"GET"})).json();t(m)},[]);return v(En,{children:[s(kn,{...i,children:Sn.map((d,h)=>s(Rn,{onClick:()=>{a(d.home_team_name),l(d.home_team_name)},isSelected:n===d.home_team_name,children:v(Tn,{children:[s(Dn,{children:s(Pn,{children:s(Mn,{src:d.item,alt:"정보가 없습니다."})})}),s(Nn,{children:s(zn,{children:d.home_team_name})})]},h)},h))}),n&&s(_n,{children:s(xn,{teamName:n,teamEvents:e})})]})},kn=r(Xe)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
  }

  .slick-slide > div {
    margin-right: 20%;
  }

  .slick-prev{
    left: 12px;
  }
  .slick-next{
    right: 12px;
  }

  ${S.lessThan("mobile")`
    font-size: 12px;
	`}
`,Rn=r.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${i=>i.isSelected?"#49496d":"transparent"};
`,En=r.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`,Tn=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,_n=r.div`
  background-color: white;
`,Dn=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  overflow: hidden;
`,Mn=r.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  ${S.lessThan("mobile")`
      width: 40px;
      height: 40px;
	`}
`,zn=r.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${S.lessThan("mobile")`
      font-size: 1px;
	`}
`,Pn=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Nn=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,In=r.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,jn=r.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,Re=()=>s(Fn,{children:s(Hn,{children:s(Cn,{})})}),Fn=r.div`
  height:100%;
  overflow-x: hidden;
`,Hn=r.div`
  height:100%;
  background-color: #1F1F45;
  overflow-x: hidden;
`,{kakao:z}=window,Bn=i=>{let e=[];const t=I(),{detailMeetingPlace:n,meetingPlace:o}=T(a=>a.summary);return _.useEffect(()=>{const a=document.getElementById("map"),l={center:new z.maps.LatLng(37.566826,126.9786567),level:3},d=new z.maps.Map(a,l),h=new z.maps.services.Places,m=new z.maps.InfoWindow({zIndex:1});u();function u(){let f=i.searchKeyword;if(!f.replace(/^\s+|\s+$/g,""))return!1;h.keywordSearch(f,C)}function C(f,p,c){if(p===z.maps.services.Status.OK)k(f),E(c);else if(p===z.maps.services.Status.ZERO_RESULT){alert("검색 결과가 존재하지 않습니다.");return}else if(p===z.maps.services.Status.ERROR){alert("검색 결과 중 오류가 발생했습니다.");return}}function k(f){const p=document.getElementById("places-list"),c=document.getElementById("search-result"),D=document.createDocumentFragment(),M=new z.maps.LatLngBounds;p&&g(p),w();for(var P=0;P<f.length;P++){let G=new z.maps.LatLng(f[P].y,f[P].x),$=R(G,P),ee=y(P,f[P]);M.extend(G),function(V,ce){z.maps.event.addListener(V,"mouseover",function(){b(V,ce)}),z.maps.event.addListener(V,"mouseout",function(){m.close()}),ee.onmouseover=function(){b(V,ce)},ee.onmouseout=function(){m.close()}}($,f[P].place_name),D.appendChild(ee)}p&&p.appendChild(D),c&&(c.scrollTop=0),d.setBounds(M)}function y(f,p){const c=document.createElement("li");let D=`
    <div class="info" style="display: flex; justify-content: flex-start; align-items: center;gap:10px; border-bottom:1px solid gray; padding: 5px;">
      <div>
        <label class="checkbox-container" style="display: flex; justify-content: center; align-items: center; gap: 10px;">
          <input type="radio" name="place" class="checkbox-input">
          <div class="checkbox-custom"></div>
          <div>        
            <h5 class="info-item place-name" style="font-size: 16px; ">${p.place_name}</h5>
            ${p.road_address_name?`<p class="info-item road-address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${p.road_address_name}
                  </p>
                  <p class="info-item address-name" style="font-size:12px; padding: 5px 0;  font-weight: 400; color: #666666;">
                    ${p.address_name}
                    </p>`:`<p class="info-item address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${p.address_name}
                  </p>`}
          </div>
        </label>
      </div>
    </div>
    `;c.innerHTML=D,c.className="item",c.onclick=function(){var P;(P=i.handleSearchLocation)==null||P.call(i,p.place_name,p.address_name)};const M=c.querySelector(".checkbox-input");return M==null||M.addEventListener("click",()=>{t(je({meetingPlace:p.place_name,detailMeetingPlace:n,meetingPlaceAddress:p.address_name})),c.classList.toggle("checked")}),c}function R(f,p,c){var D="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",M=new z.maps.Size(36,37),P={spriteSize:new z.maps.Size(36,691),spriteOrigin:new z.maps.Point(0,p*46+10),offset:new z.maps.Point(13,37)},G=new z.maps.MarkerImage(D,M,P),$=new z.maps.Marker({position:f,image:G});return $.setMap(d),e.push($),$}function w(){for(var f=0;f<e.length;f++)e[f].setMap(null);e=[]}function E(f){const p=document.getElementById("pagination");let c=document.createDocumentFragment(),D;for(;p.hasChildNodes();)p.lastChild&&p.removeChild(p.lastChild);for(D=1;D<=f.last;D++){const M=document.createElement("div");M.href="#",M.innerHTML=D.toString(),D===f.current?M.className="on":M.onclick=function(P){return function(){f.gotoPage(P)}}(D),c.appendChild(M)}p.appendChild(c)}function b(f,p){const c='<div style="padding:10px; z-index:1;" class="marker-title">'+p+"</div>";m.setContent(c),m.open(d,f)}function g(f){for(;f.hasChildNodes();)f.lastChild&&f.removeChild(f.lastChild)}},[i.searchKeyword,n]),s($n,{children:v(On,{children:[s(An,{id:"map",className:"map"}),v(Wn,{id:"search-result",children:[s(Ln,{children:v(Gn,{children:[i.searchKeyword," 관련 검색결과"]})}),s(Vn,{children:s(Un,{id:"places-list"})}),s(qn,{id:"pagination"})]})]})})},$n=r.div`
  align-items: center;
  justify-content: center;
`,On=r.div`
  display: flex;
  align-items: flex-start;
  /* background-color: #e6e3e3; */
  height: 100%;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  ${S.lessThan("mobile")`
      flex-direction: column;
	`}
`,An=r.div`
  width: 700px;
  height: 600px;
  background-color: #e0e0e0;
  border-radius: 10px 0 0 10px;
  margin-bottom: 20px;
  font-size: 12px;
  ${S.lessThan("tablet")`
    width: 300px;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
	`}


`,Wn=r.div`
  width: 60%;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgb(248, 248, 248);
  border-radius: 0 10px 10px 0;
  align-items: center;
  ${S.lessThan("mobile")`
      padding: 0px;
      border-radius: 10px;
      width:100%;
      height: 400px;
	`}
`,Ln=r.p`
  font-size: 1px;
  margin: 20px 0;
  padding: 20px;
  font-weight: bold;
  ${S.lessThan("mobile")`
    padding: 5px;
	`}
`,Gn=r.span`
  color: black;
  font-size: 20px;
  ${S.lessThan("mobile")`
	`}
`,Vn=r.div`
  width: 100%;
  max-height: 600px;
  padding: 10px;
  overflow-y: auto;
  ${S.lessThan("mobile")`
	`}
`,Un=r.ul`
  list-style: none;
  padding: 10px;
  color: #1f1f45;
  .item {
    div {
      color: black;
    }
    padding: 3px 0;
  }
`,qn=r.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,Kn=()=>{const i=I(),{meetingPlace:e,detailMeetingPlace:t,meetingPlaceAddress:n}=T(g=>g.summary),[o,a]=_.useState(""),[l,d]=_.useState(""),h=(g,f)=>{a(g),d(f)};let[m,u]=_.useState("");const[C,k]=_.useState(""),[y,R]=_.useState(""),w=g=>{g.preventDefault(),k(g.target.value)},E=g=>{g.preventDefault(),R(C)};return s(Yn,{children:s(Zn,{children:v(Jn,{children:[s(ei,{children:v(ti,{children:[s(Qn,{children:s(ni,{onSubmit:E,children:v(ii,{htmlFor:"place",className:"form__label",children:[s(si,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:w,placeholder:"장소를 입력해보세요!",required:!0}),s(ai,{children:s(Xn,{className:"btn form__submit",type:"submit",value:"검색",onClick:()=>{C===""?alert("검색어를 입력해주세요."):E({preventDefault:()=>{}})}})})]})})}),s(Bn,{searchKeyword:y,handleSearchLocation:h})]})}),s(Ee,{children:v("div",{className:"SearchContainer",children:[s(oi,{children:o||e}),s(ri,{children:l||n})]})}),s(Ee,{children:s("input",{className:"detail",type:"text",id:"loc",value:m||t,onChange:g=>{u(g.target.value),i(je({detailMeetingPlace:g.target.value,meetingPlace:e,meetingPlaceAddress:n}))},placeholder:"상세 위치를 입력해주세요."})})]})})})},Yn=r.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Zn=r.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Jn=r.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${S.lessThan("mobile")`
     margin-bottom: 10px;
	`}
`,Qn=r.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .SearchContainer {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    min-height: 50px;

  }
  .detail {
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 16px;
  }
`,Ee=r.div`
  width: 100%;
  height: 70px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .SearchContainer {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    min-height: 50px;
  }
  .detail {
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 15px;
    /* border: none; 
    outline: none;  */
    font-size: 16px;
  }

  ${S.lessThan("mobile")`
    .detail {
      border-radius: 12px;
      border: 1px solid #ccc;
      padding: 10px;
      /* border: none; 
      outline: none;  */
    }
     
	`}
`,Xn=r(Ve)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  ${S.lessThan("mobile")`
     width:20px;
     height:20px;
	`}
`,ei=r.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,ti=r.div``;r.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const ni=r.form`
  width: 100%;
`,ii=r.label`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`,si=r.input`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  font-size: 16px;
  background-color: rgb(248, 248, 248);
  ${S.lessThan("mobile")`
     font-size:12px;
	`}
`,ai=r.div`
  padding: 10px;
  ${S.lessThan("mobile")`
     padding: 3px;
	`}
`;r.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const oi=r.p`
  font-size: 18px;
  font-weight: 500;
  ${S.lessThan("mobile")`
     font-size:10px;
	`}
`,ri=r.p`
  font-size: 14px;
  font-weight: 400;
  ${S.lessThan("mobile")`
     font-size:10px;
	`}
`,li=i=>{const e=I(),{term:t,minNum:n,maxNum:o}=T(m=>m.summary),[a,l]=_.useState(1),[d,h]=_.useState(1);return v(di,{children:[s(O,{children:"최소"}),s(Te,{children:s("input",{type:"number",value:a||n,onChange:m=>{l(Number(m.target.value)||n),e(re({term:t,minNum:Number(m.target.value)||n,maxNum:d||o}))}})}),s(O,{children:"명"}),s(O,{children:"-"}),s(O,{children:"최대"}),s(Te,{children:s("input",{type:"number",value:d||o,onChange:m=>{h(Number(m.target.value)||o),e(re({term:t,minNum:a||n,maxNum:Number(m.target.value)||o}))}})}),s(O,{children:"명"})]})},di=r.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,O=r.div`
  display:flex;
  justify-content:center;
  align-items:center;
`,Te=r.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 40px;
    padding: 10px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    text-align: center;
    
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`,ci=i=>s("div",{}),gi=i=>{const e=I(),{minNum:t,maxNum:n,term:o}=T(u=>u.summary),[a,l]=_.useState(new Date),[d,h]=_.useState(null),m=u=>{if(u){const[C,k]=u;l(C),h(k)}};return _.useEffect(()=>{if(a&&d){const u=a.toLocaleDateString("ko-KR"),C=d.toLocaleDateString("ko-KR"),k=`${u} ~ ${C}`;e(re({term:k,minNum:t,maxNum:n}))}},[a,d]),v("div",{children:[s(pi,{children:a&&d||o?o?s(oe,{children:s(K,{children:o})}):v(oe,{children:[s(K,{children:a==null?void 0:a.toLocaleDateString("ko-KR")}),s(K,{children:" ~ "}),s(K,{children:d==null?void 0:d.toLocaleDateString("ko-KR")})]}):s("div",{children:"날짜를 선택해주세요."})}),s(hi,{locale:qe,dateFormat:"yyyy년 MM월 dd일",dateFormatCalendar:"yyyy년 MM월",minDate:new Date,placeholderText:"날짜를 선택해주세요.",selected:a,onChange:m,startDate:a,endDate:d,selectsRange:!0,inline:!0})]})},hi=r(Ue)`
  width: 350px; 
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  align-items:center;


`,pi=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`,K=r.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;function mi({}){return v(fi,{children:[s(li,{}),s(gi,{}),s(ci,{})]})}const fi=r.div`
margin: 20px auto;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`,ui=i=>{const e=I(),{img:t,content:n,tag:o,title:a}=T(h=>h.summary);let[l,d]=_.useState("");return s(xi,{children:s("input",{type:"text",id:"title",value:l||a,placeholder:"제목을 입력해주세요.",onChange:h=>{d(h.target.value),e(X({img:t,title:h.target.value,content:n,tag:o}))}})})},xi=r.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width:100%;
  

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px; 
    /* border: none; 
    outline: none;  */
    font-size: 16px; 
    
  }
`,yi=i=>{const e=I(),{title:t,img:n,tag:o,content:a}=T(h=>h.summary);let[l,d]=_.useState("");return s(vi,{children:s(bi,{value:l||a,onChange:h=>{d(h.target.value),e(X({img:n,title:t,content:h.target.value,tag:o}))},placeholder:"내용을 입력해주세요."})})},bi=r.textarea`
  flex-shrink: 0;
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: vertical;
  font-size: 16px;
  /* border: none;
  outline: none; */
`,vi=r.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width:100%;
`,ie=[{idx:1,name:"여행 위주",origName:"# 여행 위주"},{idx:2,name:"자유로운",origName:"# 자유로운"},{idx:3,name:"조용히",origName:"# 조용히"},{idx:4,name:"숙박",origName:"# 숙박"},{idx:5,name:"당일치기",origName:"# 당일치기"},{idx:6,name:"시끌벅적",origName:"# 시끌벅적"},{idx:7,name:"우천시 취소",origName:"# 우천시 취소"},{idx:8,name:"시간 조율",origName:"# 시간 조율"},{idx:9,name:"남성",origName:"# 남성"},{idx:10,name:"여성",origName:"# 여성"},{idx:11,name:"10대",origName:"# 10대"},{idx:12,name:"20대",origName:"# 20대"},{idx:13,name:"30대",origName:"# 30대"},{idx:14,name:"40대",origName:"# 40대"},{idx:15,name:"50대",origName:"# 50대"},{idx:16,name:"60대",origName:"# 60대"},{idx:17,name:"70대",origName:"# 70대"},{idx:18,name:"80대",origName:"# 80대"},{idx:19,name:"90대",origName:"# 90대"}],wi=()=>{const[i,e]=_.useState(!0),[t,n]=_.useState([...ie]);let[o,a]=_.useState([]);const[l,d]=_.useState(),h=I(),{img:m,content:u,title:C,tag:k}=T(g=>g.summary),y=()=>{n([...ie]),e(g=>!g)},R=(g,f,p)=>g.split(f).join(p),w=g=>{const f=g.target.value,c=ie.map(D=>{const M={...D};return M.name.indexOf(f)>-1&&(M.name=R(M.name,f,`<b style='color:black'>${f}</b>`)),M}).filter(D=>D.name.indexOf(f)>-1);n([...c])},E=g=>()=>{if(y(),!o.some(p=>p.idx===g.idx)){const p=new Set([...o,g]),c=[...o,g];a([...Array.from(p)]),h(X({tag:c.map(D=>D),img:m,content:u,title:C}))}},b=g=>{const f=o.filter(p=>p.idx!==g);a([...f]),h(X({tag:f.map(p=>p),img:m,content:u,title:C}))};return k.length!==0&&(o=[...k]),v(Si,{children:[s(Ci,{onClick:y,children:v(ki,{children:[s(Ri,{children:"태그를 선택해주세요."}),s(Ei,{filterState:i})]})}),i?s(Di,{children:o==null?void 0:o.map(g=>s(Pi,{hover:g.idx===l,onMouseOver:()=>{d(g.idx)},onMouseOut:()=>{d(void 0)},onClick:()=>{b(g.idx)},children:g.origName},g.idx))}):v(zi,{children:[s(Mi,{onChange:w,placeholder:"태그 검색하기"}),s(Ti,{}),s(_i,{children:t==null?void 0:t.map(g=>s(Ni,{onClick:E(g),dangerouslySetInnerHTML:{__html:g.name}},g.idx))})]})]})},Si=r.div`
  width:100%;
`,Ci=r.div`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  display: inline-block;
  &:last-child {
    padding-bottom: 10px;
  }
`,ki=r.div`
  cursor: pointer;
`,Ri=r.div`
  font-size: 15px;
  float: left;
  color: #8e8e8e;
`,Ei=r.div`
  width: 25px;
  height: 15px;
  float: right;
  background-repeat: no-repeat;
  background-size: cover;
`,Ti=r.div`
  color: #1f1f45;
  font-size: 29px;
  position: absolute;
`,_i=r.div`
  width: 300px;
  height: 165px;
  padding: 5px;
  margin-right: 5px;
  overflow-y: auto;
`,Di=r.div`
  width: 300px;
  margin-top: 10px;
`,Mi=r.input`
  width: 280px;
  height: 30px;
  border-radius: 5px;
  padding: 3px;
  border: 1px solid #3f3f3f;
  margin-right: 5px;
`,zi=r.div`
  width: 300px;
  height: 215px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
`,Pi=r.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  position: relative;
  background-color: #1f1f45;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 6px;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: 500;
  height: 30px;
  ${()=>`
    &:after {
      position: absolute;
      right: -5px;
      top: -7px;
      content: '✖︎';
      font-size: 10px;
      transition: all 0.2s ease;
      color: black;
    }
    `}
`,Ni=r.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1f1f45;
    color: black;
  }
`,Ii=i=>s(ji,{children:v(Fi,{children:[s(ui,{}),s(yi,{}),s(wi,{})]})}),ji=r.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Fi=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 30%;
  ${S.lessThan("mobile")`
		width:100%;
	`}
`;function Hi({}){const{img:i,title:e,stadium:t,date:n,homename:o,awayname:a,meetingPlace:l,detailMeetingPlace:d,term:h,minNum:m,maxNum:u,content:C,tag:k}=T(b=>b.summary),y=T(b=>b.selecteditem),R=T(b=>b.selecteditem.house),w=T(b=>b.selecteditem.food),E=T(b=>b.selecteditem.attraction);return v(Bi,{children:[s($i,{children:e}),v(Y,{children:[s(Z,{children:"🔥 매치 정보"}),s(Oi,{children:v(De,{children:[v(Me,{children:[s(se,{children:s(_e,{children:n})}),s(se,{children:v(_e,{children:[t," 경기장"]})})]}),s(ze,{children:v(A,{children:[" ",o&&a?o+" vs "+a:""," "]})})]})})]}),v(Y,{children:[s(Z,{children:"🔥 동행 정보"}),s(Ai,{children:m&&u&&l&&d&&h?v(De,{children:[s(Me,{children:v(se,{children:[s(A,{children:"희망 인원 "}),v(A,{children:[" ",m," ~ ",u," 명"]})]})}),v(ze,{children:[v(A,{children:[" ","동행 장소 ",l," ",d]}),v(A,{children:[" 동행 기간 ",h," "]})]})]}):s(oe,{})})]}),v(Y,{children:[s(Z,{children:"🔥 태그 정보"}),s(Wi,{children:k.map((b,g)=>s(Li,{children:b.origName},g))})]}),v(Y,{children:[s(Z,{children:"🔥 카드 정보"}),s(Vi,{children:s(qi,{children:v(Ui,{children:[y.house.length>0&&s(J,{index:0,ischk:!1,list:R}),y.food.length>0&&s(J,{index:1,ischk:!1,list:w}),y.attraction.length>0&&s(J,{index:2,ischk:!1,list:E})]})})})]}),s(Gi,{children:C})]})}const Bi=r.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Y=r.div`
  justify-content: left;
  align-items: left;
`;r.div`
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
`;r.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  font-size: 12px;
`;const $i=r.div`
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  font-size: 25px;
  /* border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc; */
`,Oi=r.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,_e=r.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,se=r.div`
  align-items: center;
  gap: 10px;
`,Z=r.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,A=r.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,De=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Me=r.div`
  justify-content: left;
  align-items: center;
`,ze=r.div`
  gap: 15px;
`,Ai=r.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,Wi=r.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`,Li=r.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,Gi=r.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  word-break:break-all;
  /* border: none;
  outline: none; */
`,Vi=r.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
`,Ui=r.div`
  display: flex;
`,qi=r.div`
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
`,Ki=({title:i,index:e})=>{const t=I();return v(Yi,{children:[s(Zi,{children:i}),v(Ji,{children:[s(Qi,{index:e,onClick:()=>{e===0?t(ne({modalType:"HouseSearchModal",isOpen:!0})):e===1?t(ne({modalType:"FoodSearchModal",isOpen:!0})):e===2&&t(ne({modalType:"AttractionSearchModal",isOpen:!0}))},children:s(Xi,{})}),s(J,{index:e,ischk:!0})]})]})},Yi=r.div`
  width:100%;
  padding: 10px;
`,Zi=r.p`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`,Ji=r.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  justify-content: left;
  align-items: left;
  padding: 10px 0;
`,Qi=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${i=>{switch(i.index){case 0:return"#F0B86E";case 1:return"#9F91CC";case 2:return"#D4E2D4"}}};
  gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`,Xi=r(Ke)`
  width: 40px;
  height: 40px;
  color: white;
`,es=["🏠 숙박","🍚 음식점","🏖️ 관광지"],ts=()=>s(ns,{children:es.map((i,e)=>s(Ki,{title:i,index:e},e))}),ns=r.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,is=()=>{const[i,e]=_.useState(!1),t=Ye(),n=I(),{post:o,loading:a}=T(c=>c.accompany),l=["경기 일정 선택","모임장소","일정 카드 선택","상세 내용","상세 내용","내 동행 일정"],d=T(c=>c.summary.game_schedule_id),h=T(c=>c.selecteditem.attraction),m=T(c=>c.selecteditem.food),C={accommodation:T(c=>c.selecteditem.house).map(c=>({content_id:c.content_id,title:c.title,firstimage:c.firstimage})),restaurant:m.map(c=>({content_id:c.content_id,title:c.title,firstimage:c.firstimage})),attraction:h.map(c=>({content_id:c.content_id,title:c.title,firstimage:c.firstimage}))},[k,y]=_.useState(0),R=()=>{k>0&&y(c=>c-1)},E=T(c=>c.summary.tag).map(c=>c.name).join(","),b={token:T(c=>c.auth.token),schedule_id:T(c=>c.summary.game_schedule_id),home_team_name:T(c=>c.summary.homename),team_id:T(c=>c.summary.team_id),thumbnail:"dummyimg",title:T(c=>c.summary.title),content:T(c=>c.summary.content),tag_list:E,tour_card_id_list:C,meeting_place:T(c=>c.summary.meetingPlace),meeting_place_address:T(c=>c.summary.meetingPlaceAddress),detail_meeting_place:T(c=>c.summary.detailMeetingPlace),term:T(c=>c.summary.date),min_num:T(c=>c.summary.minNum),max_num:T(c=>c.summary.maxNum),now_status:0};_.useEffect(()=>{n(Nt(b))},[i]);const g=async()=>{if(k<l.length-1)if(k===0)if(d==="")Je.info("일정을 선택해주세요");else return y(c=>c+1);else y(c=>c+1);else k===l.length-1&&(e(!0),console.log(o,a),setTimeout(()=>{n(It()),n(jt()),t("/")},3e3))},f=k===5?"완료":"다음";let p=null;switch(k){case 0:p=Re;break;case 1:p=Kn;break;case 2:p=ts;break;case 3:p=mi;break;case 4:p=Ii;break;case 5:p=Hi;break;default:p=Re}return v(os,{children:[v(as,{children:[s(rs,{onClick:R}),s(ss,{children:l[k]}),s(ls,{onClick:()=>t("/")})]}),s(ds,{children:s(p,{})}),s(cs,{children:s(gs,{onClick:g,children:f})})]})},ss=r.h1`
  display: flex;
  color: #000;
  font-size: 30px;
  font-weight: bold;
  ${S.lessThan("mobile")`
		font-size: 20px;
	`}
`,as=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,os=r.div`
  font-weight: bold;
  background-color: #ffffff;
`,rs=r(Qe)`
  width: 30px;
  height: 30px;
  color: #000000;
  ${S.lessThan("mobile")`
		width:25px;
    height:25px;
	`}
`,ls=r(Ze)`
  width: 40px;
  height: 40px;
  color: #000000;
  justify-content: right;
  align-items: right;
  ${S.lessThan("mobile")`
		width:25px;
    height:25px;
	`}
`,ds=r.div`
  display: flex;
`,cs=r.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,gs=r.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  color: #ffffff;
  ${S.lessThan("mobile")`
    margin-top: 20px;
    margin-bottom: 50px;
	`}
`,ys=()=>s("div",{children:s(is,{})});export{ys as default};
