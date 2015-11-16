/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-ie8compat-touchevents-shiv !*/
!function(e,t,n){function o(e){var t=u.className,n=Modernizr._config.classPrefix||"";if(m&&(t=t.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?u.className.baseVal=t:u.className=t)}function a(e,t){return typeof e===t}function r(){var e,t,n,o,r,i,s;for(var c in d)if(d.hasOwnProperty(c)){if(e=[],t=d[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=a(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)i=e[r],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),l.push((o?"":"no-")+s.join("-"))}}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):m?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||(e=i(m?"svg":"body"),e.fake=!0),e}function c(e,n,o,a){var r,c,l,d,f="modernizr",m=i("div"),h=s();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=a?a[o]:f+(o+1),m.appendChild(l);return r=i("style"),r.type="text/css",r.id="s"+f,(h.fake?h:m).appendChild(r),h.appendChild(m),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),m.id=f,h.fake&&(h.style.background="",h.style.overflow="hidden",d=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),c=n(m,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=d,u.offsetHeight):m.parentNode.removeChild(m),!!c}var l=[],d=[],f={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){d.push({name:e,fn:t,options:n})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode);var u=t.documentElement,m="svg"===u.nodeName.toLowerCase();m||!function(e,t){function n(e,t){var n=e.createElement("p"),o=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",o.insertBefore(n.lastChild,o.firstChild)}function o(){var e=E.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t)}function r(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function i(e,n,o){if(n||(n=t),f)return n.createElement(e);o||(o=r(n));var a;return a=o.cache[e]?o.cache[e].cloneNode():p.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e),!a.canHaveChildren||h.test(e)||a.tagUrn?a:o.frag.appendChild(a)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||r(e);for(var a=n.frag.cloneNode(),i=0,s=o(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+o().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(E,t.frag)}function l(e){e||(e=t);var o=r(e);return!E.shivCSS||d||o.hasCSS||(o.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||c(e,o),e}var d,f,u="3.7.3",m=e.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,f=!0}}();var E={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:m.shivCSS!==!1,supportsUnknownElements:f,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:s,addElements:a};e.html5=E,l(t),"object"==typeof module&&module.exports&&(module.exports=E)}("undefined"!=typeof e?e:this,t);var h=f._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];f._prefixes=h;var p=f.testStyles=c;Modernizr.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");p(o,function(e){n=9===e.offsetTop})}return n}),r(),o(l),delete f.addTest,delete f.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);