"use strict";(self.webpackChunkai_predictive_maintenace_docs=self.webpackChunkai_predictive_maintenace_docs||[]).push([[514],{9963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(7294),l=n(6010),c=n(1944),o=n(5281),r=n(2802),i=n(3320),s=n(4477),d=n(1116),m=n(2164),u=n(5999),b=n(2466),p=n(5936);const h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function _(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),c=(0,a.useRef)(!1),{startScroll:o,cancelScroll:r}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(c.current?c.current=!1:a>=o?(r(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(c.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var v=n(6775),f=n(7524),k=n(6668),g=n(1327),C=n(7462);function I(e){return a.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",S),onClick:t},a.createElement(I,{className:N}))}var y=n(9689),T=n(902);const x=Symbol("EmptyContext"),L=a.createContext(x);function M(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),c=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:c},t)}var A=n(6043),B=n(8596),w=n(9960),H=n(2389);function F(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:c,level:i,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),_=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0),[e,t])}(t),v=(0,r._F)(t,c),f=(0,B.Mg)(h,c),{collapsed:g,setCollapsed:I}=(0,A.u)({initialState:()=>!!b&&(!v&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(L);if(e===x)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!g),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const c=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!c&&n&&l(!1)}),[t,c,n,l])}({isActive:v,collapsed:g,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":g},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":f})},a.createElement(w.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":v}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":f?"page":void 0,"aria-expanded":b?!g:void 0,href:b?null!=_?_:"#":_},d),u),h&&b&&a.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.createElement(U,{items:m,tabIndex:g?-1:0,onItemClick:n,activePath:c,level:i+1})))}var W=n(3919),D=n(9471);const R="menuExternalLink_NmtK";function z(e){let{item:t,onItemClick:n,activePath:c,level:i,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,r._F)(t,c),h=(0,W.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",b),key:u},a.createElement(w.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&R,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:n?()=>n(t):void 0},d),u,!h&&a.createElement(D.Z,null)))}const K="menuHtmlItem_M9Kj";function V(e){let{item:t,level:n,index:c}=e;const{value:r,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),i&&[K,"menu__list-item"],s),key:c,dangerouslySetInnerHTML:{__html:r}})}function j(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(P,(0,C.Z)({item:t},n));case"html":return a.createElement(V,(0,C.Z)({item:t},n));default:return a.createElement(z,(0,C.Z)({item:t},n))}}function G(e){let{items:t,...n}=e;return a.createElement(M,null,t.map(((e,t)=>a.createElement(j,(0,C.Z)({key:t,item:e,index:t},n)))))}const U=(0,a.memo)(G),Y="menu_SIkG",q="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:n,className:c}=e;const r=function(){const{isActive:e}=(0,y.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",Y,r&&q,c)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:c,isHidden:o}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,k.L)();return a.createElement("div",{className:(0,l.Z)(X,r&&J,o&&Q)},r&&a.createElement(g.Z,{tabIndex:-1,className:$}),a.createElement(O,{path:t,sidebar:n}),i&&a.createElement(Z,{onClick:c}))}const te=a.memo(ee);var ne=n(3102),ae=n(2961);const le=e=>{let{sidebar:t,path:n}=e;const c=(0,ae.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&c.toggle(),"link"===e.type&&c.toggle()},level:1}))};function ce(e){return a.createElement(ne.Zo,{component:le,props:e})}const oe=a.memo(ce);function re(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(te,e),l&&a.createElement(oe,e))}const ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:se}))}const me="docSidebarContainer_b6E3",ue="docSidebarContainerHidden_b3ry";function be(e){var t;let{children:n}=e;const l=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},n)}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:c}=e;const{pathname:r}=(0,v.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),c((e=>!e))}),[c,i]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,me,n&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&n&&s(!0)}},a.createElement(be,null,a.createElement(re,{sidebar:t,path:r,onCollapse:d,isHidden:i})),i&&a.createElement(de,{toggleSidebar:d}))}const he={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:n}=e;const c=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!c)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}const _e="docPage__5DB",ve="docsWrapper_BCFX";function fe(e){let{children:t}=e;const n=(0,d.V)(),[l,c]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ve},a.createElement(_,null),a.createElement("div",{className:_e},n&&a.createElement(pe,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:c}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var ke=n(4972),ge=n(197);function Ce(e){const{versionMetadata:t}=e,n=(0,r.hI)(e);if(!n)return a.createElement(ke.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(ge.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(c.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(fe,null,m)))))}}}]);