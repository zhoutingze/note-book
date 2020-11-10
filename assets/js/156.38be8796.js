(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1511:function(s,a,r){"use strict";r.r(a);var e=r(20),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"图解写一致性原理以及-quorum-机制深入剖析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图解写一致性原理以及-quorum-机制深入剖析"}},[s._v("#")]),s._v(" 图解写一致性原理以及 quorum 机制深入剖析")]),s._v(" "),e("h2",{attrs:{id:"consistency-写一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consistency-写一致性"}},[s._v("#")]),s._v(" consistency 写一致性")]),s._v(" "),e("p",[s._v("我们在发送任何一个增删改操作的时候，比如说 "),e("code",[s._v("put /index/type/id")]),s._v("，\n都可以带上一个 consistency 参数，指明我们想要的写一致性是什么？")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("put /index/type/id?consistency=quorum\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("有三个可选")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("one（primary shard）")]),s._v(" "),e("p",[s._v("要求我们这个写操作，只要有一个 primary shard 是 active 活跃可用的，就可以执行")])]),s._v(" "),e("li",[e("p",[s._v("all（all shard）")]),s._v(" "),e("p",[s._v("要求我们这个写操作，必须所有的 primary shard 和 replica shard 都是活跃的，才可以执行这个写操作")])]),s._v(" "),e("li",[e("p",[s._v("quorum（default）")]),s._v(" "),e("p",[s._v("默认的值，要求所有的 shard中，必须是大部分的 shard 都是活跃的，可用的，才可以执行这个写操作")])])]),s._v(" "),e("h2",{attrs:{id:"quorum-机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quorum-机制"}},[s._v("#")]),s._v(" quorum 机制")]),s._v(" "),e("p",[s._v("写之前必须确保大多数 shard 都可用，当 "),e("code",[s._v("number_of_replicas>1")]),s._v(" 时才生效")]),s._v(" "),e("p",[s._v("计算公式：quorum = "),e("code",[s._v("int( (primary + number_of_replicas) / 2 ) + 1")]),s._v("，")]),s._v(" "),e("p",[s._v("举个例子：3个 primary shard，number_of_replicas=1，总共有 3 + 3 * 1 = 6个 shard")]),s._v(" "),e("p",[s._v("quorum = int( (3 + 1) / 2 ) + 1 = 3")]),s._v(" "),e("p",[s._v("所以，要求 6个 shard中至少有 3个shard 是 active 状态的，才可以执行这个写操作")]),s._v(" "),e("p",[s._v("如果节点数少于quorum数量，可能导致quorum不齐全，进而导致无法执行任何写操作")]),s._v(" "),e("p",[s._v("3个 primary shard，replica=1，要求至少 3个 shard 是 active，3个 shard 按照之前学习的 shard&replica机制，必须在不同的节点上，如果说只有 2台 机器的话，是不是有可能出现说，3个 shard 都没法分配齐全，此时就可能会出现写操作无法执行的情况")]),s._v(" "),e("p",[s._v("es 提供了一种特殊的处理场景，就是说当 number_of_replicas>1 时才生效，因为假如说，你就一个 primary shard，replica=1，此时就 2个 shard")]),s._v(" "),e("p",[s._v("(1 + 1 / 2) + 1 = 2，要求必须有 2个 shard 是活跃的，但是可能就 1个 node，此时就 1个 shard是活跃的，如果你不特殊处理的话，导致我们的单节点集群就无法工作")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("疑问")]),s._v(" "),e("p",[s._v("p 和 r 不能在相同机器上。但是 r 和 r 也不能吗？\np 和 p 可以再同一台机器上，现在是单节点，"),e("RouterLink",{attrs:{to:"/elasticsearch-core/quick-start-texample/06-crud.html#快速检查集群的健康状况"}},[s._v("可以查看到他的健康状态")]),s._v(" 有 9个 p 被分配了，但是只有 3 个索引，也就是说一台机器上可以存在相同的 p ?")],1),s._v(" "),e("hr"),s._v(" "),e("p",[s._v("经过测试：在同一台机器上启动两个 es 实例，9 个 pri 和 9 个 rep，都可以被完全分配，集群状态变为 green")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("GET _cat/health?v\nepoch      timestamp cluster       status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1546783226")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("26")]),s._v("  elasticsearch green           "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("             "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                  -                "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.0")]),s._v("%\n\nGET _cat/indices?v\nhealth status index      uuid                   pri rep docs.count docs.deleted store.size pri.store.size\ngreen  open   ecommerce  ZpGp7bIBQBaZFk9SYmbJVQ   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("44")]),s._v(".5kb         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(".2kb\ngreen  open   test_index g4RJx2v8TXK95LdwlhRx5A   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("56")]),s._v(".5kb         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v(".2kb\ngreen  open   .kibana    id1SV_oGSjyGosKxeJApww   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(".3kb          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".1kb\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])]),s._v(" "),e("p",[e("img",{attrs:{src:r(680),alt:""}})])])}),[],!1,null,null,null);a.default=t.exports},680:function(s,a,r){s.exports=r.p+"assets/img/markdown-img-paste-20190106213737933.0531f082.png"}}]);