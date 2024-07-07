'use strict';!function(m){function t(i){if(n[i]){return n[i].exports}var module=n[i]={i:i,l:false,exports:{}};return m[i].call(module.exports,module,module.exports,t),module.l=true,module.exports}var n={};t.m=m;t.c=n;t.d=function(d,n,val){if(!t.o(d,n)){Object.defineProperty(d,n,{enumerable:true,get:val})}};t.r=function(x){if("undefined"!=typeof Symbol&&Symbol.toStringTag){Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(x,"__esModule",{value:true})};t.t=function(val,byteOffset){if(1&byteOffset&&(val=t(val)),8&byteOffset){return val}if(4&byteOffset&&"object"==typeof val&&val&&val.__esModule){return val}var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:true,value:val}),2&byteOffset&&"string"!=typeof val){var s;for(s in val){t.d(d,s,function(attrPropertyName){return val[attrPropertyName]}.bind(null,s))}}return d};t.n=function(module){var n=module&&module.__esModule?function(){return module.default}:function(){return module};return t.d(n,"a",n),n};t.o=function(n,x){return Object.prototype.hasOwnProperty.call(n,x)};t.p="/";t(t.s=0)}([function(canCreateDiscussions,n,generator){(function(saveNotifs){generator(2);var css=generator(7);var data=window.TRANSLATE_CONFIG;var locale=getUrlParam('language')||navigator.language||navigator.browserLanguage||document.documentElement.lang||"en";locale=locale.length>2?locale.replace(/..$/,locale.match(/..$/)[0].toUpperCase()):locale;var key=location.host;saveNotifs(function(){if(window.self!=window.top){return false}var $=window.jQuery;try{var language=sessionStorage._language}catch(t){return}$.extend({findDOMString:function(clusterShardData){var transferArr=clusterShardData.split(",");var th_field="";return transferArr.some(function(o){if($(o).length){return th_field=o.trim(),true}}),th_field},delCookie:function(e,t){(t=t||{}).expires=new Date,$.setCookie(e,"",t)},debounce:function(i,n){var o;return function(){var e=this,t=arguments;clearTimeout(o),o=setTimeout(function(){i.apply(e,t)},n)}},setCookie:function(e,t,i){var n=encodeURIComponent(e)+"="+encodeURIComponent(t);i instanceof Date&&(i={expires:i}),(i=i||{}).expires&&(n+="; expires="+i.expires.toGMTString()),i.path&&(n+="; path="+i.path.toString()),i.domain&&(n+="; domain="+i.domain.toString()),i.secure&&(n+="; secure"),document.cookie=n}});if(!language){$.delCookie("xfcart_lang",{path:"/"})}({main:function(){var that=this;var helperLocked=false;if(data&&data.languages){that.render(data.copywriting_show_position,data.languages,data.is_switch_language);that.bindEvent();if(!(1!=data.is_switch_language||language)){that.initScript();(new MutationObserver(function(n){if($("#google_translate_element select option").length&&!helperLocked){$(".plugin_translate .lang-select-item").each(function(){if($(this).data("lang-code")===locale){$(this).trigger("click")}});helperLocked=true}})).observe($("#google_translate_element")[0],{attributes:false,childList:true,subtree:true,characterData:false})}}},initScript:function(){if(!window.googleTranslateElementInit){$(document.body).append(generator(11))}},bindEvent:function(){var component=this;(new MutationObserver(function(n){$(".money,.xfcart-reviews-list__item_footer-right,.footer-copyright,.paypal-express-button-container,.modal__close-icon,.product-info__qty,.collection_digital,.sep-pagination__link,.product-info__social-sharing,.footer-plus__copyright,.multiply_currency,.xf_skin_product_detail_price,.xfcart-currency,.xfcart-reviews-list__item_header-img,.xfcart-reviews-list__item_header-rating-name,.xfcart-reviews-list__item_footer span,.xfcart-reviews-header__rating_sum-rating,.header__cart_count,.header__cart-count_cart,.header__cart-count,.popups___need_scale,.bundle-plugin__option-value,.bundle-plugin__dropdown,.product-info__variants_value").addClass("notranslate")})).observe(document.body,{attributes:false,childList:true,subtree:true,characterData:false});if(!language){$.delCookie("googtrans",{path:"/"})}if(!language){$.delCookie("googtrans",{path:"/",domain:key.substr(key.lastIndexOf(".",key.lastIndexOf(".")-1)+1)})}if(language){component.initScript()}$(".plugin_translate .lang-select_label").off("click").on("click",function(event){event.stopPropagation();component.initScript();if(window.innerWidth<768){$(".plugin__translate-header").each(function(n,e){if("none"!==$(e).css("display")&&e.offsetTop<400){$(e).find(".lang-select").css("max-height",e.offsetTop)}})}$(this).siblings(".lang-select").slideToggle();$(document).trigger("xf.plugin.translate.change")});$(".plugin_translate .lang-select-item").off("click").on("click",function(canCreateDiscussions){var repo=$(this);var a=repo.text();var value=repo.data("full-name");$(".plugin_translate .lang-select-item").removeClass("lang-select-item__selected");$(".plugin_translate .lang-select-item").each(function(n,elem){if($(elem).text()===a){$(elem).addClass("lang-select-item__selected")}});try{sessionStorage._language=value}catch(e){return}$.setCookie("xfcart_lang",value,{path:"/"});component.renderLabel(repo.text());$("#google_translate_element select").children().each(function(idx5,canCreateDiscussions){if(repo.data("lang-code")===$(this).attr("value")){return $(this).parent()[0].selectedIndex=idx5,$(this).parent()[0].dispatchEvent(new Event("change")),false}});if(window.sa){window.sa.track("plugin_translate_change",{language:value})}});$(document.body).not(".plugin_translate").on("click",function(){$(".plugin_translate .lang-select").slideUp()})},render:function(format,r,x){if(!$(".plugin_translate").length){var i=window.innerWidth>767;var axis=r.filter(function(val){return val.is_default})[0];var currentBlockFunction=1==x?locale:axis.code;if(language){currentBlockFunction="zh-CN"===language||"zh-TW"===language?language:language.split("-").shift()}var expRecords=r.filter(function(data){return currentBlockFunction===data.code});var oRm=0===expRecords.length?axis.name:expRecords[0].name;var rays={top:function(){var expression=$.findDOMString(".plugin__translate-header,.multiply_currency");var fn={".plugin__translate-header":"appendTo",".multiply_currency":"insertBefore"}[expression];$(css({langList:r,_default:currentBlockFunction}))[fn](expression);if(!i){$(".multiply_currency.d-none.d-md-block").prev(".plugin_translate").hide()}},bottom:function(){if(i){$($.findDOMString(".plugin__translate-footer,.footer-content,.footer__content,.footer-plus__left")).append(css({langList:r,_default:currentBlockFunction}))}},top_and_bottom:function(){this.top();this.bottom()}};if(i){rays[format]()}else{rays.top()}this.renderLabel(oRm)}},renderLabel:function(oRm){$(".plugin_translate .lang-select_label").each(function(){$(this).text(oRm)})}}).main()})}).call(this,generator(1))},function(mixin,n){mixin.exports=window.jQuery||function(){}},function(module,n,require){var content=require(3);if("string"==typeof content){content=[[module.i,content,""]]}var definition={hmr:true,transform:void 0,insertInto:void 0};require(5)(content,definition);if(content.locals){module.exports=content.locals}},function(module,n,saveNotifs){(module.exports=saveNotifs(4)(false)).push([module.i,'body footer.footer{\n  overflow:unset\n}\n\n#google_translate_element,.skiptranslate,.goog-tooltip{\n  display:none !important\n}\n\n.goog-text-highlight{\n  background-color:transparent !important;\n  border:none !important;\n  box-shadow:none !important\n}\n\nbody{\n  top:0 !important\n}\n\n.header__icon-wrap .plugin_translate,.header_plus .plugin_translate{\n  order:-1\n}\n\n.header__nav .plugin_translate,.menu__wrapper .plugin_translate{\n  order:1\n}\n\n.header[data-iscover="true"] .plugin_translate{\n  color:#fff\n}\n\n.footer-plus__left .plugin_translate{\n  color:#000 !important\n}\n\n.plugin_translate{\n  position:relative;\n  max-height:54px;\n  cursor:pointer;\n  white-space:nowrap\n}\n\n@media (max-width: 767.98px){\n  .plugin_translate{\n    margin-left:0;\n    border:1px solid #dddddd;\n    margin-bottom:15px;\n    background-color:#ffffff\n  }\n}\n\n.plugin_translate svg{\n  position:absolute;\n  pointer-events:none;\n  right:12px;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n@media (max-width: 767.98px){\n  .plugin_translate svg{\n    color:#000\n  }\n}\n\n.plugin_translate .lang-select{\n  display:none;\n  position:absolute;\n  order:-1;\n  padding:0;\n  list-style:none;\n  z-index:1005;\n  max-height:400px;\n  overflow-y:scroll;\n  letter-spacing:0px\n}\n\n@media (max-width: 767.98px){\n  .plugin_translate .lang-select{\n    bottom:46px;\n    width:100%;\n    max-height:300px\n  }\n}\n\n.plugin_translate .lang-select-item{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  padding:10px 8px;\n  background-color:#fff;\n  color:#000;\n  border:1px solid #ddd;\n  border-top:none\n}\n\n.plugin_translate .lang-select-item:first-child{\n  border-top:1px solid #ddd\n}\n\n@media (max-width: 767.98px){\n  .plugin_translate .lang-select-item{\n    justify-content:flex-start;\n    padding:10px 15px\n  }\n}\n\n.plugin_translate .lang-select-item__selected{\n  text-decoration:underline\n}\n\n@media (min-width: 767.98px){\n  .plugin_translate .lang-select_label{\n    padding:15px 30px 15px 10px;\n    min-width:50px;\n    text-align:right\n  }\n}\n\n@media (max-width: 767.98px){\n  .plugin_translate .lang-select_label{\n    color:#000;\n    padding:12px 80% 12px 15px\n  }\n}\n\n@media (max-width: 767.98px){\n  .nova .plugin_translate .lang-select_label{\n    padding:9px 80% 9px 15px\n  }\n}\n\n.plugin__translate-footer .plugin_translate .lang-select,.footer-content .plugin_translate .lang-select,.footer__content .plugin_translate .lang-select,.footer-plus__left .plugin_translate .lang-select{\n  bottom:100%\n}\n\nbody[data-theme-name="Nova"] .footer-content .plugin_translate{\n  margin-left:2.25rem\n}\n\n@media (max-width: 767.98px){\n  html[dir="rtl"] .plugin_translate .lang-select_label{\n    padding:12px 15px 12px 80%\n  }\n}\n\nhtml[dir="rtl"] .plugin_translate svg{\n  right:unset;\n  left:-5px\n}\n\n@media (max-width: 767.98px){\n  html[dir="rtl"] .plugin_translate svg{\n    left:10px\n  }\n}\n',""])},function(mixin,n){mixin.exports=function(selector){var n=[];return n.toString=function(){return this.map(function(el){var currentTarget=function(p,callback){var item=p[1]||"";var options=p[3];if(!options){return item}if(callback&&"function"==typeof btoa){var projectStage=(picmenu_list=options,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(picmenu_list))))+" */");var testMiddlewares=options.sources.map(function(canCreateDiscussions){return"/*# sourceURL="+options.sourceRoot+canCreateDiscussions+" */"});return[item].concat(testMiddlewares).concat([projectStage]).join("\n")}var picmenu_list;return[item].join("\n")}(el,selector);return el[2]?"@media "+el[2]+"{"+currentTarget+"}":currentTarget}).join("")},n.i=function(e,a){if("string"==typeof e){e=[[null,e,""]]}var map={};var i=0;for(;i<this.length;i++){var pid=this[i][0];if("number"==typeof pid){map[pid]=true}}i=0;for(;i<e.length;i++){var r=e[i];if(!("number"==typeof r[0]&&map[r[0]])){if(a&&!r[2]){r[2]=a}else{if(a){r[2]="("+r[2]+") and ("+a+")"}}n.push(r)}}},n}},function(mixin,n,__webpack_require__){function serialize(styles,options){var i=0;for(;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;var j=0;for(;j<domStyle.parts.length;j++){domStyle.parts[j](item.parts[j])}for(;j<item.parts.length;j++){domStyle.parts.push(addStyle(item.parts[j],options))}}else{var parts=[];j=0;for(;j<item.parts.length;j++){parts.push(addStyle(item.parts[j],options))}stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function parse(src,options){var indexValues=[];var newStyles={};var i=0;for(;i<src.length;i++){var item=src[i];var id=options.base?item[0]+options.base:item[0];var part={css:item[1],media:item[2],sourceMap:item[3]};if(newStyles[id]){newStyles[id].parts.push(part)}else{indexValues.push(newStyles[id]={id:id,parts:[part]})}}return indexValues}function insertStyleElement(options,styleElement){var parent=getElement(options.insertInto);if(!parent){throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");}var progressBackground=styleElementsInsertedAtTop[styleElementsInsertedAtTop.length-1];if("top"===options.insertAt){if(progressBackground){if(progressBackground.nextSibling){parent.insertBefore(styleElement,progressBackground.nextSibling)}else{parent.appendChild(styleElement)}}else{parent.insertBefore(styleElement,parent.firstChild)}styleElementsInsertedAtTop.push(styleElement)}else{if("bottom"===options.insertAt){parent.appendChild(styleElement)}else{if("object"!=typeof options.insertAt||!options.insertAt.before){throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n");}var target=getElement(options.insertAt.before,parent);parent.insertBefore(styleElement,target)}}}function removeStyleElement(styleElement){if(null===styleElement.parentNode){return false}styleElement.parentNode.removeChild(styleElement);var idx=styleElementsInsertedAtTop.indexOf(styleElement);if(idx>=0){styleElementsInsertedAtTop.splice(idx,1)}}function createStyleElement(options){var style=document.createElement("style");if(void 0===options.attrs.type&&(options.attrs.type="text/css"),void 0===options.attrs.nonce){var nonce=function(){0;return __webpack_require__.nc}();if(nonce){options.attrs.nonce=nonce}}return addAttrs(style,options.attrs),insertStyleElement(options,style),style}function addAttrs(el,attrs){Object.keys(attrs).forEach(function(att){el.setAttribute(att,attrs[att])})}function addStyle(obj,options){var styleElement;var update;var remove;var dim;if(options.transform&&obj.css){if(!(dim="function"==typeof options.transform?options.transform(obj.css):options.transform.default(obj.css))){return function(){}}obj.css=dim}if(options.singleton){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement(options));update=applyToSingletonTag.bind(null,styleElement,styleIndex,false);remove=applyToSingletonTag.bind(null,styleElement,styleIndex,true)}else{if(obj.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa){styleElement=function(options){var style=document.createElement("link");return void 0===options.attrs.type&&(options.attrs.type="text/css"),options.attrs.rel="stylesheet",addAttrs(style,options.attrs),insertStyleElement(options,style),style}(options);update=updateLink.bind(null,styleElement,options);remove=function(){removeStyleElement(styleElement);if(styleElement.href){URL.revokeObjectURL(styleElement.href)}}}else{styleElement=createStyleElement(options);update=applyToTag.bind(null,styleElement);remove=function(){removeStyleElement(styleElement)}}}return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return}update(obj=newObj)}else{remove()}}}function applyToSingletonTag(me,index,remove,obj){var css=remove?"":obj.css;if(me.styleSheet){me.styleSheet.cssText=replaceText(index,css)}else{var style=document.createTextNode(css);var items=me.childNodes;if(items[index]){me.removeChild(items[index])}if(items.length){me.insertBefore(style,items[index])}else{me.appendChild(style)}}}function applyToTag(styleElement,obj){var css=obj.css;var media=obj.media;if(media&&styleElement.setAttribute("media",media),styleElement.styleSheet){styleElement.styleSheet.cssText=css}else{for(;styleElement.firstChild;){styleElement.removeChild(styleElement.firstChild)}styleElement.appendChild(document.createTextNode(css))}}function updateLink(link,options,obj){var content=obj.css;var sourceMap=obj.sourceMap;var autoFixUrls=void 0===options.convertToAbsoluteUrls&&sourceMap;if(options.convertToAbsoluteUrls||autoFixUrls){content=after(content)}if(sourceMap){content=content+("\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */")}var blob=new Blob([content],{type:"text/css"});var url=link.href;link.href=URL.createObjectURL(blob);if(url){URL.revokeObjectURL(url)}}var factory;var _ref12;var stylesInDom={};var isOldIE=(factory=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===_ref12&&(_ref12=factory.apply(this,arguments)),_ref12});var tracker=function(to,from){return from?from.querySelector(to):document.querySelector(to)};var getElement=function(canCreateDiscussions){var newFeature={};return function(id,value){if("function"==typeof id){return id()}if(void 0===newFeature[id]){var element=tracker.call(this,id,value);if(window.HTMLIFrameElement&&element instanceof window.HTMLIFrameElement){try{element=element.contentDocument.head}catch(t){element=null}}newFeature[id]=element}return newFeature[id]}}();var singletonElement=null;var singletonCounter=0;var styleElementsInsertedAtTop=[];var after=__webpack_require__(6);mixin.exports=function(type,options){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document){throw new Error("The style-loader cannot be used in a non-browser environment");}(options=options||{}).attrs="object"==typeof options.attrs?options.attrs:{};if(!(options.singleton||"boolean"==typeof options.singleton)){options.singleton=isOldIE()}if(!options.insertInto){options.insertInto="head"}if(!options.insertAt){options.insertAt="bottom"}var styles=parse(type,options);return serialize(styles,options),function(uri){var can_vscroll=[];var i=0;for(;i<styles.length;i++){var item=styles[i];(id=stylesInDom[item.id]).refs--;can_vscroll.push(id)}if(uri){serialize(parse(uri,options),options)}i=0;for(;i<can_vscroll.length;i++){var id;if(0===(id=can_vscroll[i]).refs){var i=0;for(;i<id.parts.length;i++){id.parts[i]()}delete stylesInDom[id.id]}}}};var items;var replaceText=(items=[],function(key,data){return items[key]=data,items.filter(Boolean).join("\n")})},function(mixin,n){mixin.exports=function(selector){var parsedPath="undefined"!=typeof window&&window.location;if(!parsedPath){throw new Error("fixUrls requires window.location");}if(!selector||"string"!=typeof selector){return selector}var prefix=parsedPath.protocol+"//"+parsedPath.host;var newPrefix=prefix+parsedPath.pathname.replace(/\/[^\/]*$/,"/");return selector.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(line,commentToCheck){var from;var p=commentToCheck.trim().replace(/^"(.*)"$/,function(canCreateDiscussions,n){return n}).replace(/^'(.*)'$/,function(canCreateDiscussions,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(p)?line:(from=0===p.indexOf("//")?p:0===p.indexOf("/")?prefix+p:newPrefix+p.replace(/^\.\//,""),"url("+JSON.stringify(from)+")")})}},function(mixin,n,ctorApply){var obj=ctorApply(8);mixin.exports=function(instance){var m_key="";var i=((instance=instance||{}).selectedLang,instance._default,instance.i);var dataList=instance.langList;var binb2hex=obj.$escape;m_key=m_key+'<div class="plugin_translate notranslate banner__color">\n  <div id="google_translate_element"></div>\n  <div class="lang-select_label"></div>\n  <svg  xmlns="http://www.w3.org/2000/svg"\n        width="12px"\n        height="12px"\n        viewBox="0 0 12 12"\n  ><polygon points="9.64644661 3.64644661 10.3535534 4.35355339 6 8.70710678 1.64644661 4.35355339 2.35355339 3.64644661 6 7.293" fill="currentColor"></polygon></svg>\n  <ul class="lang-select">\n    ';m_key=m_key+"\n    ";i=0;for(;i<dataList.length;i++){m_key=m_key+'\n    <li class="lang-select-item" data-lang-code="';m_key=m_key+binb2hex(dataList[i].code);m_key=m_key+'" data-full-name="';m_key=m_key+binb2hex(dataList[i].code);m_key=m_key+'">';m_key=m_key+binb2hex(dataList[i].name);m_key=m_key+"</li>\n    "}return m_key=m_key+"\n  </ul>\n</div>\n"}},function(module,n,factory){module.exports=factory(9)},function(module,n,moment){(function(n){var index="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:{};var s=Object.create(index);var a=/["&'<>]/;s.$escape=function(e){return function(val){var n=""+val;var h=a.exec(n);if(!h){return val}var r="";var o=void 0;var i=void 0;var meg=void 0;o=h.index;i=0;for(;o<n.length;o++){switch(n.charCodeAt(o)){case 34:meg="&#34;";break;case 38:meg="&#38;";break;case 39:meg="&#39;";break;case 60:meg="&#60;";break;case 62:meg="&#62;";break;default:continue}if(i!==o){r=r+n.substring(i,o)}i=o+1;r=r+meg}return i!==o?r+n.substring(i,o):r}(function fire(e){if("string"!=typeof e){e=null==e?"":"function"==typeof e?fire(e.call(e)):JSON.stringify(e)}return e}(e))};s.$each=function(iterable,callback){if(Array.isArray(iterable)){var i=0;var l=iterable.length;for(;i<l;i++){callback(iterable[i],i)}}else{var name;for(name in iterable){callback(iterable[name],name)}}};module.exports=s}).call(this,moment(10))},function(module,n){var g;g=function(){return this}();try{g=g||(new Function("return this"))()}catch(t){if("object"==typeof window){g=window}}module.exports=g},function(mixin,n){mixin.exports='<script>\n  function googleTranslateElementInit() {\n    new google.translate.TranslateElement(\'google_translate_element\');\n  }\n  (function () {\n    var gtConstEvalStartTime = new Date();\n    var h = this || self, l = /^[\\w+/_-]+[=]{0,2}$/, m = null; function n(a) { return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && l.test(a) ? a : "" } function p(a, b) { function c() { } c.prototype = b.prototype; a.i = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.h = function (g, f, k) { for (var e = Array(arguments.length - 2), d = 2; d < arguments.length; d++)e[d - 2] = arguments[d]; return b.prototype[f].apply(g, e) } } function q(a) { return a }; function r(a) { if (Error.captureStackTrace) Error.captureStackTrace(this, r); else { var b = Error().stack; b && (this.stack = b) } a && (this.message = String(a)) } p(r, Error); r.prototype.name = "CustomError"; function u(a, b) { a = a.split("%s"); for (var c = "", g = a.length - 1, f = 0; f < g; f++)c += a[f] + (f < b.length ? b[f] : "%s"); r.call(this, c + a[g]) } p(u, r); u.prototype.name = "AssertionError"; function v(a, b) { throw new u("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)); }; var w; function x(a, b) { this.g = b === y ? a : "" } x.prototype.toString = function () { return this.g + "" }; var y = {}; function z(a) { var b = document.getElementsByTagName("head")[0]; b || (b = document.body.parentNode.appendChild(document.createElement("head"))); b.appendChild(a) }\n    function _loadJs(a) {\n      var b = document; var c = "SCRIPT"; "application/xhtml+xml" === b.contentType && (c = c.toLowerCase()); c = b.createElement(c); c.type = "text/javascript"; c.charset = "UTF-8"; if (void 0 === w) { b = null; var g = h.trustedTypes; if (g && g.createPolicy) { try { b = g.createPolicy("goog#html", { createHTML: q, createScript: q, createScriptURL: q }) } catch (t) { h.console && h.console.error(t.message) } w = b } else w = b } a = (b = w) ? b.createScriptURL(a) : a; a = new x(a, y); a: {\n        try {\n          var f = c && c.ownerDocument, k = f && (f.defaultView || f.parentWindow); k = k || h;\n          if (k.Element && k.Location) { var e = k; break a }\n        } catch (t) { } e = null\n      } if (e && "undefined" != typeof e.HTMLScriptElement && (!c || !(c instanceof e.HTMLScriptElement) && (c instanceof e.Location || c instanceof e.Element))) {\n        e = typeof c; if ("object" == e && null != c || "function" == e) try { var d = c.constructor.displayName || c.constructor.name || Object.prototype.toString.call(c) } catch (t) { d = "<object could not be stringified>" } else d = void 0 === c ? "undefined" : null === c ? "null" : typeof c; v("Argument is not a %s (or a non-Element, non-Location mock); got: %s",\n          "HTMLScriptElement", d)\n      } a instanceof x && a.constructor === x ? d = a.g : (d = typeof a, v("expected object of type TrustedResourceUrl, got \'" + a + "\' of type " + ("object" != d ? d : a ? Array.isArray(a) ? "array" : d : "null")), d = "type_error:TrustedResourceUrl"); c.src = d; (d = c.ownerDocument && c.ownerDocument.defaultView) && d != h ? d = n(d.document) : (null === m && (m = n(h.document)), d = m); d && c.setAttribute("nonce", d); z(c)\n    }\n    function _loadCss(a) { var b = document.createElement("link"); b.type = "text/css"; b.rel = "stylesheet"; b.charset = "UTF-8"; b.href = a; z(b) } function _isNS(a) { a = a.split("."); for (var b = window, c = 0; c < a.length; ++c)if (!(b = b[a[c]])) return !1; return !0 } function _setupNS(a) { a = a.split("."); for (var b = window, c = 0; c < a.length; ++c)b.hasOwnProperty ? b.hasOwnProperty(a[c]) ? b = b[a[c]] : b = b[a[c]] = {} : b = b[a[c]] || (b[a[c]] = {}); return b }\n    window.addEventListener && "undefined" == typeof document.readyState && window.addEventListener("DOMContentLoaded", function () { document.readyState = "complete" }, !1);\n    if (_isNS(\'google.translate.Element\')) { return } (function () { var c = _setupNS(\'google.translate._const\'); c._cest = gtConstEvalStartTime; gtConstEvalStartTime = undefined; c._cl = \'zh-CN\'; c._cuc = \'googleTranslateElementInit\'; c._cac = \'\'; c._cam = \'\'; c._ctkk = \'448204.2198466445\'; var h = \'translate.googleapis.com\'; var s = (true ? \'https\' : window.location.protocol == \'https:\' ? \'https\' : \'http\') + \'://\'; var b = s + h; c._pah = h; c._pas = s; c._pbi = b + \'/translate_static/img/te_bk.gif\'; c._pci = b + \'/translate_static/img/te_ctrl3.gif\'; c._pli = b + \'/translate_static/img/loading.gif\'; c._plla = h + \'/translate_a/l\'; c._pmi = b + \'/translate_static/img/mini_google.png\'; c._ps = b + \'/translate_static/css/translateelement.css\'; c._puh = \'translate.google.com\'; _loadCss(c._ps); _loadJs(s+c._puh + \'/translate_a/element.js?cb=googleTranslateElementInit\'); })();\n  })();\n</script>'}]);