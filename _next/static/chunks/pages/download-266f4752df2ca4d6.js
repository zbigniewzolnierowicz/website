(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{170:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/download",function(){return t(5427)}])},5240:function(e,n){"use strict";n.Z={src:"/_next/static/media/logo.9fc5c374.png",height:1e3,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42h3Kv0rDUBQH4N+5uTFRTHWQkiGLD+DsE6hBJd19AIuToFj8two+h4Obg60Uig/gorh0c1IQi4ZcorVoknOuttO3fAQAp/E9jYL5ExJOIAwr0qHcnAEQ2m2NyBt8dG3FMSwDIgAzCNLznc917byZo+ydYjAV1RdpVIDrUfXvWhDWjrXj6WRly0c6KPVqI1CKLHpXmV4IFR5uh4kyKcGf0Wju1+E4CiCF7VaE6VkX2Qusnqvr685lsfx4l/Jzv4QtGYtLxK/9QtUit00AcLBjbn6+ecObEkAYv0OG70s3v3janIS9Zg5FfCilNMZBQdomCs8B2D9xcGuDxn2zJAAAAABJRU5ErkJggg=="}},2422:function(e,n,t){"use strict";var i=t(5893),r=(t(7294),t(7756)),c=t.n(r);n.Z=function(e){var n=e.cta?c().cta:c().base;e.size&&(n+=" ".concat(c()[e.size])),e.icon&&(n+=" ".concat(c().icon));var t=(0,i.jsxs)(i.Fragment,{children:[e.prefix?(0,i.jsx)("div",{className:c().prefix,children:e.prefix}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{children:e.children})]});return e.asDiv?(0,i.jsx)("div",{className:n,"aria-label":e["aria-label"],children:t}):(0,i.jsx)("button",{className:n,onClick:e.onClick,"aria-label":e["aria-label"],children:t})}},5521:function(e,n,t){"use strict";var i=t(5893),r=(t(7294),t(2422)),c=t(5828),o=t(5317),a=t(8056),s=t.n(a),l=t(2795),d=[{key:"github",name:"GitHub",link:"https://github.com/ferdium/ferdium-app",icon:o.LcO},{key:"discord",name:"Discord",link:"https://discord.gg/jVv4Qns8pP",icon:o.Vrx},{key:"reddit",name:"Reddit",link:"https://www.reddit.com/r/ferdium",icon:o.J1f},{key:"twitter",name:"Twitter",link:"https://twitter.com/ferdiumteam",icon:o.SGh}];n.Z=function(e){return e.icons?(0,i.jsx)("div",{className:s().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map((function(e){var n=d.find((function(n){return n.key===e}));return n?(0,i.jsx)(l.Z,{href:n.link,"aria-label":"".concat(n.name," link"),neutral:!0,children:(0,i.jsx)(c.Z,{size:1,icon:n.icon})},e):(0,i.jsx)(i.Fragment,{})}))})}):(0,i.jsx)("div",{className:s().links,children:(0,i.jsx)(i.Fragment,{children:e.services.map((function(e){var n=d.find((function(n){return n.key===e}));return n?(0,i.jsx)(l.Z,{href:n.link,neutral:!0,children:(0,i.jsx)(r.Z,{asDiv:!0,prefix:(0,i.jsx)(c.Z,{icon:n.icon,size:1}),children:n.name})},e):(0,i.jsx)(i.Fragment,{})}))})})}},2795:function(e,n,t){"use strict";var i=t(5893),r=(t(7294),t(6129)),c=t.n(r);n.Z=function(e){return(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer noopener","aria-label":e["aria-label"],className:e.neutral?c().neutral:"",children:e.children})}},4049:function(e,n,t){"use strict";var i=t(5893),r=t(9008);t(7294);n.Z=function(e){return(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:e.title||"Ferdium | The home for all your services"}),(0,i.jsx)("meta",{name:"description",content:"Introducing a great productivity tool to keep all messanging, productivity, and online services in one place"})]})}},5828:function(e,n,t){"use strict";var i=t(5893),r=(t(7294),t(8849)),c=t.n(r);n.Z=function(e){return(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignContent:"center"},children:(0,i.jsx)(c(),{size:e.size,path:e.icon,style:{margin:"auto"},color:e.color})})}},6039:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(5893),r=t(7294),c=t(5317),o=t(2752),a=t.n(o),s=t(2422),l=t(5521),d=t(5828),u=t(7966),h=function(e){var n=function(e){e?(localStorage.setItem("theme","dark"),document.documentElement.setAttribute("data-theme","dark")):(localStorage.setItem("theme","light"),document.documentElement.setAttribute("data-theme","light"))};return(0,r.useEffect)((function(){document.documentElement.getAttribute("data-theme")&&n("dark"===document.documentElement.getAttribute("data-theme"))}),[]),(0,i.jsxs)("footer",{id:a().footer,children:[(0,i.jsx)("div",{className:a().links,children:(0,i.jsx)(l.Z,{services:["discord","github","reddit","twitter"],icons:!0})}),(0,i.jsxs)("div",{className:a().legal,children:[(0,i.jsx)(u.Z,{href:"/terms-of-service",children:"Terms of Service"}),(0,i.jsx)("div",{children:"\xa0&\xa0"}),(0,i.jsx)(u.Z,{href:"/privacy-policy",children:"Privacy Policy"})]}),(0,i.jsx)("div",{className:a().darkmode,children:(0,i.jsx)(s.Z,{onClick:function(){return n(!("dark"===document.documentElement.getAttribute("data-theme")))},icon:!0,"aria-label":"Switch theme",children:(0,i.jsx)(d.Z,{size:1,icon:c.xEd})})})]})},f=t(4243),m=t.n(f),x=t(5240),j=t(7440),_=function(e){return(0,i.jsx)("header",{id:m().header,children:(0,i.jsxs)("nav",{id:m().nav,children:[(0,i.jsx)(u.Z,{href:"/","aria-label":"Home link",children:(0,i.jsx)("div",{children:(0,i.jsx)(j.Z,{id:m().logo,src:x.Z,alt:"",width:46,height:46})})}),(0,i.jsxs)("div",{className:m().links,children:[(0,i.jsx)(u.Z,{href:"/faq",neutral:!0,children:"FAQ"}),(0,i.jsx)(u.Z,{href:"/download",children:(0,i.jsx)(s.Z,{cta:!0,asDiv:!0,size:"large",children:"Get Ferdium"})})]})]})})},g=t(1281),p=t.n(g),v=function(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(_,{}),(0,i.jsx)("main",{id:p().main,children:e.children}),(0,i.jsx)(h,{})]})}},7966:function(e,n,t){"use strict";var i=t(5893),r=t(1664),c=t.n(r),o=(t(7294),t(9617)),a=t.n(o);n.Z=function(e){return(0,i.jsx)(c(),{href:e.href,children:(0,i.jsx)("a",{"aria-label":e["aria-label"],className:e.neutral?a().neutral:void 0,children:e.children})})}},7440:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(5893),r=t(5675),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=function(e){return e.src};function s(e){return(0,i.jsx)(c(),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}({},e,{loader:a,unoptimized:!e.width&&!e.height}))}},9383:function(e,n,t){"use strict";var i=t(5893),r=(t(7294),t(4087)),c=t.n(r);n.Z=function(e){var n=[c().content,e.className];return e.wide&&n.push(c().wide),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:c().section,children:[e.brand&&(0,i.jsx)("div",{className:c().brand}),(0,i.jsx)("div",{style:{flexDirection:e.row?"row":"column"},className:n.join(" "),children:e.children})]})})}},5427:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var i=t(5893),r=t(2422),c=t(7294),o=t(5317),a=t(3267),s=t.n(a),l=t(5828),d=function(e){var n=(0,c.useState)(!1),t=n[0],a=n[1];return(0,c.useEffect)((function(){t&&setTimeout((function(){a(!1)}),2e3)}),[t]),(0,i.jsxs)("div",{className:s().codeblock,children:[(0,i.jsx)("code",{className:s().code,children:e.code}),(0,i.jsx)(r.Z,{icon:!0,onClick:function(){if(!navigator.clipboard){var n=document.createElement("textarea");return n.innerHTML=e.code,n.select(),document.execCommand("copy"),document.removeChild(n),void a(!0)}navigator.clipboard.writeText(e.code).then((function(){a(!0)})).catch((function(e){console.error("Something went wrong when copying to clipboard",e)}))},children:t?(0,i.jsx)("div",{className:s().check,children:(0,i.jsx)(l.Z,{icon:o.k6A,size:1})}):(0,i.jsx)(l.Z,{icon:o.a0Z,size:1})})]})},u=function(e){return(0,i.jsxs)("article",{style:{width:"450px",marginBottom:"1rem"},children:[(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)(d,{code:e.text})]})},h=t(2795),f=t(4049),m=t(6039),x=t(9383),j=t(6249),_=t.n(j),g=function(e){return(0,i.jsxs)(m.Z,{children:[(0,i.jsx)(f.Z,{title:"Ferdium | Download"}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("h1",{children:"Download"}),(0,i.jsxs)("div",{className:_().copy,children:[(0,i.jsxs)("p",{children:["We're in the process of getting direct downloads ready, for now you can follow the link below to download the latest nightly release of Ferdium from our GitHub Releases."," "]}),(0,i.jsx)("p",{children:'Once there click "Assets" and choose the version for your platform! We currently have releases for macOS, Windows, Linux (AppImage and DEB) and FreeBSD.'})]}),(0,i.jsx)(h.Z,{href:"https://github.com/ferdium/ferdium-app/releases/latest",children:(0,i.jsx)(r.Z,{cta:!0,size:"huge",children:"Download from GitHub"})})]}),(0,i.jsxs)(x.Z,{children:[(0,i.jsx)("h2",{children:"Using your OS's package manager"}),(0,i.jsx)("p",{className:_().copy,children:"Alternatively, you can use the package manager of your OS to install Ferdium. Use one of the CLI commands below depending on your OS to install the latest binary release of Ferdium. Some package managers (like AUR) also allow you to build the source release yourself."}),(0,i.jsx)(u,{title:"AUR (Arch Linux and derivatives)",text:"yay -S ferdium-bin\n// or, to compile yourself\nyay -S ferdium"}),(0,i.jsx)(u,{title:"Homebrew (macOS)",text:"brew tap ferdium/ferdium\nbrew install ferdium-nightly"}),(0,i.jsx)(u,{title:"Scoop (Windows)",text:"scoop install ferdium-nightly"}),(0,i.jsx)(u,{title:"Snap (Ubuntu linux and derivatives)",text:"snap install --edge ferdium\nsnap connect ferdium:camera\nsnap connect ferdium:audio-record"})]})]})}},7756:function(e){e.exports={cta:"Button_cta__miivv",base:"Button_base__r2Zz5",large:"Button_large__Rfe70",huge:"Button_huge__E9Rvs",icon:"Button_icon__CdeUa",prefix:"Button_prefix__XgS2V"}},3267:function(e){e.exports={codeblock:"CodeBlock_codeblock__HQirC",code:"CodeBlock_code__b_Dyd",check:"CodeBlock_check__S_Ut6"}},8056:function(e){e.exports={links:"CommunityLinks_links__E6F4L"}},6129:function(e){e.exports={neutral:"ExternalLink_neutral__H3BU1"}},2752:function(e){e.exports={footer:"Footer_footer__Ksopt",links:"Footer_links__W8RrQ",legal:"Footer_legal__5lBiC",darkmode:"Footer_darkmode__tYgMA"}},4243:function(e){e.exports={header:"Header_header__Kpax6",links:"Header_links__mnu_q",nav:"Header_nav__SMZyC",logo:"Header_logo__q5xpd"}},1281:function(){},9617:function(e){e.exports={neutral:"Link_neutral__h8btI"}},4087:function(e){e.exports={section:"Section_section__BYVDj",brand:"Section_brand__1PtA1",content:"Section_content___fVbw",wide:"Section_wide__MZgDs"}},6249:function(e){e.exports={copy:"Download_copy__x0x2T"}},9008:function(e,n,t){e.exports=t(3121)}},function(e){e.O(0,[702,161,774,888,179],(function(){return n=170,e(e.s=n);var n}));var n=e.O();_N_E=n}]);