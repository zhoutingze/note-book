(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1371:function(t,s,n){"use strict";n.r(s);var e=n(20),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_132-商品详情页动态渲染系统-全链路高可用架构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_132-商品详情页动态渲染系统-全链路高可用架构设计"}},[t._v("#")]),t._v(" 132. 商品详情页动态渲染系统：全链路高可用架构设计")]),t._v(" "),e("p",[t._v("动态渲染系统在 读链路 高可用方面怎么考虑，\n由于采用了多级缓存，每级缓存都会通过网络访问，就有可能导致读异常（也有可能服务挂掉）")]),t._v(" "),e("p",[e("img",{attrs:{src:n(340),alt:""}})]),t._v(" "),e("p",[t._v("如上图：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("nginx local cache -> 缓存从集群 -> 数据直连服务：缓存主集群 -> 数据直连服务: 依赖服务\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("读链路多级降级：本机房从集群 -> 主集群 -> 直连")]),t._v(" "),e("ol",[e("li",[t._v("缓存从集群故障")])]),t._v(" "),e("p",[t._v("简单断路功能，降级访问数据直连服务\n2. 数据直连服务故障")]),t._v(" "),e("p",[t._v("断路功能，直接访问主集群\n3. 主集群故障")]),t._v(" "),e("p",[t._v("断路功能，直接调用依赖服务")]),t._v(" "),e("p",[t._v("貌似会觉得这个就是多次缓存找不到的一层一层去重建的过程，实际上还是有区别的，\n这三个故障的请求控制都在 nginx 上，而多级缓存失效重建的流程却是分散在各个节点上的")]),t._v(" "),e("p",[t._v("全链路隔离")]),t._v(" "),e("ul",[e("li",[t._v("基于 hystrix 的依赖调用隔离、限流、熔断、降级")]),t._v(" "),e("li",[t._v("普通服务的多机房容灾冗余部署以及隔离")])]),t._v(" "),e("p",[t._v("限流等功能能保证每个节点服务不会被直接打死，虽然限流，至少系统还能处理部分请求，\n不至于全盘崩溃来的好。")]),t._v(" "),e("p",[t._v("通过这一章的分析，在降级方面的应用，多了一点理解")])])}),[],!1,null,null,null);s.default=a.exports},340:function(t,s,n){t.exports=n.p+"assets/img/markdown-img-paste-20190714174433377.eedd9d2b.png"}}]);