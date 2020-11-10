(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{1587:function(s,a,n){"use strict";n.r(a);var t=n(20),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"bulk-奇特-json-与性能揭秘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bulk-奇特-json-与性能揭秘"}},[s._v("#")]),s._v(" bulk 奇特 json 与性能揭秘")]),s._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#如果采用标准的-json-格式"}},[s._v("如果采用标准的 json 格式")])]),n("li",[n("a",{attrs:{href:"#那么采用奇特的格式呢"}},[s._v("那么采用奇特的格式呢？")])])])]),n("p"),s._v(" "),n("p",[s._v("bulk api 奇特的 json 格式复习，详细请查阅 "),n("RouterLink",{attrs:{to:"/elasticsearch-core/distributed-document/27-bulk.html"}},[s._v("bulk 批量增删改")])],1),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('{"action": {"meta"}}\\n\n{"data"}\\n\n{"action": {"meta"}}\\n\n{"data"}\\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("bulk 中的每个操作都可能要转发到不同的 node 的 shard 去执行")]),s._v(" "),n("h2",{attrs:{id:"如果采用标准的-json-格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如果采用标准的-json-格式"}},[s._v("#")]),s._v(" 如果采用标准的 json 格式")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"action"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"data"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("如果采用以上可随意换行的语法，整个可读性非常棒，读起来很爽，es 拿到那种标准格式的 json 串以后，要按照下述流程去进行处理：")]),s._v(" "),n("ol",[n("li",[s._v("将 json 数组解析为 JSONArray 对象，这个时候，整个数据，就会在内存中出现一份一模一样的拷贝，一份数据是 json 文本，一份数据是 JSONArray 对象")]),s._v(" "),n("li",[s._v("解析 json 数组里的每个 json，对每个请求中的 document 进行路由")]),s._v(" "),n("li",[s._v("为路由到同一个 shard 上的多个请求，创建一个请求数组")]),s._v(" "),n("li",[s._v("将这个请求数组序列化")]),s._v(" "),n("li",[s._v("将序列化后的请求数组发送到对应的节点上去")])]),s._v(" "),n("p",[s._v("因为无法方便的将 action 分离出来，所以需要耗费更多时间去解析成对象，再提取，那么"),n("strong",[s._v("就会耗费更多内存，更多的 jvm gc 开销")])]),s._v(" "),n("p",[s._v("我们之前提到过 bulk size 最佳大小的那个问题，一般建议说在几千条那样，然后大小在 10MB 左右，\n所以说，可怕的事情来了。假设说现在 100个 bulk 请求发送到了一个节点上去，然后每个请求是 10MB，100个 请求，就是 1000MB = 1GB，\n然后每个请求的 json 都 copy 一份为 jsonarray 对象，此时内存中的占用就会翻倍，就会占用 2GB 的内存，甚至还不止。\n因为弄成 jsonarray 之后，还可能会多搞一些其他的数据结构，2GB+ 的内存占用。")]),s._v(" "),n("p",[s._v("占用更多的内存可能就会积压其他请求的内存使用量，比如说最重要的搜索请求，分析请求，等等，此时就可能会导致其他请求的性能急速下降\n另外的话，占用内存更多，就会导致 java 虚拟机的垃圾回收次数更多，跟频繁，每次要回收的垃圾对象更多，\n耗费的时间更多，导致 es 的 java 虚拟机停止工作线程的时间更多")]),s._v(" "),n("h2",{attrs:{id:"那么采用奇特的格式呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#那么采用奇特的格式呢"}},[s._v("#")]),s._v(" 那么采用奇特的格式呢？")]),s._v(" "),n("ol",[n("li",[s._v("不用将其转换为 json 对象，不会出现内存中的相同数据的拷贝，直接按照换行符切割 json")]),s._v(" "),n("li",[s._v("对每两个一组的 json，读取 meta，进行 document 路由")]),s._v(" "),n("li",[s._v("直接将对应的 json 发送到 node 上去")])]),s._v(" "),n("p",[s._v("这里最大的优势可能就在于，不需要解析 doc 承载数据更多的情况了，\n按行读取的话，由于 bulk 的 meta 数据较为简单，或许都不用解析成 json 对象，就能通过正则提取到 meta 信息")]),s._v(" "),n("p",[s._v("最大的优势在于，不需要将 json 数组解析为一个 JSONArray 对象，形成一份大数据的拷贝，浪费内存空间，尽可能地保证性能")])])}),[],!1,null,null,null);a.default=e.exports}}]);