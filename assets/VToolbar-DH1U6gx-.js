import{p as x,B as y,E as T,n as V,y as k,d as a,T as R,U as E,D as H,G as D,J as w,x as U,X as j,Y as F,K as G,W as J,af as K,s as W,c as h,aj as X,al as Y,am as u,_ as n,aI as $}from"./index-DRo01goh.js";const q=x({text:String,...y(),...T()},"VToolbarTitle"),z=V()({name:"VToolbarTitle",props:q(),setup(e,o){let{slots:t}=o;return k(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),A=[null,"prominent","default","comfortable","compact"],L=x({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>A.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...R(),...y(),...E(),...H(),...T({tag:"header"}),...D()},"VToolbar"),O=V()({name:"VToolbar",props:L(),setup(e,o){var c;let{slots:t}=o;const{backgroundColorClasses:s,backgroundColorStyles:l}=w(U(e,"color")),{borderClasses:_}=j(e),{elevationClasses:C}=F(e),{roundedClasses:B}=G(e),{themeClasses:P}=J(e),{rtlClasses:S}=K(),i=W(!!(e.extended||(c=t.extension)!=null&&c.call(t))),d=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return X({VBtn:{variant:"text"}}),k(()=>{var g;const N=!!(e.title||t.title),I=!!(t.image||e.image),m=(g=t.extension)==null?void 0:g.call(t);return i.value=!!(e.extended||m),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,S.value,e.class],style:[l.value,e.style]},{default:()=>[I&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(Y,{key:"image-img",cover:!0,src:e.image},null)]),a(u,{defaults:{VTabs:{height:n(d.value)}}},{default:()=>{var v,b,f;return[a("div",{class:"v-toolbar__content",style:{height:n(d.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),N&&a(z,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(f=t.append)==null?void 0:f.call(t)])])]}}),a(u,{defaults:{VTabs:{height:n(r.value)}}},{default:()=>[a($,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:n(r.value)}},[m])]})]})]})}),{contentHeight:d,extensionHeight:r}}});export{O as V,L as m};
