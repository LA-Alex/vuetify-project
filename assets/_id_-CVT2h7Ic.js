import{_ as B}from"./ProductCard-DGYSRXSJ.js";import{bJ as F,a1 as R,u as N,a as Q,a0 as z,h as b,o as p,b as V,d as t,w as s,a2 as c,a6 as r,al as E,e as d,aC as M,aB as j,a3 as A,a4 as D,F as x,f as L,bx as O,aa as T,g as U,z as J}from"./index-DRo01goh.js";import{c as G,b as H,u as K,e as W}from"./index.esm-CMBA9txL.js";import{b as w}from"./route-block-B_A1xBdJ.js";import{V as C,a as i}from"./VRow-ePvUHA-6.js";import{V as X}from"./VDivider-BIgOoLQZ.js";import{V as Y}from"./VForm-Jwf8f-Vu.js";import{V as k}from"./VContainer-CPBjaDTK.js";const Z={class:"text-center"},ee={style:{"font-size":"30px"}},te={class:"ma-10"},ae={style:{"margin-bottom":"10px"}},se={style:{"font-size":"20px"},class:"ma-3"},oe={class:"text-center my-5"},re={class:"text-center"},ne={__name:"[id]",setup(ce){const{api:f,apiAuth:S}=T(),$=F(),_=R(),{t:u}=N(),g=Q(),y=z(),o=b({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:""});(async()=>{try{const{data:e}=await f.get("/product/"+$.params.id);o.value=e.result,document.title=o.value.name+" | 購物網站"}catch(e){console.log(e),_.push("/")}})();const q=G({quantity:H().typeError(u("product.addCartQuantityInvalid")).required(u("product.addCartQuantityInvalid")).positive(u("product.addCartQuantityInvalid")).integer(u("product.addCartQuantityInvalid"))}),{handleSubmit:P,isSubmitting:h}=K({validationSchema:q,initialValues:{quantity:1}}),m=W("quantity"),I=P(async e=>{var n,l;if(!g.isLoggedIn){_.push("/login");return}try{const{data:a}=await S.patch("/user/cart",{product:o.value._id,quantity:e.quantity});g.cart=a.result,y({text:u("product.addCartSuccess"),snackbarProps:{color:"green"}})}catch(a){console.log(a),y({text:u("api."+(((l=(n=a==null?void 0:a.response)==null?void 0:n.data)==null?void 0:l.message)||"unknownError")),snackbarProps:{color:"red"}})}}),v=b([]);return(async()=>{try{const{data:e}=await f.get("/product");v.value=e.result.filter(n=>n._id!==o.value._id).slice(0,4)}catch(e){console.log(e)}})(),(e,n)=>{const l=B;return p(),V(x,null,[t(k,{width:"70%"},{default:s(()=>[t(C,null,{default:s(()=>[t(i,{cols:"12"},{default:s(()=>[c("h1",Z,r(o.value.name),1)]),_:1}),t(X),t(i,{cols:"12",md:"6"},{default:s(()=>[t(E,{src:o.value.image,width:"100%",height:"500px",style:{"object-fit":"cover"}},null,8,["src"])]),_:1}),t(i,{cols:"12",md:"6",class:"text-center"},{default:s(()=>[c("h3",ee,r(e.$t("product.introduce")),1),c("p",te,r(o.value.description),1),c("p",ae,r(e.$t("productCategory."+o.value.category)),1),t(Y,{disabled:d(h),onSubmit:M(d(I),["prevent"])},{default:s(()=>[t(j,{modelValue:d(m).value.value,"onUpdate:modelValue":n[0]||(n[0]=a=>d(m).value.value=a),modelModifiers:{number:!0},type:"number","error-messages":d(m).errorMessage.value},null,8,["modelValue","error-messages"]),c("p",se,r("$"+o.value.price),1),t(A,{type:"submit","prepend-icon":"mdi-cart",loading:d(h),style:{border:"1px solid aqua","border-radius":"30px",width:"40%"}},{default:s(()=>[D(r(e.$t("product.addCart")),1)]),_:1},8,["loading"])]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})]),_:1}),t(k,{width:"70%"},{default:s(()=>[c("h2",oe,r(e.$t("product.maybe")),1),t(C,null,{default:s(()=>[(p(!0),V(x,null,L(v.value,a=>(p(),U(i,{key:a._id,cols:"12",md:"3",lg:"3"},{default:s(()=>[t(l,J({ref_for:!0},a),null,16)]),_:2},1024))),128))]),_:1})]),_:1}),t(O,{"model-value":!o.value.sell,class:"align-center justify-center",scrim:"black",opacity:"0.8",persistent:""},{default:s(()=>[c("h1",re,r(e.$t("api.productNotOnSell")),1)]),_:1},8,["model-value"])],64)}}};typeof w=="function"&&w(ne);export{ne as default};
