import{s as _,o as Ye,c as v,bL as Ze,aY as K,aV as q,bM as C,a_ as ye,G as V,p as x,E as Z,b as me,bk as et,y as k,aA as tt,bN as ge,bO as at,a1 as j,f as E,l as R,q as F,J as $,L as c,N as ee,a9 as nt,aQ as lt,aa as be,ab as it,bP as st,b8 as N,m as Se,aU as he,an as pe,i as ke,k as Ce,ba as rt,n as we,b7 as Ie,aW as ut,bf as ot,w as ct,t as Ae,v as Pe,bc as dt,aZ as Ve,ao as Le,z as Oe,B as Be,bQ as vt,aH as ft,bg as yt,O as oe,aR as ce,ac as de,M as te,a5 as mt,aT as gt,br as O,ay as Me,x as bt,I as St,bH as ht}from"./index-QwITucdh.js";import{V as pt}from"./VDivider-BpN4urLA.js";function kt(){const e=_(!1);return Ye(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ze(e)}}const ae=Symbol.for("vuetify:list");function je(){const e=K(ae,{hasPrepend:_(!1),updateHasPrepend:()=>null}),l={hasPrepend:_(!1),updateHasPrepend:t=>{t&&(l.hasPrepend.value=t)}};return q(ae,l),e}function xe(){return K(ae,null)}const le=e=>{const l={activate:t=>{let{id:a,value:i,activated:n}=t;return a=C(a),e&&!i&&n.size===1&&n.has(a)||(i?n.add(a):n.delete(a)),n},in:(t,a,i)=>{let n=new Set;if(t!=null)for(const s of ye(t))n=l.activate({id:s,value:!0,activated:new Set(n),children:a,parents:i});return n},out:t=>Array.from(t)};return l},Te=e=>{const l=le(e);return{activate:a=>{let{activated:i,id:n,...s}=a;n=C(n);const u=i.has(n)?new Set([n]):new Set;return l.activate({...s,id:n,activated:u})},in:(a,i,n)=>{let s=new Set;if(a!=null){const u=ye(a);u.length&&(s=l.in(u.slice(0,1),i,n))}return s},out:(a,i,n)=>l.out(a,i,n)}},Ct=e=>{const l=le(e);return{activate:a=>{let{id:i,activated:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.activate({id:i,activated:n,children:s,...u})},in:l.in,out:l.out}},wt=e=>{const l=Te(e);return{activate:a=>{let{id:i,activated:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.activate({id:i,activated:n,children:s,...u})},in:l.in,out:l.out}},It={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){const n=new Set;n.add(l);let s=i.get(l);for(;s!=null;)n.add(s),s=i.get(s);return n}else return a.delete(l),a},select:()=>null},_e={open:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(t){let n=i.get(l);for(a.add(l);n!=null&&n!==l;)a.add(n),n=i.get(n);return a}else a.delete(l);return a},select:()=>null},At={open:_e.open,select:e=>{let{id:l,value:t,opened:a,parents:i}=e;if(!t)return a;const n=[];let s=i.get(l);for(;s!=null;)n.push(s),s=i.get(s);return new Set(n)}},ie=e=>{const l={select:t=>{let{id:a,value:i,selected:n}=t;if(a=C(a),e&&!i){const s=Array.from(n.entries()).reduce((u,S)=>{let[f,g]=S;return g==="on"&&u.push(f),u},[]);if(s.length===1&&s[0]===a)return n}return n.set(a,i?"on":"off"),n},in:(t,a,i)=>{let n=new Map;for(const s of t||[])n=l.select({id:s,value:!0,selected:new Map(n),children:a,parents:i});return n},out:t=>{const a=[];for(const[i,n]of t.entries())n==="on"&&a.push(i);return a}};return l},Fe=e=>{const l=ie(e);return{select:a=>{let{selected:i,id:n,...s}=a;n=C(n);const u=i.has(n)?new Map([[n,i.get(n)]]):new Map;return l.select({...s,id:n,selected:u})},in:(a,i,n)=>{let s=new Map;return a!=null&&a.length&&(s=l.in(a.slice(0,1),i,n)),s},out:(a,i,n)=>l.out(a,i,n)}},Pt=e=>{const l=ie(e);return{select:a=>{let{id:i,selected:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.select({id:i,selected:n,children:s,...u})},in:l.in,out:l.out}},Vt=e=>{const l=Fe(e);return{select:a=>{let{id:i,selected:n,children:s,...u}=a;return i=C(i),s.has(i)?n:l.select({id:i,selected:n,children:s,...u})},in:l.in,out:l.out}},Lt=e=>{const l={select:t=>{let{id:a,value:i,selected:n,children:s,parents:u}=t;a=C(a);const S=new Map(n),f=[a];for(;f.length;){const y=f.shift();n.set(C(y),i?"on":"off"),s.has(y)&&f.push(...s.get(y))}let g=C(u.get(a));for(;g;){const y=s.get(g),h=y.every(r=>n.get(C(r))==="on"),b=y.every(r=>!n.has(C(r))||n.get(C(r))==="off");n.set(g,h?"on":b?"off":"indeterminate"),g=C(u.get(g))}return e&&!i&&Array.from(n.entries()).reduce((h,b)=>{let[r,o]=b;return o==="on"&&h.push(r),h},[]).length===0?S:n},in:(t,a,i)=>{let n=new Map;for(const s of t||[])n=l.select({id:s,value:!0,selected:new Map(n),children:a,parents:i});return n},out:(t,a)=>{const i=[];for(const[n,s]of t.entries())s==="on"&&!a.has(n)&&i.push(n);return i}};return l},D=Symbol.for("vuetify:nested"),Ge={id:_(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:V(!1),selectable:V(!1),opened:V(new Set),activated:V(new Set),selected:V(new Map),selectedValues:V([]),getPath:()=>[]}},Ot=x({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Bt=e=>{let l=!1;const t=V(new Map),a=V(new Map),i=Z(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Ct(e.mandatory);case"single-leaf":return wt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":default:return Te(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Vt(e.mandatory);case"leaf":return Pt(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":return Fe(e.mandatory);case"classic":default:return Lt(e.mandatory)}}),u=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return At;case"single":return It;case"multiple":default:return _e}}),S=Z(e,"activated",e.activated,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value)),f=Z(e,"selected",e.selected,r=>s.value.in(r,t.value,a.value),r=>s.value.out(r,t.value,a.value));me(()=>{l=!0});function g(r){const o=[];let d=r;for(;d!=null;)o.unshift(d),d=a.value.get(d);return o}const y=et("nested"),h=new Set,b={id:_(),root:{opened:i,activatable:k(e,"activatable"),selectable:k(e,"selectable"),activated:S,selected:f,selectedValues:v(()=>{const r=[];for(const[o,d]of f.value.entries())d==="on"&&r.push(o);return r}),register:(r,o,d)=>{if(h.has(r)){g(r).map(String).join(" -> "),g(o).concat(r).map(String).join(" -> ");return}else h.add(r);o&&r!==o&&a.value.set(r,o),d&&t.value.set(r,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],r])},unregister:r=>{if(l)return;h.delete(r),t.value.delete(r);const o=a.value.get(r);if(o){const d=t.value.get(o)??[];t.value.set(o,d.filter(p=>p!==r))}a.value.delete(r)},open:(r,o,d)=>{y.emit("click:open",{id:r,value:o,path:g(r),event:d});const p=u.value.open({id:r,value:o,opened:new Set(i.value),children:t.value,parents:a.value,event:d});p&&(i.value=p)},openOnSelect:(r,o,d)=>{const p=u.value.select({id:r,value:o,selected:new Map(f.value),opened:new Set(i.value),children:t.value,parents:a.value,event:d});p&&(i.value=p)},select:(r,o,d)=>{y.emit("click:select",{id:r,value:o,path:g(r),event:d});const p=s.value.select({id:r,value:o,selected:new Map(f.value),children:t.value,parents:a.value,event:d});p&&(f.value=p),b.root.openOnSelect(r,o,d)},activate:(r,o,d)=>{if(!e.activatable)return b.root.select(r,!0,d);y.emit("click:activate",{id:r,value:o,path:g(r),event:d});const p=n.value.activate({id:r,value:o,activated:new Set(S.value),children:t.value,parents:a.value,event:d});p&&(S.value=p)},children:t,parents:a,getPath:g}};return q(D,b),b.root},Ne=(e,l)=>{const t=K(D,Ge),a=Symbol(tt()),i=v(()=>e.value!==void 0?e.value:a),n={...t,id:i,open:(s,u)=>t.root.open(i.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(i.value,s,u),isOpen:v(()=>t.root.opened.value.has(i.value)),parent:v(()=>t.root.parents.value.get(i.value)),activate:(s,u)=>t.root.activate(i.value,s,u),isActivated:v(()=>t.root.activated.value.has(C(i.value))),select:(s,u)=>t.root.select(i.value,s,u),isSelected:v(()=>t.root.selected.value.get(C(i.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(i.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(i.value)),isGroupActivator:t.isGroupActivator};return ge(()=>{!t.isGroupActivator&&t.root.register(i.value,t.id.value,l)}),me(()=>{!t.isGroupActivator&&t.root.unregister(i.value)}),l&&q(D,n),n},Mt=()=>{const e=K(D,Ge);q(D,{...e,isGroupActivator:!0})},jt=at({name:"VListGroupActivator",setup(e,l){let{slots:t}=l;return Mt(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),xt=x({activeColor:String,baseColor:String,color:String,collapseIcon:{type:j,default:"$collapse"},expandIcon:{type:j,default:"$expand"},prependIcon:j,appendIcon:j,fluid:Boolean,subgroup:Boolean,title:String,value:null,...E(),...R()},"VListGroup"),ve=F()({name:"VListGroup",props:xt(),setup(e,l){let{slots:t}=l;const{isOpen:a,open:i,id:n}=Ne(k(e,"value"),!0),s=v(()=>`v-list-group--id-${String(n.value)}`),u=xe(),{isBooted:S}=kt();function f(b){b.stopPropagation(),i(!a.value,b)}const g=v(()=>({onClick:f,class:"v-list-group__header",id:s.value})),y=v(()=>a.value?e.collapseIcon:e.expandIcon),h=v(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return $(()=>c(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&c(ee,{defaults:h.value},{default:()=>[c(jt,null,{default:()=>[t.activator({props:g.value,isOpen:a.value})]})]}),c(nt,{transition:{component:lt},disabled:!S.value},{default:()=>{var b;return[be(c("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(b=t.default)==null?void 0:b.call(t)]),[[it,a.value]])]}})]})),{isOpen:a}}}),Tt=x({opacity:[Number,String],...E(),...R()},"VListItemSubtitle"),_t=F()({name:"VListItemSubtitle",props:Tt(),setup(e,l){let{slots:t}=l;return $(()=>c(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ft=st("v-list-item-title"),Gt=x({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:j,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:N(),onClickOnce:N(),...Se(),...E(),...he(),...pe(),...ke(),...Ce(),...rt(),...R(),...we(),...Ie({variant:"text"})},"VListItem"),fe=F()({name:"VListItem",directives:{Ripple:ut},props:Gt(),emits:{click:e=>!0},setup(e,l){let{attrs:t,slots:a,emit:i}=l;const n=ot(e,t),s=v(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:S,select:f,isOpen:g,isSelected:y,isIndeterminate:h,isGroupActivator:b,root:r,parent:o,openOnSelect:d,id:p}=Ne(s,!1),I=xe(),L=v(()=>{var m;return e.active!==!1&&(e.active||((m=n.isActive)==null?void 0:m.value)||(r.activatable.value?S.value:y.value))}),G=v(()=>e.link!==!1&&n.isLink.value),B=v(()=>!!I&&(r.selectable.value||r.activatable.value||e.value!=null)),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||B.value)),z=v(()=>e.rounded||e.nav),Q=v(()=>e.color??e.activeColor),W=v(()=>({color:L.value?Q.value??e.baseColor:e.baseColor,variant:e.variant}));ct(()=>{var m;return(m=n.isActive)==null?void 0:m.value},m=>{m&&U()}),ge(()=>{var m;(m=n.isActive)!=null&&m.value&&U()});function U(){o.value!=null&&r.open(o.value,!0),d(!0)}const{themeClasses:J}=Ae(e),{borderClasses:M}=Pe(e),{colorClasses:w,colorStyles:T,variantClasses:$e}=dt(W),{densityClasses:Ue}=Ve(e),{dimensionStyles:He}=Le(e),{elevationClasses:Ke}=Oe(e),{roundedClasses:qe}=Be(z),ze=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),X=v(()=>({isActive:L.value,select:f,isOpen:g.value,isSelected:y.value,isIndeterminate:h.value}));function Qe(m){var H;i("click",m),A.value&&((H=n.navigate)==null||H.call(n,m),!b&&(r.activatable.value?u(!S.value,m):(r.selectable.value||e.value!=null)&&f(!y.value,m)))}function We(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.target.dispatchEvent(new MouseEvent("click",m)))}return $(()=>{const m=G.value?"a":e.tag,H=a.title||e.title!=null,Je=a.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),Xe=!!(se||a.append),re=!!(e.prependAvatar||e.prependIcon),Y=!!(re||a.prepend);return I==null||I.updateHasPrepend(Y),e.activeColor&&vt("active-color",["color","base-color"]),be(c(m,te({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Y&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},J.value,M.value,w.value,Ue.value,Ke.value,ze.value,qe.value,$e.value,e.class],style:[T.value,He.value,e.style],tabindex:A.value?I?-2:0:void 0,"aria-selected":B.value?r.activatable.value?S.value:r.selectable.value?y.value:L.value:void 0,onClick:Qe,onKeydown:A.value&&!G.value&&We},n.linkProps),{default:()=>{var ue;return[yt(A.value||L.value,"v-list-item"),Y&&c("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?c(ee,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=a.prepend)==null?void 0:P.call(a,X.value)]}}):c(oe,null,[e.prependAvatar&&c(ce,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&c(de,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),c("div",{class:"v-list-item__spacer"},null)]),c("div",{class:"v-list-item__content","data-no-activator":""},[H&&c(Ft,{key:"title"},{default:()=>{var P;return[((P=a.title)==null?void 0:P.call(a,{title:e.title}))??e.title]}}),Je&&c(_t,{key:"subtitle"},{default:()=>{var P;return[((P=a.subtitle)==null?void 0:P.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=a.default)==null?void 0:ue.call(a,X.value)]),Xe&&c("div",{key:"append",class:"v-list-item__append"},[a.append?c(ee,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=a.append)==null?void 0:P.call(a,X.value)]}}):c(oe,null,[e.appendIcon&&c(de,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&c(ce,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),c("div",{class:"v-list-item__spacer"},null)])]}}),[[ft("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:S,isGroupActivator:b,isSelected:y,list:I,select:f,root:r,id:p}}}),Nt=x({color:String,inset:Boolean,sticky:Boolean,title:String,...E(),...R()},"VListSubheader"),Dt=F()({name:"VListSubheader",props:Nt(),setup(e,l){let{slots:t}=l;const{textColorClasses:a,textColorStyles:i}=mt(k(e,"color"));return $(()=>{const n=!!(t.default||e.title);return c(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:i},e.style]},{default:()=>{var s;return[n&&c("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Et=x({items:Array,returnObject:Boolean},"VListChildren"),De=F()({name:"VListChildren",props:Et(),setup(e,l){let{slots:t}=l;return je(),()=>{var a,i;return((a=t.default)==null?void 0:a.call(t))??((i=e.items)==null?void 0:i.map(n=>{var h,b;let{children:s,props:u,type:S,raw:f}=n;if(S==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:u}))??c(pt,u,null);if(S==="subheader")return((b=t.subheader)==null?void 0:b.call(t,{props:u}))??c(Dt,u,null);const g={subtitle:t.subtitle?r=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...r,item:f})}:void 0,prepend:t.prepend?r=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...r,item:f})}:void 0,append:t.append?r=>{var o;return(o=t.append)==null?void 0:o.call(t,{...r,item:f})}:void 0,title:t.title?r=>{var o;return(o=t.title)==null?void 0:o.call(t,{...r,item:f})}:void 0},y=ve.filterProps(u);return s?c(ve,te({value:u==null?void 0:u.value},y),{activator:r=>{let{props:o}=r;const d={...u,...o,value:e.returnObject?f:u.value};return t.header?t.header({props:d}):c(fe,d,g)},default:()=>c(De,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):c(fe,te(u,{value:e.returnObject?f:u.value}),g)}))}}}),Rt=x({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:gt}},"list-items");function ne(e,l){const t=O(l,e.itemTitle,l),a=O(l,e.itemValue,t),i=O(l,e.itemChildren),n=e.itemProps===!0?typeof l=="object"&&l!=null&&!Array.isArray(l)?"children"in l?Me(l,["children"]):l:void 0:O(l,e.itemProps),s={title:t,value:a,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(i)?Ee(e,i):void 0,raw:l}}function Ee(e,l){const t=[];for(const a of l)t.push(ne(e,a));return t}function Qt(e){const l=v(()=>Ee(e,e.items)),t=v(()=>l.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(s=>s!==null)),n.map(s=>e.returnObject&&typeof s=="string"?ne(e,s):l.value.find(u=>e.valueComparator(s,u.value))||ne(e,s))}function i(n){return e.returnObject?n.map(s=>{let{raw:u}=s;return u}):n.map(s=>{let{value:u}=s;return u})}return{items:l,transformIn:a,transformOut:i}}function $t(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Ut(e,l){const t=O(l,e.itemType,"item"),a=$t(l)?l:O(l,e.itemTitle),i=O(l,e.itemValue,void 0),n=O(l,e.itemChildren),s=e.itemProps===!0?Me(l,["children"]):O(l,e.itemProps),u={title:a,value:i,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?Re(e,n):void 0,raw:l}}function Re(e,l){const t=[];for(const a of l)t.push(Ut(e,a));return t}function Ht(e){return{items:v(()=>Re(e,e.items))}}const Kt=x({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:j,collapseIcon:j,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":N(),"onClick:select":N(),"onUpdate:opened":N(),...Ot({selectStrategy:"single-leaf",openStrategy:"list"}),...Se(),...E(),...he(),...pe(),...ke(),itemType:{type:String,default:"type"},...Rt(),...Ce(),...R(),...we(),...Ie({variant:"text"})},"VList"),Wt=F()({name:"VList",props:Kt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,l){let{slots:t}=l;const{items:a}=Ht(e),{themeClasses:i}=Ae(e),{backgroundColorClasses:n,backgroundColorStyles:s}=bt(k(e,"bgColor")),{borderClasses:u}=Pe(e),{densityClasses:S}=Ve(e),{dimensionStyles:f}=Le(e),{elevationClasses:g}=Oe(e),{roundedClasses:y}=Be(e),{children:h,open:b,parents:r,select:o,getPath:d}=Bt(e),p=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=k(e,"activeColor"),L=k(e,"baseColor"),G=k(e,"color");je(),St({VListGroup:{activeColor:I,baseColor:L,color:G,expandIcon:k(e,"expandIcon"),collapseIcon:k(e,"collapseIcon")},VListItem:{activeClass:k(e,"activeClass"),activeColor:I,baseColor:L,color:G,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),slim:k(e,"slim"),variant:k(e,"variant")}});const B=_(!1),A=V();function z(w){B.value=!0}function Q(w){B.value=!1}function W(w){var T;!B.value&&!(w.relatedTarget&&((T=A.value)!=null&&T.contains(w.relatedTarget)))&&M()}function U(w){const T=w.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(T.tagName))){if(w.key==="ArrowDown")M("next");else if(w.key==="ArrowUp")M("prev");else if(w.key==="Home")M("first");else if(w.key==="End")M("last");else return;w.preventDefault()}}function J(w){B.value=!0}function M(w){if(A.value)return ht(A.value,w)}return $(()=>c(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},i.value,n.value,u.value,S.value,g.value,p.value,y.value,e.class],style:[s.value,f.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:z,onFocusout:Q,onFocus:W,onKeydown:U,onMousedown:J},{default:()=>[c(De,{items:a.value,returnObject:e.returnObject},t)]})),{open:b,select:o,focus:M,children:h,parents:r,getPath:d}}});export{Wt as V,fe as a,Qt as b,Rt as m,kt as u};
