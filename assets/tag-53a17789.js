import{p as B,a9 as H,A as E,af as se,a3 as W,a6 as ue,ao as D,aq as X,U as N,l,aa as z,N as T,a4 as _,H as G,z as $,ab as ie,G as le,aP as re,aQ as ce}from"./index-10827728.js";const pe=B({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function me(e){const s=H("useRender");s.render=e}function ve(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const v=E(),i=E();if(se){const o=new ResizeObserver(a=>{e==null||e(a,o),a.length&&(s==="content"?i.value=a[0].contentRect:i.value=a[0].target.getBoundingClientRect())});W(()=>{o.disconnect()}),ue(v,(a,r)=>{r&&(o.unobserve(D(r)),i.value=void 0),a&&o.observe(D(a))},{flush:"post"})}return{resizeRef:v,contentRect:X(i)}}const A=Symbol.for("vuetify:layout"),Q=Symbol.for("vuetify:layout-item"),F=1e3,ge=B({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),he=B({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ie(){const e=N(A);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function be(e){const s=N(A);if(!s)throw new Error("[Vuetify] Could not find injected layout");const v=e.id??`layout-item-${le()}`,i=H("useLayoutItem");G(Q,{id:v});const o=T(!1);re(()=>o.value=!0),ce(()=>o.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:r}=s.register(i,{...e,active:l(()=>o.value?!1:e.active.value),id:v});return W(()=>s.unregister(v)),{layoutItemStyles:a,layoutRect:s.layoutRect,layoutItemScrimStyles:r}}const de=(e,s,v,i)=>{let o={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...o}}];for(const r of e){const p=s.get(r),g=v.get(r),L=i.get(r);if(!p||!g||!L)continue;const h={...o,[p.value]:parseInt(o[p.value],10)+(L.value?parseInt(g.value,10):0)};a.push({id:r,layer:h}),o=h}return a};function Se(e){const s=N(A,null),v=l(()=>s?s.rootZIndex.value-100:F),i=E([]),o=z(new Map),a=z(new Map),r=z(new Map),p=z(new Map),g=z(new Map),{resizeRef:L,contentRect:h}=ve(),Y=l(()=>{const n=new Map,d=e.overlaps??[];for(const t of d.filter(c=>c.includes(":"))){const[c,u]=t.split(":");if(!i.value.includes(c)||!i.value.includes(u))continue;const y=o.get(c),m=o.get(u),x=a.get(c),R=a.get(u);!y||!m||!x||!R||(n.set(u,{position:y.value,amount:parseInt(x.value,10)}),n.set(c,{position:m.value,amount:-parseInt(R.value,10)}))}return n}),I=l(()=>{const n=[...new Set([...r.values()].map(t=>t.value))].sort((t,c)=>t-c),d=[];for(const t of n){const c=i.value.filter(u=>{var y;return((y=r.get(u))==null?void 0:y.value)===t});d.push(...c)}return de(d,o,a,p)}),j=l(()=>!Array.from(g.values()).some(n=>n.value)),b=l(()=>I.value[I.value.length-1].layer),k=l(()=>({"--v-layout-left":$(b.value.left),"--v-layout-right":$(b.value.right),"--v-layout-top":$(b.value.top),"--v-layout-bottom":$(b.value.bottom),...j.value?void 0:{transition:"none"}})),S=l(()=>I.value.slice(1).map((n,d)=>{let{id:t}=n;const{layer:c}=I.value[d],u=a.get(t),y=o.get(t);return{id:t,...c,size:Number(u.value),position:y.value}})),U=n=>S.value.find(d=>d.id===n),O=H("createLayout"),q=T(!1);_(()=>{q.value=!0}),G(A,{register:(n,d)=>{let{id:t,order:c,position:u,layoutSize:y,elementSize:m,active:x,disableTransitions:R,absolute:te}=d;r.set(t,c),o.set(t,u),a.set(t,y),p.set(t,x),R&&g.set(t,R);const K=ie(Q,O==null?void 0:O.vnode).indexOf(n);K>-1?i.value.splice(K,0,t):i.value.push(t);const V=l(()=>S.value.findIndex(w=>w.id===t)),P=l(()=>v.value+I.value.length*2-V.value*2),oe=l(()=>{const w=u.value==="left"||u.value==="right",C=u.value==="right",ae=u.value==="bottom",Z={[u.value]:0,zIndex:P.value,transform:`translate${w?"X":"Y"}(${(x.value?0:-110)*(C||ae?-1:1)}%)`,position:te.value||v.value!==F?"absolute":"fixed",...j.value?void 0:{transition:"none"}};if(!q.value)return Z;const f=S.value[V.value];if(!f)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const M=Y.value.get(t);return M&&(f[M.position]+=M.amount),{...Z,height:w?`calc(100% - ${f.top}px - ${f.bottom}px)`:m.value?`${m.value}px`:void 0,left:C?void 0:`${f.left}px`,right:C?`${f.right}px`:void 0,top:u.value!=="bottom"?`${f.top}px`:void 0,bottom:u.value!=="top"?`${f.bottom}px`:void 0,width:w?m.value?`${m.value}px`:void 0:`calc(100% - ${f.left}px - ${f.right}px)`}}),ne=l(()=>({zIndex:P.value-1}));return{layoutItemStyles:oe,layoutItemScrimStyles:ne,zIndex:P}},unregister:n=>{r.delete(n),o.delete(n),a.delete(n),p.delete(n),g.delete(n),i.value=i.value.filter(d=>d!==n)},mainRect:b,mainStyles:k,getLayoutItem:U,items:S,layoutRect:h,rootZIndex:v});const J=l(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ee=l(()=>({zIndex:s?v.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:J,layoutStyles:ee,getLayoutItem:U,items:S,layoutRect:h,layoutRef:L}}function xe(){const e=T(!1);return _(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:l(()=>e.value?void 0:{transition:"none !important"}),isBooted:X(e)}}const Re=B({tag:{type:String,default:"div"}},"tag");export{Re as a,xe as b,me as c,ge as d,Se as e,ve as f,he as g,be as h,pe as m,Ie as u};
