(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1015:function(e,n,t){"use strict";var r=t(1016);function i(){}i.prototype=r;var a=new i;e.exports=a,a.highlight=function(e,n,t){var r=(t||{}).prefix;null!==r&&void 0!==r||(r=s);return w(E(e,n,!0,r))},a.highlightAuto=y,a.registerLanguage=function(e,n){var t=(b[e]=n(a)).aliases,r=t&&t.length,i=-1;m.push(e);for(;++i<r;)x[t[i]]=e},a.getLanguage=_;var o=r.inherit,u={}.hasOwnProperty,s="hljs-",l="case_insensitive",c="cached_variants",f="",d=" ",p="|",g="element",h="text",v="span",m=[],b={},x={};function y(e,n){var t,r,i,a,o=n||{},u=o.prefix,l=o.subset||m,c=l.length,f=-1;if(null!==u&&void 0!==u||(u=s),"string"!=typeof e)throw new Error("Expected `string` for value, got `"+e+"`");for(r=w({}),t=w({});++f<c;)_(a=l[f])&&((i=w(E(a,e,!1,u))).language=a,i.relevance>r.relevance&&(r=i),i.relevance>t.relevance&&(r=t,t=i));return r.language&&(t.secondBest=r),t}function E(e,n,t,r,i){var a,s,m,x,w,O,k,L,M={},C=[],B=f,A=0;if("string"!=typeof e)throw new Error("Expected `string` for name, got `"+e+"`");if("string"!=typeof n)throw new Error("Expected `string` for value, got `"+n+"`");if(a=_(e),m=s=i||a,x=L=[],!a)throw new Error("Unknown language: `"+e+"` is not registered");!function(e){function n(n,r){return new RegExp(t(n),"m"+(e[l]?"i":"")+(r?"g":""))}function t(e){return e&&e.source||e}!function r(i,a){var u={};var s;if(i.compiled)return;i.compiled=!0;i.keywords=i.keywords||i.beginKeywords;i.keywords&&("string"==typeof i.keywords?g("keyword",i.keywords):Object.keys(i.keywords).forEach(function(e){g(e,i.keywords[e])}),i.keywords=u);i.lexemesRe=n(i.lexemes||/\w+/,!0);a&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(d).join(p)+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=n(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=n(i.end)),i.terminatorEnd=t(i.end)||f,i.endsWithParent&&a.terminatorEnd&&(i.terminatorEnd+=(i.end?p:f)+a.terminatorEnd));i.illegal&&(i.illegalRe=n(i.illegal));void 0===i.relevance&&(i.relevance=1);i.contains||(i.contains=[]);i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return function(e){e.variants&&!e[c]&&(e[c]=e.variants.map(function(n){return o(e,{variants:null},n)}));return e[c]||e.endsWithParent&&[o(e)]||[e]}("self"===e?i:e)}));i.contains.forEach(function(e){r(e,i)});i.starts&&r(i.starts,a);s=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminatorEnd,i.illegal]).map(t).filter(Boolean);i.terminators=s.length?n(s.join(p),!0):{exec:R};function g(n,t){var r,i,a,o;for(e[l]&&(t=t.toLowerCase()),r=t.split(d),o=r.length,a=-1;++a<o;)i=r[a].split(p),u[i[0]]=[n,i[1]?Number(i[1]):1]}}(e)}(a);try{for(w=s.terminators.lastIndex=0,k=s.terminators.exec(n);k;)O=P(n.substring(w,k.index),k[0]),w=s.terminators.lastIndex=k.index+O,k=s.terminators.exec(n);for(P(n.substr(w)),m=s;m.parent;)m.className&&H(),m=m.parent;return{relevance:A,value:x,language:e,top:s}}catch(e){if(-1===e.message.indexOf("Illegal"))throw e;return{relevance:0,value:T(n,[])}}function P(e,n){var r,i,a;if(B+=e,void 0===n)return I(D(),x),0;if(r=function(e,n){var t=n.contains,r=t.length,i=-1;for(;++i<r;)if(N(t[i].beginRe,e))return t[i]}(n,s))return I(D(),x),S(r,n),r.returnBegin?0:n.length;if(i=function e(n,t){if(N(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(s,n)){(a=s).returnEnd||a.excludeEnd||(B+=n),I(D(),x);do{s.className&&H(),A+=s.relevance,s=s.parent}while(s!==i.parent);return a.excludeEnd&&T(n,x),B=f,i.starts&&S(i.starts,f),a.returnEnd?0:n.length}if(function(e,n){return!t&&N(n.illegalRe,e)}(n,s))throw new Error('Illegal lexeme "'+n+'" for mode "'+(s.className||"<unnamed>")+'"');return B+=n,n.length||1}function S(e,n){var t;e.className&&(t=j(e.className,[])),e.returnBegin?B=f:e.excludeBegin?(T(n,x),B=f):B=n,t&&(x.push(t),C.push(x),x=t.children),s=Object.create(e,{parent:{value:s}})}function D(){var e=void 0===s.subLanguage?function(){var e,n,t,r,i=[];if(!s.keywords)return T(B,i);e=0,s.lexemesRe.lastIndex=0,n=s.lexemesRe.exec(B);for(;n;)T(B.substring(e,n.index),i),(r=U(s,n))?(A+=r[1],t=j(r[0],[]),i.push(t),T(n[0],t.children)):T(n[0],i),e=s.lexemesRe.lastIndex,n=s.lexemesRe.exec(B);return T(B.substr(e),i),i}():function(){var e,n="string"==typeof s.subLanguage;if(n&&!b[s.subLanguage])return T(B,[]);e=n?E(s.subLanguage,B,!0,r,M[s.subLanguage]):y(B,{subset:s.subLanguage.length?s.subLanguage:void 0,prefix:r});s.relevance>0&&(A+=e.relevance);n&&(M[s.subLanguage]=e.top);return[j(e.language,e.value,!0)]}();return B=f,e}function I(e,n){for(var t,r=e.length,i=-1;++i<r;)(t=e[i]).type===h?T(t.value,n):n.push(t)}function T(e,n){var t;return e&&((t=n[n.length-1])&&t.type===h?t.value+=e:n.push(function(e){return{type:h,value:e}}(e))),n}function j(e,n,t){return{type:g,tagName:v,properties:{className:[(t?f:r)+e]},children:n}}function U(e,n){var t=n[0];return a[l]&&(t=t.toLowerCase()),u.call(e.keywords,t)&&e.keywords[t]}function H(){x=C.pop()||L}}function w(e){return{relevance:e.relevance||0,language:e.language||null,value:e.value||[]}}function N(e,n){var t=e&&e.exec(n);return t&&0===t.index}function R(){return null}function _(e){return e=e.toLowerCase(),b[e]||b[x[e]]}},1016:function(e,n,t){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var n=[],t=Object.keys,r={},i={},a=/^(no-?highlight|plain|text)$/i,o=/\blang(?:uage)?-([\w-]+)\b/i,u=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,s="</span>",l={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(e){return e.nodeName.toLowerCase()}function d(e,n){var t=e&&e.exec(n);return t&&0===t.index}function p(e){return a.test(e)}function g(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function h(e){var n=[];return function e(t,r){for(var i=t.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:r,node:i}),r=e(i,r),f(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:i}));return r}(e,0),n}function v(e){function n(e){return e&&e.source||e}function r(t,r){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}!function i(a,o){if(a.compiled)return;a.compiled=!0;a.keywords=a.keywords||a.beginKeywords;if(a.keywords){var u={},s=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.keywords?s("keyword",a.keywords):t(a.keywords).forEach(function(e){s(e,a.keywords[e])}),a.keywords=u}a.lexemesRe=r(a.lexemes||/\w+/,!0);o&&(a.beginKeywords&&(a.begin="\\b("+a.beginKeywords.split(" ").join("|")+")\\b"),a.begin||(a.begin=/\B|\b/),a.beginRe=r(a.begin),a.end||a.endsWithParent||(a.end=/\B|\b/),a.end&&(a.endRe=r(a.end)),a.terminator_end=n(a.end)||"",a.endsWithParent&&o.terminator_end&&(a.terminator_end+=(a.end?"|":"")+o.terminator_end));a.illegal&&(a.illegalRe=r(a.illegal));null==a.relevance&&(a.relevance=1);a.contains||(a.contains=[]);a.contains=Array.prototype.concat.apply([],a.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return g(e,{variants:null},n)}));return e.cached_variants||e.endsWithParent&&[g(e)]||[e]}("self"===e?a:e)}));a.contains.forEach(function(e){i(e,a)});a.starts&&i(a.starts,o);var l=a.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([a.terminator_end,a.illegal]).map(n).filter(Boolean);a.terminators=l.length?r(l.join("|"),!0):{exec:function(){return null}}}(e)}function m(e,n,t,i){function a(e,n){var t=g.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function o(e,n,t,r){var i=r?"":l.classPrefix,a='<span class="'+i,o=t?"":s;return(a+=e+'">')+n+o}function u(){E+=null!=x.subLanguage?function(){var e="string"==typeof x.subLanguage;if(e&&!r[x.subLanguage])return c(N);var n=e?m(x.subLanguage,N,!0,y[x.subLanguage]):b(N,x.subLanguage.length?x.subLanguage:void 0);x.relevance>0&&(R+=n.relevance);e&&(y[x.subLanguage]=n.top);return o(n.language,n.value,!1,!0)}():function(){var e,n,t,r;if(!x.keywords)return c(N);r="",n=0,x.lexemesRe.lastIndex=0,t=x.lexemesRe.exec(N);for(;t;)r+=c(N.substring(n,t.index)),(e=a(x,t))?(R+=e[1],r+=o(e[0],c(t[0]))):r+=c(t[0]),n=x.lexemesRe.lastIndex,t=x.lexemesRe.exec(N);return r+c(N.substr(n))}(),N=""}function f(e){E+=e.className?o(e.className,"",!0):"",x=Object.create(e,{parent:{value:x}})}function p(e,n){if(N+=e,null==n)return u(),0;var r=function(e,n){var t,r;for(t=0,r=n.contains.length;t<r;t++)if(d(n.contains[t].beginRe,e))return n.contains[t]}(n,x);if(r)return r.skip?N+=n:(r.excludeBegin&&(N+=n),u(),r.returnBegin||r.excludeBegin||(N=n)),f(r),r.returnBegin?0:n.length;var i=function e(n,t){if(d(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(x,n);if(i){var a=x;a.skip?N+=n:(a.returnEnd||a.excludeEnd||(N+=n),u(),a.excludeEnd&&(N=n));do{x.className&&(E+=s),x.skip||(R+=x.relevance),x=x.parent}while(x!==i.parent);return i.starts&&f(i.starts),a.returnEnd?0:n.length}if(function(e,n){return!t&&d(n.illegalRe,e)}(n,x))throw new Error('Illegal lexeme "'+n+'" for mode "'+(x.className||"<unnamed>")+'"');return N+=n,n.length||1}var g=w(e);if(!g)throw new Error('Unknown language: "'+e+'"');v(g);var h,x=i||g,y={},E="";for(h=x;h!==g;h=h.parent)h.className&&(E=o(h.className,"",!0)+E);var N="",R=0;try{for(var _,O,k=0;x.terminators.lastIndex=k,_=x.terminators.exec(n);)O=p(n.substring(k,_.index),_[0]),k=_.index+O;for(p(n.substr(k)),h=x;h.parent;h=h.parent)h.className&&(E+=s);return{relevance:R,value:E,language:e,top:x}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:c(n)};throw e}}function b(e,n){n=n||l.languages||t(r);var i={relevance:0,value:c(e)},a=i;return n.filter(w).forEach(function(n){var t=m(n,e,!1);t.language=n,t.relevance>a.relevance&&(a=t),t.relevance>i.relevance&&(a=i,i=t)}),a.language&&(i.second_best=a),i}function x(e){return l.tabReplace||l.useBR?e.replace(u,function(e,n){return l.useBR&&"\n"===e?"<br>":l.tabReplace?n.replace(/\t/g,l.tabReplace):""}):e}function y(e){var t,r,a,u,s,d=function(e){var n,t,r,i,a=e.className+" ";if(a+=e.parentNode?e.parentNode.className:"",t=o.exec(a))return w(t[1])?t[1]:"no-highlight";for(a=a.split(/\s+/),n=0,r=a.length;n<r;n++)if(p(i=a[n])||w(i))return i}(e);p(d)||(l.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,s=t.textContent,a=d?m(d,s,!0):b(s),(r=h(t)).length&&((u=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=a.value,a.value=function(e,t,r){var i=0,a="",o=[];function u(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function s(e){a+="<"+f(e)+n.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+c(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function l(e){a+="</"+f(e)+">"}function d(e){("start"===e.event?s:l)(e.node)}for(;e.length||t.length;){var p=u();if(a+=c(r.substring(i,p[0].offset)),i=p[0].offset,p===e){o.reverse().forEach(l);do{d(p.splice(0,1)[0]),p=u()}while(p===e&&p.length&&p[0].offset===i);o.reverse().forEach(s)}else"start"===p[0].event?o.push(p[0].node):o.pop(),d(p.splice(0,1)[0])}return a+c(r.substr(i))}(r,h(u),s)),a.value=x(a.value),e.innerHTML=a.value,e.className=function(e,n,t){var r=n?i[n]:t,a=[e.trim()];e.match(/\bhljs\b/)||a.push("hljs");-1===e.indexOf(r)&&a.push(r);return a.join(" ").trim()}(e.className,d,a.language),e.result={language:a.language,re:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function E(){if(!E.called){E.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,y)}}function w(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}e.highlight=m,e.highlightAuto=b,e.fixMarkup=x,e.highlightBlock=y,e.configure=function(e){l=g(l,e)},e.initHighlighting=E,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",E,!1),addEventListener("load",E,!1)},e.registerLanguage=function(n,t){var a=r[n]=t(e);a.aliases&&a.aliases.forEach(function(e){i[e]=n})},e.listLanguages=function(){return t(r)},e.getLanguage=w,e.inherit=g,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,r){var i=e.inherit({className:"comment",begin:n,end:t,contains:[]},r||{});return i.contains.push(e.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(n)}()},27:function(e,n,t){"use strict";e.exports=function(e,n){var t,a,o=n.children||[],u=o.length,s=[],l=-1;for(;++l<u;)(t=i(e,o[l],n))&&(l&&"break"===o[l-1].type&&(t.value&&(t.value=r.left(t.value)),(a=t.children&&t.children[0])&&a.value&&(a.value=r.left(a.value))),s=s.concat(t));return s};var r=t(60),i=t(446)},439:function(e,n,t){"use strict";e.exports=function(e){return new RegExp("^("+e+")$","i")}},444:function(e,n,t){"use strict";e.exports=t(972)},446:function(e,n,t){"use strict";e.exports=function(e,n,t){var o=n&&n.type,u=a.call(e.handlers,o)?e.handlers[o]:null;if(!o)throw new Error("Expected node, got `"+n+"`");return("function"==typeof u?u:function(e,n){if(function(e){var n=e.data||{};if(a.call(n,"hName")||a.call(n,"hProperties")||a.call(n,"hChildren"))return!1;return"value"in e}(n))return e.augment(n,r("text",n.value));return e(n,"div",i(e,n))})(e,n,t)};var r=t(38),i=t(27),a={}.hasOwnProperty},447:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"hr")}},448:function(e,n,t){"use strict";e.exports=function(e,n){var t,a,o={},u=n.ordered?"ol":"ul",s=-1;"number"==typeof n.start&&1!==n.start&&(o.start=n.start);t=i(e,n),a=t.length;for(;++s<a;)if(t[s].properties.className&&-1!==t[s].properties.className.indexOf("task-list-item")){o.className=["contains-task-list"];break}return e(n,u,o,r(t,!0))};var r=t(98),i=t(27)},449:function(e,n,t){"use strict";e.exports=function(e,n){var t=e.footnoteOrder,i=n.identifier;-1===t.indexOf(i)&&t.push(i);return e(n.position,"sup",{id:"fnref-"+i},[e(n,"a",{href:"#fn-"+i,className:["footnote-ref"]},[r("text",n.label||i)])])};var r=t(38)},450:function(e,n,t){"use strict";e.exports=function(e,n){var t,a,o,u=n.referenceType,s="]";"collapsed"===u?s+="[]":"full"===u&&(s+="["+(n.label||n.identifier)+"]");if("imageReference"===n.type)return r("text","!["+n.alt+s);t=i(e,n),(a=t[0])&&"text"===a.type?a.value="["+a.value:t.unshift(r("text","["));(o=t[t.length-1])&&"text"===o.type?o.value+=s:t.push(r("text",s));return t};var r=t(38),i=t(27)},890:function(e,n,t){"use strict";e.exports=o;var r=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],i=r.concat(["~","|"]),a=i.concat(["\n",'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);function o(e){var n=e||{};return n.commonmark?a:n.gfm?i:r}o.default=r,o.gfm=i,o.commonmark=a},936:function(e,n,t){"use strict";e.exports=function e(n){return function(e){if(!e)return"";return e.value?e.value:(e.alt?e.alt:e.title)||""}(n)||n.children&&n.children.map(e).join("")||""}},939:function(e,n,t){"use strict";e.exports=t(940)},940:function(e,n,t){"use strict";e.exports=function(e,n){var t=n||{},o=t.heading?a(t.heading):null,u=r(e,o,t),s=u.map;u.map=0===s.length?null:i(s,t.tight,t.prefix),o||(u.index=null,u.endIndex=null);return u};var r=t(941),i=t(944),a=t(439)},941:function(e,n,t){"use strict";e.exports=function(e,n,t){var l,c,f=e.children.length,d=null,p=null!==n,g=t.maxDepth||6,h=t.skip?u(t.skip):null,v=a(t.parents||e),m=[];p||(l=-1);o.reset(),i(e,"heading",function(e,t,i){var a=r(e),u=e.data&&e.data.hProperties&&e.data.hProperties.id;v(i)&&(p&&(function(e,n){return n&&s(e)&&e.depth<=n}(e,d)&&(c=t,p=!1),function(e,n,t){return null===n&&s(e)&&t.test(r(e))}(e,d,n)&&(l=t+1,d=e.depth)),!(!p&&a&&e.depth<=g)||h&&h.test(a)||m.push({depth:e.depth,children:e.children,id:o.slug(u||a)}))}),l&&!c&&(c=f+1);void 0===l&&(l=-1,c=-1,m=[]);return{index:l,endIndex:c,map:m}};var r=t(942),i=t(119),a=t(120),o=t(943)(),u=t(439),s=a("heading")},942:function(e,n,t){"use strict";e.exports=function e(n){return function(e){return(e&&e.value?e.value:e.alt?e.alt:e.title)||""}(n)||n.children&&n.children.map(e).join("")||""}},943:function(e,n,t){var r=t(438);e.exports=u;var i=Object.hasOwnProperty,a=/\s/g,o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;function u(){if(!(this instanceof u))return new u;this.reset()}u.prototype.slug=function(e,n){for(var t=function(e,n){if("string"!=typeof e)return"";n||(e=e.toLowerCase());return e.trim().replace(o,"").replace(r(),"").replace(a,"-")}(e,!0===n),u=t;i.call(this.occurrences,t);)this.occurrences[u]++,t=u+"-"+this.occurrences[u];return this.occurrences[t]=0,t},u.prototype.reset=function(){this.occurrences=Object.create(null)}},944:function(e,n,t){"use strict";var r=t(945);e.exports=function(e,n,t){var r,i=1/0,a=-1,o=e.length;for(;++a<o;)e[a].depth<i&&(i=e[a].depth);a=-1;for(;++a<o;)e[a].depth-=i-1;r=d(),a=-1;for(;++a<o;)l(e[a],r,n,t);return r};var i="list",a="listItem",o="paragraph",u="link",s="linkReference";function l(e,n,t,r){var s,f,g=n.children,h=g.length,v=g[h-1],m=!1;if(1===e.depth?((f=p()).children.push({type:o,children:[{type:u,title:null,url:"#"+(r||"")+e.id,children:c(e.children)}]}),g.push(f)):v&&v.type===a?l(e,v,t,r):v&&v.type===i?(e.depth--,l(e,v,t,r)):n.type===i?(l(e,f=p(),t,r),g.push(f)):(f=d(),e.depth--,l(e,f,t,r),g.push(f)),n.spread=!t,n.type===i&&n.spread)for(n.spread=!1,s=-1;++s<h;)if(g[s].children.length>1){n.spread=!0;break}if(n.type===a)n.loose=!t&&g.length>1;else{if(t)m=!1;else for(s=-1;++s<h;)if(g[s].loose){m=!0;break}for(s=-1;++s<h;)g[s].loose=m}}function c(e){for(var n=[],t=e.length,r=-1;++r<t;)n=n.concat(f(e[r]));return n}function f(e){var n;return e.type===u||e.type===s?c(e.children):(delete(n=r({},e)).children,delete n.position,n=r(!0,{},n),e.children&&(n.children=c(e.children)),n)}function d(){return{type:i,ordered:!1,spread:!1,children:[]}}function p(){return{type:a,loose:!1,spread:!1,children:[]}}},945:function(e,n,t){"use strict";var r=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===i.call(e)},s=function(e){if(!e||"[object Object]"!==i.call(e))return!1;var n,t=r.call(e,"constructor"),a=e.constructor&&e.constructor.prototype&&r.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!a)return!1;for(n in e);return void 0===n||r.call(e,n)},l=function(e,n){a&&"__proto__"===n.name?a(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},c=function(e,n){if("__proto__"===n){if(!r.call(e,n))return;if(o)return o(e,n).value}return e[n]};e.exports=function e(){var n,t,r,i,a,o,f=arguments[0],d=1,p=arguments.length,g=!1;for("boolean"==typeof f&&(g=f,f=arguments[1]||{},d=2),(null==f||"object"!=typeof f&&"function"!=typeof f)&&(f={});d<p;++d)if(null!=(n=arguments[d]))for(t in n)r=c(f,t),f!==(i=c(n,t))&&(g&&i&&(s(i)||(a=u(i)))?(a?(a=!1,o=r&&u(r)?r:[]):o=r&&s(r)?r:{},l(f,{name:t,newValue:e(g,o,i)})):void 0!==i&&l(f,{name:t,newValue:i}));return f}},972:function(e,n,t){"use strict";e.exports=function(e,n){var t=function(e,n){var t=n||{},i=t.allowDangerousHTML,l={};return p.dangerous=i,p.definition=s(e,t),p.footnoteById=l,p.footnoteOrder=[],p.augment=c,p.handlers=r(f,t.handlers||{}),a(e,"footnoteDefinition",function(e){var n=e.identifier.toUpperCase();d.call(l,n)||(l[n]=e)}),p;function c(e,n){var t,i;return e&&"data"in e&&(t=e.data,"element"===n.type&&t.hName&&(n.tagName=t.hName),"element"===n.type&&t.hProperties&&(n.properties=r(n.properties,t.hProperties)),n.children&&t.hChildren&&(n.children=t.hChildren)),i=e&&e.position?e:{position:e},u(i)||(n.position={start:o.start(i),end:o.end(i)}),n}function p(e,n,t,r){return(void 0===r||null===r)&&"object"==typeof t&&"length"in t&&(r=t,t={}),c(e,{type:"element",tagName:n,properties:t||{},children:r||[]})}}(e,n),p=l(t,e),g=c(t);g&&(p.children=p.children.concat(i("text","\n"),g));return p};var r=t(32),i=t(38),a=t(119),o=t(445),u=t(973),s=t(974),l=t(446),c=t(975),f=t(976),d={}.hasOwnProperty},974:function(e,n,t){"use strict";var r=t(119);e.exports=function(e,n){return function(e){return function(n){var t=n&&a(n);return t&&i.call(e,t)?e[t]:null}}(function(e,n){var t={};if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return r(e,"definition",n&&n.commonmark?function(e){var n=a(e.identifier);i.call(t,n)||(t[n]=e)}:function(e){t[a(e.identifier)]=e}),t}(e,n))};var i={}.hasOwnProperty;function a(e){return e.toUpperCase()}},975:function(e,n,t){"use strict";e.exports=function(e){var n,t,o,u,s=e.footnoteById,l=e.footnoteOrder,c=l.length,f=-1,d=[];for(;++f<c;)(n=s[l[f].toUpperCase()])&&(o=n.children.concat(),u=o[o.length-1],t={type:"link",url:"#fnref-"+n.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]},u&&"paragraph"===u.type||(u={type:"paragraph",children:[]},o.push(u)),u.children.push(t),d.push({type:"listItem",data:{hProperties:{id:"fn-"+n.identifier}},children:o,position:n.position}));if(0===d.length)return null;return e(null,"div",{className:["footnotes"]},a([r(e),i(e,{type:"list",ordered:!0,children:d})],!0))};var r=t(447),i=t(448),a=t(98)},976:function(e,n,t){"use strict";function r(){return null}e.exports={blockquote:t(977),break:t(978),code:t(979),delete:t(981),emphasis:t(982),footnoteReference:t(449),footnote:t(983),heading:t(984),html:t(985),imageReference:t(986),image:t(987),inlineCode:t(988),linkReference:t(989),link:t(990),listItem:t(991),list:t(448),paragraph:t(992),root:t(993),strong:t(994),table:t(995),text:t(996),thematicBreak:t(447),toml:r,yaml:r,definition:r,footnoteDefinition:r}},977:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"blockquote",r(i(e,n),!0))};var r=t(98),i=t(27)},978:function(e,n,t){"use strict";e.exports=function(e,n){return[e(n,"br"),r("text","\n")]};var r=t(38)},979:function(e,n,t){"use strict";e.exports=function(e,n){var t=n.value?r(n.value+"\n"):"",a=n.lang&&n.lang.match(/^[^ \t]+(?=[ \t]|$)/),o={};a&&(o.className=["language-"+a]);return e(n.position,"pre",[e(n,"code",o,[i("text",t)])])};var r=t(980),i=t(38)},98:function(e,n,t){"use strict";e.exports=function(e,n){var t=[],i=-1,a=e.length;n&&t.push(r("text","\n"));for(;++i<a;)i&&t.push(r("text","\n")),t.push(e[i]);n&&0!==e.length&&t.push(r("text","\n"));return t};var r=t(38)},981:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"del",r(e,n))};var r=t(27)},982:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"em",r(e,n))};var r=t(27)},983:function(e,n,t){"use strict";e.exports=function(e,n){var t=e.footnoteById,i=e.footnoteOrder,a=1;for(;a in t;)a++;return a=String(a),i.push(a),t[a]={type:"footnoteDefinition",identifier:a,children:[{type:"paragraph",children:n.children}],position:n.position},r(e,{type:"footnoteReference",identifier:a,position:n.position})};var r=t(449)},984:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"h"+n.depth,r(e,n))};var r=t(27)},985:function(e,n,t){"use strict";e.exports=function(e,n){return e.dangerous?e.augment(n,r("raw",n.value)):null};var r=t(38)},986:function(e,n,t){"use strict";e.exports=function(e,n){var t,a=e.definition(n.identifier);if(!a)return i(e,n);t={src:r(a.url||""),alt:n.alt},null!==a.title&&void 0!==a.title&&(t.title=a.title);return e(n,"img",t)};var r=t(150),i=t(450)},987:function(e,n,t){"use strict";var r=t(150);e.exports=function(e,n){var t={src:r(n.url),alt:n.alt};null!==n.title&&void 0!==n.title&&(t.title=n.title);return e(n,"img",t)}},988:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"code",[i("text",r(n.value))])};var r=t(434),i=t(38)},989:function(e,n,t){"use strict";e.exports=function(e,n){var t,o=e.definition(n.identifier);if(!o)return i(e,n);t={href:r(o.url||"")},null!==o.title&&void 0!==o.title&&(t.title=o.title);return e(n,"a",t,a(e,n))};var r=t(150),i=t(450),a=t(27)},990:function(e,n,t){"use strict";var r=t(150),i=t(27);e.exports=function(e,n){var t={href:r(n.url)};null!==n.title&&void 0!==n.title&&(t.title=n.title);return e(n,"a",t,i(e,n))}},991:function(e,n,t){"use strict";e.exports=function(e,n,t){var u,s,l,c,f,d=n.children[0],p=a(e,n),g=t?function(e){var n=e.spread,t=e.children,r=t.length,i=-1;for(;!n&&++i<r;)n=o(t[i]);return n}(t):o(n),h={};if(g)u=p;else for(u=[],c=p.length,l=-1;++l<c;)"p"===(f=p[l]).tagName?u=u.concat(f.children):u.push(f);"boolean"==typeof n.checked&&(!g||d&&"paragraph"===d.type||u.unshift(e(null,"p",[])),0!==(s=g?u[0].children:u).length&&s.unshift(r("text"," ")),s.unshift(e(null,"input",{type:"checkbox",checked:n.checked,disabled:!0})),h.className=["task-list-item"]);g&&0!==u.length&&(u=i(u,!0));return e(n,"li",h,u)};var r=t(38),i=t(98),a=t(27);function o(e){var n=e.spread;return void 0===n||null===n?e.children.length>1:n}},992:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"p",r(e,n))};var r=t(27)},993:function(e,n,t){"use strict";e.exports=function(e,n){return e.augment(n,r("root",i(a(e,n))))};var r=t(38),i=t(98),a=t(27)},994:function(e,n,t){"use strict";e.exports=function(e,n){return e(n,"strong",r(e,n))};var r=t(27)},995:function(e,n,t){"use strict";e.exports=function(e,n){var t,o,u,s,l,c=n.children,f=c.length,d=n.align,p=d.length,g=[];for(;f--;){for(o=c[f].children,s=0===f?"th":"td",t=p,u=[];t--;)l=o[t],u[t]=e(l,s,{align:d[t]},l?a(e,l):[]);g[f]=e(c[f],"tr",i(u,!0))}return e(n,"table",i([e(g[0].position,"thead",i([g[0]],!0)),e({start:r.start(g[1]),end:r.end(g[g.length-1])},"tbody",i(g.slice(1),!0))],!0))};var r=t(445),i=t(98),a=t(27)},996:function(e,n,t){"use strict";e.exports=function(e,n){return e.augment(n,r("text",i(n.value)))};var r=t(38),i=t(997)}}]);