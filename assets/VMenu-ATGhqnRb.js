import{p as L,av as M,bu as S,bf as O,n as K,q as U,ai as N,af as z,ax as B,c as w,h as j,aR as F,bv as E,s as H,aN as q,l as W,bw as Y,ap as $,a_ as A,j as G,aY as k,z as V,y as J,bx as P,d as h,am as Q,bi as X,by as Z,bz as _,bA as g}from"./index-DRo01goh.js";const ee=L({id:String,submenu:Boolean,...M(S({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:O}}),["absolute"])},"VMenu"),ae=K()({name:"VMenu",props:ee(),emits:{"update:modelValue":a=>!0},setup(a,x){let{slots:c}=x;const s=U(a,"modelValue"),{scopeId:p}=N(),{isRtl:f}=z(),d=B(),m=w(()=>a.id||`v-menu-${d}`),o=j(),n=F(E,null),v=H(new Set);q(E,{register(){v.value.add(d)},unregister(){v.value.delete(d)},closeParents(e){setTimeout(()=>{var t;!v.value.size&&!a.persistent&&(e==null||(t=o.value)!=null&&t.contentEl&&!Z(e,o.value.contentEl))&&(s.value=!1,n==null||n.closeParents())},40)}}),W(()=>{n==null||n.unregister(),document.removeEventListener("focusin",y)}),Y(()=>s.value=!1);async function y(e){var u,r,i;const t=e.relatedTarget,l=e.target;await $(),s.value&&t!==l&&((u=o.value)!=null&&u.contentEl)&&((r=o.value)!=null&&r.globalTop)&&![document,o.value.contentEl].includes(l)&&!o.value.contentEl.contains(l)&&((i=A(o.value.contentEl)[0])==null||i.focus())}G(s,e=>{e?(n==null||n.register(),k&&document.addEventListener("focusin",y,{once:!0})):(n==null||n.unregister(),k&&document.removeEventListener("focusin",y))},{immediate:!0});function C(e){n==null||n.closeParents(e)}function D(e){var t,l,u,r,i;if(!a.disabled)if(e.key==="Tab"||e.key==="Enter"&&!a.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),_(A((t=o.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",I=>I.tabIndex>=0)||(s.value=!1,(u=(l=o.value)==null?void 0:l.activatorEl)==null||u.focus())}else a.submenu&&e.key===(f.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(i=(r=o.value)==null?void 0:r.activatorEl)==null||i.focus())}function b(e){var l;if(a.disabled)return;const t=(l=o.value)==null?void 0:l.contentEl;t&&s.value?e.key==="ArrowDown"?(e.preventDefault(),e.stopImmediatePropagation(),g(t,"next")):e.key==="ArrowUp"?(e.preventDefault(),e.stopImmediatePropagation(),g(t,"prev")):a.submenu&&(e.key===(f.value?"ArrowRight":"ArrowLeft")?s.value=!1:e.key===(f.value?"ArrowLeft":"ArrowRight")&&(e.preventDefault(),g(t,"first"))):(a.submenu?e.key===(f.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(e.key))&&(s.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>b(e))))}const R=w(()=>V({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":m.value,onKeydown:b},a.activatorProps));return J(()=>{const e=P.filterProps(a);return h(P,V({ref:o,id:m.value,class:["v-menu",a.class],style:a.style},e,{modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,absolute:!0,activatorProps:R.value,location:a.location??(a.submenu?"end":"bottom"),"onClick:outside":C,onKeydown:D},p),{activator:c.activator,default:function(){for(var t=arguments.length,l=new Array(t),u=0;u<t;u++)l[u]=arguments[u];return h(Q,{root:"VMenu"},{default:()=>{var r;return[(r=c.default)==null?void 0:r.call(c,...l)]}})}})}),X({id:m,ΨopenChildren:v},o)}});export{ae as V};
