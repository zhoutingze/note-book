(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1296:function(_,n,v){"use strict";v.r(n);var t=v(20),i=Object(t.a)({},(function(){var _=this,n=_.$createElement,t=_._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"_004-大型电商网站的异步多级缓存构建-nginx-数据本地化动态渲染的架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_004-大型电商网站的异步多级缓存构建-nginx-数据本地化动态渲染的架构"}},[_._v("#")]),_._v(" 004. 大型电商网站的异步多级缓存构建 + nginx 数据本地化动态渲染的架构")]),_._v(" "),t("p",[t("img",{attrs:{src:v(374),alt:""}})]),_._v(" "),t("p",[_._v("大型电商网站的详情页架构一般是这样的核心思路，如上图")]),_._v(" "),t("p",[_._v("两个关键点：")]),_._v(" "),t("ol",[t("li",[_._v("缓存数据生产服务")]),_._v(" "),t("li",[_._v("nginx 上的 html 模板 + 本地缓存数据")])]),_._v(" "),t("p",[_._v("来捋一捋流程：")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("用户访问 nginx")]),_._v(" "),t("p",[_._v("会先从 nginx 的本地缓存获取数据渲染后返回，这个速度很快，因为全是内存操作。\n本地缓存数据是有时间的，比如 10 分钟")])]),_._v(" "),t("li",[t("p",[_._v("假如 nginx 本地缓存失效")]),_._v(" "),t("p",[_._v("会从 redis 中获取数据回来并缓存上")])]),_._v(" "),t("li",[t("p",[_._v("假如 redis 中的数据失效")]),_._v(" "),t("p",[_._v("会从缓存数据生产服务中获取数据并缓存上")])]),_._v(" "),t("li",[t("p",[_._v("缓存数据生产服务")]),_._v(" "),t("p",[_._v("本地也有一个缓存，比如用的是 ehcache\n他们通过队列监听商品修改等事件，让自己的缓存数据及时更新")])]),_._v(" "),t("li",[t("p",[_._v("其他服务")]),_._v(" "),t("p",[_._v("商品、店铺等服务能获取到商品的修改事件等，及时往 mq 中发出商品的修改事件，\n并提供商品原始数据的查询。这里可能是直接从 mysql 库中查询的")])])]),_._v(" "),t("p",[_._v("这样一来，在缓存上其实就挡掉了很多数据，一层一层的挡并发")])])}),[],!1,null,null,null);n.default=i.exports},374:function(_,n,v){_.exports=v.p+"assets/img/markdown-img-paste-20190317110607139.7a0248b1.png"}}]);