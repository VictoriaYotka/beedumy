"use strict";(self.webpackChunkbirsaplatform=self.webpackChunkbirsaplatform||[]).push([[559],{3021:(e,o,s)=>{s.d(o,{Z:()=>t});const i="TriangleBackground_section__3f7Rg";var n=s(184);const t=e=>{let{children:o}=e;return(0,n.jsx)("section",{className:i,children:o})}},3301:(e,o,s)=>{s.d(o,{Z:()=>a});var i=s(3764),n=s(5419),t=s(184);const a=e=>{let{children:o}=e;const[s,a]=(0,i.YD)(),r=n.Pw.useSectionStyles(a);return(0,t.jsx)(i.q.div,{ref:s,style:{...r},children:o})}},2273:(e,o,s)=>{s.d(o,{Z:()=>u});const i="SignWrapper_container__h1Jwy",n="SignWrapper_form__0TqOG",t="SignWrapper_header__xgsDX",a="SignWrapper_subheader__wxjvT",r="SignWrapper_button__qXOab",c="SignWrapper_notion__G4RBm",l="SignWrapper_accent__KBt2m";var p=s(9230),g=s(3021),_=s(3301),d=s(7689),h=s(1087),S=s(184);const u=e=>{let{onSubmit:o,header:s,subheader:u,subheaderAccent:m,button:k,children:b}=e;const{t:x}=(0,p.$G)(),f=(0,d.TH)();return(0,S.jsx)(g.Z,{children:(0,S.jsx)(_.Z,{children:(0,S.jsx)("div",{className:i,children:(0,S.jsxs)("form",{onSubmit:o,className:n,children:[(0,S.jsx)("h2",{className:t,children:s}),(0,S.jsxs)("h4",{className:a,children:[u,m&&(0,S.jsx)(h.rU,{to:(()=>{switch(f.pathname){case"/register":return"/login";case"/login":return"/register";default:return"/"}})(),className:l,children:m})]}),b,(0,S.jsx)("button",{type:"submit",className:r,children:k}),"/login"!==f.pathname&&(0,S.jsxs)("p",{children:[(0,S.jsx)("span",{className:c,children:x("sign.already_have_account")}),(0,S.jsx)(h.rU,{to:"/login",className:l,children:x("sign.login_now")})]})]})})})})}},559:(e,o,s)=>{s.r(o),s.d(o,{default:()=>r});var i=s(3699),n=s(9230),t=s(2273),a=s(184);const r=()=>{const{t:e}=(0,n.$G)();return(0,a.jsx)(t.Z,{onSubmit:e=>{e.preventDefault(),console.dir(e.target)},header:e("sign.forgot_password_header"),subheader:e("sign.forgot_password_subheader"),button:e("sign.forgot_password_button"),children:(0,a.jsxs)("div",{className:i.Z.input_wrapper,children:[(0,a.jsx)("input",{type:"email",name:"forgot_password_email",id:"forgot_password_email",className:i.Z.input,placeholder:" ",required:!0}),(0,a.jsx)("label",{className:i.Z.label,htmlFor:"forgot_password_email",children:e("sign.email")})]})})}},5419:(e,o,s)=>{s.d(o,{dV:()=>a,je:()=>n,PF:()=>i,R0:()=>r.Z,Pw:()=>l});const i=e=>e.split(/(?<=[.!?])\s+/);const n=function(e){return e.replace(/-/g," ")};const t={dots:!0,infinite:!0,speed:800,slidesToScroll:1,swipe:!0,pauseOnHover:!0},a={getRandomInt:function(e){return e<=0||"number"!==typeof e?1:Math.floor(Math.random()*e)+1},categoriesSectionSettings:{...t,autoplay:!0,autoplaySpeed:2e3,slidesToShow:5.99,responsive:[{breakpoint:1281,settings:{slidesToShow:5}},{breakpoint:923,settings:{slidesToShow:4}},{breakpoint:769,settings:{slidesToShow:3}},{breakpoint:481,settings:{slidesToShow:2,slidesToScroll:1}}]},requestedCoursesSectionSettings:{...t,slidesToShow:3,responsive:[{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:481,settings:{slidesToShow:1}}]},teachersSectionSettings:{...t,slidesToShow:4,arrows:!1,responsive:[{breakpoint:923,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:481,settings:{slidesToShow:1}}]},feedbackSectionSettings:{...t,slidesToShow:5,responsive:[{breakpoint:1025,settings:{slidesToShow:4}},{breakpoint:923,settings:{slidesToShow:3}},{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:481,settings:{slidesToShow:1}}]},articleSectionSettings:{...t,slidesToShow:3,responsive:[{breakpoint:993,settings:{slidesToShow:2}},{breakpoint:767,settings:{slidesToShow:1}}]},categoriesPageSettings:{...t,slidesToShow:3,responsive:[{breakpoint:769,settings:{slidesToShow:2}},{breakpoint:481,settings:{slidesToShow:1}}]}};var r=s(4502),c=s(3764);const l={useSectionStyles:e=>({width:"100%",scale:e?1:.9,opacity:e?1:0,transform:e?"translateY(0)":"translateY(40px)",transition:"0.8s ease-in-out"}),useHeroSectionStyles:{from:{scale:.6,opacity:0,transform:"translateY(-80px)"},to:{scale:1,opacity:1,transform:"translateY(0)"},config:{duration:1500,easing:c.Z5.easeInOutBack}},useHeroImageStyles:{reset:!0,loop:{reverse:!0},from:{rotateZ:0,scale:.95},to:{rotateZ:-5,scale:1},config:{mass:9,tension:35,friction:26,clamp:!0,transition:"0.8s ease-in-out"}},useTriangleBlueBigStyles:{reset:!0,loop:{reverse:!0},from:{rotateZ:0,scale:.99,x:-5},to:{rotateZ:2,scale:1,x:0},config:{mass:4,tension:30,friction:14,clamp:!0,transition:"0.8s ease-in-out"}},useTriangleBlueStyles:{reset:!0,loop:{reverse:!0},from:{scale:.9,rotateX:0},to:{scale:1,rotateX:10},config:{mass:6,tension:25,friction:12,clamp:!0,transition:"0.8s ease-in-out"}},useTriangleGreenSmallStyles:{reset:!0,loop:!0,from:{rotateZ:0,scale:.9},to:[{rotateZ:20,scale:1},{rotateZ:10,scale:1.1},{rotateZ:0,scale:1.2},{rotateZ:0,scale:.9}],config:{mass:7,tension:20,friction:20,clamp:!0,transition:"0.8s ease-in-out"}},useTriangleRoseStyles:{reset:!0,loop:{reverse:!0},from:{rotateZ:0,scale:.9,x:0},to:{rotateZ:5,scale:1,x:10},config:{mass:10,tension:25,friction:23,clamp:!0,transition:"0.8s ease-in-out"}},useTriangleGreenStyles:{reset:!0,loop:{reverse:!0},from:{rotateZ:0,scale:.9},to:{rotateZ:10,scale:1},config:{mass:4,tension:25,friction:20,clamp:!0,transition:"0.8s ease-in-out"}},useButtonStyles:{reset:!0,loop:!0,from:{scale:.9,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"},to:[{scale:1,boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.2)"},{scale:1.1,boxShadow:"0px 0px 30px rgba(0, 0, 0, 0.3)"},{scale:1.1,boxShadow:"0px 0px 30px rgba(0, 0, 0, 0.4)"},{scale:1.1,boxShadow:"0px 0px 30px rgba(0, 0, 0, 0.5)"},{scale:1,boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.2)"},{scale:1.1,boxShadow:"0px 0px 30px rgba(0, 0, 0, 0.3)"},{scale:1.1,boxShadow:"0px 0px 30px rgba(0, 0, 0, 0.4)"},{scale:1,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.3)"},{scale:.9,boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.1)"}],config:{mass:5,tension:400,friction:45,clamp:!0,transition:"0.8s ease-in-out"}},useConditionalListsTransition:e=>(0,c.Yz)(e,{from:{opacity:0,transform:"translateY(-20px)",height:0},enter:{opacity:1,transform:"translateY(0)",height:"auto"},leave:{transform:"translateY(-24px)",opacity:0,height:0},config:{duration:400}}),useConditionalSubListsTransition:e=>(0,c.Yz)(e,{from:{opacity:0,transform:"translateY(-20px)",height:0},enter:{opacity:1,transform:"translateY(0)",height:"auto"},leave:{opacity:0,transform:"translateY(-20px)",height:0},update:{height:"auto"},config:{duration:50}}),useConditionalModalsTransition:e=>(0,c.Yz)(e,{from:{opacity:0},enter:{opacity:1},leave:{opacity:0},config:{duration:600,easing:c.Z5.easeInOutBack}})}},3699:(e,o,s)=>{s.d(o,{Z:()=>i});const i={"kipso-icon-plus-symbol":"Sign_kipso-icon-plus-symbol__g9Rn+","kipso-icon-contact":"Sign_kipso-icon-contact__o5pVc","kipso-icon-placeholder":"Sign_kipso-icon-placeholder__QKKN0","kipso-icon-manager":"Sign_kipso-icon-manager__U6TEN","kipso-icon-web-programming":"Sign_kipso-icon-web-programming__KQsWB","kipso-icon-training":"Sign_kipso-icon-training__H05ma","kipso-icon-targeting":"Sign_kipso-icon-targeting__2uJuK","kipso-icon-strategy":"Sign_kipso-icon-strategy__iqLzz","kipso-icon-professor":"Sign_kipso-icon-professor__c+YYO","kipso-icon-music-player":"Sign_kipso-icon-music-player__q4O5j","kipso-icon-magnifying-glass":"Sign_kipso-icon-magnifying-glass__vCtjW","kipso-icon-left-arrow":"Sign_kipso-icon-left-arrow__BEe7k","kipso-icon-right-arrow":"Sign_kipso-icon-right-arrow__MgnZC","kipso-icon-top-arrow":"Sign_kipso-icon-top-arrow__3ZGY+","kipso-icon-bottom-arrow":"Sign_kipso-icon-bottom-arrow__LDZVt","kipso-icon-knowledge":"Sign_kipso-icon-knowledge__Za-z1","kipso-icon-human-resources":"Sign_kipso-icon-human-resources__L0p-v","kipso-icon-health":"Sign_kipso-icon-health__gtmli","kipso-icon-email":"Sign_kipso-icon-email__VG5sO","kipso-icon-desktop":"Sign_kipso-icon-desktop__clEZk","kipso-icon-camera":"Sign_kipso-icon-camera__G1cFM","kipso-icon-menu":"Sign_kipso-icon-menu__5QsSm","kipso-icon-black-graduation-cap-tool-of-university-student-for-head":"Sign_kipso-icon-black-graduation-cap-tool-of-university-student-for-head__6UaM9",container:"Sign_container__7OKUR",flex_aligncenter:"Sign_flex_aligncenter__FgAf0",heading:"Sign_heading__n2Pmu",section:"Sign_section__qs++g",wrapper:"Sign_wrapper__y3c7G",input_wrapper:"Sign_input_wrapper__adwvJ",input:"Sign_input__KFzRa",label:"Sign_label__xLxoI",checkbox_wrapper:"Sign_checkbox_wrapper__i0AiN",checkbox_label:"Sign_checkbox_label__hMkkM",link:"Sign_link__-KdHc"}}}]);
//# sourceMappingURL=559.54a15d6f.chunk.js.map