(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{30:function(e,t,n){"use strict";e.exports=function(e,t){var n,o,a=t.children||[],u=a.length,s=[],l=-1;for(;++l<u;)(n=i(e,a[l],t))&&(l&&"break"===a[l-1].type&&(n.value&&(n.value=r.left(n.value)),(o=n.children&&n.children[0])&&o.value&&(o.value=r.left(o.value))),s=s.concat(n));return s};var r=n(75),i=n(430)},422:function(e,t,n){"use strict";e.exports=function e(t){return function(e){return(e&&e.value?e.value:e.alt?e.alt:e.title)||""}(t)||t.children&&t.children.map(e).join("")||""}},424:function(e,t,n){"use strict";e.exports=function(e){return new RegExp("^("+e+")$","i")}},428:function(e,t,n){"use strict";e.exports=n(783)},430:function(e,t,n){"use strict";e.exports=function(e,t,n){var a=t&&t.type,u=o.call(e.handlers,a)?e.handlers[a]:null;if(!a)throw new Error("Expected node, got `"+t+"`");return("function"==typeof u?u:function(e,t){if(function(e){var t=e.data||{};if(o.call(t,"hName")||o.call(t,"hProperties")||o.call(t,"hChildren"))return!1;return"value"in e}(t))return e.augment(t,r("text",t.value));return e(t,"div",i(e,t))})(e,t,n)};var r=n(36),i=n(30),o={}.hasOwnProperty},431:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"hr")}},432:function(e,t,n){"use strict";e.exports=function(e,t){var n,o,a={},u=t.ordered?"ol":"ul",s=-1;"number"==typeof t.start&&1!==t.start&&(a.start=t.start);n=i(e,t),o=n.length;for(;++s<o;)if(n[s].properties.className&&-1!==n[s].properties.className.indexOf("task-list-item")){a.className=["contains-task-list"];break}return e(t,u,a,r(n,!0))};var r=n(84),i=n(30)},433:function(e,t,n){"use strict";e.exports=function(e,t){var n=e.footnoteOrder,i=t.identifier;-1===n.indexOf(i)&&n.push(i);return e(t.position,"sup",{id:"fnref-"+i},[e(t,"a",{href:"#fn-"+i,className:["footnote-ref"]},[r("text",t.label||i)])])};var r=n(36)},434:function(e,t,n){"use strict";e.exports=function(e,t){var n,o,a,u=t.referenceType,s="]";"collapsed"===u?s+="[]":"full"===u&&(s+="["+(t.label||t.identifier)+"]");if("imageReference"===t.type)return r("text","!["+t.alt+s);n=i(e,t),(o=n[0])&&"text"===o.type?o.value="["+o.value:n.unshift(r("text","["));(a=n[n.length-1])&&"text"===a.type?a.value+=s:n.push(r("text",s));return n};var r=n(36),i=n(30)},705:function(e,t,n){"use strict";e.exports=a;var r=["\\","`","*","{","}","[","]","(",")","#","+","-",".","!","_",">"],i=r.concat(["~","|"]),o=i.concat(["\n",'"',"$","%","&","'",",","/",":",";","<","=","?","@","^"]);function a(e){var t=e||{};return t.commonmark?o:t.gfm?i:r}a.default=r,a.gfm=i,a.commonmark=o},752:function(e,t,n){"use strict";e.exports=n(753)},753:function(e,t,n){"use strict";e.exports=function(e,t){var n=t||{},a=n.heading?o(n.heading):null,u=r(e,a,n),s=u.map;u.map=0===s.length?null:i(s,n.tight,n.prefix),a||(u.index=null,u.endIndex=null);return u};var r=n(754),i=n(755),o=n(424)},754:function(e,t,n){"use strict";e.exports=function(e,t,n){var l,c,f=e.children.length,p=null,d=null!==t,h=n.maxDepth||6,g=n.skip?u(n.skip):null,v=o(n.parents||e),x=[];d||(l=-1);a.reset(),i(e,"heading",function(e,n,i){var o=r(e),u=e.data&&e.data.hProperties&&e.data.hProperties.id;v(i)&&(d&&(function(e,t){return t&&s(e)&&e.depth<=t}(e,p)&&(c=n,d=!1),function(e,t,n){return null===t&&s(e)&&n.test(r(e))}(e,p,t)&&(l=n+1,p=e.depth)),!(!d&&o&&e.depth<=h)||g&&g.test(o)||x.push({depth:e.depth,children:e.children,id:a.slug(u||o)}))}),l&&!c&&(c=f+1);void 0===l&&(l=-1,c=-1,x=[]);return{index:l,endIndex:c,map:x}};var r=n(422),i=n(80),o=n(81),a=n(423)(),u=n(424),s=o("heading")},755:function(e,t,n){"use strict";var r=n(406);e.exports=function(e,t,n){var r,i=1/0,o=-1,a=e.length;for(;++o<a;)e[o].depth<i&&(i=e[o].depth);o=-1;for(;++o<a;)e[o].depth-=i-1;r=p(),o=-1;for(;++o<a;)l(e[o],r,t,n);return r};var i="list",o="listItem",a="paragraph",u="link",s="linkReference";function l(e,t,n,r){var s,f,h=t.children,g=h.length,v=h[g-1],x=!1;if(1===e.depth?((f=d()).children.push({type:a,children:[{type:u,title:null,url:"#"+(r||"")+e.id,children:c(e.children)}]}),h.push(f)):v&&v.type===o?l(e,v,n,r):v&&v.type===i?(e.depth--,l(e,v,n,r)):t.type===i?(l(e,f=d(),n,r),h.push(f)):(f=p(),e.depth--,l(e,f,n,r),h.push(f)),t.spread=!n,t.type===i&&t.spread)for(t.spread=!1,s=-1;++s<g;)if(h[s].children.length>1){t.spread=!0;break}if(t.type===o)t.loose=!n&&h.length>1;else{if(n)x=!1;else for(s=-1;++s<g;)if(h[s].loose){x=!0;break}for(s=-1;++s<g;)h[s].loose=x}}function c(e){for(var t=[],n=e.length,r=-1;++r<n;)t=t.concat(f(e[r]));return t}function f(e){var t;return e.type===u||e.type===s?c(e.children):(delete(t=r({},e)).children,delete t.position,t=r(!0,{},t),e.children&&(t.children=c(e.children)),t)}function p(){return{type:i,ordered:!1,spread:!1,children:[]}}function d(){return{type:o,loose:!1,spread:!1,children:[]}}},783:function(e,t,n){"use strict";e.exports=function(e,t){var n=function(e,t){var n=t||{},i=n.allowDangerousHTML,l={};return d.dangerous=i,d.definition=s(e,n),d.footnoteById=l,d.footnoteOrder=[],d.augment=c,d.handlers=r(f,n.handlers||{}),o(e,"footnoteDefinition",function(e){var t=e.identifier.toUpperCase();p.call(l,t)||(l[t]=e)}),d;function c(e,t){var n,i;return e&&"data"in e&&(n=e.data,"element"===t.type&&n.hName&&(t.tagName=n.hName),"element"===t.type&&n.hProperties&&(t.properties=r(t.properties,n.hProperties)),t.children&&n.hChildren&&(t.children=n.hChildren)),i=e&&e.position?e:{position:e},u(i)||(t.position={start:a.start(i),end:a.end(i)}),t}function d(e,t,n,r){return(void 0===r||null===r)&&"object"==typeof n&&"length"in n&&(r=n,n={}),c(e,{type:"element",tagName:t,properties:n||{},children:r||[]})}}(e,t),d=l(n,e),h=c(n);h&&(d.children=d.children.concat(i("text","\n"),h));return d};var r=n(32),i=n(36),o=n(80),a=n(429),u=n(784),s=n(785),l=n(430),c=n(786),f=n(787),p={}.hasOwnProperty},785:function(e,t,n){"use strict";var r=n(80);e.exports=function(e,t){return function(e){return function(t){var n=t&&o(t);return n&&i.call(e,n)?e[n]:null}}(function(e,t){var n={};if(!e||!e.type)throw new Error("mdast-util-definitions expected node");return r(e,"definition",t&&t.commonmark?function(e){var t=o(e.identifier);i.call(n,t)||(n[t]=e)}:function(e){n[o(e.identifier)]=e}),n}(e,t))};var i={}.hasOwnProperty;function o(e){return e.toUpperCase()}},786:function(e,t,n){"use strict";e.exports=function(e){var t,n,a,u,s=e.footnoteById,l=e.footnoteOrder,c=l.length,f=-1,p=[];for(;++f<c;)(t=s[l[f].toUpperCase()])&&(a=t.children.concat(),u=a[a.length-1],n={type:"link",url:"#fnref-"+t.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]},u&&"paragraph"===u.type||(u={type:"paragraph",children:[]},a.push(u)),u.children.push(n),p.push({type:"listItem",data:{hProperties:{id:"fn-"+t.identifier}},children:a,position:t.position}));if(0===p.length)return null;return e(null,"div",{className:["footnotes"]},o([r(e),i(e,{type:"list",ordered:!0,children:p})],!0))};var r=n(431),i=n(432),o=n(84)},787:function(e,t,n){"use strict";function r(){return null}e.exports={blockquote:n(788),break:n(789),code:n(790),delete:n(792),emphasis:n(793),footnoteReference:n(433),footnote:n(794),heading:n(795),html:n(796),imageReference:n(797),image:n(798),inlineCode:n(799),linkReference:n(800),link:n(801),listItem:n(802),list:n(432),paragraph:n(803),root:n(804),strong:n(805),table:n(806),text:n(807),thematicBreak:n(431),toml:r,yaml:r,definition:r,footnoteDefinition:r}},788:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"blockquote",r(i(e,t),!0))};var r=n(84),i=n(30)},789:function(e,t,n){"use strict";e.exports=function(e,t){return[e(t,"br"),r("text","\n")]};var r=n(36)},790:function(e,t,n){"use strict";e.exports=function(e,t){var n=t.value?r(t.value+"\n"):"",o=t.lang&&t.lang.match(/^[^ \t]+(?=[ \t]|$)/),a={};o&&(a.className=["language-"+o]);return e(t.position,"pre",[e(t,"code",a,[i("text",n)])])};var r=n(791),i=n(36)},792:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"del",r(e,t))};var r=n(30)},793:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"em",r(e,t))};var r=n(30)},794:function(e,t,n){"use strict";e.exports=function(e,t){var n=e.footnoteById,i=e.footnoteOrder,o=1;for(;o in n;)o++;return o=String(o),i.push(o),n[o]={type:"footnoteDefinition",identifier:o,children:[{type:"paragraph",children:t.children}],position:t.position},r(e,{type:"footnoteReference",identifier:o,position:t.position})};var r=n(433)},795:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"h"+t.depth,r(e,t))};var r=n(30)},796:function(e,t,n){"use strict";e.exports=function(e,t){return e.dangerous?e.augment(t,r("raw",t.value)):null};var r=n(36)},797:function(e,t,n){"use strict";e.exports=function(e,t){var n,o=e.definition(t.identifier);if(!o)return i(e,t);n={src:r(o.url||""),alt:t.alt},null!==o.title&&void 0!==o.title&&(n.title=o.title);return e(t,"img",n)};var r=n(138),i=n(434)},798:function(e,t,n){"use strict";var r=n(138);e.exports=function(e,t){var n={src:r(t.url),alt:t.alt};null!==t.title&&void 0!==t.title&&(n.title=t.title);return e(t,"img",n)}},799:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"code",[i("text",r(t.value))])};var r=n(417),i=n(36)},800:function(e,t,n){"use strict";e.exports=function(e,t){var n,a=e.definition(t.identifier);if(!a)return i(e,t);n={href:r(a.url||"")},null!==a.title&&void 0!==a.title&&(n.title=a.title);return e(t,"a",n,o(e,t))};var r=n(138),i=n(434),o=n(30)},801:function(e,t,n){"use strict";var r=n(138),i=n(30);e.exports=function(e,t){var n={href:r(t.url)};null!==t.title&&void 0!==t.title&&(n.title=t.title);return e(t,"a",n,i(e,t))}},802:function(e,t,n){"use strict";e.exports=function(e,t,n){var u,s,l,c,f,p=t.children[0],d=o(e,t),h=n?function(e){var t=e.spread,n=e.children,r=n.length,i=-1;for(;!t&&++i<r;)t=a(n[i]);return t}(n):a(t),g={};if(h)u=d;else for(u=[],c=d.length,l=-1;++l<c;)"p"===(f=d[l]).tagName?u=u.concat(f.children):u.push(f);"boolean"==typeof t.checked&&(!h||p&&"paragraph"===p.type||u.unshift(e(null,"p",[])),0!==(s=h?u[0].children:u).length&&s.unshift(r("text"," ")),s.unshift(e(null,"input",{type:"checkbox",checked:t.checked,disabled:!0})),g.className=["task-list-item"]);h&&0!==u.length&&(u=i(u,!0));return e(t,"li",g,u)};var r=n(36),i=n(84),o=n(30);function a(e){var t=e.spread;return void 0===t||null===t?e.children.length>1:t}},803:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"p",r(e,t))};var r=n(30)},804:function(e,t,n){"use strict";e.exports=function(e,t){return e.augment(t,r("root",i(o(e,t))))};var r=n(36),i=n(84),o=n(30)},805:function(e,t,n){"use strict";e.exports=function(e,t){return e(t,"strong",r(e,t))};var r=n(30)},806:function(e,t,n){"use strict";e.exports=function(e,t){var n,a,u,s,l,c=t.children,f=c.length,p=t.align,d=p.length,h=[];for(;f--;){for(a=c[f].children,s=0===f?"th":"td",n=d,u=[];n--;)l=a[n],u[n]=e(l,s,{align:p[n]},l?o(e,l):[]);h[f]=e(c[f],"tr",i(u,!0))}return e(t,"table",i([e(h[0].position,"thead",i([h[0]],!0)),e({start:r.start(h[1]),end:r.end(h[h.length-1])},"tbody",i(h.slice(1),!0))],!0))};var r=n(429),i=n(84),o=n(30)},807:function(e,t,n){"use strict";e.exports=function(e,t){return e.augment(t,r("text",i(t.value)))};var r=n(36),i=n(808)},821:function(e,t,n){"use strict";var r=n(822),i=n(420);function o(){}o.prototype=r;var a=new o;e.exports=a,a.highlight=function(e,t,n){var r=(n||{}).prefix;null!==r&&void 0!==r||(r=c);return w(b(e,t,!0,r))},a.highlightAuto=m,a.registerLanguage=function(e,t){var n=t(a);v[e]=n,g.push(e),n.aliases&&y(e,n.aliases)},a.listLanguages=function(){return g.concat()},a.registerAlias=y,a.getLanguage=E;var u=r.inherit,s={}.hasOwnProperty,l=[].concat,c="hljs-",f="case_insensitive",p="cached_variants",d=" ",h="|",g=[],v={},x={};function m(e,t){var n,r,o,a,u=t||{},s=u.subset||g,l=u.prefix,f=s.length,p=-1;if(null!==l&&void 0!==l||(l=c),"string"!=typeof e)throw i("Expected `string` for value, got `%s`",e);for(r=w({}),n=w({});++p<f;)E(a=s[p])&&((o=w(b(a,e,!1,l))).language=a,o.relevance>r.relevance&&(r=o),o.relevance>n.relevance&&(r=n,n=o));return r.language&&(n.secondBest=r),n}function y(e,t){var n,r,i,o,a=e;for(n in t&&((a={})[e]=t),a)for(i=(r="string"==typeof(r=a[n])?[r]:r).length,o=-1;++o<i;)x[r[o]]=n}function b(e,t,n,r,o){var a,c,g,x,y,w,R,P,L={},I=[],O="",B=0;if("string"!=typeof e)throw i("Expected `string` for name, got `%s`",e);if("string"!=typeof t)throw i("Expected `string` for value, got `%s`",t);if(a=E(e),g=c=o||a,x=P=[],!a)throw i("Unknown language: `%s` is not registered",e);!function(e){function t(t,r){return new RegExp(n(t),"m"+(e[f]?"i":"")+(r?"g":""))}function n(e){return e&&e.source||e}!function r(i,o){var a={};var s;if(i.compiled)return;i.compiled=!0;i.keywords=i.keywords||i.beginKeywords;i.keywords&&("string"==typeof i.keywords?c("keyword",i.keywords):Object.keys(i.keywords).forEach(function(e){c(e,i.keywords[e])}),i.keywords=a);i.lexemesRe=t(i.lexemes||/\w+/,!0);o&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(d).join(h)+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=t(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=t(i.end)),i.terminatorEnd=n(i.end)||"",i.endsWithParent&&o.terminatorEnd&&(i.terminatorEnd+=(i.end?h:"")+o.terminatorEnd));i.illegal&&(i.illegalRe=t(i.illegal));void 0===i.relevance&&(i.relevance=1);i.contains||(i.contains=[]);i.contains=l.apply([],i.contains.map(function(e){return function(e){var t,n,r,i;if(e.variants&&!e[p]){for(r=e.variants,t=r.length,n=-1,i=[];++n<t;)i[n]=u(e,{variants:null},r[n]);e[p]=i}return e[p]||(e.endsWithParent?[u(e)]:[e])}("self"===e?i:e)}));i.contains.forEach(function(e){r(e,i)});i.starts&&r(i.starts,o);s=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminatorEnd,i.illegal]).map(n).filter(Boolean);i.terminators=0===s.length?{exec:N}:t(s.join(h),!0);function c(t,n){var r,i,o,u;for(e[f]&&(n=n.toLowerCase()),r=n.split(d),u=r.length,o=-1;++o<u;)i=r[o].split(h),a[i[0]]=[t,i[1]?Number(i[1]):1]}}(e)}(a);try{for(c.terminators.lastIndex=0,y=0,R=c.terminators.exec(t);R;)w=C(t.substring(y,R.index),R[0]),y=R.index+w,c.terminators.lastIndex=y,R=c.terminators.exec(t);for(C(t.substr(y)),g=c;g.parent;)g.className&&q(),g=g.parent;return{relevance:B,value:x,language:e,top:c}}catch(e){if(-1===e.message.indexOf("Illegal"))throw e;return{relevance:0,value:U(t,[])}}function C(e,t){var r,o,a;if(O+=e,void 0===t)return K(D(),x),0;if(r=function(e,t){var n=t.contains,r=n.length,i=-1;for(;++i<r;)if(k(n[i].beginRe,e))return n[i]}(t,c))return K(D(),x),j(r,t),r.returnBegin?0:t.length;if(o=function e(t,n){if(k(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(c,t)){(a=c).returnEnd||a.excludeEnd||(O+=t),K(D(),x);do{c.className&&q(),B+=c.relevance,c=c.parent}while(c!==o.parent);return a.excludeEnd&&U(t,x),O="",o.starts&&j(o.starts,""),a.returnEnd?0:t.length}if(function(e,t){return!n&&k(t.illegalRe,e)}(t,c))throw i('Illegal lexeme "%s" for mode "%s"',t,c.className||"<unnamed>");return O+=t,t.length||1}function j(e,t){var n;e.className&&(n=$(e.className,[])),e.returnBegin?O="":e.excludeBegin?(U(t,x),O=""):O=t,n&&(x.push(n),I.push(x),x=n.children),c=Object.create(e,{parent:{value:c}})}function D(){var e=c.subLanguage?function(){var e,t="string"==typeof c.subLanguage;if(t&&!v[c.subLanguage])return U(O,[]);e=t?b(c.subLanguage,O,!0,r,L[c.subLanguage]):m(O,{subset:0===c.subLanguage.length?void 0:c.subLanguage,prefix:r});if(!e.language)return[W(O)];c.relevance>0&&(B+=e.relevance);t&&(L[c.subLanguage]=e.top);return[$(e.language,e.value,!0)]}():function(){var e,t,n,r,i=[];if(!c.keywords)return U(O,i);e=0,c.lexemesRe.lastIndex=0,t=c.lexemesRe.exec(O);for(;t;)U(O.substring(e,t.index),i),(r=_(c,t))?(B+=r[1],n=$(r[0],[]),i.push(n),U(t[0],n.children)):U(t[0],i),e=c.lexemesRe.lastIndex,t=c.lexemesRe.exec(O);return U(O.substr(e),i),i}();return O="",e}function K(e,t){for(var n,r=e.length,i=-1;++i<r;)"text"===(n=e[i]).type?U(n.value,t):t.push(n)}function U(e,t){var n;return e&&((n=t[t.length-1])&&"text"===n.type?n.value+=e:t.push(W(e))),t}function W(e){return{type:"text",value:e}}function $(e,t,n){return{type:"element",tagName:"span",properties:{className:[(n?"":r)+e]},children:t}}function _(e,t){var n=t[0];return a[f]&&(n=n.toLowerCase()),s.call(e.keywords,n)&&e.keywords[n]}function q(){x=I.pop()||P}}function w(e){return{relevance:e.relevance||0,language:e.language||null,value:e.value||[]}}function k(e,t){var n=e&&e.exec(t);return n&&0===n.index}function N(){return null}function E(e){return e=e.toLowerCase(),v[e]||v[x[e]]}},84:function(e,t,n){"use strict";e.exports=function(e,t){var n=[],i=-1,o=e.length;t&&n.push(r("text","\n"));for(;++i<o;)i&&n.push(r("text","\n")),n.push(e[i]);t&&0!==e.length&&n.push(r("text","\n"));return n};var r=n(36)}}]);