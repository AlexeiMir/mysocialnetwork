(this["webpackJsonpmy-social-network"]=this["webpackJsonpmy-social-network"]||[]).push([[3],{474:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(221),i=a(482),c=Object(r.a)((function(e){return{root:{"& > *":{marginTop:e.spacing(5)}}}}));t.a=function(e){var t=e.totalItemsCount,a=e.pageSize,n=(e.portionSize,e.currentPage),r=e.onPageChanged,l=Math.ceil(t/a),s=c();return o.a.createElement("div",{className:s.root},o.a.createElement(i.a,{count:l,color:"primary",page:n,onChange:function(e,t){r(t)}}))}},475:function(e,t,a){"use strict";var n=a(33),o=a(0),r=a.n(o),i=a(221),c=a(471),l=a(447),s=a(464),d=Object(i.a)((function(e){return{button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}}}));t.a=function(e){var t=e.handlePageSize,a=e.options,o=e.value,i=d(),u=r.a.useState(!1),m=Object(n.a)(u,2),p=m[0],b=m[1];return r.a.createElement("div",null,r.a.createElement(l.a,{className:i.formControl},r.a.createElement(c.a,{id:"demo-controlled-open-select-label"},"Set page size"),r.a.createElement(s.a,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:p,onClose:function(){b(!1)},onOpen:function(){b(!0)},value:o,onChange:function(e){t(e.currentTarget.value)}},a.map((function(e){return r.a.createElement("option",{key:e.title+e.value,value:e.value},e.title)})))))}},476:function(e,t,a){e.exports={userPhoto:"users_userPhoto__2IiIa",btnMessage:"users_btnMessage__2qTzu",card:"users_card__2_PKN",searchBlock:"users_searchBlock__17t38"}},480:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(0),i=(a(4),a(3)),c=a(5),l=["video","audio","picture","iframe","img"],s=r.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.component,u=void 0===d?"div":d,m=e.image,p=e.src,b=e.style,g=Object(o.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==l.indexOf(u),f=!h&&m?Object(n.a)({backgroundImage:'url("'.concat(m,'")')},b):b;return r.createElement(u,Object(n.a)({className:Object(i.a)(c.root,s,h&&c.media,-1!=="picture img".indexOf(u)&&c.img),ref:t,style:f,src:h?m||p:void 0},g),a)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},482:function(e,t,a){"use strict";var n=a(1),o=a(2),r=a(0),i=(a(4),a(3)),c=a(5),l=a(43),s=a(55),d=a(72);var u=a(21),m=a(44),p=a(125),b=a(45),g=Object(b.a)(r.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),h=Object(b.a)(r.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),f=Object(b.a)(r.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),v=Object(b.a)(r.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),O=a(9),j=r.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.color,s=void 0===l?"standard":l,d=e.component,u=e.disabled,b=void 0!==u&&u,j=e.page,y=e.selected,C=void 0!==y&&y,x=e.shape,E=void 0===x?"round":x,k=e.size,N=void 0===k?"medium":k,w=e.type,P=void 0===w?"page":w,z=e.variant,S=void 0===z?"text":z,$=Object(o.a)(e,["classes","className","color","component","disabled","page","selected","shape","size","type","variant"]),B=("rtl"===Object(m.a)().direction?{previous:v,next:f,last:g,first:h}:{previous:f,next:v,first:g,last:h})[P];return"start-ellipsis"===P||"end-ellipsis"===P?r.createElement("div",{ref:t,className:Object(i.a)(a.root,a.ellipsis,b&&a.disabled,"medium"!==N&&a["size".concat(Object(O.a)(N))])},"\u2026"):r.createElement(p.a,Object(n.a)({ref:t,component:d,disabled:b,focusVisibleClassName:a.focusVisible,className:Object(i.a)(a.root,a.page,a[S],a[E],c,"standard"!==s&&a["".concat(S).concat(Object(O.a)(s))],b&&a.disabled,C&&a.selected,"medium"!==N&&a["size".concat(Object(O.a)(N))])},$),"page"===P&&j,B?r.createElement(B,{className:a.icon}):null)})),y=Object(c.a)((function(e){return{root:Object(n.a)(Object(n.a)({},e.typography.body2),{},{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:e.palette.text.primary}),page:{transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&$focusVisible":{backgroundColor:e.palette.action.focus},"&$selected":{backgroundColor:e.palette.action.selected,"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{opacity:1,color:e.palette.action.disabled,backgroundColor:e.palette.action.selected}},"&$disabled":{opacity:e.palette.action.disabledOpacity}},sizeSmall:{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px","& $icon":{fontSize:e.typography.pxToRem(18)}},sizeLarge:{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:e.typography.pxToRem(15),"& $icon":{fontSize:e.typography.pxToRem(22)}},textPrimary:{"&$selected":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}},"&$disabled":{color:e.palette.action.disabled}}},textSecondary:{"&$selected":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover, &$focusVisible":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}},"&$disabled":{color:e.palette.action.disabled}}},outlined:{border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$selected":{"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}}},outlinedPrimary:{"&$selected":{color:e.palette.primary.main,border:"1px solid ".concat(Object(u.b)(e.palette.primary.main,.5)),backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.primary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},outlinedSecondary:{"&$selected":{color:e.palette.secondary.main,border:"1px solid ".concat(Object(u.b)(e.palette.secondary.main,.5)),backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.activatedOpacity),"&:hover, &$focusVisible":{backgroundColor:Object(u.b)(e.palette.secondary.main,e.palette.action.activatedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}},rounded:{borderRadius:e.shape.borderRadius},ellipsis:{height:"auto","&$disabled":{opacity:e.palette.action.disabledOpacity}},focusVisible:{},disabled:{},selected:{},icon:{fontSize:e.typography.pxToRem(20),margin:"0 -8px"}}}),{name:"MuiPaginationItem"})(j);function C(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var x=r.forwardRef((function(e,t){e.boundaryCount;var a=e.classes,c=e.className,u=e.color,m=void 0===u?"standard":u,p=(e.count,e.defaultPage,e.disabled,e.getItemAriaLabel),b=void 0===p?C:p,g=(e.hideNextButton,e.hidePrevButton,e.onChange,e.page,e.renderItem),h=void 0===g?function(e){return r.createElement(y,e)}:g,f=e.shape,v=void 0===f?"round":f,O=(e.showFirstButton,e.showLastButton,e.siblingCount,e.size),j=void 0===O?"medium":O,x=e.variant,E=void 0===x?"text":x,k=Object(o.a)(e,["boundaryCount","classes","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"]),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,r=e.componentName,i=void 0===r?"usePagination":r,c=e.count,u=void 0===c?1:c,m=e.defaultPage,p=void 0===m?1:m,b=e.disabled,g=void 0!==b&&b,h=e.hideNextButton,f=void 0!==h&&h,v=e.hidePrevButton,O=void 0!==v&&v,j=e.onChange,y=e.page,C=e.showFirstButton,x=void 0!==C&&C,E=e.showLastButton,k=void 0!==E&&E,N=e.siblingCount,w=void 0===N?1:N,P=Object(o.a)(e,["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"]),z=Object(d.a)({controlled:y,default:p,name:i,state:"page"}),S=Object(s.a)(z,2),$=S[0],B=S[1],M=function(e,t){y||B(t),j&&j(e,t)},I=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},F=I(1,Math.min(a,u)),L=I(Math.max(u-a+1,a+1),u),R=Math.max(Math.min($-w,u-a-2*w-1),a+2),V=Math.min(Math.max($+w,a+2*w+2),L[0]-2),_=[].concat(Object(l.a)(x?["first"]:[]),Object(l.a)(O?[]:["previous"]),Object(l.a)(F),Object(l.a)(R>a+2?["start-ellipsis"]:a+1<u-a?[a+1]:[]),Object(l.a)(I(R,V)),Object(l.a)(V<u-a-1?["end-ellipsis"]:u-a>a?[u-a]:[]),Object(l.a)(L),Object(l.a)(f?[]:["next"]),Object(l.a)(k?["last"]:[])),U=function(e){switch(e){case"first":return 1;case"previous":return $-1;case"next":return $+1;case"last":return u;default:return null}},T=_.map((function(e){return"number"===typeof e?{onClick:function(t){M(t,e)},type:"page",page:e,selected:e===$,disabled:g,"aria-current":e===$?"true":void 0}:{onClick:function(t){M(t,U(e))},type:e,page:U(e),selected:!1,disabled:g||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?$>=u:$<=1)}}));return Object(n.a)({items:T},P)}(Object(n.a)(Object(n.a)({},e),{},{componentName:"Pagination"})).items;return r.createElement("nav",Object(n.a)({"aria-label":"pagination navigation",className:Object(i.a)(a.root,c),ref:t},k),r.createElement("ul",{className:a.ul},N.map((function(e,t){return r.createElement("li",{key:t},h(Object(n.a)(Object(n.a)({},e),{},{color:m,"aria-label":b(e.type,e.page,e.selected),shape:v,size:j,variant:E})))}))))}));t.a=Object(c.a)({root:{},ul:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}},{name:"MuiPagination"})(x)},489:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(221),i=a(458),c=a(1),l=a(2),s=(a(4),a(3)),d=a(5),u=a(125),m=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.focusVisibleClassName,d=Object(l.a)(e,["children","classes","className","focusVisibleClassName"]);return n.createElement(u.a,Object(c.a)({className:Object(s.a)(o.root,r),focusVisibleClassName:Object(s.a)(i,o.focusVisible),ref:t},d),a,n.createElement("span",{className:o.focusHighlight}))})),p=Object(d.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(m),b=a(461),g=a(460),h=a(480),f=a(449),v=a(40),O=a(24),j=a(105),y=a.n(j),C=a(476),x=a.n(C),E=Object(r.a)({root:{maxWidth:345},media:{height:140}}),k=function(e){var t=e.user,a=e.handleUnfollow,n=e.handleFollow,r=e.followingInProgress,c=e.handleStartChatting,l=E();return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{className:l.root},o.a.createElement(O.b,{to:"/profile/"+t.id,className:x.a.card},o.a.createElement(p,null,o.a.createElement(h.a,{className:l.media,component:"img",image:null!==t.photos.small?t.photos.small:y.a,title:"Contemplative Reptile"}),o.a.createElement(g.a,null,o.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.name),o.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},t.status)))),o.a.createElement(b.a,null,t.followed?o.a.createElement(f.a,{variant:"outlined",size:"small",color:"primary",onClick:function(){return a(t.id)},component:"button",disabled:r.some((function(e){return t.id}))},"Unfollow"):o.a.createElement(f.a,{variant:"outlined",size:"small",color:"primary",component:"button",onClick:function(){return n(t.id)},disabled:r.some((function(e){return t.id}))},"Follow"),o.a.createElement(O.b,{to:"/dialogs",className:x.a.btnMessage},o.a.createElement(f.a,{onClick:function(){return c(t.id)},variant:"outlined",size:"small",color:"primary",component:"button"},"Send Message")))))},N=a(474),w=a(450),P=a(151),z=a(475),S=function(e){var t=e.users,a=e.totalItemsCount,n=e.pageSize,r=e.currentPage,i=e.onPageChanged,c=e.handleFollow,l=e.handleUnfollow,s=e.followingInProgress,d=e.handleStartChatting,u=e.optionsForUsers,m=e.handlePageUserSize,p=e.handleSearchUser;return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a,{totalItemsCount:a,pageSize:n,currentPage:r,onPageChanged:i}),o.a.createElement(w.a,{container:!0,spacing:3,className:x.a.searchBlock,justify:"center",alignItems:"flex-end"},o.a.createElement(w.a,{item:!0,xs:3},o.a.createElement(P.a,{handleSearch:p})),o.a.createElement(w.a,{item:!0,xs:3},o.a.createElement(z.a,{options:u,value:n,handlePageSize:m}))),o.a.createElement(w.a,{container:!0,spacing:3,justify:"center",alignItems:"flex-end"},t.map((function(e){return o.a.createElement(w.a,{item:!0,xs:4,key:e.id}," ",o.a.createElement(k,{user:e,handleFollow:c,handleUnfollow:l,followingInProgress:s,handleStartChatting:d}))}))))},$=a(10),B=a(157),M=a(52),I=a(47),F=a(188);t.default=function(){var e=Object($.d)((function(e){return Object(F.h)(e)})),t=Object($.d)((function(e){return Object(F.g)(e)})),a=Object($.d)((function(e){return Object(F.a)(e)})),r=Object($.d)((function(e){return Object(F.f)(e)})),i=Object($.d)((function(e){return Object(F.d)(e)})),c=Object($.d)((function(e){return Object(F.b)(e)})),l=Object($.d)((function(e){return Object(F.e)(e)})),s=Object($.c)();Object(n.useEffect)((function(){s(Object(B.c)(a,r))}),[r]);return o.a.createElement(o.a.Fragment,null,i?o.a.createElement(M.a,null):null,o.a.createElement(S,{users:e,totalItemsCount:t,pageSize:r,currentPage:a,onPageChanged:function(e){s(Object(B.c)(e,r))},handleFollow:function(e){s(Object(B.b)(e))},handleUnfollow:function(e){s(Object(B.f)(e))},followingInProgress:c,handleStartChatting:function(e){s(Object(I.h)(e))},optionsForUsers:l,handlePageUserSize:function(e){s(Object(B.e)(e))},handleSearchUser:function(e){s(Object(B.d)(e))}}))}}}]);
//# sourceMappingURL=3.ca9a629f.chunk.js.map