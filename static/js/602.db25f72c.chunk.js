"use strict";(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[602],{8634:function(e,r,n){n.d(r,{W:function(){return i}});var t="Container_container__odv7J",s=n(184),i=function(e){var r=e.children;return(0,s.jsx)("div",{className:t,children:r})}},8717:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n(2791),s=n(9434),i=n(5985),a=n(6351),c={useArticle:function(){var e=(0,s.v9)(a.Se),r=(0,s.v9)(a.Lo),n=(0,s.v9)(a.zs);return(0,t.useEffect)((function(){""!==n&&i.Am.error("Houston we have a problem2",{autoClose:3e3})}),[n]),{article:e,isLoading:r,error:n}},useArticles:function(){var e=(0,s.v9)(a.nO),r=(0,s.v9)(a.D4),n=(0,s.v9)(a.xU),c=(0,s.v9)(a.zh);return(0,t.useEffect)((function(){""!==c&&i.Am.error("Houston we have a problem1",{autoClose:3e3})}),[c]),{articles:e,isLoading:n,error:c,visibleArticles:r}}}},6602:function(e,r,n){n.r(r),n.d(r,{Home:function(){return Y}});var t=n(2791),s=n(9434),i=n(1123),a=n(8408),c=n(8717),l=n(1413),o=n(7689),u=n(1087),_=n(458),d=n(9126),f=n(6351),h=n(7972),m="Card_card__X9SVM",x="Card_thumb__5InLN",j="Card_card__box__De0zl",v="Card_card__contentBox__jbr+N",p="Card_card__info__8FqgW",N="Card_card__date__32dy2",C="Card_card__title__YijCA",g="Card_card__description__V52XI",L="Card_card__link__oWoMI",k=n(184),S=function(e){var r=e.articleId,n=e.image,t=e.published,i=e.description,a=e.title,c=(0,o.TH)(),l=(0,s.v9)(f.Gd),S=h.Z.highlightSearchResults(l,h.Z.formatTitle(a)),Z=h.Z.highlightSearchResults(l,i),b=h.Z.formatDate(t);return(0,k.jsxs)("li",{className:m,children:[(0,k.jsx)("div",{className:x,children:(0,k.jsx)("img",{src:n,alt:a})}),(0,k.jsxs)("div",{className:j,children:[(0,k.jsxs)("div",{className:v,children:[(0,k.jsxs)("p",{className:N,children:[(0,k.jsx)(_.v_l,{size:16,style:{color:"currentColor"}}),b]}),(0,k.jsxs)("div",{className:p,children:[(0,k.jsx)("h2",{className:C,children:S}),(0,k.jsx)("p",{className:g,children:Z})]})]}),(0,k.jsxs)(u.rU,{className:L,to:"/".concat(r),state:{from:c},children:[(0,k.jsx)("span",{children:"Read more"}),(0,k.jsx)(d.UE1,{size:28})]})]})]})},Z="CardsList_cardsList__SwzRG",b=function(){var e=(0,s.v9)(f.D4);return(0,k.jsx)("ul",{className:Z,children:e.map((function(e){return(0,k.jsx)(S,(0,l.Z)({},e),e.articleId)}))})},w=n(8634),A=n(9439),y=n(3853),z=n(7993),H=n(6895),I="FilterBar_filter__title__otLAa",F="FilterBar_filter__wrapper__0LT6O",R="FilterBar_filter__input__I2KLR",D="FilterBar_icon__uhDF6",B=function(){var e,r=(0,u.lr)(),n=(0,A.Z)(r,2),i=n[0],a=n[1],c=null!==(e=i.get("search"))&&void 0!==e?e:"",l=(0,s.I0)();return(0,t.useEffect)((function(){l((0,H.G)(c))}),[l,c]),(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)("label",{children:[(0,k.jsx)("span",{className:I,children:"Filter by keywords"}),(0,k.jsxs)("div",{className:F,children:[(0,k.jsx)(y.jRj,{size:20,className:D}),(0,k.jsx)(z.Z,{className:R,type:"search",onChange:function(e){var r=e.target.value.trim().toLowerCase();a(""!==r?{search:r}:{}),l((0,H.G)(c))},value:c,placeholder:"Search news"})]})]})})},W=n(2579),E="SkeletonCard_card__P5K5x",G="SkeletonCard_thumb__e0U0J",T="SkeletonCard_skeletonPicture__NASDk",U="SkeletonCard_skeletonThumb__hXqhR",O="SkeletonCard_contentSkeleton__pW2c5",X=function(){return(0,k.jsxs)("li",{className:E,children:[(0,k.jsx)("div",{className:G,style:{marginBottom:"25px"},children:(0,k.jsx)(W.Z,{className:T})}),(0,k.jsx)("div",{className:U,children:Array(4).fill(0).map((function(e,r){return(0,k.jsx)(W.Z,{className:O},r)}))})]})},P="SkeletonList_cardsList__ofrSN",q=function(){return(0,k.jsx)("ul",{className:P,children:Array(9).fill(0).map((function(e,r){return(0,k.jsx)(X,{},r)}))})},J="Home_home__gTy8v",K="Home_wrapper__hzsWu",M="Home_result__IpNoc",V="Home_result__title__HXm61",Y=function(){var e=(0,s.I0)(),r=c.Z.useArticles(),n=r.isLoading,l=r.error,o=r.visibleArticles;return(0,t.useEffect)((function(){e((0,a.Z)())}),[e]),(0,k.jsx)("section",{className:J,children:(0,k.jsx)(w.W,{children:(0,k.jsxs)("div",{className:K,children:[(0,k.jsx)(B,{}),(0,k.jsxs)("p",{className:M,children:[(0,k.jsx)("span",{className:V,children:"Result:"}),o.length]}),(0,k.jsx)(b,{}),n&&""===l&&(0,k.jsx)(q,{}),0===o.length&&!n&&(0,k.jsx)(i.Z,{style:{margin:"0  auto"},variant:"h3",component:"h2",children:"No matching articles"})]})})})}},6351:function(e,r,n){n.d(r,{D4:function(){return d},Gd:function(){return _},Lo:function(){return u},Se:function(){return l},nO:function(){return i},xU:function(){return a},zh:function(){return c},zs:function(){return o}});var t=n(3433),s=n(6916),i=function(e){return e.articles.articles},a=function(e){return e.articles.isLoading},c=function(e){return e.articles.error},l=function(e){return e.article.article},o=function(e){return e.article.error},u=function(e){return e.article.isLoading},_=function(e){return e.filter},d=(0,s.P1)([i,_],(function(e,r){var n=e.filter((function(e){return e.title.toLowerCase().includes(r)})),s=e.filter((function(e){return e.description.toLowerCase().includes(r)}));return[].concat((0,t.Z)(n),(0,t.Z)(s)).filter((function(e,r,n){return n.indexOf(e)===r}))}))}}]);
//# sourceMappingURL=602.db25f72c.chunk.js.map