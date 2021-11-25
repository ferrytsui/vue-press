(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{397:function(t,s,n){"use strict";n.r(s);var a=n(54),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第五章-常见面试题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第五章-常见面试题"}},[t._v("#")]),t._v(" 第五章 常见面试题")]),t._v(" "),n("h2",{attrs:{id:"_1-1-html"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-html"}},[t._v("#")]),t._v(" 1.1 html")]),t._v(" "),n("p",[n("strong",[t._v("(1) 如何理解html语义化？")])]),t._v(" "),n("p",[t._v("增加代码可读性；让搜索引擎更容易读懂，SEO")]),t._v(" "),n("p",[n("strong",[t._v("(2) 块状元素和内联元素")])]),t._v(" "),n("p",[t._v("display:block/table; 有div,h1,table,ul,ol,p等")]),t._v(" "),n("p",[t._v("display:inline/inline-block;有span,img,input,button等")]),t._v(" "),n("h2",{attrs:{id:"_1-2-css"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-css"}},[t._v("#")]),t._v(" 1.2 css")]),t._v(" "),n("p",[n("strong",[t._v("(1) css垂直居中的有哪几种几种方法？")])]),t._v(" "),n("p",[n("strong",[t._v("(2) absolute和relative定位？")])]),t._v(" "),n("p",[t._v("relative根据自身定位。相对定位的元素，会在”老家留坑“，本质上仍然是在原来的位置，只不过渲染在新的地方（类比影子），不会对页面其他元素产生影响。相对定位用途：(1)微调元素位置  (2)用户绝对定位的参考")]),t._v(" "),n("p",[t._v("absolute根据最近一层的祖先定位元素(absolute/relative/fixed/body)定位。绝对定位的元素脱离文档流，将释放自己的位置，对其他元素不会产生干扰，而是对他们进行压盖。绝对定位用途：(1)制作压盖，遮罩效果。z-index（无单位的正整数），数值大压过小的。(2)结合css精灵使用 (3)结合JS实现动画")]),t._v(" "),n("p",[t._v("fixed固定定位。只能以页面为参考点，脱离文档流。用途：返回顶部/导航")]),t._v(" "),n("p",[n("strong",[t._v("(3) 水平/垂直居中")])]),t._v(" "),n("p",[t._v("水平居中:(1)inline元素：text-align:center (2)block元素:margin:auto (3)知道子元素宽，absolute元素:left:50% + margin-left负值")]),t._v(" "),n("p",[t._v("垂直居中:(1)inline元素：line-height的值等于height的值 (2)absolute元素:transform(-50%, -50%)  (3)知道子元素高，absolute元素：top:50% + margin-top负值")]),t._v(" "),n("h2",{attrs:{id:"_1-2-js基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-js基础"}},[t._v("#")]),t._v(" 1.2 JS基础")]),t._v(" "),n("p",[n("strong",[t._v("(1) 什么是闭包？")])]),t._v(" "),n("p",[t._v("(犀牛书)闭包： 函数变量可以保存在函数作用域内")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("(高程)闭包：闭包是指有权访问另一个函数作用域中变量的函数（函数没导出）")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("innerFoo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("innerFoo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("(你不知道的js)当函数可以记住或者访问所在的词法作用域时，就产生了闭包，即使函数是在当前的词法作用域之外")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("innerFoo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("(MDN)一个函数和对其周围状态的引用捆绑在一起，这样的组合就是closure")]),t._v(" "),n("p",[t._v("总结：当函数的执行，导致函数被定义")]),t._v(" "),n("p",[n("strong",[t._v("推荐阅读")]),t._v(" "),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22486908",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS中的闭包是什么？"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"_1-3-框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-框架"}},[t._v("#")]),t._v(" 1.3 框架")]),t._v(" "),n("p",[n("strong",[t._v("(1) 虚拟DOM与DOM diff")])]),t._v(" "),n("p",[n("strong",[t._v("推荐阅读")]),t._v(" "),n("a",{attrs:{href:"https://juejin.cn/post/6913773874547163143",target:"_blank",rel:"noopener noreferrer"}},[t._v("虚拟DOM和DOM diff"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"_1-4-webpack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-webpack"}},[t._v("#")]),t._v(" 1.4 webpack")]),t._v(" "),n("p",[n("strong",[t._v("推荐阅读")]),t._v(" "),n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/44438844",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于webpack的面试题总结"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("(1) 前端代码为何要进行构建和打包？")])]),t._v(" "),n("p",[n("strong",[t._v("(2) module chunk 和bundle分别是什么意思？")])]),t._v(" "),n("p",[n("strong",[t._v("(3) loader和plugin的区别？")])]),t._v(" "),n("p",[n("strong",[t._v("(4) webpeck如何实现懒加载？")])]),t._v(" "),n("p",[n("strong",[t._v("(5) webpeck常见性能优化？")])]),t._v(" "),n("p",[n("strong",[t._v("(6) babel-runtime和babel-polyfill的区别？")])]),t._v(" "),n("h2",{attrs:{id:"_1-5-http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-http"}},[t._v("#")]),t._v(" 1.5 HTTP")]),t._v(" "),n("p",[n("strong",[t._v("(1) 什么是浏览器缓存？http缓存策略：强制缓存和协商缓存(cache-control和Etag区别)")])]),t._v(" "),n("p",[n("strong",[t._v("推荐阅读")]),t._v(" "),n("a",{attrs:{href:"https://mp.weixin.qq.com/s/Wvc0lkLpgyEW_u7bbMdvpQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于浏览器缓存你知道多少?"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("strong",[t._v("(2) GET 和 POST 的区别 ？")])]),t._v(" "),n("p",[n("strong",[t._v("(3) HTTP状态码有哪些 ？")])]),t._v(" "),n("p",[n("strong",[t._v("(4) 跨域,JSONP,CORS,postMessage是什么?")])])])}),[],!1,null,null,null);s.default=e.exports}}]);