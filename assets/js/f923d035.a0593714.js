"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[989],{333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(4848),o=n(8453);const r={sidebar_label:"Website intergration",sidebar_position:2,description:"Website intergration",slug:"/web_integration"},s="Website integration",i={id:"business-integration/web_integration",title:"Website integration",description:"Website intergration",source:"@site/docs/business-integration/web_integration.md",sourceDirName:"business-integration",slug:"/web_integration",permalink:"/mpdocs/web_integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Website intergration",sidebar_position:2,description:"Website intergration",slug:"/web_integration"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/mpdocs/getting_started"},next:{title:"JS API",permalink:"/mpdocs/js_api"}},c={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"website-integration",children:"Website integration"}),"\n",(0,a.jsx)(t.p,{children:"Integrating MetaPerson Creator into your website is easy and straightforward, thanks to our iframe mechanism and special JS API. This allows you to embed the creator directly into your website and set up, providing a seamless and intuitive experience for your users."}),"\n",(0,a.jsx)(t.h1,{id:"metaperson-creator-desktop",children:"MetaPerson Creator Desktop"}),"\n",(0,a.jsxs)(t.p,{children:["To integrate MetaPerson Creator Desktop into your website, you'll need to first create an iframe element that references our creator URL. We recommend using the link ",(0,a.jsx)(t.a,{href:"https://metaperson.avatarsdk.com/iframe.html",children:"https://metaperson.avatarsdk.com/iframe.html"})," for MetaPerson Creator Desktop to use it in an iframe. It is the same version of MetaPerson Creator Desktop but without any additional controls, that allow easy resizing it to the size of the iframe element."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.code,{children:'<iframe src="https://metaperson.avatarsdk.com/iframe.html" frameborder="0"></iframe>'})}),"\n",(0,a.jsx)(t.p,{children:"To connect MetaPerson Creator Desktop with your Avatar SDK account you need to use JS API to set your developer credentials to the iframe."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'function onUnityLoaded(evt, data) {\n    let authenticationMessage = {\n        "eventName": "authenticate",\n        "clientId": CLIENT_ID,\n        "clientSecret": CLIENT_SECRET,\n    };\n    evt.source.postMessage(authenticationMessage, "*");\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:['Replace "CLIENT_ID" and "CLIENT_SECRET" with the values you received when you ',(0,a.jsx)(t.a,{href:"getting_started",children:"created your application"}),". This will ensure that your website is authorized to access the creator and your avatar data."]}),"\n",(0,a.jsx)(t.p,{children:"It's important to ensure that you've correctly added your developer credentials to MetaPerson Creator to ensure that you have access to all of the creator's features, including the Export button. If you've incorrectly added your credentials, or if your account doesn't have a Pro plan or higher, the Export button may be inactive."}),"\n",(0,a.jsxs)(t.p,{children:['To avoid this issue, double-check that you\'ve entered your c "CLIENT_ID" and "CLIENT_SECRET" values correctly and that your account is on the Pro plan or higher. If you\'re still experiencing issues, please don\'t hesitate to contact our ',(0,a.jsx)(t.a,{href:"mailto:support@avatarsdk.com",children:"support team"})," for assistance."]}),"\n",(0,a.jsxs)(t.p,{children:["You can find the whole sample page with the integration at this link ",(0,a.jsx)(t.a,{href:"https://metaperson.avatarsdk.com/business.html",children:"https://metaperson.avatarsdk.com/business.html"}),'. Use the "Open MetaPerson Creator" button to open an iframe with MetaPerson Creator. Also, here you can specify your developer credentials with the UI controls. Please investigate the page source to look at the integration sample. Please pay attention to JS API calls on this sample page.']}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(198).A+"",width:"1000",height:"530"})}),"\n",(0,a.jsx)(t.p,{children:"Once you've added the iframe to your website, your users can start creating their own avatars directly from your website. They can upload a selfie, customize their avatar's features, hairstyles, outfits, and body settings, and then download or integrate their avatar into your product."}),"\n",(0,a.jsx)(t.h1,{id:"metaperson-creator-mobile",children:"MetaPerson Creator Mobile"}),"\n",(0,a.jsxs)(t.p,{children:["Integration of MetaPerson Creator Mobile is almost the same but you need to use another link to make it. We recommend using the link ",(0,a.jsx)(t.a,{href:"https://mobile.metaperson.avatarsdk.com/generator",children:"https://mobile.metaperson.avatarsdk.com/generator"})," for MetaPerson Creator Mobile to use it in an iframe."]}),"\n",(0,a.jsx)(t.p,{children:"To connect MetaPerson Creator Mobile with your Avatar SDK account you need to use almost the same JS API to set your developer credentials to the iframe."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'function onMobileLoaded(evt, data) {\n    let authenticationMessage = {\n        "eventName": "authenticate",\n        "clientId": CLIENT_ID,\n        "clientSecret": CLIENT_SECRET,\n    };\n    evt.source.postMessage(authenticationMessage, "*");\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You also can find the whole sample page with the integration at this link ",(0,a.jsx)(t.a,{href:"https://mobile.metaperson.avatarsdk.com/business.html",children:"https://mobile.metaperson.avatarsdk.com/business.html"}),". Please investigate the page source to look at the integration sample. Please pay attention to JS API calls on this sample page."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(3923).A+"",width:"892",height:"666"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3923:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/mobile_sample_page-d079852c9945bdb53de00bc924bfa18d.png"},198:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/sample_page-185c18f7ec1528f914198ece0f3dc0a9.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);