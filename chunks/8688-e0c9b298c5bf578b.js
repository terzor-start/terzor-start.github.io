"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8688],{75891:function(e,t,r){r.d(t,{l:function(){return j}});var s=r(57437),n=r(19281),l=r(74300),o=r(89529),i=r(2265);let a=e=>{let{itemsLength:t,options:r,scrollOptions:s,enableAutoplay:n}=e,a=[...d(n,s),(0,o.Y)()],u=c(t,r),[h,x]=(0,l.Z)(u,a),[p,f]=(0,i.useState)(!1),[m,C]=(0,i.useState)(!1),[g,j]=(0,i.useState)([]),[k,v]=(0,i.useState)(0),b=(0,i.useCallback)(e=>{let t=null==x?void 0:x.plugins().autoScroll;t&&((!1===t.options.stopOnInteraction?t.reset:t.stop)(),e())},[x]),y=(0,i.useCallback)(()=>{let e=null==x?void 0:x.plugins().autoScroll;e&&(e.isPlaying()?e.stop:e.play)()},[x]),w=(0,i.useCallback)(()=>{null==x||x.scrollPrev()},[x]),M=(0,i.useCallback)(()=>{null==x||x.scrollNext()},[x]),N=(0,i.useCallback)(()=>{x&&j(x.scrollSnapList())},[x]),L=(0,i.useCallback)(()=>{x&&(f(x.canScrollPrev()),C(x.canScrollNext()),v(x.selectedScrollSnap()))},[x]),$=(0,i.useCallback)(e=>{x&&x.scrollTo(e)},[x]);return(0,i.useEffect)(()=>{x&&(N(),L(),x.on("reInit",N),x.on("reInit",L),x.on("select",L))},[x,L,N]),{emblaRef:h,canScrollNext:m,canScrollPrev:p,scrollNext:M,scrollPrev:w,getGradientSide:()=>m&&p?"both":p?"left":m?"right":"none",onDotButtonClick:$,scrollSnaps:g,selectedIndex:k,toggleAutoplay:y,onAutoplayClick:b}},d=(e,t)=>e?[(0,n.Z)({playOnInit:!1,stopOnInteraction:!1,speed:.75,startDelay:0,...t})]:[],c=(e,t)=>({align:"start",containScroll:"trimSnaps",active:e>1,skipSnaps:!0,inViewThreshold:.95,...t}),u=(0,i.createContext)(void 0),h=e=>{let{children:t,...r}=e,n=a(r);return(0,s.jsx)(u.Provider,{value:n,children:t})},x=()=>{let e=(0,i.useContext)(u);if(void 0===e)throw Error("CarouselContext must by used with CarouselContextProvider");return e};var p=r(5017);let f=e=>{let{className:t}=e;return(0,s.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",className:(0,p.r)("h-4 w-4",t),"data-testid":"@icon/ChevronLeft",children:(0,s.jsx)("path",{d:"M9.25 16.5L1.75 9L9.25 1.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})};var m=r(15096);let C=e=>{let{className:t,disabled:r,onClick:n,size:l="default",type:o}=e;return(0,s.jsx)("button",{className:(0,p.r)("default"===l?"h-12 w-12":"h-16 w-16",r?"pointer-events-none bg-gray200 text-gray300":"bg-base text-white hover:bg-base/80","ui-transition flex items-center justify-center rounded-xl",t),disabled:r,onClick:n,children:"next"===o?(0,s.jsx)(m._,{className:"h-5 w-5"}):(0,s.jsx)(f,{className:"h-5 w-5"})})};var g=r(81174);let j=e=>{let{items:t,className:r,id:n,title:l,description:o,disableSideGradients:i,navigationType:a="top",options:d,scrollOptions:c,containerClassName:u,titleClassName:x,headerClassName:p,leftGradientClassName:f,rightGradientClassName:m,disableMobileNavigation:C,allowDotsNavigation:g,enableAutoplay:j=!1}=e;return(0,s.jsx)(h,{itemsLength:t.length,options:d,scrollOptions:c,enableAutoplay:j,children:(0,s.jsxs)("div",{className:r,id:n,children:[l||o||"hidden"===a?(0,s.jsx)(k,{titleClassName:x,title:l,description:o,navigationType:a,headerClassName:p}):null,(0,s.jsx)(v,{items:t,disableSideGradients:i,navigationType:a,containerClassName:u,leftGradientClassName:f,rightGradientClassName:m,disableMobileNavigation:C,allowDotsNavigation:g})]})})},k=e=>{let{title:t,description:r,navigationType:n,titleClassName:l,headerClassName:o}=e,{canScrollNext:i,canScrollPrev:a,scrollPrev:d,scrollNext:c}=x();return(0,s.jsxs)("div",{className:(0,p.r)("mb-3 inline-flex w-full  items-end md:mb-8 lg:justify-between",o),children:[(null!=t?t:r)?(0,s.jsxs)("div",{className:"flex flex-col",children:["string"==typeof t?(0,s.jsx)("h2",{className:(0,p.r)("text-h4 xl:text-h2",l),children:t}):t,r?(0,s.jsx)("p",{className:"text-body leading-normal text-gray700",children:r}):null]}):null,(i||a)&&"top"===n?(0,s.jsxs)("div",{className:"hidden space-x-3 lg:flex",children:[(0,s.jsx)(C,{disabled:!a,onClick:d,type:"prev"}),(0,s.jsx)(C,{disabled:!i,onClick:c,type:"next"})]}):null]})},v=e=>{let{items:t,disableSideGradients:r,navigationType:n="top",containerClassName:l,leftGradientClassName:o,rightGradientClassName:i,disableMobileNavigation:a,allowDotsNavigation:d,enableAutoplay:c}=e,{emblaRef:u,canScrollNext:h,canScrollPrev:f,scrollPrev:m,scrollNext:j,getGradientSide:k,onDotButtonClick:v,scrollSnaps:y,selectedIndex:w,toggleAutoplay:M,onAutoplayClick:N}=x();return(0,s.jsx)(g.p,{gradientSide:r?"none":k(),rightGradientClassName:(0,p.r)("invisible md:visible",i),leftGradientClassName:(0,p.r)("invisible md:visible",o),children:(0,s.jsxs)("div",{className:"embla",onClick:c?()=>N:void 0,onMouseLeave:c?M:void 0,children:[(0,s.jsx)("div",{className:"embla__viewport w-full overflow-hidden",ref:u,children:(0,s.jsx)("div",{className:(0,p.r)("embla__container flex gap-x-3 lg:gap-x-5",l),children:t})}),"side"===n?(0,s.jsxs)("div",{className:"embla__buttons",children:[f?(0,s.jsx)("div",{className:"embla__button absolute left-2 top-0 z-belowMenu flex h-full items-center justify-center",children:(0,s.jsx)(C,{onClick:m,size:"default",type:"prev"})}):null,h?(0,s.jsx)("div",{className:"embla__button absolute right-2 top-0 z-belowMenu flex h-full items-center justify-center",children:(0,s.jsx)(C,{onClick:j,size:"default",type:"next"})}):null]}):null,(null!=a?a:"hidden"===n)?null:(0,s.jsxs)("div",{className:"embla__buttons inline-flex w-full justify-center gap-3 pt-8 lg:hidden",children:[(0,s.jsx)("div",{className:"embla__button flex h-full items-center justify-center",children:(0,s.jsx)(C,{disabled:!f,onClick:m,size:"default",type:"prev"})}),(0,s.jsx)("div",{className:"embla__button flex h-full items-center justify-center",children:(0,s.jsx)(C,{disabled:!h,onClick:j,size:"default",type:"next"})})]}),d&&y.length>1?(0,s.jsx)("div",{className:"embla__dots flex flex-wrap items-center justify-center gap-x-2 pt-2 lg:hidden",children:y.map((e,t)=>(0,s.jsx)(b,{onClick:()=>v&&v(t),className:"embla__dot".concat(t===w?" bg-gray1000":" bg-gray400")},t))}):null]})})},b=e=>{let{children:t,className:r,...n}=e;return(0,s.jsx)("button",{type:"button",className:(0,p.r)("flex h-2 w-2 items-center justify-center rounded-full",r),...n,children:t})}},43236:function(e,t,r){r.d(t,{q:function(){return l}});var s=r(57437),n=r(5017);let l=e=>{let{className:t,children:r}=e;return(0,s.jsx)("div",{className:(0,n.r)("embla__slide relative flex flex-[0_0_90%] lg:flex-[0_0_40%] vl:flex-[0_0_30%]",t),children:r})}},47590:function(e,t,r){var s=r(57437),n=r(5017),l=r(2265);let o=["rendering-legibility","break-words","font-medium","text-black"];t.Z=e=>{let{children:t,type:r,className:i,bottomText:a,...d}=e;return(0,l.createElement)(r,{className:(0,n.r)(o,i),"data-testid":"basic-heading-"+r,...d},a?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"block w-full text-primaryLighter",children:t}),a]}):t)}},76063:function(e,t,r){var s=r(47590);t.Z=s.Z},81339:function(e,t,r){r.d(t,{d:function(){return l}});var s=r(57437),n=r(5017);let l=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/ShieldCheck",children:[(0,s.jsx)("path",{d:"M3.75 10.7531V5.25C3.75 5.05109 3.82902 4.86032 3.96967 4.71967C4.11032 4.57902 4.30109 4.5 4.5 4.5H19.5C19.6989 4.5 19.8897 4.57902 20.0303 4.71967C20.171 4.86032 20.25 5.05109 20.25 5.25V10.7531C20.25 18.6281 13.5656 21.2344 12.2344 21.675C12.0831 21.731 11.9169 21.731 11.7656 21.675C10.4344 21.2344 3.75 18.6281 3.75 10.7531Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M16.125 9.75L10.6219 15L7.875 12.375",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}},68784:function(e,t,r){r.d(t,{G:function(){return l}});var s=r(57437),n=r(5017);let l=e=>{let{className:t}=e;return(0,s.jsx)("svg",{viewBox:"0 0 16 16",fill:"none",className:(0,n.r)("h-4 w-4",t),"data-testid":"@icon/ArrowUpRight",children:(0,s.jsx)("path",{d:"M1.143 14.857 14.857 1.143M3.715 1.143h11.143v11.142",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}},20343:function(e,t,r){r.d(t,{o:function(){return l}});var s=r(57437),n=r(66648);let l=e=>{let{style:t,...r}=e;return(0,s.jsx)(n.default,{...r,style:{maxWidth:"100%",height:"auto",...t}})}},12027:function(e,t,r){r.d(t,{u:function(){return u}});var s=r(57437),n=r(2265),l=r(33294),o=r(2221);let i=e=>{let{isOpen:t,onClose:r}=e,s=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,l.Z)(t),(0,o.Z)(i,()=>{r()}),(0,n.useEffect)(()=>{let e=s.current;t?null==e||e.showModal():null==e||e.close()},[t]),(0,n.useEffect)(()=>{let e=s.current,t=e=>{e.preventDefault(),r()};return null==e||e.addEventListener("cancel",t),()=>{null==e||e.removeEventListener("cancel",t)}},[r]),{dialogRef:s,contentRef:i}};var a=r(5017);let d=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 16 16",fill:"none",className:(0,a.r)("h-4 w-4",t),"data-testid":"@icon/MenuClose",children:[(0,s.jsx)("path",{d:"M12.5 3.5L3.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12.5 12.5L3.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})};var c=r(24308);let u=e=>{let{className:t,children:r,isOpen:n,onClose:l,contentClassName:o,title:d}=e,{dialogRef:c,contentRef:u}=i({isOpen:n,onClose:l});return(0,s.jsx)("dialog",{ref:c,className:(0,a.r)("max-w-4xl rounded-lg outline-0 backdrop:bg-black/60","z-aboveOverlay max-h-[100dvh] overflow-hidden md:max-h-[95dvh]",t),children:(0,s.jsxs)("div",{ref:u,className:(0,a.r)("relative overflow-auto bg-white px-4 pb-6 pt-10 lg:px-5",o),children:[d?(0,s.jsx)(h,{title:d,onClose:l}):null,r]})})},h=e=>{let{title:t,onClose:r}=e;return(0,s.jsxs)("header",{className:"mb-5 pr-12 lg:pl-5",children:[(0,s.jsx)("h2",{className:"font-medium text-h4 text-black md:text-h3",children:t}),(0,s.jsx)(x,{onClose:r})]})},x=e=>{let{onClose:t}=e;return(0,s.jsx)("button",{type:"button",onClick:t,className:"absolute right-4 top-8 rounded-full bg-gray100 p-3 text-gray600 outline-0 transition-colors hover:bg-gray300 focus-visible:outline-1","data-testid":"btn-modal-close","aria-label":(0,c.$t)({defaultMessage:"close modal"}),children:(0,s.jsx)(d,{})})}},18670:function(e,t,r){r.d(t,{K:function(){return $}});var s=r(57437),n=r(5017),l=r(76063),o=r(36566),i=r(68784),a=r(24308);let d=e=>{let{className:t,onClick:r}=e;return(0,s.jsxs)("div",{onClick:r,className:(0,n.r)("flex flex-col justify-start gap-4 rounded-xl bg-primaryLightForest p-6 hover:cursor-pointer md:p-8",t),children:[(0,s.jsx)("div",{className:"flex w-full grow items-start justify-end",children:(0,s.jsx)(o.f,{size:48,className:"bg-primaryLighter text-white",children:(0,s.jsx)(i.G,{})})}),(0,s.jsx)(l.Z,{type:"h3",className:"font-medium text-h6 leading-6 text-white md:text-h5 md:leading-[1.625rem]",children:(0,a.$t)({defaultMessage:"Explore all features"})})]})},c=e=>{let{className:t}=e;return(0,s.jsx)("div",{className:(0,n.r)("h-full min-h-[11.125rem] w-full rounded-xl bg-[url('/images/security/security-principles.jpg')] bg-cover bg-center",t)})},u=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/Anchor",children:[(0,s.jsx)("path",{d:"M12 21.75V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 6.75C13.0355 6.75 13.875 5.91053 13.875 4.875C13.875 3.83947 13.0355 3 12 3C10.9645 3 10.125 3.83947 10.125 4.875C10.125 5.91053 10.9645 6.75 12 6.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M8.25 10.5H15.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M3.75 13.5C3.75 14.6935 4.22411 15.8381 5.06802 16.682C5.91193 17.5259 7.05653 18 8.25 18C9.24456 18 10.1984 18.3951 10.9017 19.0983C11.6049 19.8016 12 20.7554 12 21.75C12 20.7554 12.3951 19.8016 13.0983 19.0983C13.8016 18.3951 14.7554 18 15.75 18C16.9435 18 18.0881 17.5259 18.932 16.682C19.7759 15.8381 20.25 14.6935 20.25 13.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},h=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{className:(0,n.r)("h-6 w-6",t),viewBox:"0 0 24 24",stroke:"currentColor",fill:"none","data-testid":"@icon/Tor",children:[(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M12 21.25a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5Z"}),(0,s.jsx)("path",{stroke:"currentColor",strokeWidth:"1.5",d:"M12 2.75v18.5"}),(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",d:"M12 5.75a6.25 6.25 0 0 1 0 12.5"}),(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.5",d:"M12 8.75a3.25 3.25 0 0 1 0 6.5"})]})},x=e=>{let{title:t="",icon:r,iconClassName:i,description:a,className:d}=e;return(0,s.jsxs)("div",{className:(0,n.r)("flex flex-col gap-4 rounded-xl bg-white p-6 md:p-8",d),children:[(0,s.jsxs)("div",{className:"flex flex-row items-center justify-start gap-4",children:[(0,s.jsx)(o.f,{size:48,className:(0,n.r)("bg-primaryLighter/10 text-primary",i),children:r}),(0,s.jsx)(l.Z,{type:"h3",className:"font-medium text-h6 leading-6 text-gray1000 md:text-h5 md:leading-[1.625rem]",children:t})]}),(0,s.jsx)("p",{className:"text-body leading-5 text-gray700",children:a})]})},p=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{className:(0,n.r)("h-6 w-6",t),viewBox:"0 0 24 24",fill:"none","data-testid":"@icon/CircleDashed",children:[(0,s.jsx)("path",{d:"M9.75 3.28126C11.2255 2.89819 12.7745 2.89819 14.25 3.28126",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M3.32812 9.59059C3.7344 8.12155 4.50883 6.78049 5.57812 5.69434",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M5.57812 18.3066C4.50856 17.2199 3.73411 15.8782 3.32812 14.4084",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M14.25 20.7188C12.7745 21.1018 11.2255 21.1018 9.75 20.7188",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M20.6719 14.4094C20.2656 15.8785 19.4912 17.2195 18.4219 18.3057",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M18.4219 5.69348C19.4914 6.78016 20.2659 8.1219 20.6719 9.59161",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},f=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/Asterisk",children:[(0,s.jsx)("path",{d:"M12 3.75V20.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4.8562 7.875L19.1437 16.125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M4.8562 16.125L19.1437 7.875",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},m=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/Eye",children:[(0,s.jsx)("path",{d:"M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},C=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/Hand",children:[(0,s.jsx)("path",{d:"M15.75 11.25V6.375C15.75 5.87772 15.9475 5.40081 16.2991 5.04917C16.6508 4.69754 17.1277 4.5 17.625 4.5C18.1222 4.5 18.5992 4.69754 18.9508 5.04917C19.3024 5.40081 19.5 5.87772 19.5 6.375V14.25C19.5 15.2349 19.306 16.2102 18.9291 17.1201C18.5521 18.0301 17.9997 18.8569 17.3033 19.5533C16.6068 20.2497 15.78 20.8022 14.8701 21.1791C13.9601 21.556 12.9849 21.75 12 21.75C7.85621 21.75 5.99996 19.5 2.94371 13.0594C2.69507 12.628 2.62798 12.1155 2.7572 11.6346C2.88643 11.1538 3.20138 10.744 3.63277 10.4953C4.06416 10.2467 4.57666 10.1796 5.05751 10.3088C5.53837 10.438 5.94819 10.753 6.19683 11.1844L8.24996 14.7469V4.875C8.24996 4.37772 8.4475 3.90081 8.79913 3.54917C9.15076 3.19754 9.62768 3 10.125 3C10.6222 3 11.0992 3.19754 11.4508 3.54917C11.8024 3.90081 12 4.37772 12 4.875V11.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M15.75 6.375V3.375C15.75 2.87772 15.5525 2.40081 15.2008 2.04917C14.8492 1.69754 14.3723 1.5 13.875 1.5C13.3777 1.5 12.9008 1.69754 12.5492 2.04917C12.1975 2.40081 12 2.87772 12 3.375V4.875",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})},g=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/Key",children:[(0,s.jsx)("path",{d:"M8.7375 11.5125C8.41238 10.7149 8.24676 9.86131 8.25 9C8.25 7.66498 8.64588 6.35994 9.38758 5.2499C10.1293 4.13987 11.1835 3.27471 12.4169 2.76382C13.6503 2.25292 15.0075 2.11925 16.3169 2.3797C17.6262 2.64015 18.829 3.28303 19.773 4.22703C20.717 5.17104 21.3599 6.37377 21.6203 7.68314C21.8808 8.99252 21.7471 10.3497 21.2362 11.5831C20.7253 12.8165 19.8601 13.8707 18.7501 14.6124C17.6401 15.3541 16.335 15.75 15 15.75C14.1387 15.7532 13.2851 15.5876 12.4875 15.2625V15.2625L11.25 16.5H9V18.75H6.75V21H3V17.25L8.7375 11.5125Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M16.875 8.0625C17.3928 8.0625 17.8125 7.64277 17.8125 7.125C17.8125 6.60723 17.3928 6.1875 16.875 6.1875C16.3572 6.1875 15.9375 6.60723 15.9375 7.125C15.9375 7.64277 16.3572 8.0625 16.875 8.0625Z",fill:"currentColor"})]})},j=e=>{let{className:t}=e;return(0,s.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/Palette",children:[(0,s.jsx)("path",{d:"M20.7751 14.0062C20.9306 13.3235 21.0061 12.625 21.0001 11.9249C20.9626 6.96554 16.8563 2.95304 11.9063 2.99992C9.79166 3.02222 7.75236 3.78848 6.14625 5.16428C4.54015 6.54007 3.46982 8.43751 3.12305 10.5237C2.77629 12.6099 3.17524 14.7515 4.24991 16.5729C5.32458 18.3943 7.00633 19.7791 9.00009 20.4843C9.33924 20.6065 9.70287 20.645 10.0601 20.5966C10.4173 20.5483 10.7576 20.4144 11.0521 20.2065C11.3465 19.9985 11.5865 19.7226 11.7515 19.4021C11.9165 19.0816 12.0018 18.726 12.0001 18.3655V17.9999C11.9989 17.7041 12.0562 17.411 12.1688 17.1374C12.2815 16.8639 12.4472 16.6153 12.6563 16.4062C12.8655 16.197 13.114 16.0313 13.3876 15.9187C13.6611 15.806 13.9543 15.7487 14.2501 15.7499H18.5813C19.0903 15.7502 19.5844 15.578 19.9828 15.2613C20.3813 14.9446 20.6606 14.5021 20.7751 14.0062V14.0062Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,s.jsx)("path",{d:"M12 8.0625C12.5178 8.0625 12.9375 7.64277 12.9375 7.125C12.9375 6.60723 12.5178 6.1875 12 6.1875C11.4822 6.1875 11.0625 6.60723 11.0625 7.125C11.0625 7.64277 11.4822 8.0625 12 8.0625Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M7.78125 10.5C8.29902 10.5 8.71875 10.0803 8.71875 9.5625C8.71875 9.04473 8.29902 8.625 7.78125 8.625C7.26348 8.625 6.84375 9.04473 6.84375 9.5625C6.84375 10.0803 7.26348 10.5 7.78125 10.5Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M7.78125 15.375C8.29902 15.375 8.71875 14.9553 8.71875 14.4375C8.71875 13.9197 8.29902 13.5 7.78125 13.5C7.26348 13.5 6.84375 13.9197 6.84375 14.4375C6.84375 14.9553 7.26348 15.375 7.78125 15.375Z",fill:"currentColor"}),(0,s.jsx)("path",{d:"M16.2188 10.5C16.7365 10.5 17.1562 10.0803 17.1562 9.5625C17.1562 9.04473 16.7365 8.625 16.2188 8.625C15.701 8.625 15.2812 9.04473 15.2812 9.5625C15.2812 10.0803 15.701 10.5 16.2188 10.5Z",fill:"currentColor"})]})},k=e=>{let{className:t}=e;return(0,s.jsx)("svg",{viewBox:"0 0 24 24",fill:"none",className:(0,n.r)("h-6 w-6",t),"data-testid":"@icon/ScribbleLoop",children:(0,s.jsx)("path",{d:"M2.25 8.7C2.25 8.7 5.25 4.5 9.75 4.5C19.5 4.5 18.75 19.5 9.75 19.5C3.75 19.5 3.75 10.5 12.75 10.5C18.75 10.5 22.5 15 22.5 15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})};var v=r(81339),b=r(12027),y=r(87138);let w=e=>{let{isModalOpen:t,onClose:r}=e;return(0,s.jsx)(b.u,{isOpen:t,onClose:r,title:(0,a.$t)({defaultMessage:"Features of Trezor Suite app"}),children:(0,s.jsxs)("div",{className:"grid h-modalContent grid-cols-1 gap-4 overflow-auto md:grid-cols-2",children:[(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Sign & Verify"}),url:"/learn/a/sign-verify",icon:(0,s.jsx)(k,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Sign & Verify confirms ownership of specific addresses on your Trezor."})}),(0,s.jsx)(M,{onClick:r,title:(0,a.$t)({defaultMessage:"Tor"}),url:"/learn/a/tor-in-trezor-suite-app",icon:(0,s.jsx)(m,{}),children:(0,a.$t)({defaultMessage:"Tor is open-source software that enables anonymous communication. Using Tor makes it more difficult to trace a user's Internet activity."})}),(0,s.jsx)(M,{onClick:r,title:(0,a.$t)({defaultMessage:"Taproot"}),url:"/learn/a/what-is-taproot",icon:(0,s.jsx)(u,{}),children:(0,a.$t)({defaultMessage:"Taproot makes Bitcoin transactions safer by improving privacy & network efficiency."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Passphrase"}),url:"/learn/a/passphrases-and-hidden-wallets",icon:(0,s.jsx)(g,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Passphrase adds the ultimate protection against attacks involving device access."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Coin Control"}),url:"/learn/a/coin-control-in-trezor-suite",icon:(0,s.jsx)(m,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Pick privacy and control your Bitcoin UTXOs precisely as you need."})}),(0,s.jsx)(M,{onClick:r,title:(0,a.$t)({defaultMessage:"Custom Backend"}),url:"/learn/a/custom-backend-in-trezor-suite",icon:(0,s.jsx)(v.d,{}),children:(0,a.$t)({defaultMessage:"Connect to your own full node to achieve total self-sovereignty."})}),(0,s.jsx)(M,{title:"Bitcoin-only firmware",url:"/learn/a/bitcoin-only-firmware-on-trezor",icon:(0,s.jsx)(v.d,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Focus on Bitcoin solely by installing Bitcoin-only firmware and use it easily in Trezor Suite."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Native altcoin support"}),url:"/learn/a/supported-coins",icon:(0,s.jsx)(f,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Trezor Suite natively supports many altcoins directly in the app."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Early Access Program"}),url:"/learn/a/trezor-suite-app-settings",icon:(0,s.jsx)(m,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Join our Early Access Program to get access to new features before everybody else."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Buy, Sell, Exchange or Spend"}),url:"/learn/c/trezor-suite-app",icon:(0,s.jsx)(v.d,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Buy, sell, exchange, or spend using our partner Invity directly in Trezor Suite."})}),(0,s.jsx)(M,{onClick:r,title:(0,a.$t)({defaultMessage:"Mobile app"}),url:"/learn/a/trezor-on-android",icon:(0,s.jsx)(C,{}),children:(0,a.$t)({defaultMessage:"Soon you will be able to work with Suite also on mobile devices (Android & iOS)."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Discreet mode"}),url:"/learn/a/discreet-mode-in-trezor-suite-app",icon:(0,s.jsx)(m,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Hide your sensitive information from potential eavesdroppers with just one click."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Satoshis"}),url:"/learn/a/trezor-suite-app-settings",icon:(0,s.jsx)(C,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Use Sats instead of BTC for a better overview of your Bitcoin funds."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Localization"}),url:"/learn/a/trezor-suite-app-settings",icon:(0,s.jsx)(C,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Enjoy Suite in your native language. We currently support English, Spanish, Russian, Japanese, and Czech."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Dark mode"}),url:"/learn/a/trezor-suite-app-settings",icon:(0,s.jsx)(j,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Do not worry, we also support dark mode."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Export"}),url:"/learn/a/addresses-transaction-history",icon:(0,s.jsx)(C,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Export your transactions into CSV, PDF, and other formats in Trezor Suite."})}),(0,s.jsx)(M,{title:(0,a.$t)({defaultMessage:"Labeling"}),url:"/learn/a/labels-in-trezor-suite-app",icon:(0,s.jsx)(C,{}),onClick:r,children:(0,a.$t)({defaultMessage:"Label your wallets, accounts and transactions natively in Trezor Suite."})})]})})},M=e=>{let{title:t,url:r,icon:n,children:l,onClick:i}=e;return(0,s.jsx)("div",{className:"rounded-lg border-2 border-gray200 bg-white px-6 py-4 lg:p-8",children:(0,s.jsxs)(y.default,{onClick:i,href:r,passHref:!0,className:"hover:no-underline",children:[(0,s.jsxs)("div",{className:"mb-3 flex items-center gap-x-6",children:[(0,s.jsx)(o.f,{size:48,className:"bg-primaryLighter/10 [&>svg]:text-primary",children:n}),(0,s.jsx)("div",{className:"text-2xl text-gray900",children:t})]}),(0,s.jsx)("div",{className:"text-body text-gray600",children:l})]})})};var N=r(84543),L=r(2265);let $=()=>{let[e,t]=(0,L.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"grid gap-4 pb-16 md:grid-cols-1 lg:grid-cols-3",children:[(0,s.jsxs)("div",{className:"flex flex-col items-start gap-4 md:flex-row md:items-center lg:flex-col lg:items-start",children:[(0,s.jsx)(l.Z,{type:"h2",className:"font-medium text-h4 leading-9 text-gray1000 md:text-[2.5rem] md:leading-[2.75rem] lg:text-h3 lg:leading-[2.875rem]",children:(0,a.$t)({defaultMessage:"Security & privacy your way with the Trezor Suite app"})}),(0,s.jsx)(N.Q,{type:"primary",link:"/trezor-suite",className:"whitespace-nowrap",children:(0,a.$t)({defaultMessage:"Discover the app"})})]}),(0,s.jsxs)("div",{className:"col-span-1 grid grid-cols-2 gap-2 lg:col-span-2 vl:gap-4",children:[(0,s.jsx)(x,{title:(0,a.$t)({defaultMessage:"Tor network"}),description:(0,a.$t)({defaultMessage:"Make it more difficult to trace your internet activity with Tor, an open-source software that enables anonymous communication."}),icon:(0,s.jsx)(h,{}),className:"order-1 col-span-2 md:col-span-1"}),(0,s.jsx)(c,{className:"row-span-auto order-4 md:order-2 md:row-span-2"}),(0,s.jsx)(x,{title:(0,a.$t)({defaultMessage:"Coin control"}),description:(0,a.$t)({defaultMessage:"Get more control and enhance privacy when sending funds. Manually select specific coins to use for outgoing transactions."}),icon:(0,s.jsx)(p,{}),className:"order-2 col-span-2 md:order-3 md:col-span-1"}),(0,s.jsx)(x,{title:(0,a.$t)({defaultMessage:"Taproot"}),description:(0,a.$t)({defaultMessage:"Taproot enhances bitcoin safety, privacy & network efficiency."}),icon:(0,s.jsx)(u,{}),className:"order-3 col-span-2 md:order-4 md:col-span-1"}),(0,s.jsx)(d,{className:"order-5",onClick:()=>t(!0)})]})]}),(0,s.jsx)(w,{isModalOpen:e,onClose:()=>t(!1)})]})}},81174:function(e,t,r){r.d(t,{p:function(){return l}});var s=r(57437),n=r(5017);r(2265);let l=e=>{let{gradientSide:t="both",children:r,parentClassName:l,leftGradientClassName:o,rightGradientClassName:i}=e;return(0,s.jsxs)("div",{className:(0,n.r)("relative",l),children:[r,"left"===t||"both"===t?(0,s.jsx)("div",{className:(0,n.r)("pointer-events-none absolute bottom-0 left-0  top-0 w-6 bg-gradient-to-r from-gray100 lg:w-36",o)}):null,"right"===t||"both"===t?(0,s.jsx)("div",{className:(0,n.r)("pointer-events-none absolute bottom-0 right-0 top-0 w-6 bg-gradient-to-l from-gray100 lg:w-36",i)}):null]})}}}]);