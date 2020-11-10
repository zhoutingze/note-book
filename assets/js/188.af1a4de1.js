(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1302:function(s,n,a){"use strict";a.r(n);var t=a(20),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_038-在-linux-虚拟机中安装部署-mysql-数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_038-在-linux-虚拟机中安装部署-mysql-数据库"}},[s._v("#")]),s._v(" 038. 在 linux 虚拟机中安装部署 MySQL 数据库")]),s._v(" "),a("p",[s._v("后面写的各种代码，还是要基于 mysql 去做一些开发的，因为缓存的底层的数据存储肯定是数据库")]),s._v(" "),a("p",[s._v("mysql 部署在 eshop-cache04 机器上。")]),s._v(" "),a("p",[s._v("使用 yum 方式安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装的版本是 Server version: 5.1.73 Source distribution")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y mysql-server\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 mysql")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld start\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置开机启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chkconfig")]),s._v(" mysqld on\n\nmysql\nmysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show databases\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装客户端，该软件的作用是什么？因为不安装也能使用 mysql 进入客户端")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y mysql-connector-java\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("关于密码的修改，在启动日志中有")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@eshop-cache04 local]# service mysqld start\nInitializing MySQL database:  Installing MySQL system tables...\nOK\nFilling help tables...\nOK\n\nTo start mysqld at boot time you have to copy\nsupport-files/mysql.server to the right place for your system\n\nPLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !\nTo do so, start the server, then issue the following commands:\n\n/usr/bin/mysqladmin -u root password 'new-password'\n/usr/bin/mysqladmin -u root -h eshop-cache04 password 'new-password'\n\nAlternatively you can run:\n/usr/bin/mysql_secure_installation\n\nwhich will also give you the option of removing the test\ndatabases and anonymous user created by default.  This is\nstrongly recommended for production servers.\n\nSee the manual for more instructions.\n\nYou can start the MySQL daemon with:\ncd /usr ; /usr/bin/mysqld_safe &\n\nYou can test the MySQL daemon with mysql-test-run.pl\ncd /usr/mysql-test ; perl mysql-test-run.pl\n\nPlease report any problems with the /usr/bin/mysqlbug script!\n\n                                                           [  OK  ]\nStarting mysqld:                                           [  OK  ]\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);