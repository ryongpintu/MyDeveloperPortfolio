!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};
/*!
 * modernizr v3.6.0
 * Build https://modernizr.com/download?-flexbox-svg-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */!function(e,t,n){var i=[],s={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},a=function(){};a.prototype=s,a=new a;var o=[];function c(e,t){return(void 0===e?"undefined":r(e))===t}var l=t.documentElement,u="svg"===l.nodeName.toLowerCase();var f=s._config.usePrefixes?"Moz O ms Webkit".split(" "):[];function d(e,t){return!!~(""+e).indexOf(t)}function p(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):u?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}s._cssomPrefixes=f;var m={elem:p("modernizr")};a._q.push(function(){delete m.elem});var h={style:m.elem.style};function g(e,n,r,i){var s,a,o,c,f="modernizr",d=p("div"),m=function(){var e=t.body;return e||((e=p(u?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(o=p("div")).id=i?i[r]:f+(r+1),d.appendChild(o);return(s=p("style")).type="text/css",s.id="s"+f,(m.fake?m:d).appendChild(s),m.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,m.fake&&(m.style.background="",m.style.overflow="hidden",c=l.style.overflow,l.style.overflow="hidden",l.appendChild(m)),a=n(d,e),m.fake?(m.parentNode.removeChild(m),l.style.overflow=c,l.offsetHeight):d.parentNode.removeChild(d),!!a}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function A(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(v(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+v(t[i])+":"+r+")");return g("@supports ("+(s=s.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"==function(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;null!==i?r&&(i=i.getPropertyValue(r)):s&&s[s.error?"error":"log"].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}(t,null,"position")})}return n}function y(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}a._q.unshift(function(){delete h.style});var b=s._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];function z(e,t){return function(){return e.apply(t,arguments)}}function w(e,t,r,i,s){var a=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+f.join(a+" ")+a).split(" ");return c(t,"string")||c(t,"undefined")?function(e,t,r,i){if(i=!c(i,"undefined")&&i,!c(r,"undefined")){var s=A(e,r);if(!c(s,"undefined"))return s}for(var a,o,l,u,f,m=["modernizr","tspan","samp"];!h.style&&m.length;)a=!0,h.modElem=p(m.shift()),h.style=h.modElem.style;function g(){a&&(delete h.style,delete h.modElem)}for(l=e.length,o=0;o<l;o++)if(u=e[o],f=h.style[u],d(u,"-")&&(u=y(u)),h.style[u]!==n){if(i||c(r,"undefined"))return g(),"pfx"!=t||u;try{h.style[u]=r}catch(e){}if(h.style[u]!=f)return g(),"pfx"!=t||u}return g(),!1}(o,t,i,s):function(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:c(r=t[e[i]],"function")?z(r,n||t):r;return!1}(o=(e+" "+b.join(a+" ")+a).split(" "),t,r)}function S(e,t,r){return w(e,n,n,t,r)}s._domPrefixes=b,s.testAllProps=w,s.testAllProps=S,
/*!
  {
    "name": "Flexbox",
    "property": "flexbox",
    "caniuse": "flexbox",
    "tags": ["css"],
    "notes": [{
      "name": "The _new_ flexbox",
      "href": "http://dev.w3.org/csswg/css3-flexbox"
    }],
    "warnings": [
      "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
    ]
  }
  !*/
a.addTest("flexbox",S("flexBasis","1px",!0)),
/*!
  {
    "name": "SVG",
    "property": "svg",
    "caniuse": "svg",
    "tags": ["svg"],
    "authors": ["Erik Dahlstrom"],
    "polyfills": [
      "svgweb",
      "raphael",
      "amplesdk",
      "canvg",
      "svg-boilerplate",
      "sie",
      "dojogfx",
      "fabricjs"
    ]
  }
  !*/
a.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,l;for(var u in i)if(i.hasOwnProperty(u)){if(e=[],(t=i[u]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=c(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)1===(l=e[s].split(".")).length?a[l[0]]=r:(!a[l[0]]||a[l[0]]instanceof Boolean||(a[l[0]]=new Boolean(a[l[0]])),a[l[0]][l[1]]=r),o.push((r?"":"no-")+l.join("-"))}}(),function(e){var t=l.className,n=a._config.classPrefix||"";if(u&&(t=t.baseVal),a._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}a._config.enableClasses&&(t+=" "+n+e.join(" "+n),u?l.className.baseVal=t:l.className=t)}(o),delete s.addTest,delete s.addAsyncTest;for(var C=0;C<a._q.length;C++)a._q[C]();e.Modernizr=a}(window,document)},function(e,t,n){var r;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function(i,s,a){"use strict";var o,c,l;s.createElement("picture");var u={},f=!1,d=function(){},p=s.createElement("img"),m=p.getAttribute,h=p.setAttribute,g=p.removeAttribute,v=s.documentElement,A={},y={algorithm:""},b=navigator.userAgent,z=/rident/.test(b)||/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1>35,w="currentSrc",S=/\s+\+?\d+(e\d+)?w/,C=/(\([^)]+\))?\s*(.+)/,E=i.picturefillCFG,x="font-size:100%!important;",T=!0,M={},P={},L=i.devicePixelRatio,_={px:1,in:96},R=s.createElement("a"),N=!1,k=/^[ \t\n\r\u000c]+/,B=/^[, \t\n\r\u000c]+/,W=/^[^ \t\n\r\u000c]+/,D=/[,]+$/,$=/^\d+$/,O=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,j=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},I=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}};function U(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var F=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=I(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(n,r){var i;if(!(n in M))if(M[n]=!1,r&&(i=n.match(e)))M[n]=i[1]*_[i[2]];else try{M[n]=new Function("e",t(n))(_)}catch(e){}return M[n]}}(),H=function(e,t){return e.w?(e.cWidth=u.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},q=function(e){if(f){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=(t=i.elements||u.qsa(i.context||s,i.reevaluate||i.reselect?u.sel:u.selShort)).length){for(u.setupRun(i),N=!0,n=0;n<r;n++)u.fillImg(t[n],i);u.teardownRun(i)}}};function Q(e,t,n,r){var i,s,a;return"saveData"===y.algorithm?e>2.7?a=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),a=e+s):a=n>1?Math.sqrt(e*t):e,a>n}function G(e,t){return e.res-t.res}function V(e,t){var n,r,i;if(e&&t)for(i=u.parseSet(t),e=u.makeUrl(e),n=0;n<i.length;n++)if(e===u.makeUrl(i[n].url)){r=i[n];break}return r}i.console&&console.warn,w in p||(w="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),u.ns=("pf"+(new Date).getTime()).substr(0,9),u.supSrcset="srcset"in p,u.supSizes="sizes"in p,u.supPicture=!!i.HTMLPictureElement,u.supSrcset&&u.supPicture&&!u.supSizes&&function(e){p.srcset="data:,a",e.src="data:,a",u.supSrcset=p.complete===e.complete,u.supPicture=u.supSrcset&&u.supPicture}(s.createElement("img")),u.supSrcset&&!u.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(u.supSizes=!0),c=u.supSrcset&&!u.supSizes,f=!0,setTimeout(q)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():f=!0,u.selShort="picture>img,img[srcset]",u.sel=u.selShort,u.cfg=y,u.DPR=L||1,u.u=_,u.types=A,u.setSize=d,u.makeUrl=I(function(e){return R.href=e,R.href}),u.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},u.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?u.matchesMedia=function(e){return!e||matchMedia(e).matches}:u.matchesMedia=u.mMQ,u.matchesMedia.apply(this,arguments)},u.mMQ=function(e){return!e||F(e)},u.calcLength=function(e){var t=F(e,!0)||!1;return t<0&&(t=!1),t},u.supportsType=function(e){return!e||A[e]},u.parseSize=I(function(e){var t=(e||"").match(C);return{media:t&&t[1],length:t&&t[2]}}),u.parseSet=function(e){return e.cands||(e.cands=function(e,t){function n(t){var n,r=t.exec(e.substring(l));if(r)return n=r[0],l+=n.length,n}var r,i,s,a,o,c=e.length,l=0,u=[];function f(){var e,n,s,a,o,c,l,f,d,p=!1,m={};for(a=0;a<i.length;a++)c=(o=i[a])[o.length-1],l=o.substring(0,o.length-1),f=parseInt(l,10),d=parseFloat(l),$.test(l)&&"w"===c?((e||n)&&(p=!0),0===f?p=!0:e=f):O.test(l)&&"x"===c?((e||n||s)&&(p=!0),d<0?p=!0:n=d):$.test(l)&&"h"===c?((s||n)&&(p=!0),0===f?p=!0:s=f):p=!0;p||(m.url=r,e&&(m.w=e),n&&(m.d=n),s&&(m.h=s),s||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,u.push(m))}function d(){for(n(k),s="",a="in descriptor";;){if(o=e.charAt(l),"in descriptor"===a)if(U(o))s&&(i.push(s),s="",a="after descriptor");else{if(","===o)return l+=1,s&&i.push(s),void f();if("("===o)s+=o,a="in parens";else{if(""===o)return s&&i.push(s),void f();s+=o}}else if("in parens"===a)if(")"===o)s+=o,a="in descriptor";else{if(""===o)return i.push(s),void f();s+=o}else if("after descriptor"===a)if(U(o));else{if(""===o)return void f();a="in descriptor",l-=1}l+=1}}for(;;){if(n(B),l>=c)return u;r=n(W),i=[],","===r.slice(-1)?(r=r.replace(D,""),f()):d()}}(e.srcset,e)),e.cands},u.getEmValue=function(){var e;if(!o&&(e=s.body)){var t=s.createElement("div"),n=v.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",v.style.cssText=x,e.style.cssText=x,e.appendChild(t),o=t.offsetWidth,e.removeChild(t),o=parseFloat(o,10),v.style.cssText=n,e.style.cssText=r}return o||16},u.calcListLength=function(e){if(!(e in P)||y.uT){var t=u.calcLength(function(e){var t,n,r,i,s,a,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,c=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;function l(e){return!!(o.test(e)&&parseFloat(e)>=0)||!!c.test(e)||"0"===e||"-0"===e||"+0"===e}for(r=(n=function(e){var t,n="",r=[],i=[],s=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(i.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),i;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(U(t)){if(e.charAt(a-1)&&U(e.charAt(a-1))||!n){a+=1;continue}if(0===s){c(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(e)).length,t=0;t<r;t++)if(l(s=(i=n[t])[i.length-1])){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),u.matchesMedia(i))return a}return"100vw"}(e));P[e]=t||_.width}return P[e]},u.setRes=function(e){var t;if(e)for(var n=0,r=(t=u.parseSet(e)).length;n<r;n++)H(t[n],e.sizes);return t},u.setRes.res=H,u.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,o,c,l,f,d=t[u.ns],p=u.DPR;if(o=d.curSrc||t[w],(c=d.curCan||function(e,t,n){var r;return!n&&t&&(n=(n=e[u.ns].sets)&&n[n.length-1]),(r=V(t,n))&&(t=u.makeUrl(t),e[u.ns].curSrc=t,e[u.ns].curCan=r,r.res||H(r,r.set.sizes)),r}(t,o,e[0].set))&&c.set===e[0].set&&((f=z&&!t.complete&&c.res-.1>p)||(c.cached=!0,c.res>=p&&(a=c))),!a)for(e.sort(G),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=p){a=e[i=r-1]&&(f||o!==u.makeUrl(n.url))&&Q(e[i].res,n.res,p,e[i].cached)?e[i]:n;break}a&&(l=u.makeUrl(a.url),d.curSrc=l,d.curCan=a,l!==o&&u.setSrc(t,a),u.setSize(t))}},u.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},u.getSet=function(e){var t,n,r,i=!1,s=e[u.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&u.matchesMedia(n.media)&&(r=u.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},u.parseSets=function(e,t,n){var r,i,s,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[u.ns];(void 0===l.src||n.src)&&(l.src=m.call(e,"src"),l.src?h.call(e,"data-pfsrc",l.src):g.call(e,"data-pfsrc")),(void 0===l.srcset||n.srcset||!u.supSrcset||e.srcset)&&(r=m.call(e,"srcset"),l.srcset=r,a=!0),l.sets=[],o&&(l.pic=!0,function(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[u.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,l.sets)),l.srcset?(i={srcset:l.srcset,sizes:m.call(e,"sizes")},l.sets.push(i),(s=(c||l.src)&&S.test(l.srcset||""))||!l.src||V(l.src,i)||i.has1x||(i.srcset+=", "+l.src,i.cands.push({url:l.src,d:1,set:i}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=void 0,l.supported=!(o||i&&!u.supSrcset||s&&!u.supSizes),a&&u.supSrcset&&!l.supported&&(r?(h.call(e,"data-pfsrcset",r),e.srcset=""):g.call(e,"data-pfsrcset")),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==u.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},u.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[u.ns]||(e[u.ns]={}),n=e[u.ns],(r||n.evaled!==l)&&(n.parsed&&!t.reevaluate||u.parseSets(e,e.parentNode,t),n.supported?n.evaled=l:function(e){var t,n=u.getSet(e),r=!1;"pending"!==n&&(r=l,n&&(t=u.setRes(n),u.applySetCandidate(t,e))),e[u.ns].evaled=r}(e))},u.setupRun=function(){N&&!T&&L===i.devicePixelRatio||(T=!1,L=i.devicePixelRatio,M={},P={},u.DPR=L||1,_.width=Math.max(i.innerWidth||0,v.clientWidth),_.height=Math.max(i.innerHeight||0,v.clientHeight),_.vw=_.width/100,_.vh=_.height/100,l=[_.height,_.width,L].join("-"),_.em=u.getEmValue(),_.rem=_.em)},u.supPicture?(q=d,u.fillImg=d):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(u.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=v.clientHeight;j(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){T=Math.max(i.innerWidth||0,v.clientWidth)!==_.width||v.clientHeight!==a,a=v.clientHeight,T&&u.fillImgs()},99)),j(s,"readystatechange",n)}(),u.picturefill=q,u.fillImgs=q,u.teardownRun=d,q._=u,i.picturefillCFG={pf:u,push:function(e){var t=e.shift();"function"==typeof u[t]?u[t].apply(u,e):(y[t]=e[0],N&&u.fillImgs({reselect:!0}))}};for(;E&&E.length;)i.picturefillCFG.push(E.shift());i.picturefill=q,"object"==typeof e&&"object"==typeof e.exports?e.exports=q:void 0===(r=function(){return q}.call(t,n,t,e))||(e.exports=r),u.supPicture||(A["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){A[e]=!1,q()},n.onload=function(){A[e]=1===n.width,q()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=function(e,t){"use strict";if(!t.getElementsByClassName)return;var n,r,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,c=e.setTimeout,l=e.requestAnimationFrame||c,u=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},v=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},A=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&A(e,t),d.forEach(function(n){e[r](n,t)})},y=function(e,r,i,s,a){var o=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,o.initCustomEvent(r,!s,!a,i),e.dispatchEvent(o),o},b=function(t,n){var i;!a&&(i=e.picturefill||r.pf)?(n&&n.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},S=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?c:l)(a)))};return o._lsFlush=a,o}(),C=function(e,t){return t?function(){S(e)}:function(){var t=this,n=arguments;S(function(){e.apply(t,n)})}},E=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?c(i,99-e):(u||r)(r)};return function(){n=s.now(),t||(t=c(i,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&M()})}();var x=function(){var a,l,d,p,w,x,M,P,L,_,R,N,k,B,W=/^img$/i,D=/^iframe$/i,$="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,j=0,I=-1,U=function(e){j--,e&&e.target&&A(e.target,U),(!e||j<0||!e.target)&&(j=0)},F=function(e,n){var r,s=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e.parentNode,"visibility")&&"hidden"!=z(e,"visibility");for(P-=n,R+=n,L-=n,_+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(z(s,"opacity")||1)>0)&&"visible"!=z(s,"overflow")&&(r=s.getBoundingClientRect(),a=_>r.left&&L<r.right&&R>r.top-1&&P<r.bottom+1);return a},H=function(){var e,s,o,c,u,f,d,m,h,g=n.elements;if((p=r.loadMode)&&j<8&&(e=g.length)){s=0,I++,null==k&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),N=r.expand,k=N*r.expFactor),O<k&&j<1&&I>2&&p>2&&!t.hidden?(O=k,I=0):O=p>1&&I>1&&j<6?N:0;for(;s<e;s++)if(g[s]&&!g[s]._lazyRace)if($)if((m=g[s].getAttribute("data-expand"))&&(f=1*m)||(f=O),h!==f&&(x=innerWidth+f*B,M=innerHeight+f,d=-1*f,h=f),o=g[s].getBoundingClientRect(),(R=o.bottom)>=d&&(P=o.top)<=M&&(_=o.right)>=d*B&&(L=o.left)<=x&&(R||_||L||P)&&(r.loadHidden||"hidden"!=z(g[s],"visibility"))&&(l&&j<3&&!m&&(p<3||I<4)||F(g[s],f))){if(X(g[s]),u=!0,j>9)break}else!u&&l&&!c&&j<4&&I<4&&p>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(R||_||L||P||"auto"!=g[s].getAttribute(r.sizesAttr)))&&(c=a[0]||g[s]);else X(g[s]);c&&!u&&X(c)}},q=function(e){var t,n=0,i=r.throttleDelay,a=r.ricTimeout,o=function(){t=!1,n=s.now(),e()},l=u&&a>49?function(){u(o,{timeout:a}),a!==r.ricTimeout&&(a=r.ricTimeout)}:C(function(){c(o)},!0);return function(e){var r;(e=!0===e)&&(a=33),t||(t=!0,(r=i-(s.now()-n))<0&&(r=0),e||r<9?l():c(l,r))}}(H),Q=function(e){g(e.target,r.loadedClass),v(e.target,r.loadingClass),A(e.target,V),y(e.target,"lazyloaded")},G=C(Q),V=function(e){G({target:e.target})},J=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},K=C(function(e,t,n,i,s){var a,o,l,u,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",i)),o=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),s&&(l=e.parentNode,u=l&&f.test(l.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||u),p={target:e},h&&(A(e,U,!0),clearTimeout(d),d=c(U,2500),g(e,r.loadingClass),A(e,V,!0)),u&&m.call(l.getElementsByTagName("source"),J),o?e.setAttribute("srcset",o):a&&!u&&(D.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),s&&(o||u)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,v(e,r.lazyClass),S(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?U(p):j--,Q(p))},!0)}),X=function(e){var t,n=W.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&l||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,r.errorClass)||!h(e,r.lazyClass))&&(t=y(e,"lazyunveilread").detail,s&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,K(e,t,s,i,n))},Z=function(){if(!l)if(s.now()-w<999)c(Z,999);else{var e=E(function(){r.loadMode=3,q()});l=!0,r.loadMode=3,q(),o("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){w=s.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),B=r.hFac,o("scroll",q,!0),o("resize",q,!0),e.MutationObserver?new MutationObserver(q).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",q,!0),i.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),o("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,q,!0)}),/d$|^c/.test(t.readyState)?Z():(o("load",Z),t.addEventListener("DOMContentLoaded",q),c(Z,2e4)),n.elements.length?(H(),S._lsFlush()):q()},checkElems:q,unveil:X}}(),T=function(){var e,n=C(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),f.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=w(e,s,r),(i=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=E(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),o("resize",s)},checkElems:s,updateElem:i}}(),M=function(){M.i||(M.i=!0,T._(),x._())};return n={cfg:r,autoSizer:T,loader:x,init:M,uP:b,aC:g,rC:v,hC:h,fire:y,gW:w,rAF:S}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)}]);