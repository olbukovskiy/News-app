"use strict";(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[64],{8634:function(e,r,s){s.d(r,{W:function(){return t}});var a="Container_container__MM274",n=s(184),t=function(e){var r=e.children;return(0,n.jsx)("div",{className:a,children:r})}},1287:function(e,r,s){s.d(r,{a:function(){return p}});var a="Loader_spinnerBackdrop__qFAzs",n="Loader_loading__BtKRp",t="Loader_loadingWrapper__A5U-l",i="Loader_dot1__yV-WC",c="Loader_dot2__jmekM",l="Loader_dot3__yZ5Qw",o="Loader_dot4__IYedm",_="Loader_dot5__9K-M2",d="Loader_dot6__5A6dx",u="Loader_dot7__W46o-",f="Loader_dot8__7J-lV",m="Loader_dot9__0nxqM",h="Loader_dot10__XKQ3K",x="Loader_dot11__CENKf",j=s(184),p=function(){return(0,j.jsx)("div",{className:a,children:(0,j.jsxs)("div",{className:t,children:[(0,j.jsx)("span",{className:i}),(0,j.jsx)("span",{className:c}),(0,j.jsx)("span",{className:l}),(0,j.jsx)("span",{className:o}),(0,j.jsx)("span",{className:_}),(0,j.jsx)("span",{className:d}),(0,j.jsx)("span",{className:u}),(0,j.jsx)("span",{className:f}),(0,j.jsx)("span",{className:m}),(0,j.jsx)("span",{className:h}),(0,j.jsx)("span",{className:x}),(0,j.jsx)("p",{className:n,children:"Loading"})]})})}},325:function(e,r,s){s.d(r,{V:function(){return c}});var a=s(2791),n=s(9434),t=s(5206),i=s(6351),c=function(){var e=(0,n.v9)(i.xU),r=(0,n.v9)(i.zh),s=(0,n.v9)(i.Lo),c=(0,n.v9)(i.zs);return(0,a.useEffect)((function(){""!==r&&t.Am.error("Houston we have a problem1",{autoClose:3e3})}),[r]),(0,a.useEffect)((function(){""!==c&&t.Am.error("Houston we have a problem2",{autoClose:3e3})}),[c]),{isLoading:e,isError:r,isArticleError:c,isArticleLoading:s}}},1064:function(e,r,s){s.r(r),s.d(r,{Home:function(){return W}});var a=s(2791),n=s(9434),t=s(325),i=s(1123),c=s(6351),l=s(8408),o=s(1413),_=s(7689),d=s(1087),u=s(458),f=s(9126),m=s(7972),h="Card_card__zQfcO",x="Card_thumb__rqUeD",j="Card_card__box__nL9hM",p="Card_card__contentBox__M4yc4",N="Card_card__info__uew+x",v="Card_card__date__U944D",L="Card_card__title__JEBsG",g="Card_card__description__GRyKP",C="Card_card__link__jaMbu",w=s(184),Z=function(e){var r=e.articleId,s=e.image,a=e.published,t=e.description,i=e.title,l=(0,_.TH)(),o=(0,n.v9)(c.Gd),Z=m.Z.highlightSearchResults(o,m.Z.formatTitle(i)),S=m.Z.highlightSearchResults(o,t),b=m.Z.formatDate(a);return(0,w.jsxs)("li",{className:h,children:[(0,w.jsx)("div",{className:x,children:(0,w.jsx)("img",{src:s,alt:i})}),(0,w.jsxs)("div",{className:j,children:[(0,w.jsxs)("div",{className:p,children:[(0,w.jsxs)("p",{className:v,children:[(0,w.jsx)(u.v_l,{size:16,style:{color:"currentColor"}}),b]}),(0,w.jsxs)("div",{className:N,children:[(0,w.jsx)("h2",{className:L,children:Z}),(0,w.jsx)("p",{className:g,children:S})]})]}),(0,w.jsxs)(d.rU,{className:C,to:"/".concat(r),state:{from:l},children:[(0,w.jsx)("span",{children:"Read more"}),(0,w.jsx)(f.UE1,{size:28})]})]})]})},S="CardsList_cardsList__clBcs",b=function(){var e=(0,n.v9)(c.D4);return(0,w.jsx)("ul",{className:S,children:e.map((function(e){return(0,w.jsx)(Z,(0,o.Z)({},e),e.articleId)}))})},y=s(8634),z=s(9439),B=s(3853),E=s(7993),H=s(6895),k="FilterBar_filter__title__d9JNt",M="FilterBar_filter__wrapper__ZUQ5H",U="FilterBar_filter__input__j22x1",A="FilterBar_icon__62Pw6",F=function(){var e,r=(0,d.lr)(),s=(0,z.Z)(r,2),a=s[0],t=s[1],i=null!==(e=a.get("search"))&&void 0!==e?e:"",c=(0,n.I0)();return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("label",{children:[(0,w.jsx)("span",{className:k,children:"Filter by keywords"}),(0,w.jsxs)("div",{className:M,children:[(0,w.jsx)(B.jRj,{size:20,className:A}),(0,w.jsx)(E.Z,{className:U,type:"search",onChange:function(e){var r=e.target.value.trim().toLowerCase();t(""!==r?{search:r}:{}),c((0,H.G)(r))},value:i,placeholder:"Search news"})]})]})})},K=s(1287),R="Home_home__9Ke73",D="Home_wrapper__53Los",G="Home_result__l+nNJ",I="Home_result__title__ds97-",W=function(){var e=(0,n.I0)(),r=(0,n.v9)(c.D4),s=(0,t.V)(),o=s.isLoading,_=s.isError;return(0,a.useEffect)((function(){e((0,l.Z)())}),[e]),(0,w.jsx)("section",{className:R,children:(0,w.jsx)(y.W,{children:(0,w.jsxs)("div",{className:D,children:[(0,w.jsx)(F,{}),(0,w.jsxs)("p",{className:G,children:[(0,w.jsx)("span",{className:I,children:"Result:"}),r.length]}),(0,w.jsx)(b,{}),0===r.length&&(0,w.jsx)(i.Z,{style:{margin:"0  auto"},variant:"h3",component:"h2",children:"No matching articles"}),o&&""===_&&(0,w.jsx)(K.a,{})]})})})}},6351:function(e,r,s){s.d(r,{D4:function(){return d},Gd:function(){return t},Lo:function(){return _},Se:function(){return l},xU:function(){return i},zh:function(){return c},zs:function(){return o}});var a=s(3433),n=s(6916),t=function(e){return e.filterSlice},i=function(e){return e.articlesSlice.isLoading},c=function(e){return e.articlesSlice.error},l=function(e){return e.articleSlice.article},o=function(e){return e.articleSlice.error},_=function(e){return e.articleSlice.isLoading},d=(0,n.P1)([function(e){return e.articlesSlice.articles},t],(function(e,r){var s=e.filter((function(e){return e.title.toLowerCase().includes(r)})),n=e.filter((function(e){return e.description.toLowerCase().includes(r)}));return[].concat((0,a.Z)(s),(0,a.Z)(n)).filter((function(e,r,s){return s.indexOf(e)===r}))}))}}]);
//# sourceMappingURL=64.b44625bb.chunk.js.map