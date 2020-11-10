(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{1478:function(t,a,s){"use strict";s.r(a);var e=s(20),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_107-hystrix-的-metric-统计相关的各种高阶配置讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_107-hystrix-的-metric-统计相关的各种高阶配置讲解"}},[t._v("#")]),t._v(" 107. hystrix 的 metric 统计相关的各种高阶配置讲解")]),t._v(" "),s("p",[t._v("metric：度量标准")]),t._v(" "),s("h2",{attrs:{id:"为什么需要监控与报警"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要监控与报警"}},[t._v("#")]),t._v(" 为什么需要监控与报警？")]),t._v(" "),s("p",[t._v("HystrixCommand 执行的时候，会生成一些执行耗时等方面的统计信息。\n这些信息对于系统的运维来说，是很有帮助的，因为我们通过这些统计信息可以看到整个系统是怎么运行的。\nhystrix 对每个 command key 都会提供一份 metric，而且是秒级统计粒度的。")]),t._v(" "),s("p",[t._v("这些统计信息，无论是单独看，还是聚合起来看，都是很有用的。\n如果将一个请求中的多个 command 的统计信息拿出来单独查看，包括耗时的统计，对 debug 系统是很有帮助的。\n聚合起来的 metric 对于系统层面的行为来说，是很有帮助的，很适合做报警或者报表。\nhystrix dashboard 就很适合。")]),t._v(" "),s("h2",{attrs:{id:"hystrix-的事件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hystrix-的事件类型"}},[t._v("#")]),t._v(" hystrix 的事件类型")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/Netflix/Hystrix/wiki/Metrics-and-Monitoring",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网直达"),s("OutboundLink")],1),t._v("\n很详细的 metric 讲解，还有他的流使用示例")])]),t._v(" "),s("p",[t._v("对于 hystrix command 来说只会返回一个值，execute 只有一个 event type，fallback 也只有一个event type，那么返回一个 SUCCESS 就代表着命令执行的结束")]),t._v(" "),s("p",[t._v("对于 hystrix observable command 来说，多个值可能被返回，所以：")]),t._v(" "),s("ul",[s("li",[t._v("emit event 代表一个 value 被返回")]),t._v(" "),s("li",[t._v("success 代表成功")]),t._v(" "),s("li",[t._v("failure 代表异常")])]),t._v(" "),s("h3",{attrs:{id:"execute-event-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-event-type"}},[t._v("#")]),t._v(" execute event type")]),t._v(" "),s("ul",[s("li",[t._v("EMIT\t\t\t\t\tobservable command 返回一个 value")]),t._v(" "),s("li",[t._v("SUCCESS \t\t\t\t完成执行，并且没有报错")]),t._v(" "),s("li",[t._v("FAILURE\t\t\t\t\t执行时抛出了一个异常，会触发 fallback")]),t._v(" "),s("li",[t._v("TIMEOUT\t\t\t\t\t开始执行了，但是在指定时间内没有完成执行，会触发 fallback")]),t._v(" "),s("li",[t._v("BAD_REQUEST\t\t\t\t执行的时候抛出了一个 HystrixBadRequestException")]),t._v(" "),s("li",[t._v("SHORT_CIRCUITED\t\t\t短路器打开了，触发 fallback")]),t._v(" "),s("li",[t._v("THREAD_POOL_REJECTED\t线程池的容量满了，被 reject，触发 fallback")]),t._v(" "),s("li",[t._v("SEMAPHORE_REJECTED\t\t信号量的容量满了，被 reject，触发 fallback")])]),t._v(" "),s("h3",{attrs:{id:"fallback-event-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallback-event-type"}},[t._v("#")]),t._v(" fallback event type")]),t._v(" "),s("ul",[s("li",[t._v("FALLBACK_EMIT\t\t\tobservable command，fallback value 被返回了")]),t._v(" "),s("li",[t._v("FALLBACK_SUCCESS\t\tfallback 逻辑执行没有报错")]),t._v(" "),s("li",[t._v("FALLBACK_FAILURE\t\tfallback 逻辑抛出了异常，会报错")]),t._v(" "),s("li",[t._v("FALLBACK_REJECTION\t\tfallback 的信号量容量满了，fallback 不执行，报错")]),t._v(" "),s("li",[t._v("FALLBACK_MISSING\t\tfallback 没有实现，会报错")])]),t._v(" "),s("h3",{attrs:{id:"其他的-event-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他的-event-type"}},[t._v("#")]),t._v(" 其他的 event type")]),t._v(" "),s("ul",[s("li",[t._v("EXCEPTION_THROWN\t\tcommand 生命自周期是否抛出了异常")]),t._v(" "),s("li",[t._v("RESPONSE_FROM_CACHE\t\tcommand 是否在 cache 中查找到了结果")]),t._v(" "),s("li",[t._v("COLLAPSED\t\t\t\tcommand 是否是一个合并 batch 中的一个")])]),t._v(" "),s("h3",{attrs:{id:"thread-pool-event-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thread-pool-event-type"}},[t._v("#")]),t._v(" thread pool event type")]),t._v(" "),s("ul",[s("li",[t._v("EXECUTED\t\t\t\t线程池有空间，允许 command 去执行了")]),t._v(" "),s("li",[t._v("REJECTED \t\t\t\t线程池没有空间，不允许 command 执行，reject 掉了")])]),t._v(" "),s("h3",{attrs:{id:"collapser-event-type"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#collapser-event-type"}},[t._v("#")]),t._v(" collapser event type")]),t._v(" "),s("ul",[s("li",[t._v("BATCH_EXECUTED\t\t\tcollapser 合并了一个 batch，并且执行了其中的 command")]),t._v(" "),s("li",[t._v("ADDED_TO_BATCH\t\t\tcommand 加入了一个 collapser batch")]),t._v(" "),s("li",[t._v("RESPONSE_FROM_CACHE\t\t没有加入 batch，而是直接取了 request cache 中的数据")])]),t._v(" "),s("h2",{attrs:{id:"metric-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metric-storage"}},[t._v("#")]),t._v(" metric storage")]),t._v(" "),s("p",[t._v("metric 被生成之后，就会按照一段时间来存储，存储了一段时间的数据才会推送到其他系统中，\n比如 hystrix dashboard；另外一种方式，就是每次生成 metric 就实时推送 metric 流到其他地方，\n但是这样的话，会给系统带来很大的压力")]),t._v(" "),s("p",[t._v("hystrix 的方式是将 metric 写入一个内存中的数据结构中，在一段时间之后就可以查询到；\nhystrix 1.5x 之后，采取的是为每个 command key 都生成一个 start event 和 completion event 流，\n而且可以订阅这个流。每个 thread pool key 也是一样的，包括每个 collapser key 也是一样的。")]),t._v(" "),s("p",[t._v("每个 command 的 event 是发送给一个线程安全的 RxJava 中的 rx.Subject，因为是线程安全的，所以不需要进行线程同步")]),t._v(" "),s("p",[t._v("因此每个 command 级别的，threadpool 级别的，每个 collapser 级别的，event 都会发送到对应的 RxJava的 rx.Subject 对象中。这些 rx.Subject 对象接着就会被暴露出 Observable 接口，可以被订阅。")]),t._v(" "),s("h2",{attrs:{id:"metric-统计相关的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metric-统计相关的配置"}},[t._v("#")]),t._v(" metric 统计相关的配置")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/Netflix/Hystrix/wiki/Configuration#CommandMetrics",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网直达"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"metrics-rollingstats-timeinmilliseconds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-rollingstats-timeinmilliseconds"}},[t._v("#")]),t._v(" metrics.rollingStats.timeInMilliseconds")]),t._v(" "),s("p",[t._v("设置统计的 rolling window，单位是毫秒，hystrix 只会维持这段时间内的 metric 供短路器统计使用")]),t._v(" "),s("p",[t._v("这个属性是不允许热修改的，默认值是 10000，就是 10 秒钟")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMetricsRollingStatisticalWindowInMilliseconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"metrics-rollingstats-numbuckets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-rollingstats-numbuckets"}},[t._v("#")]),t._v(" metrics.rollingStats.numBuckets")]),t._v(" "),s("p",[t._v("该属性设置每个滑动窗口被拆分成多少个 bucket，而且滑动窗口对这个参数必须可以整除，同样不允许热修改")]),t._v(" "),s("p",[t._v("默认值是 10，也就是说，每秒钟是一个 bucket")]),t._v(" "),s("p",[t._v("随着时间的滚动，比如又过了一秒钟，那么最久的一秒钟的 bucket 就会被丢弃，然后新的一秒的 bucket 会被创建")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMetricsRollingStatisticalWindowBuckets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"metrics-rollingpercentile-enabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-rollingpercentile-enabled"}},[t._v("#")]),t._v(" metrics.rollingPercentile.enabled")]),t._v(" "),s("p",[t._v("控制是否追踪请求耗时，以及通过百分比方式来统计，默认是 true")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMetricsRollingPercentileEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"metrics-rollingpercentile-timeinmilliseconds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-rollingpercentile-timeinmilliseconds"}},[t._v("#")]),t._v(" metrics.rollingPercentile.timeInMilliseconds")]),t._v(" "),s("p",[t._v("设置 rolling window 被持久化保存的时间，这样才能计算一些请求耗时的百分比，默认是 60000 = 60s，不允许热修改")]),t._v(" "),s("p",[t._v("相当于是一个大的 rolling window，专门用于计算请求执行耗时的百分比")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMetricsRollingPercentileWindowInMilliseconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"metrics-rollingpercentile-numbuckets"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-rollingpercentile-numbuckets"}},[t._v("#")]),t._v(" metrics.rollingPercentile.numBuckets")]),t._v(" "),s("p",[t._v("设置 rolling percentile window 被拆分成的 bucket 数量，上面那个参数除以这个参数必须能够整除，不允许热修改")]),t._v(" "),s("p",[t._v("默认值是 6，也就是每 10s 被拆分成一个 bucket")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMetricsRollingPercentileWindowBuckets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"metrics-rollingpercentile-bucketsize"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-rollingpercentile-bucketsize"}},[t._v("#")]),t._v(" metrics.rollingPercentile.bucketSize")]),t._v(" "),s("p",[t._v("设置每个 bucket 的请求执行次数被保存的最大数量，如果在一个 bucket 内，执行次数超过了这个值，那么就会重新覆盖从 bucket 的开始再写")]),t._v(" "),s("p",[t._v("举例来说，如果 bucket size 设置为 100，而且每个 bucket 代表一个 10 秒钟的窗口，\n但是在这个 bucket 内发生了 500 次请求执行，那么这个 bucket 内仅仅会保留 100 次执行")]),t._v(" "),s("p",[t._v("如果调大这个参数，就会提升需要耗费的内存，来存储相关的统计值，不允许热修改")]),t._v(" "),s("p",[t._v("默认值是 100")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMetricsRollingPercentileBucketSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"metrics-healthsnapshot-intervalinmilliseconds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics-healthsnapshot-intervalinmilliseconds"}},[t._v("#")]),t._v(" metrics.healthSnapshot.intervalInMilliseconds")]),t._v(" "),s("p",[t._v("控制成功和失败的百分比计算，与影响短路器之间的等待时间，默认值是 500 毫秒")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HystrixCommandProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withMetricsHealthSnapshotIntervalInMilliseconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("一般来说这些配置使用默认即可")])])])}),[],!1,null,null,null);a.default=n.exports}}]);