(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1414:function(s,a,e){"use strict";e.r(a);var n=e(20),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_030-redis-cluster-通过-master-水平扩容来支撑更高的读写吞吐-海量数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_030-redis-cluster-通过-master-水平扩容来支撑更高的读写吞吐-海量数据"}},[s._v("#")]),s._v(" 030. redis cluster 通过 master 水平扩容来支撑更高的读写吞吐 + 海量数据")]),s._v(" "),e("p",[s._v("redis cluster 模式下，不建议做物理的读写分离了，我们建议通过 master 的水平扩容，来横向扩展读写吞吐量，还有支撑更多的海量数据")]),s._v(" "),e("p",[s._v("比如 redis 单机假设读吞吐是 5w/s，写吞吐 2w/s，如果有 5 台 master，读吞吐可以达到总量 25w/s QPS，写可以达到 10w/s QPS")]),s._v(" "),e("p",[s._v("redis 单机内存不建议过大（建议值 6G、8G），因为 fork 类操作的时候很耗时，会导致请求延时的问题")]),s._v(" "),e("p",[s._v("只要横向扩容更多的 master 就能达到支撑 1TB 数据量。")]),s._v(" "),e("h2",{attrs:{id:"加入新的-master"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加入新的-master"}},[s._v("#")]),s._v(" 加入新的 master")]),s._v(" "),e("p",[s._v("暂时不添加机器了（比较耗时，主要是为了演示这个功能），在 eshop-cache03 上增加一个 7007 的 redis 节点，然后把该节点加入到 redis cluster 中")]),s._v(" "),e("p",[s._v("搭建方式和配置文件的修改"),e("RouterLink",{attrs:{to:"/cache-pdp/redis/028.html#在三台机器上启动-6-个-redis-实例"}},[s._v("参考")])],1),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 添加节点到集群\n[root@eshop-cache01 ~]# redis-trib.rb add-node 192.168.99.172:7007 192.168.99.170:7001\n>>> Adding node 192.168.99.172:7007 to cluster 192.168.99.170:7001\n>>> Performing Cluster Check (using node 192.168.99.170:7001)\nS: 3807711e01cd28509d7ba9839e601058bf2a30cf 192.168.99.170:7001\n   slots: (0 slots) slave\n   replicates a174fe6613862db8985f82caac58bde91dfbd664\nM: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nM: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots:0-5460 (5461 slots) master\n   1 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nS: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots: (0 slots) slave\n   replicates 9247dfb394441619da9da5b75b62b034c3f420e5\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n>>> Send CLUSTER MEET to node 192.168.99.172:7007 to make it join the cluster.\n\n# 检查集群信息\n\n[root@eshop-cache01 ~]# redis-trib.rb check 192.168.99.170:7001\n>>> Performing Cluster Check (using node 192.168.99.170:7001)\nS: 3807711e01cd28509d7ba9839e601058bf2a30cf 192.168.99.170:7001\n   slots: (0 slots) slave\n   replicates a174fe6613862db8985f82caac58bde91dfbd664\nM: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots:10923-16383 (5461 slots) master\n   1 additional replica(s)\nM: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots:0-5460 (5461 slots) master\n   1 additional replica(s)\nM: 5d236f5ff996f0d378914b01159a8b7c5dee383d 192.168.99.172:7007\n   slots: (0 slots) master\n   0 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nS: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots: (0 slots) slave\n   replicates 9247dfb394441619da9da5b75b62b034c3f420e5\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:5461-10922 (5462 slots) master\n   1 additional replica(s)\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br")])]),e("p",[s._v("可以看到 7007 变成了一个 master，但是只有 0 个 slots ，表示此事的 7007 还不能对外服务，需要手动把执行迁移命令")]),s._v(" "),e("h2",{attrs:{id:"reshard-一些数据到新添加的-master-上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reshard-一些数据到新添加的-master-上"}},[s._v("#")]),s._v(" reshard 一些数据到新添加的 master 上")]),s._v(" "),e("p",[s._v("注：由于第一次迁移的时候输入完 done 后，就被刷屏了，记录没有保存下来，我把分配的 4096 个 slots 迁移到了 7006 上，这里再分配一次。记录下命令的反应（集群创建的时候，它会均匀分配 slots 到每个机器上的）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 任意连接一台集群内的集群即可\n[root@eshop-cache01 ~]# redis-trib.rb reshard 192.168.99.170:7001\n>>> Performing Cluster Check (using node 192.168.99.170:7001)\nS: 3807711e01cd28509d7ba9839e601058bf2a30cf 192.168.99.170:7001\n   slots: (0 slots) slave\n   replicates a174fe6613862db8985f82caac58bde91dfbd664\nM: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots:0-1364,5461-6826,10923-16383 (8192 slots) master\n   1 additional replica(s)\nM: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots:1365-5460 (4096 slots) master\n   1 additional replica(s)\nM: 5d236f5ff996f0d378914b01159a8b7c5dee383d 192.168.99.172:7007\n   slots: (0 slots) master\n   0 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nS: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots: (0 slots) slave\n   replicates 9247dfb394441619da9da5b75b62b034c3f420e5\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:6827-10922 (4096 slots) master\n   1 additional replica(s)\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n# 询问你要迁移多少个 slots 到目标机器去? 一共是 16384/4 = 4096\nHow many slots do you want to move (from 1 to 16384)? 4096\n# 要迁移到的目标机器 id，这个id就在上面的 M/S 后面这一串\nWhat is the receiving node ID? 5d236f5ff996f0d378914b01159a8b7c5dee383d\nPlease enter all the source node IDs.\n  Type 'all' to use all the nodes as source nodes for the hash slots.\n  Type 'done' once you entered all the source nodes IDs.\n# 输入被迁移的 id，这里是要把之前的 3 台上的 node 均匀的迁移 4096 到 新机器上\nSource node #1:9247dfb394441619da9da5b75b62b034c3f420e5\nSource node #2:a174fe6613862db8985f82caac58bde91dfbd664\nSource node #3:0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\n# 需要输入 done 命令完成输入源\nSource node #4:done\n... 接下来会一大串的日志信息，\nMoving slot 7850 from 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\n# 是否要继续执行集群计划\nDo you want to proceed with the proposed reshard plan (yes/no)? yes\n又是一大堆日志刷屏，完成后\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br")])]),e("blockquote",[e("p",[s._v("报错问题")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("难道他们不是均匀分配的吗？对于下面这种问题，报错后，我没有回复成功，\n只能把所有的 /etc/redis/ 和 /etc/redis-cluster/ 下的 conf 文件删除后，\n并且重启所有的 redis 后，登录上节点手动执行 flushall 和 cluster reset 后，\n才能重新创建集群，重新回复到现在这个章节的过程中来的")]),s._v(" "),e("p",[s._v("这里我怀疑只要把所有节点都执行  flushall 和 cluster reset 就可以吧集群打散。再重建")])]),s._v(" "),e("p",[s._v("报错问题：在下面这种 slots 分布下，7006 有 8192 个节点，7007 0 个，\n本来以为 redis 会自动迁移到 7007 上面去，指定了 3 个源节点，结果执行过程中报错了")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("S: 3807711e01cd28509d7ba9839e601058bf2a30cf 192.168.99.170:7001\n   slots: (0 slots) slave\n   replicates a174fe6613862db8985f82caac58bde91dfbd664\nM: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots:0-1364,5461-6826,10923-16383 (8192 slots) master\n   1 additional replica(s)\nM: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots:1365-5460 (4096 slots) master\n   1 additional replica(s)\nM: 5d236f5ff996f0d378914b01159a8b7c5dee383d 192.168.99.172:7007\n   slots: (0 slots) master\n   0 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nS: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots: (0 slots) slave\n   replicates 9247dfb394441619da9da5b75b62b034c3f420e5\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:6827-10922 (4096 slots) master\n\n[ERR] Calling MIGRATE: ERR Syntax error, try CLIENT (LIST | KILL | GETNAME | SETNAME | PAUSE | REPLY)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[s._v("再次尝试迁移，发现还是报错")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache01 ~]# redis-trib.rb reshard 192.168.99.170:7001\n>>> Performing Cluster Check (using node 192.168.99.170:7001)\nS: 3807711e01cd28509d7ba9839e601058bf2a30cf 192.168.99.170:7001\n   slots: (0 slots) slave\n   replicates a174fe6613862db8985f82caac58bde91dfbd664\nM: 9247dfb394441619da9da5b75b62b034c3f420e5 192.168.99.172:7006\n   slots:6144-6826,10923-16383 (6144 slots) master\n   1 additional replica(s)\nM: a174fe6613862db8985f82caac58bde91dfbd664 192.168.99.171:7004\n   slots:1860-5460 (3601 slots) master\n   1 additional replica(s)\nM: 5d236f5ff996f0d378914b01159a8b7c5dee383d 192.168.99.172:7007\n   slots:0-1859,5461-6143 (2543 slots) master\n   0 additional replica(s)\nS: b0d66be3b15e117696c50a781ff24a842456733d 192.168.99.170:7002\n   slots: (0 slots) slave\n   replicates 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55\nS: cb2256b653cf5b7b3f9d1478cfa2953cc334c5bf 192.168.99.172:7005\n   slots: (0 slots) slave\n   replicates 9247dfb394441619da9da5b75b62b034c3f420e5\nM: 0ff0e8ab05a8b032aeacf24e0c7fea77be3f5c55 192.168.99.171:7003\n   slots:6827-10922 (4096 slots) master\n   1 additional replica(s)\n[OK] All nodes agree about slots configuration.\n>>> Check for open slots...\n[WARNING] Node 192.168.99.171:7004 has slots in migrating state (1860).\n[WARNING] Node 192.168.99.172:7007 has slots in importing state (1860).\n[WARNING] The following slots are open: 1860\n>>> Check slots coverage...\n[OK] All 16384 slots covered.\n*** Please fix your cluster problems before resharding\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br")])]),e("p",[s._v("手动 kill 掉 7004 和 7007 后再次重启，发现还是有问题")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[ERR] Nodes don't agree about configuration!\n>>> Check for open slots...\n[WARNING] Node 192.168.99.172:7007 has slots in importing state (1860).\n[WARNING] The following slots are open: 1860\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("这个时候百度到了，使用 fix 来修复，但是没有成功，由于我把 /etc/redis-cluster/node-7007.conf 内容清空了。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis-trib.rb fix 192.168.99.172:7007\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"添加-node-作为-slave"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加-node-作为-slave"}},[s._v("#")]),s._v(" 添加 node 作为 slave")]),s._v(" "),e("p",[s._v("在 eshop-cache03 上增加一个 7008 的 redis 节点")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# redis-trib.rb add-node --slave --master-id 要挂载的 masterid ，被挂载的 slave ，随便给一个集群节点即可\n# 我这里是吧 7008 挂载到了 7001 上\nredis-trib.rb add-node --slave --master-id b49a4562f0164bbf9c8fc9c6059e09e420ee7abf 192.168.99.172:7008 192.168.99.170:7001\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"删除-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除-node"}},[s._v("#")]),s._v(" 删除 node")]),s._v(" "),e("p",[s._v("先用 resharding 将数据都移除到其他节点，确保 node 为空之后，才能执行 remove 操作")]),s._v(" "),e("p",[s._v("这里删除 7007 这个，现在集群中 4 个 master 都是 4096 个 slots")]),s._v(" "),e("p",[s._v("需要手动计算把 4096 平均分配给另外 3 个 master ，2 个分配 1365，1个分配 1366")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 手动执行 3 次，把 7007 上的 slots 分布迁移到其他 三个 master 上\nredis-trib.rb reshard 192.168.99.170:7001\n\n# 再删除 node-id，也就是协商 7007 的 id\nredis-trib.rb del-node 192.168.99.170:7001 <node-id>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("当你清空了一个 master 的 hashslot 时，redis cluster 就会自动将其 slave 挂载到其他 master 上去，这个时候就只要删除掉 master 就可以了")])])}),[],!1,null,null,null);a.default=t.exports}}]);