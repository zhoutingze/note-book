(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1521:function(s,a,e){"use strict";e.r(a);var t=e(20),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_025-对项目中的哨兵节点进行管理以及高可用-redis-集群的容灾演练"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_025-对项目中的哨兵节点进行管理以及高可用-redis-集群的容灾演练"}},[s._v("#")]),s._v(" 025. 对项目中的哨兵节点进行管理以及高可用 redis 集群的容灾演练")]),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#redis-slave-的永久下线"}},[s._v("redis slave 的永久下线")])]),e("li",[e("a",{attrs:{href:"#slave-切换为-master-的优先级"}},[s._v("slave 切换为 Master 的优先级")])]),e("li",[e("a",{attrs:{href:"#基于哨兵集群架构下的安全认证"}},[s._v("基于哨兵集群架构下的安全认证")])]),e("li",[e("a",{attrs:{href:"#容灾演练"}},[s._v("容灾演练")])]),e("li",[e("a",{attrs:{href:"#哨兵的生产环境部署"}},[s._v("哨兵的生产环境部署")])])])]),e("p"),s._v(" "),e("h1",{attrs:{id:"哨兵节点的增加和删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哨兵节点的增加和删除"}},[s._v("#")]),s._v(" 哨兵节点的增加和删除")]),s._v(" "),e("p",[s._v("首先增加 sentinal 有自动发现功能，发现之后就把该哨兵信息添加到自己信息中了，这个可以通过一个实验来证明：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("上一章启动了 3 台 sentinal，")])]),s._v(" "),e("li",[e("p",[s._v("在机器重启之后，只启动其中的一台机器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache03 ~]# redis-sentinel /etc/sentinal/5000.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("连接上查看 sentinals 信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("redis-cli -p 5000 -h eshop-cache03\n\neshop-cache03:5000> sentinel sentinels mymaster\n会发现出现了 01 和 02 的信息，但是此时 01 和 02 并没有启动\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("执行 "),e("code",[s._v("SENTINEL RESET *")]),s._v(" 命令")]),s._v(" "),e("p",[s._v("执行之后，再次查看 sentinel sentinels mymaster 信息，会发现变成空的了，消失了")])])]),s._v(" "),e("p",[s._v("删除 sentinal 的步骤")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("停止 sentinal 进程")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("SENTINEL RESET *")]),s._v(" （重要）")]),s._v(" "),e("p",[s._v("在所有存活的 sentinal 上执行，清理所有的 master 状态")])]),s._v(" "),e("li",[e("p",[s._v("SENTINEL MASTER mastername")]),s._v(" "),e("p",[s._v("在所有存活的 sentinal 上执行，查看自己对 mastername 的集群信息是否与其他 sentinal 一致")])])]),s._v(" "),e("h2",{attrs:{id:"redis-slave-的永久下线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-slave-的永久下线"}},[s._v("#")]),s._v(" redis slave 的永久下线")]),s._v(" "),e("p",[s._v("让 master 摘除某个已经下线的 slave：SENTINEL RESET mastername，在所有的哨兵上面执行")]),s._v(" "),e("p",[s._v("其实还是重置检查一下的有意思")]),s._v(" "),e("h2",{attrs:{id:"slave-切换为-master-的优先级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slave-切换为-master-的优先级"}},[s._v("#")]),s._v(" slave 切换为 Master 的优先级")]),s._v(" "),e("p",[s._v("slave->master 选举优先级：slave-priority，值越小优先级越高")]),s._v(" "),e("h2",{attrs:{id:"基于哨兵集群架构下的安全认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于哨兵集群架构下的安全认证"}},[s._v("#")]),s._v(" 基于哨兵集群架构下的安全认证")]),s._v(" "),e("p",[s._v("每个 slave 都有可能切换成 master，所以每个实例都要配置两个指令")]),s._v(" "),e("p",[s._v("master 上启用安全认证，requirepass\nmaster 连接口令，masterauth")]),s._v(" "),e("p",[s._v("在 sentinal 的配置文件里面配置密码： "),e("code",[s._v("sentinel auth-pass <master-group-name> <pass>")])]),s._v(" "),e("h2",{attrs:{id:"容灾演练"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容灾演练"}},[s._v("#")]),s._v(" 容灾演练")]),s._v(" "),e("p",[s._v("通过哨兵看一下当前的 master："),e("code",[s._v("SENTINEL get-master-addr-by-name mymaster")])]),s._v(" "),e("p",[s._v("这里的 master 在 02 上面，直接 kill 掉 master；查看 哨兵的日志变化")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache02 ~]# ps -ef | grep redis\nroot       960     1  2 01:00 ?        00:00:42 /usr/local/bin/redis-server 127.0.0.1:6379      \nroot      1049  1009  3 01:21 pts/0    00:00:26 redis-sentinel eshop-cache02:5000 [sentinel]\nroot      1068  1054  0 01:33 pts/1    00:00:00 grep redis\n[root@eshop-cache02 ~]# kill 960\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("等待一会，该配置时间 "),e("code",[s._v("sentinel down-after-milliseconds mymaster 30000")]),s._v(" 30 秒后，\n可以看到哨兵日志发生了变化")]),s._v(" "),e("p",[s._v("注意：下面的日志是在切换 master 的哨兵上看到的。非切换的哨兵日志上不会有这么多信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1037:X 24 Mar 01:55:05.525 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.\n1037:X 24 Mar 01:55:05.525 # Sentinel ID is 507b3bc6e379011b990bda44b73221b8f7b305c1\n1037:X 24 Mar 01:55:05.525 # +monitor master mymaster 192.168.99.171 6379 quorum 2\n1037:X 24 Mar 01:55:15.551 * +convert-to-slave slave 192.168.99.170:6379 192.168.99.170 6379 @ mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:07.924 # +sdown master mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.013 # +odown master mymaster 192.168.99.171 6379 #quorum 2/2\n1037:X 24 Mar 01:57:08.013 # +new-epoch 3\n1037:X 24 Mar 01:57:08.013 # +try-failover master mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.027 # +vote-for-leader 507b3bc6e379011b990bda44b73221b8f7b305c1 3\n1037:X 24 Mar 01:57:08.138 # a1cd62295346683bcd8f8b388ac64e83897a13dd voted for a1cd62295346683bcd8f8b388ac64e83897a13dd 3\n1037:X 24 Mar 01:57:08.152 # d7a9812a3f905d07df46986f1b21388a16df39b4 voted for 507b3bc6e379011b990bda44b73221b8f7b305c1 3\n1037:X 24 Mar 01:57:08.207 # +elected-leader master mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.207 # +failover-state-select-slave master mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.291 # +selected-slave slave 192.168.99.170:6379 192.168.99.170 6379 @ mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.291 * +failover-state-send-slaveof-noone slave 192.168.99.170:6379 192.168.99.170 6379 @ mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.351 * +failover-state-wait-promotion slave 192.168.99.170:6379 192.168.99.170 6379 @ mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.947 # +promoted-slave slave 192.168.99.170:6379 192.168.99.170 6379 @ mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.947 # +failover-state-reconf-slaves master mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.979 # +failover-end master mymaster 192.168.99.171 6379\n1037:X 24 Mar 01:57:08.982 # +switch-master mymaster 192.168.99.171 6379 192.168.99.170 6379\n1037:X 24 Mar 01:57:08.983 * +slave slave 192.168.99.171:6379 192.168.99.171 6379 @ mymaster 192.168.99.170 6379\n1037:X 24 Mar 01:57:39.038 # +sdown slave 192.168.99.171:6379 192.168.99.171 6379 @ mymaster 192.168.99.170 6379\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("ol",[e("li",[s._v("三个哨兵进程都认为 master 是 sdown 了")]),s._v(" "),e("li",[s._v("超过 quorum 指定的哨兵进程都认为 sdown 之后，就变为 odown")]),s._v(" "),e("li",[s._v("哨兵 1 是被选举为要执行后续的主备切换的那个哨兵")]),s._v(" "),e("li",[s._v("哨兵 1 去新的 master（slave）获取了一个新的 config version")]),s._v(" "),e("li",[s._v("尝试执行 failover")]),s._v(" "),e("li",[s._v("投票选举出一个 slave 区切换成 master，每个哨兵都会执行一次投票")]),s._v(" "),e("li",[s._v("让 salve，slaveof noone，不让它去做任何节点的 slave 了; 把 slave 提拔成 master; 旧的 master 认为不再是 master 了")]),s._v(" "),e("li",[s._v("哨兵就自动认为之前的 171:6379 变成了 slave 了，190:6379 变成了 master 了")]),s._v(" "),e("li",[s._v("哨兵去探查了一下 171:6379 这个 salve 的状态，认为它 sdown 了")])]),s._v(" "),e("p",[s._v("此时再查看 /etc/sentinal/5000.conf 中的配置文件的时候，会发现一些配置跟着改变了，比如")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 最开始我们配置的是 hostname，这里被更新成了 ip\nsentinel monitor mymaster 192.168.99.170 6379 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("将旧的 master 重新启动，查看变化")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@eshop-cache02 ~]# /etc/init.d/redis_6379 start\n/var/run/redis_6379.pid exists, process is already running or crashed\n[root@eshop-cache02 ~]# rm -rf /var/run/redis_6379.pid\n[root@eshop-cache02 ~]# /etc/init.d/redis_6379 start\nStarting Redis server...\n[root@eshop-cache02 ~]# redis-cli\n127.0.0.1:6379> info replication\n# Replication\nrole:slave      // 这里，重启之后变成了 slave\nmaster_host:192.168.99.170\nmaster_port:6379\nmaster_link_status:up\nmaster_last_io_seconds_ago:0\nmaster_sync_in_progress:0\nslave_repl_offset:1160\nslave_priority:100\nslave_read_only:1\nconnected_slaves:0\nmaster_repl_offset:0\nrepl_backlog_active:0\nrepl_backlog_size:1048576\nrepl_backlog_first_byte_offset:0\nrepl_backlog_histlen:0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("p",[s._v("看看之前执行故障转移的哨兵日志")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# sdown 状态变成了减号\n1037:X 24 Mar 02:09:43.363 # -sdown slave 192.168.99.171:6379 192.168.99.171 6379 @ mymaster 192.168.99.170 6379\n# 并且转换成了 slave\n1037:X 24 Mar 02:09:53.373 * +convert-to-slave slave 192.168.99.171:6379 192.168.99.171 6379 @ mymaster 192.168.99.170 6379\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("小结：")]),s._v(" "),e("ol",[e("li",[s._v("手动杀掉master")]),s._v(" "),e("li",[s._v("哨兵能否执行主备切换，将 slave 切换为 master")]),s._v(" "),e("li",[s._v("哨兵完成主备切换后，新的 master 能否使用")]),s._v(" "),e("li",[s._v("故障恢复，将旧的 master 重新启动")]),s._v(" "),e("li",[s._v("哨兵能否自动将旧的 master 变为 slave，挂接到新的 master 上面去，而且也是可以使用的")])]),s._v(" "),e("h2",{attrs:{id:"哨兵的生产环境部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#哨兵的生产环境部署"}},[s._v("#")]),s._v(" 哨兵的生产环境部署")]),s._v(" "),e("p",[s._v("在 /etc/sentinal/5000.conf 中增加两个配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 后台启动\ndaemonize yes\n# 把日志打印到指定位置\nlogfile /var/log/sentinal/5000/sentinal.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("记得要把目录创建好")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /var/log/sentinal/5000\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);