"use strict";(self.webpackChunknews_app=self.webpackChunknews_app||[]).push([[910],{8634:function(e,r,t){t.d(r,{W:function(){return n}});var a="Container_container__MM274",s=t(184),n=function(e){var r=e.children;return(0,s.jsx)("div",{className:a,children:r})}},1287:function(e,r,t){t.d(r,{a:function(){return j}});var a="Loader_spinnerBackdrop__qFAzs",s="Loader_loading__BtKRp",n="Loader_loadingWrapper__A5U-l",i="Loader_dot1__yV-WC",c="Loader_dot2__jmekM",l="Loader_dot3__yZ5Qw",o="Loader_dot4__IYedm",_="Loader_dot5__9K-M2",d="Loader_dot6__5A6dx",u="Loader_dot7__W46o-",h="Loader_dot8__7J-lV",p="Loader_dot9__0nxqM",f="Loader_dot10__XKQ3K",m="Loader_dot11__CENKf",x=t(184),j=function(){return(0,x.jsx)("div",{className:a,children:(0,x.jsxs)("div",{className:n,children:[(0,x.jsx)("span",{className:i}),(0,x.jsx)("span",{className:c}),(0,x.jsx)("span",{className:l}),(0,x.jsx)("span",{className:o}),(0,x.jsx)("span",{className:_}),(0,x.jsx)("span",{className:d}),(0,x.jsx)("span",{className:u}),(0,x.jsx)("span",{className:h}),(0,x.jsx)("span",{className:p}),(0,x.jsx)("span",{className:f}),(0,x.jsx)("span",{className:m}),(0,x.jsx)("p",{className:s,children:"Loading"})]})})}},325:function(e,r,t){t.d(r,{V:function(){return i}});var a=t(9439),s=t(2791),n=t(5206),i=function(){var e=(0,s.useState)(""),r=(0,a.Z)(e,2),t=r[0],i=r[1],c=(0,s.useState)(!0),l=(0,a.Z)(c,2),o=l[0],_=l[1];return(0,s.useEffect)((function(){t&&n.Am.error("Houston we have a problem",{autoClose:3e3})}),[t]),{isLoading:o,setIsLoading:_,setIsError:i}}},5910:function(e,r,t){t.r(r),t.d(r,{Home:function(){return Q}});var a=t(9439),s=t(8607),n=t(1413),i=t(7689),c=t(1087),l=t(458),o=t(9126),_=t(8977),d=t(6263),u=t.n(d),h=t(184);var p={formatDate:function(e){return(0,_.Z)(Date.parse(e),"MMMM do, yyyy")},formatContent:function(e){if(e.length>100){var r=e.slice(0,101);return"".concat(r,"...")}return e},highlightSearchResults:function(e,r){var t=e.split(" ");return(0,h.jsx)(u(),{searchWords:t,autoEscape:!0,textToHighlight:r})}},f="Card_card__zQfcO",m="Card_thumb__rqUeD",x="Card_card__box__nL9hM",j="Card_card__contentBox__M4yc4",v="Card_card__info__uew+x",g="Card_card__date__U944D",N="Card_card__title__JEBsG",L="Card_card__description__GRyKP",C="Card_card__link__jaMbu",y=function(e){var r=e.articleId,t=e.image,a=e.published,s=e.description,n=e.title,_=e.filter,d=(0,i.TH)(),u=p.formatContent(s),y=p.highlightSearchResults(_,n),w=p.highlightSearchResults(_,u),Z=p.formatDate(a);return(0,h.jsxs)("li",{className:f,children:[(0,h.jsx)("div",{className:m,children:(0,h.jsx)("img",{src:t,alt:n})}),(0,h.jsxs)("div",{className:x,children:[(0,h.jsxs)("div",{className:j,children:[(0,h.jsxs)("p",{className:g,children:[(0,h.jsx)(l.v_l,{size:16,style:{color:"currentColor"}}),Z]}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("h2",{className:N,children:y}),(0,h.jsx)("p",{className:L,children:w})]})]}),(0,h.jsxs)(c.rU,{className:C,to:"/".concat(r),state:{from:d},children:[(0,h.jsx)("span",{children:"Read more"}),(0,h.jsx)(o.UE1,{size:28})]})]})]})},w="CardsList_cardsList__clBcs",Z=function(e){var r=e.articles,t=e.filter;return(0,h.jsx)("ul",{className:w,children:r.map((function(e){return(0,h.jsx)(y,(0,n.Z)((0,n.Z)({},e),{},{filter:t}),e.articleId)}))})},b=t(8634),M=t(7993),B=t(3853),k="FilterBar_filter__title__d9JNt",I="FilterBar_filter__wrapper__ZUQ5H",H="FilterBar_filter__input__j22x1",U="FilterBar_icon__62Pw6",E=function(e){var r=e.onChange;return(0,h.jsx)("div",{children:(0,h.jsxs)("label",{children:[(0,h.jsx)("span",{className:k,children:"Filter by keywords"}),(0,h.jsxs)("div",{className:I,children:[(0,h.jsx)(B.jRj,{size:20,className:U}),(0,h.jsx)(M.Z,{className:H,type:"text",onChange:r,placeholder:"Search news"})]})]})})},R=t(1287),S=t(2791),K="Home_home__9Ke73",z="Home_wrapper__53Los",F="Home_result__l+nNJ",W="Home_result__title__ds97-",A=t(325),D=t(1123),Q=function(){var e=(0,S.useState)([]),r=(0,a.Z)(e,2),t=r[0],n=r[1],i=(0,S.useState)(""),c=(0,a.Z)(i,2),l=c[0],o=c[1],_=(0,A.V)(),d=_.isLoading,u=_.setIsLoading,p=_.setIsError;(0,S.useEffect)((function(){(0,s.c6)().then((function(e){n(e),p("")})).catch((function(e){p(e.message)})).finally((function(){u(!1)}))}),[p,u]);var f=(0,S.useMemo)((function(){var e=["title","description"];return t.filter((function(r){return e.some((function(e){return r[e].toLowerCase().includes(l)}))}))}),[t,l]);return(0,h.jsx)("section",{className:K,children:(0,h.jsx)(b.W,{children:(0,h.jsxs)("div",{className:z,children:[(0,h.jsx)(E,{onChange:function(e){var r=e.target.value;o(r.trim().toLowerCase())}}),(0,h.jsxs)("p",{className:F,children:[(0,h.jsx)("span",{className:W,children:"Result:"}),f.length]}),t.length>0&&(0,h.jsx)(Z,{filter:l,articles:f}),0===f.length&&(0,h.jsx)(D.Z,{style:{margin:"0  auto"},variant:"h2",component:"h2",children:"No matching articles"}),d&&(0,h.jsx)(R.a,{})]})})})}},8607:function(e,r,t){t.d(r,{M4:function(){return l},c6:function(){return c}});var a=t(4165),s=t(5861),n=t(3263),i=Object.freeze({trendingsUrl:function(){return"https://api.spaceflightnewsapi.net/v3/articles?_limit=50"},searchByQuery:function(e){return"https://api.spaceflightnewsapi.net/v3/articles?=".concat(e,"&_limit=50&")},searchById:function(e){return"https://api.spaceflightnewsapi.net/v3/articles/".concat(e)}}),c=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var r,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Z.get(i.trendingsUrl());case 2:return r=e.sent,t=r.data.map((function(e){return{articleId:e.id,image:e.imageUrl,published:e.publishedAt,description:e.summary,title:e.title}})),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(r){var t,s,c,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.Z.get(i.searchById(r));case 2:return t=e.sent,s=t.data,c=s.summary,l=s.title,e.abrupt("return",{content:c,title:l});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=910.c29fdc4c.chunk.js.map