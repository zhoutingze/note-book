(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1558:function(s,a,r){"use strict";r.r(a);var e=r(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"单节点-shard-replica-机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单节点-shard-replica-机制"}},[s._v("#")]),s._v(" 单节点 shard & replica 机制")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#shard-replica-机制再次梳理"}},[s._v("shard & replica 机制再次梳理")])]),e("li",[e("a",{attrs:{href:"#图解单-node-环境下创建-index-是什么样子的"}},[s._v("图解单 node 环境下创建 index 是什么样子的")])])])]),e("p"),s._v(" "),e("ol",[e("li",[s._v("shard & replica 机制再次梳理")]),s._v(" "),e("li",[s._v("图解单 node 环境下创建 index 是什么样子的")])]),s._v(" "),e("h2",{attrs:{id:"shard-replica-机制再次梳理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shard-replica-机制再次梳理"}},[s._v("#")]),s._v(" shard & replica 机制再次梳理")]),s._v(" "),e("ol",[e("li",[s._v("index 包含多个 shard")]),s._v(" "),e("li",[s._v("每个 shard 都是一个最小工作单元，承载部分数据，是一个 lucene 实例，完整的建立索引和处理请求的能力")]),s._v(" "),e("li",[s._v("增减节点时，shard 会自动在 nodes 中负载均衡")]),s._v(" "),e("li",[s._v("primary shard 和 replica shard，每个 document 肯定只存在于某一个 primary shard 以及其对应的 replica shard 中，不可能存在于多个 primary shard")]),s._v(" "),e("li",[s._v("replica shard 是 primary shard 的副本，负责容错，以及承担读请求负载")]),s._v(" "),e("li",[s._v("primary shard 的数量在创建索引的时候就固定了，replica shard 的数量可以随时修改")]),s._v(" "),e("li",[s._v("primary shard 的默认数量是 5，replica 默认是 1，默认有 10个 shard，5个 primary shard，5个 replica shard")]),s._v(" "),e("li",[s._v("primary shard 不能和自己的 replica shard 放在同一个节点上（否则节点宕机，primary shard 和副本都丢失，起不到容错的作用），但是可以和其他 primary shard 的 replica shard 放在同一个节点上")])]),s._v(" "),e("p",[s._v("对于 shard 和 replica 的总结：")]),s._v(" "),e("ol",[e("li",[s._v("pri : primary shard")]),s._v(" "),e("li",[s._v("rep : replica shard")]),s._v(" "),e("li",[s._v("所以一个 es 实例叫做 shard")]),s._v(" "),e("li",[s._v("rep 的配置是针对于每个 pri 的副本个数")])]),s._v(" "),e("p",[s._v("如：test 的 pri=2，rep=2；那么将产生 2个 primary shard 和 4个 replica shard")]),s._v(" "),e("p",[e("img",{attrs:{src:r(574),alt:""}})]),s._v(" "),e("h2",{attrs:{id:"图解单-node-环境下创建-index-是什么样子的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图解单-node-环境下创建-index-是什么样子的"}},[s._v("#")]),s._v(" 图解单 node 环境下创建 index 是什么样子的")]),s._v(" "),e("ol",[e("li",[s._v("单 node 环境下，创建一个 index，有 3个 primary shard，3个 replica shard")]),s._v(" "),e("li",[s._v("集群 status 是 yellow")]),s._v(" "),e("li",[s._v("这个时候，只会将 3个 primary shard 分配到仅有的一个 node 上去，另外 3个 replica shard 是无法分配的")]),s._v(" "),e("li",[s._v("集群可以正常工作，但是一旦出现节点宕机，数据全部丢失，而且集群不可用，无法承接任何请求")])]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("PUT /test_index\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"settings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number_of_shards"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"number_of_replicas"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("GET /_cat/health?v\n\nepoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1546323256")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("  elasticsearch yellow          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("             "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                  -                 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("50.0")]),s._v("%\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("GET /_cat/indices?v\n\nhealth status index      uuid                   pri rep docs.count docs.deleted store.size pri.store.size\nyellow open   ecommerce  ZpGp7bIBQBaZFk9SYmbJVQ   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(".2kb         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(".2kb\nyellow open   test_index g4RJx2v8TXK95LdwlhRx5A   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       390b           390b\nyellow open   .kibana    id1SV_oGSjyGosKxeJApww   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".1kb          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".1kb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("来计算下是否是正确的：这个单节点集群有 9个 shards ，9个 pri，有 9个 unassign；")]),s._v(" "),e("p",[s._v("再来统计下这 3个 索引一共有 9个 pri，每个索引都有 1个 rep，那么一共会产生 9个 rep。\n9个 unassign 全是这 9个 rep，因为 同一份数据的 pri 和 rep 不能在一台机器上;")]),s._v(" "),e("p",[s._v("也就是说，一共会产生 18 个 shard；这里只有 9个，还有 9个没有被分配")]),s._v(" "),e("p",[e("img",{attrs:{src:r(575),alt:""}})]),s._v(" "),e("p",[s._v("而 pri 的数据却可以再同一台机器上，这里创建的 3个 pri 都会在这个 node 上存在")])])}),[],!1,null,null,null);a.default=n.exports},574:function(s,a,r){s.exports=r.p+"assets/img/markdown-img-paste-20190101140921494.e83a7bea.png"},575:function(s,a){s.exports="data:image/png;base64,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"}}]);