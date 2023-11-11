import{c as ee,m as _,q as F,d as te,e as ae,a as B,r as ne,s as le,g as se,h as ie,i as oe,b as S,t as st,v as it,w as Se,x as Ie,y as be,z as ot,u as rt,A as Pe,B as ct,C as xe,D as Be,E as Ae,R as we,F as Le,G as $e,H as Ne,I as Te,J as dt,K as je,L as pe,M as G,j as w,_ as Re,o as ut,n as re,N as Oe,V as Ee,p as vt,O as ce,P as ke,Q as ft,S as mt,T as gt,U as yt,W as bt,X as kt,Y as Ct,Z as ht,$ as Vt}from"./vivi-225b8f20.js";import{p as b,n as U,l as k,q as H,v as Ge,t as z,m as n,A as ze,r as _t,c as m,d as St,B as It,J as Pt,x as xt,K as Bt,L,M as De,N as Me,u as At,O as K,P as de,Q as Fe,C as wt,D as V,E as x,F as d,R as D,S as q,I as Q,y as Lt,T as Ce,U as $t,V as Nt,W as Tt,X as jt,G as pt,Y as Rt,H as Ot}from"./index-4009fa55.js";const Ue=b({divided:Boolean,...ee(),..._(),...F(),...te(),...ae(),...B(),...U(),...ne()},"VBtnGroup"),he=k()({name:"VBtnGroup",props:Ue(),setup(e,l){let{slots:a}=l;const{themeClasses:t}=H(e),{densityClasses:s}=le(e),{borderClasses:o}=se(e),{elevationClasses:i}=ie(e),{roundedClasses:c}=oe(e);Ge({VBtn:{height:"auto",color:z(e,"color"),density:z(e,"density"),flat:!0,variant:z(e,"variant")}}),S(()=>n(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,o.value,s.value,i.value,c.value,e.class],style:e.style},a))}}),He=Symbol.for("vuetify:v-btn-toggle"),Et=b({...Ue(),...st()},"VBtnToggle");k()({name:"VBtnToggle",props:Et(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const{isSelected:t,next:s,prev:o,select:i,selected:c}=it(e,He);return S(()=>{const u=he.filterProps(e);return n(he,ze({class:["v-btn-toggle",e.class]},u,{style:e.style}),{default:()=>{var f;return[(f=a.default)==null?void 0:f.call(a,{isSelected:t,next:s,prev:o,select:i,selected:c})]}})}),{next:s,prev:o,select:i}}});const Gt=b({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},..._(),...Se(),...B({tag:"div"}),...U()},"VProgressCircular"),zt=k()({name:"VProgressCircular",props:Gt(),setup(e,l){let{slots:a}=l;const t=20,s=2*Math.PI*t,o=_t(),{themeClasses:i}=H(e),{sizeClasses:c,sizeStyles:u}=Ie(e),{textColorClasses:f,textColorStyles:y}=be(z(e,"color")),{textColorClasses:$,textColorStyles:N}=be(z(e,"bgColor")),{intersectionRef:T,isIntersecting:j}=ot(),{resizeRef:p,contentRect:C}=rt(),I=m(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),r=m(()=>Number(e.width)),v=m(()=>u.value?Number(e.size):C.value?C.value.width:Math.max(r.value,32)),P=m(()=>t/(1-r.value/v.value)*2),h=m(()=>r.value/v.value*P.value),R=m(()=>St((100-I.value)/100*s));return It(()=>{T.value=o.value,p.value=o.value}),S(()=>n(e.tag,{ref:o,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":j.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,c.value,f.value,e.class],style:[u.value,y.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:I.value},{default:()=>[n("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[n("circle",{class:["v-progress-circular__underlay",$.value],style:N.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":h.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),n("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":h.value,"stroke-dasharray":s,"stroke-dashoffset":R.value},null)]),a.default&&n("div",{class:"v-progress-circular__content"},[a.default({value:I.value})])]})),{}}}),Dt=["static","relative","fixed","absolute","sticky"],Ke=b({position:{type:String,validator:e=>Dt.includes(e)}},"position");function Je(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Pt();return{positionClasses:m(()=>e.position?`${l}--${e.position}`:void 0)}}function Mt(e,l){xt(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&l&&Bt(()=>{l(!0)})},{immediate:!0})}const Ft=b({active:{type:Boolean,default:void 0},symbol:{type:null,default:He},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:L,appendIcon:L,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...ee(),..._(),...F(),...Pe(),...te(),...ct(),...xe(),...Be(),...Ke(),...ae(),...Ae(),...Se(),...B({tag:"button"}),...U(),...ne({variant:"elevated"})},"VBtn"),Ut=k()({name:"VBtn",directives:{Ripple:we},props:Ft(),emits:{"group:selected":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:s}=H(e),{borderClasses:o}=se(e),{colorClasses:i,colorStyles:c,variantClasses:u}=Le(e),{densityClasses:f}=le(e),{dimensionStyles:y}=$e(e),{elevationClasses:$}=ie(e),{loaderClasses:N}=Ne(e),{locationStyles:T}=Te(e),{positionClasses:j}=Je(e),{roundedClasses:p}=oe(e),{sizeClasses:C,sizeStyles:I}=Ie(e),r=dt(e,e.symbol,!1),v=je(e,a),P=m(()=>{var g;return e.active!==void 0?e.active:v.isLink.value?(g=v.isActive)==null?void 0:g.value:r==null?void 0:r.isSelected.value}),h=m(()=>(r==null?void 0:r.disabled.value)||e.disabled),R=m(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),J=m(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function W(g){var A;h.value||v.isLink.value&&(g.metaKey||g.ctrlKey||g.shiftKey||g.button!==0||a.target==="_blank")||((A=v.navigate)==null||A.call(v,g),r==null||r.toggle())}return Mt(v,r==null?void 0:r.select),S(()=>{var fe,me;const g=v.isLink.value?"a":e.tag,A=!!(e.prependIcon||t.prepend),Y=!!(e.appendIcon||t.append),O=!!(e.icon&&e.icon!==!0),E=(r==null?void 0:r.isSelected.value)&&(!v.isLink.value||((fe=v.isActive)==null?void 0:fe.value))||!r||((me=v.isActive)==null?void 0:me.value);return De(n(g,{type:g==="a"?void 0:"button",class:["v-btn",r==null?void 0:r.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":h.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,o.value,E?i.value:void 0,f.value,$.value,N.value,j.value,p.value,C.value,u.value,e.class],style:[E?c.value:void 0,y.value,T.value,I.value,e.style],disabled:h.value||void 0,href:v.href.value,onClick:W,value:J.value},{default:()=>{var ge;return[pe(!0,"v-btn"),!e.icon&&A&&n("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?n(w,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):n(G,{key:"prepend-icon",icon:e.prependIcon},null)]),n("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&O?n(G,{key:"content-icon",icon:e.icon},null):n(w,{key:"content-defaults",disabled:!O,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var ye;return[((ye=t.default)==null?void 0:ye.call(t))??e.text]}})]),!e.icon&&Y&&n("span",{key:"append",class:"v-btn__append"},[t.append?n(w,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):n(G,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&n("span",{key:"loader",class:"v-btn__loader"},[((ge=t.loader)==null?void 0:ge.call(t))??n(zt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Me("ripple"),!h.value&&e.ripple,null]])}),{}}});const Ht=b({fluid:{type:Boolean,default:!1},..._(),...B()},"VContainer"),We=k()({name:"VContainer",props:Ht(),setup(e,l){let{slots:a}=l;const{rtlClasses:t}=At();return S(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},a)),{}}}),Ye=(()=>K.reduce((e,l)=>(e[l]={type:[Boolean,String,Number],default:!1},e),{}))(),qe=(()=>K.reduce((e,l)=>{const a="offset"+de(l);return e[a]={type:[String,Number],default:null},e},{}))(),Qe=(()=>K.reduce((e,l)=>{const a="order"+de(l);return e[a]={type:[String,Number],default:null},e},{}))(),Ve={col:Object.keys(Ye),offset:Object.keys(qe),order:Object.keys(Qe)};function Kt(e,l,a){let t=e;if(!(a==null||a===!1)){if(l){const s=l.replace(e,"");t+=`-${s}`}return e==="col"&&(t="v-"+t),e==="col"&&(a===""||a===!0)||(t+=`-${a}`),t.toLowerCase()}}const Jt=["auto","start","end","center","baseline","stretch"],Wt=b({cols:{type:[Boolean,String,Number],default:!1},...Ye,offset:{type:[String,Number],default:null},...qe,order:{type:[String,Number],default:null},...Qe,alignSelf:{type:String,default:null,validator:e=>Jt.includes(e)},..._(),...B()},"VCol"),X=k()({name:"VCol",props:Wt(),setup(e,l){let{slots:a}=l;const t=m(()=>{const s=[];let o;for(o in Ve)Ve[o].forEach(c=>{const u=e[c],f=Kt(o,c,u);f&&s.push(f)});const i=s.some(c=>c.startsWith("v-col-"));return s.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return Fe(e.tag,{class:[t.value,e.class],style:e.style},(s=a.default)==null?void 0:s.call(a))}}}),ue=["start","end","center"],Xe=["space-between","space-around","space-evenly"];function ve(e,l){return K.reduce((a,t)=>{const s=e+de(t);return a[s]=l(),a},{})}const Yt=[...ue,"baseline","stretch"],Ze=e=>Yt.includes(e),et=ve("align",()=>({type:String,default:null,validator:Ze})),qt=[...ue,...Xe],tt=e=>qt.includes(e),at=ve("justify",()=>({type:String,default:null,validator:tt})),Qt=[...ue,...Xe,"stretch"],nt=e=>Qt.includes(e),lt=ve("alignContent",()=>({type:String,default:null,validator:nt})),_e={align:Object.keys(et),justify:Object.keys(at),alignContent:Object.keys(lt)},Xt={align:"align",justify:"justify",alignContent:"align-content"};function Zt(e,l,a){let t=Xt[e];if(a!=null){if(l){const s=l.replace(e,"");t+=`-${s}`}return t+=`-${a}`,t.toLowerCase()}}const ea=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ze},...et,justify:{type:String,default:null,validator:tt},...at,alignContent:{type:String,default:null,validator:nt},...lt,..._(),...B()},"VRow"),M=k()({name:"VRow",props:ea(),setup(e,l){let{slots:a}=l;const t=m(()=>{const s=[];let o;for(o in _e)_e[o].forEach(i=>{const c=e[i],u=Zt(o,i,c);u&&s.push(u)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return Fe(e.tag,{class:["v-row",t.value,e.class],style:e.style},(s=a.default)==null?void 0:s.call(a))}}}),ta={components:{languageSelect:ut},data:()=>({lang:null,appStore:re()}),methods:{selectLang(){this.appStore.setLang(this.lang)}}};function aa(e,l,a,t,s,o){const i=wt("language-select");return V(),x(We,{class:"fill-height"},{default:d(()=>[n(Oe,{class:"align-center text-center fill-height"},{default:d(()=>[n(M,{class:"d-flex align-center justify-center mb-8"},{default:d(()=>[n(Ee,{"max-width":"300px",width:"50vw",src:vt})]),_:1}),n(M,{class:"d-flex align-center justify-center"},{default:d(()=>[n(X,{cols:"12",md:"4"},{default:d(()=>[n(i,{"onUpdate:modelValue":l[0]||(l[0]=c=>this.lang=c)})]),_:1})]),_:1}),n(M,{class:"d-flex align-center justify-center"},{default:d(()=>[n(X,{cols:"auto"},{default:d(()=>[e.lang?(V(),x(Ut,{key:0,color:"primary",onClick:o.selectLang,"min-width":"228",size:"x-large",target:"_blank",variant:"flat"},{default:d(()=>{var c;return[n(G,{icon:"mdi-chat",size:"large",start:""}),D(" "+q((c=e.lang)==null?void 0:c.start),1)]}),_:1},8,["onClick"])):Q("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}const na=Re(ta,[["render",aa]]);const la=k()({name:"VCardActions",props:_(),setup(e,l){let{slots:a}=l;return Ge({VBtn:{slim:!0,variant:"text"}}),S(()=>{var t;return n("div",{class:["v-card-actions",e.class],style:e.style},[(t=a.default)==null?void 0:t.call(a)])}),{}}}),sa=ce("v-card-subtitle"),ia=ce("v-card-title"),oa=b({appendAvatar:String,appendIcon:L,prependAvatar:String,prependIcon:L,subtitle:String,title:String,..._(),...F()},"VCardItem"),ra=k()({name:"VCardItem",props:oa(),setup(e,l){let{slots:a}=l;return S(()=>{var f;const t=!!(e.prependAvatar||e.prependIcon),s=!!(t||a.prepend),o=!!(e.appendAvatar||e.appendIcon),i=!!(o||a.append),c=!!(e.title||a.title),u=!!(e.subtitle||a.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[s&&n("div",{key:"prepend",class:"v-card-item__prepend"},[a.prepend?n(w,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},a.prepend):t&&n(ke,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[c&&n(ia,{key:"title"},{default:()=>{var y;return[((y=a.title)==null?void 0:y.call(a))??e.title]}}),u&&n(sa,{key:"subtitle"},{default:()=>{var y;return[((y=a.subtitle)==null?void 0:y.call(a))??e.subtitle]}}),(f=a.default)==null?void 0:f.call(a)]),i&&n("div",{key:"append",class:"v-card-item__append"},[a.append?n(w,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},a.append):o&&n(ke,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Z=ce("v-card-text"),ca=b({appendAvatar:String,appendIcon:L,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:L,ripple:{type:[Boolean,Object],default:!0},subtitle:String,text:String,title:String,...ee(),..._(),...F(),...Pe(),...te(),...xe(),...Be(),...Ke(),...ae(),...Ae(),...B(),...U(),...ne({variant:"elevated"})},"VCard"),da=k()({name:"VCard",directives:{Ripple:we},props:ca(),setup(e,l){let{attrs:a,slots:t}=l;const{themeClasses:s}=H(e),{borderClasses:o}=se(e),{colorClasses:i,colorStyles:c,variantClasses:u}=Le(e),{densityClasses:f}=le(e),{dimensionStyles:y}=$e(e),{elevationClasses:$}=ie(e),{loaderClasses:N}=Ne(e),{locationStyles:T}=Te(e),{positionClasses:j}=Je(e),{roundedClasses:p}=oe(e),C=je(e,a),I=m(()=>e.link!==!1&&C.isLink.value),r=m(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return S(()=>{const v=I.value?"a":e.tag,P=!!(t.title||e.title),h=!!(t.subtitle||e.subtitle),R=P||h,J=!!(t.append||e.appendAvatar||e.appendIcon),W=!!(t.prepend||e.prependAvatar||e.prependIcon),g=!!(t.image||e.image),A=R||W||J,Y=!!(t.text||e.text);return De(n(v,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},s.value,o.value,i.value,f.value,$.value,N.value,j.value,p.value,u.value,e.class],style:[c.value,y.value,T.value,e.style],href:C.href.value,onClick:r.value&&C.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var O;return[g&&n("div",{key:"image",class:"v-card__image"},[t.image?n(w,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Ee,{key:"image-img",cover:!0,src:e.image},null)]),n(ft,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),A&&n(ra,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),Y&&n(Z,{key:"text"},{default:()=>{var E;return[((E=t.text)==null?void 0:E.call(t))??e.text]}}),(O=t.default)==null?void 0:O.call(t),t.actions&&n(la,null,{default:t.actions}),pe(r.value,"v-card")]}}),[[Me("ripple"),r.value&&e.ripple]])}),{}}}),ua=b({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...mt()},"VHover"),va=k()({name:"VHover",props:ua(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const t=Lt(e,"modelValue"),{runOpenDelay:s,runCloseDelay:o}=gt(e,i=>!e.disabled&&(t.value=i));return()=>{var i;return(i=a.default)==null?void 0:i.call(a,{isHovering:t.value,props:{onMouseenter:s,onMouseleave:o}})}}}),fa={data:()=>({appStore:re(),activeChat:1,parents:[{id:1,title:"john doe",active:!0},{id:3,title:"scarlett",active:!1},{id:4,title:"scarlett",active:!1},{id:5,title:"scarlett",active:!1},{id:6,title:"scarlett",active:!1},{id:7,title:"scarlett",active:!1},{id:8,title:"scarlett",active:!1},{id:9,title:"scarlett",active:!1},{id:10,title:"scarlett",active:!1},{id:11,title:"scarlett",active:!1},{id:12,title:"scarlett",active:!1},{id:13,title:"scarlett",active:!1},{id:14,title:"scarlett",active:!1}],messages:[{content:"lorem ipsum",me:!0,created_at:"11:11am"},{content:"dolor",me:!1,created_at:"11:11am"},{content:"dolor",me:!1,created_at:"11:11am"},{content:"dolor",me:!1,created_at:"11:11am"},{content:"dolor",me:!0,created_at:"11:11am"},{content:"dolor",me:!1,created_at:"11:12am"},{content:"dolor",me:!1,created_at:"11:14am"}],messageForm:{content:"",me:!0,created_at:"11:11am"}}),methods:{}},ma={class:"ml-2",style:{"font-size":"0.5rem"}};function ga(e,l,a,t,s,o){return V(),x(We,{class:"fill-height pa-0"},{default:d(()=>[n(M,{class:"no-gutters"},{default:d(()=>[n(X,{cols:"auto",class:"flex-grow-1 flex-shrink-0"},{default:d(()=>[e.activeChat?(V(),x(Oe,{key:0,class:"overflow-y-hidden fill-height",height:"500"},{default:d(()=>[n(da,{flat:"",class:"d-flex flex-column fill-height"},{default:d(()=>[n(Z,{class:"flex-grow-1 overflow-y-auto"},{default:d(()=>[(V(!0),Ce($t,null,Nt(e.messages,(i,c)=>(V(),Ce("div",{key:c,class:Tt({"d-flex flex-row-reverse":i.me})},[n(yt,{"offset-y":""},{activator:d(({on:u})=>[n(va,null,{default:d(({hover:f})=>[n(bt,ze({color:i.me?"primary":"",dark:"",style:{height:"auto","white-space":"normal"},class:"pa-4 mb-2"},jt(u)),{default:d(()=>[D(q(i.content)+" ",1),pt("sub",ma,q(i.created_at),1),f?(V(),x(G,{key:0,small:""},{default:d(()=>[D(" expand_more ")]),_:1})):Q("",!0)]),_:2},1040,["color"])]),_:2},1024)]),default:d(()=>[n(kt,null,{default:d(()=>[n(Ct,null,{default:d(()=>[n(ht,null,{default:d(()=>[D("delete")]),_:1})]),_:1})]),_:1})]),_:2},1024)],2))),128))]),_:1}),n(Z,{class:"flex-shrink-1"},{default:d(()=>[n(Vt,{modelValue:e.messageForm.content,"onUpdate:modelValue":l[0]||(l[0]=i=>e.messageForm.content=i),label:"type_a_message",type:"text","no-details":"",outlined:"","append-outer-icon":"send",onKeyup:l[1]||(l[1]=Rt(i=>e.messages.push(e.messageForm),["enter"])),"onClick:appendOuter":l[2]||(l[2]=i=>e.messages.push(e.messageForm)),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})):Q("",!0)]),_:1})]),_:1})]),_:1})}const ya=Re(fa,[["render",ga]]),Ca={__name:"Home",setup(e){const l=re();return(a,t)=>Ot(l).lang?(V(),x(ya,{key:1})):(V(),x(na,{key:0}))}};export{Ca as default};
