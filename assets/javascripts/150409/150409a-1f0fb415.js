window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function a(e,t){return typeof e===t}function i(){u.input=function(n){for(var r=0,a=n.length;r<a;r++)b[n[r]]=n[r]in m;return b.list&&(b.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),b}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),u.inputtypes=function(e){for(var r,a,i,o=0,c=e.length;o<c;o++)m.setAttribute("type",a=e[o]),r="text"!==m.type,r&&(m.value=v,m.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&m.style.WebkitAppearance!==n?(d.appendChild(m),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(m,null).WebkitAppearance&&0!==m.offsetHeight,d.removeChild(m)):/^(search|tel)$/.test(a)||(r=/^(url|email)$/.test(a)?m.checkValidity&&m.checkValidity()===!1:m.value!=v)),y[e[o]]=!!r;return y}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var o,c,l="2.8.3",u={},s=!0,d=t.documentElement,f="modernizr",p=t.createElement(f),h=p.style,m=t.createElement("input"),v=":)",g=({}.toString,{}),y={},b={},E=[],k=E.slice,C={}.hasOwnProperty;c=a(C,"undefined")||a(C.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=k.call(arguments,1),r=function(){if(this instanceof r){var a=function(){};a.prototype=t.prototype;var i=new a,o=t.apply(i,n.concat(k.call(arguments)));return Object(o)===o?o:i}return t.apply(e,n.concat(k.call(arguments)))};return r});for(var w in g)c(g,w)&&(o=w.toLowerCase(),u[o]=g[w](),E.push((u[o]?"":"no-")+o));return u.input||i(),u.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof s&&s&&(d.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),p=m=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=g[e[m]];return t||(t={},v++,e[m]=v,g[v]=t),t}function i(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||p.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function o(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),o=0,c=r(),l=c.length;o<l;o++)i.createElement(c[o]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var r=a(e);return y.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||c(e,r),e}var u,s,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){u=!0,s=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:s,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:i,createDocumentFragment:o};e.html5=y,l(t)}(this,t),u._version=l,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(s?" js "+E.join(" "):""),u}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function a(e){return"string"==typeof e}function i(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=g.shift();y=1,e?e.t?h(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function l(e,n,r,a,i,l,u){function s(t){if(!p&&o(d.readyState)&&(b.r=p=1,!y&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){k.removeChild(d)},50);for(var r in x[n])x[n].hasOwnProperty(r)&&x[n][r].onload()}}var u=u||f.errorTimeout,d=t.createElement(e),p=0,v=0,b={t:r,s:n,e:i,a:l,x:u};1===x[n]&&(v=1,x[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){s.call(this,v)},g.splice(a,0,b),"img"!=e&&(v||2===x[n]?(k.insertBefore(d,E?null:m),h(s,u)):x[n].push(d))}function u(e,t,n,r,i){return y=0,t=t||"j",a(e)?l("c"==t?w:C,e,t,this.i++,n,r,i):(g.splice(this.i++,0,e),1==g.length&&c()),this}function s(){var e=f;return e.loader={load:u,i:0},e}var d,f,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],v={}.toString,g=[],y=0,b="MozAppearance"in p.style,E=b&&!!t.createRange().compareNode,k=E?p:m.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,C=b?"object":p?"script":"img",w=p?"script":C,_=Array.isArray||function(e){return"[object Array]"==v.call(e)},A=[],x={},S={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),a=A.length,i=e.pop(),o=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;n<o;n++)r=e[n].split("="),(t=S[r.shift()])&&(i=t(i,r));for(n=0;n<a;n++)i=A[n](i);return i}function o(e,a,i,o,c){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(a&&(a=r(a)?a:a[e]||a[o]||a[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,a,i,o,c):(x[l.url]?l.noexec=!0:x[l.url]=1,i.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(a)||r(u))&&i.load(function(){s(),a&&a(l.origUrl,c,o),u&&u(l.origUrl,c,o),x[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(a(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),o(e,d,t,0,u);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[l])),o(e[l],d,t,l,u))}else!n&&p()}var c,l,u=!!e.test,s=e.load||e.both,d=e.callback||i,f=d,p=e.complete||i;n(u?e.yep:e.nope,!!s),s&&n(s)}var l,u,d=this.yepnope.loader;if(a(e))o(e,0,d,0);else if(_(e))for(l=0;l<e.length;l++)u=e[l],a(u)?o(u,0,d,0):_(u)?f(u):Object(u)===u&&c(u,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){S[e]=t},f.addFilter=function(e){A.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,a,l,u){var s,d,p=t.createElement("script"),a=a||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=u?c:n||i,p.onreadystatechange=p.onload=function(){!s&&o(p.readyState)&&(s=1,n(),p.onload=p.onreadystatechange=null)},h(function(){s||(s=1,n(1))},a),l?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,a,o,l){var u,a=t.createElement("link"),n=l?c:n||i;a.href=e,a.rel="stylesheet",a.type="text/css";for(u in r)a.setAttribute(u,r[u]);o||(m.parentNode.insertBefore(a,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))}),function(e){"use strict";function t(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):void 0}function n(e,t){var n,r;for(n=0,r=e.length;r>n;n++)if(e[n]===t)return!0;return!1}function r(e,t){var n;e.createTextRange?(n=e.createTextRange(),n.move("character",t),n.select()):e.selectionStart&&(e.focus(),e.setSelectionRange(t,t))}function a(e,t){try{return e.type=t,!0}catch(e){return!1}}e.Placeholders={Utils:{addEventListener:t,inArray:n,moveCaret:r,changeType:a}}}(this),function(e){"use strict";function t(){}function n(){try{return document.activeElement}catch(e){}}function r(e,t){var n,r,a=!!t&&e.value!==t,i=e.value===e.getAttribute(D);return!(!a&&!i||"true"!==e.getAttribute(L))&&(e.removeAttribute(L),e.value=e.value.replace(e.getAttribute(D),""),e.className=e.className.replace(z,""),r=e.getAttribute(P),parseInt(r,10)>=0&&(e.setAttribute("maxLength",r),e.removeAttribute(P)),n=e.getAttribute(R),n&&(e.type=n),!0)}function a(e){var t,n,r=e.getAttribute(D);return!(""!==e.value||!r)&&(e.setAttribute(L,"true"),e.value=r,e.className+=" "+j,n=e.getAttribute(P),n||(e.setAttribute(P,e.maxLength),e.removeAttribute("maxLength")),t=e.getAttribute(R),t?e.type="text":"password"===e.type&&U.changeType(e,"text")&&e.setAttribute(R,"password"),!0)}function i(e,t){var n,r,a,i,o,c,l;if(e&&e.getAttribute(D))t(e);else for(a=e?e.getElementsByTagName("input"):m,i=e?e.getElementsByTagName("textarea"):v,n=a?a.length:0,r=i?i.length:0,l=0,c=n+r;c>l;l++)o=n>l?a[l]:i[l-n],t(o)}function o(e){i(e,r)}function c(e){i(e,a)}function l(e){return function(){g&&e.value===e.getAttribute(D)&&"true"===e.getAttribute(L)?U.moveCaret(e,0):r(e)}}function u(e){return function(){a(e)}}function s(e){return function(t){return b=e.value,"true"===e.getAttribute(L)&&b===e.getAttribute(D)&&U.inArray(M,t.keyCode)?(t.preventDefault&&t.preventDefault(),!1):void 0}}function d(e){return function(){r(e,b),""===e.value&&(e.blur(),U.moveCaret(e,0))}}function f(e){return function(){e===n()&&e.value===e.getAttribute(D)&&"true"===e.getAttribute(L)&&U.moveCaret(e,0)}}function p(e){return function(){o(e)}}function h(e){e.form&&(_=e.form,"string"==typeof _&&(_=document.getElementById(_)),_.getAttribute(O)||(U.addEventListener(_,"submit",p(_)),_.setAttribute(O,"true"))),U.addEventListener(e,"focus",l(e)),U.addEventListener(e,"blur",u(e)),g&&(U.addEventListener(e,"keydown",s(e)),U.addEventListener(e,"keyup",d(e)),U.addEventListener(e,"click",f(e))),e.setAttribute(B,"true"),e.setAttribute(D,C),(g||e!==n())&&a(e)}var m,v,g,y,b,E,k,C,w,_,A,x,S,T=["text","search","url","tel","email","password","number","textarea"],M=[27,33,34,35,36,37,38,39,40,8,46],N="#ccc",j="placeholdersjs",z=RegExp("(?:^|\\s)"+j+"(?!\\S)"),D="data-placeholder-value",L="data-placeholder-active",R="data-placeholder-type",O="data-placeholder-submit",B="data-placeholder-bound",F="data-placeholder-focus",I="data-placeholder-live",P="data-placeholder-maxlength",$=document.createElement("input"),V=document.getElementsByTagName("head")[0],q=document.documentElement,H=e.Placeholders,U=H.Utils;if(H.nativeSupport=void 0!==$.placeholder,!H.nativeSupport){for(m=document.getElementsByTagName("input"),v=document.getElementsByTagName("textarea"),g="false"===q.getAttribute(F),y="false"!==q.getAttribute(I),E=document.createElement("style"),E.type="text/css",k=document.createTextNode("."+j+" { color:"+N+"; }"),E.styleSheet?E.styleSheet.cssText=k.nodeValue:E.appendChild(k),V.insertBefore(E,V.firstChild),S=0,x=m.length+v.length;x>S;S++)A=m.length>S?m[S]:v[S-m.length],C=A.attributes.placeholder,C&&(C=C.nodeValue,C&&U.inArray(T,A.type)&&h(A));w=setInterval(function(){for(S=0,x=m.length+v.length;x>S;S++)A=m.length>S?m[S]:v[S-m.length],C=A.attributes.placeholder,C?(C=C.nodeValue,C&&U.inArray(T,A.type)&&(A.getAttribute(B)||h(A),(C!==A.getAttribute(D)||"password"===A.type&&!A.getAttribute(R))&&("password"===A.type&&!A.getAttribute(R)&&U.changeType(A,"text")&&A.setAttribute(R,"password"),A.value===A.getAttribute(D)&&(A.value=C),A.setAttribute(D,C)))):A.getAttribute(L)&&(r(A),A.removeAttribute(D));y||clearInterval(w)},100)}U.addEventListener(e,"beforeunload",function(){H.disable()}),H.disable=H.nativeSupport?t:o,H.enable=H.nativeSupport?t:c}(this),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(window.jQuery||window.Zepto)}(function(e){var t=function(t,n,r){var a,i,o=this;t=e(t),n="function"==typeof n?n(t.val(),void 0,t,r):n;var c={getCaret:function(){try{var e,n=0,r=t.get(0),a=document.selection,i=r.selectionStart;return a&&!~navigator.appVersion.indexOf("MSIE 10")?(e=a.createRange(),e.moveStart("character",t.is("input")?-t.val().length:-t.text().length),n=e.text.length):(i||"0"===i)&&(n=i),n}catch(e){}},setCaret:function(e){try{if(t.is(":focus")){var n,r=t.get(0);r.setSelectionRange?r.setSelectionRange(e,e):r.createTextRange&&(n=r.createTextRange(),n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select())}}catch(e){}},events:function(){t.on("keydown.mask",function(){a=c.val()}).on("keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){t.keydown().keyup()},100)}).on("change.mask",function(){t.data("changed",!0)}).on("blur.mask",function(){a===t.val()||t.data("changed")||t.trigger("change"),t.data("changed",!1)}).on("focusout.mask",function(){r.clearIfNotMatch&&!i.test(c.val())&&c.val("")})},getRegexMask:function(){for(var e,t,r,a,i=[],c=0;c<n.length;c++)(e=o.translation[n[c]])?(t=e.pattern.toString().replace(/.{1}$|^.{1}/g,""),r=e.optional,(e=e.recursive)?(i.push(n[c]),a={digit:n[c],pattern:t}):i.push(r||e?t+"?":t)):i.push(n[c].replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return i=i.join(""),a&&(i=i.replace(new RegExp("("+a.digit+"(.*"+a.digit+")?)"),"($1)?").replace(new RegExp(a.digit,"g"),a.pattern)),new RegExp(i)},destroyEvents:function(){t.off("keydown keyup paste drop change blur focusout DOMNodeInserted ".split(" ").join(".mask ")).removeData("changeCalled")},val:function(e){var n=t.is("input");return 0<arguments.length?n?t.val(e):t.text(e):n?t.val():t.text()},getMCharsBeforeCount:function(e,t){for(var r=0,a=0,i=n.length;a<i&&a<e;a++)o.translation[n.charAt(a)]||(e=t?e+1:e,r++);return r},caretPos:function(e,t,r,a){return o.translation[n.charAt(Math.min(e-1,n.length-1))]?Math.min(e+r-t-a,r):c.caretPos(e+1,t,r,a)},behaviour:function(t){t=t||window.event;var n=t.keyCode||t.which;if(-1===e.inArray(n,o.byPassKeys)){var r=c.getCaret(),a=c.val(),i=a.length,l=r<i,u=c.getMasked(),s=u.length,d=c.getMCharsBeforeCount(s-1)-c.getMCharsBeforeCount(i-1);return u!==a&&c.val(u),!l||65===n&&t.ctrlKey||(8!==n&&46!==n&&(r=c.caretPos(r,i,s,d)),c.setCaret(r)),c.callbacks(t)}},getMasked:function(e){var t,a,i=[],l=c.val(),u=0,s=n.length,d=0,f=l.length,p=1,h="push",m=-1;for(r.reverse?(h="unshift",p=-1,t=0,u=s-1,d=f-1,a=function(){return-1<u&&-1<d}):(t=s-1,a=function(){return u<s&&d<f});a();){var v=n.charAt(u),g=l.charAt(d),y=o.translation[v];y?(g.match(y.pattern)?(i[h](g),y.recursive&&(-1===m?m=u:u===t&&(u=m-p),t===m&&(u-=p)),u+=p):y.optional&&(u+=p,d-=p),d+=p):(e||i[h](v),g===v&&(d+=p),u+=p)}return e=n.charAt(t),s!==f+1||o.translation[e]||i.push(e),i.join("")},callbacks:function(e){var i=c.val(),o=i!==a;!0===o&&"function"==typeof r.onChange&&r.onChange(i,e,t,r),!0===o&&"function"==typeof r.onKeyPress&&r.onKeyPress(i,e,t,r),"function"==typeof r.onComplete&&i.length===n.length&&r.onComplete(i,e,t,r)}};o.mask=n,o.options=r,o.remove=function(){var e;return c.destroyEvents(),c.val(o.getCleanVal()).removeAttr("maxlength"),e=c.getCaret(),c.setCaret(e-c.getMCharsBeforeCount(e)),t},o.getCleanVal=function(){return c.getMasked(!0)},o.init=function(){r=r||{},o.byPassKeys=[9,16,17,18,36,37,38,39,40,91],o.translation={0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}},o.translation=e.extend({},o.translation,r.translation),o=e.extend(!0,{},o,r),i=c.getRegexMask(),!1!==r.maxlength&&t.attr("maxlength",n.length),r.placeholder&&t.attr("placeholder",r.placeholder),t.attr("autocomplete","off"),c.destroyEvents(),c.events();var a=c.getCaret();c.val(c.getMasked()),c.setCaret(a+c.getMCharsBeforeCount(a,!0))}()},n={},r=function(){var t=e(this),n={};t.attr("data-mask-reverse")&&(n.reverse=!0),"false"===t.attr("data-mask-maxlength")&&(n.maxlength=!1),t.attr("data-mask-clearifnotmatch")&&(n.clearIfNotMatch=!0),t.mask(t.attr("data-mask"),n)};e.fn.mask=function(r,a){var i=this.selector,o=function(){var n=e(this).data("mask"),i=JSON.stringify;if("object"!=typeof n||i(n.options)!==i(a)||n.mask!==r)return e(this).data("mask",new t(this,r,a))};this.each(o),i&&!n[i]&&(n[i]=!0,setTimeout(function(){e(document).on("DOMNodeInserted.mask",i,o)},500))},e.fn.unmask=function(){try{return this.each(function(){e(this).data("mask").remove().removeData("mask")})}catch(e){}},e.fn.cleanVal=function(){return this.data("mask").getCleanVal()},e("*[data-mask]").each(r),e(document).on("DOMNodeInserted.mask","*[data-mask]",r)}),jQuery(document).ready(function(e){window.onbeforeunload=function(){return"If you leave now, your information will not be saved!"};var t={FIRST:{zip:"#zip1",property_ownership:"input[name=property_ownership]:checked"},SECOND:{electric_bill:"#electric_bill",electric_utility:"#electric_utility",roof_shade:"#roof_shade"},THIRD:{first_name:"#first_name",last_name:"#last_name",email:"#email",phone_home:"#phone_home",street:"#street",city:"#city",zip:"#zip"}};window.screen.width<=640&&e("#continue-1, #continue-2").attr("href","#form"),Modernizr.input.placeholder&&e("#phone_home").mask("(999) 999-9999"),e(".zip-step1").change(function(){e(".zip-step2").val(e(this).val())}),e("#zip1, #zip").change(function(){var t=e(this).val(),n=__helpers__.zipToState(t);if(n){e("#state").val(n),e(".electric_utility").hide(),e("#electric_utility-"+n).show();var r=e("#electric_utility").val();r&&e("#electric_utility-"+n).val(r)}}).change(),e(".electric_utility").change(function(){e("#electric_utility").val(e(this).val())}),e("#zip1").bind("keypress",function(n){n.keyCode||n.which;if(13==n.which){if(n.preventDefault(),!__helpers__.validate(t.FIRST))return!1;if(e("#property_ownership-RENT").is(":checked"))return window.onbeforeunload=null,e(location).attr("href","/no-home/"),!1;var r=e(".question-section.current");r.next().addClass("current"),r.removeClass("current");var a=e(this).val(),i=__helpers__.zipToState(a);if(i){e("#state").val(i),e(".electric_utility").hide(),e("#electric_utility-"+i).show();var o=e("#electric_utility").val();o&&e("#electric_utility-"+i).val(o)}}}),e("#electric_bill, #electric_utility, #roof_shade").bind("keypress",function(n){n.keyCode||n.which;if(13==n.which){if(n.preventDefault(),!__helpers__.validate(t.SECOND))return!1;var r=e(".question-section.current");r.next().addClass("current"),r.removeClass("current"),Modernizr.input.placeholder&&e("#first_name").focus()}}),e("#continue-1").click(function(){if(!__helpers__.validate(t.FIRST))return!1;if(e("#property_ownership-RENT").is(":checked"))return window.onbeforeunload=null,e(location).attr("href","/no-home/"),!1;var n=e(".question-section.current");n.next().addClass("current"),n.removeClass("current")}),e("#continue-2").click(function(){if(!__helpers__.validate(t.SECOND))return!1;var n=e(".question-section.current");n.next().addClass("current"),n.removeClass("current"),Modernizr.input.placeholder&&e("#first_name").focus()}),e("#questionform").submit(function(){return!!__helpers__.validate(t.THIRD)&&void(window.onbeforeunload=null)})});