import{r as n,o as s,g as u,w as t,d as e,aD as c,al as p,aE as g,a4 as r,a6 as o,a2 as y,bX as d,a3 as f}from"./index-DRo01goh.js";const m={style:{height:"110px"}},_={__name:"ProductCard",props:{_id:{type:String,default:""},name:{type:String,default:""},price:{type:Number,default:0},image:{type:String,default:""},description:{type:String,default:""},category:{type:String,default:""}},setup(a){return(i,h)=>{const l=n("router-link");return s(),u(l,{to:"/product/"+a._id,style:{color:"white","text-decoration":"none"}},{default:t(()=>[e(c,{style:{"text-align":"center"}},{default:t(()=>[e(p,{src:a.image,height:"300px",cover:""},null,8,["src"]),e(g,null,{default:t(()=>[r(o(a.name),1)]),_:1}),y("div",m,[e(d,null,{default:t(()=>[r(o(i.$t("productCategory."+a.category)),1)]),_:1}),e(d,{style:{"font-size":"20px",color:"aqua"}},{default:t(()=>[r(o("$"+a.price),1)]),_:1}),e(f,{type:"submit","prepend-icon":"mdi-cart",loading:i.isSubmitting,height:"45px",style:{border:"1px solid aqua","border-radius":"30px"}},{default:t(()=>[r(o(i.$t("product.addCart")),1)]),_:1},8,["loading"])])]),_:1})]),_:1},8,["to"])}}};export{_};
