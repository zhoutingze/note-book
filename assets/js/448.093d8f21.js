(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{1755:function(t,s,e){"use strict";e.r(s);var a=e(20),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"在服务器上搭建-git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在服务器上搭建-git"}},[t._v("#")]),t._v(" 在服务器上搭建 Git")]),t._v(" "),e("p",[t._v("现在我们将讨论如何在你自己的服务器上搭建 Git 服务来运行这些协议。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("这里我们将要演示在 Linux 服务器上进行一次基本且简化的安装所需的命令与步骤，当然在 Mac 或 Windows 服务器上同样可以运行这些服务。 事实上，在你的计算机基础架构中建立一个生产环境服务器，将不可避免的使用到不同的安全措施与操作系统工具。但是，希望你能从本节中获得一些必要的知识。")])]),t._v(" "),e("p",[t._v("在开始架设 Git 服务器前，需要把现有仓库导出为裸仓库——即一个不包含当前工作目录的仓库。 这通常是很简单的。 为了通过克隆你的仓库来创建一个新的裸仓库，你需要在克隆命令后加上 "),e("code",[t._v("–bare")]),t._v(" 选项 按照惯例，裸仓库目录名以 "),e("code",[t._v(".git")]),t._v(" 结尾，就像这样：")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --bare my_project my_project.git\nCloning into bare repository "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_project.git'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\ndone.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("现在，你的 my_project.git 目录中应该有 Git 目录的副本了。")]),t._v(" "),e("p",[t._v("整体上效果大致相当于")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cp -Rf my_project/.git my_project.git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("虽然在配置文件中有若干不同，但是对于你的目的来说，这两种方式都是一样的。 它只取出 Git 仓库自身，不要工作目录，然后特别为它单独创建一个目录。")]),t._v(" "),e("h2",{attrs:{id:"把裸仓库放到服务器上"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#把裸仓库放到服务器上"}},[t._v("#")]),t._v(" 把裸仓库放到服务器上")]),t._v(" "),e("p",[t._v("既然你有了裸仓库的副本，剩下要做的就是 "),e("strong",[t._v("把裸仓库放到服务器上并设置你的协议")]),t._v("。 假设一个域名为"),e("code",[t._v("git.example.com")]),t._v(" 的服务器已经架设好，并可以通过 SSH 连接，你想把所有的 Git 仓库放在 "),e("code",[t._v("/opt/git")]),t._v(" 目录下。 假设服务器上存在 "),e("code",[t._v("/opt/git/")]),t._v(" 目录，你可以通过以下命令复制你的裸仓库来创建一个新仓库：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ scp -r my_project.git user@git.example.com:/opt/git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("此时，其他通过 SSH 连接这台服务器并对 "),e("code",[t._v("/opt/git")]),t._v(" 目录拥有可读权限的使用者，通过运行以下命令就可以克隆你的仓库。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ git clone user@git.example.com:/opt/git/my_project.git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("如果一个用户，通过使用 SSH 连接到一个服务器，并且其对 "),e("code",[t._v("/opt/git/my_project.git")]),t._v(" 目录拥有可写权限，那么他将自动拥有推送权限。")]),t._v(" "),e("p",[t._v("如果到该项目目录中运行 "),e("code",[t._v("git init")]),t._v(" 命令，并加上 "),e("code",[t._v("–shared")]),t._v(" 选项，那么 Git 会自动修改该仓库目录的组权限为可写。")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" user@git.example.com\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/git/my_project.git\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init --bare --shared\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --bare 初始化仓库时不会创建工作目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --shared：自动修改该仓库目录的组权限为可写")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("由此可见，根据现有的 Git 仓库创建一个裸仓库，然后把它放上你和协作者都有 SSH 访问权的服务器是多么容易。 现在你们已经准备好在同一项目上展开合作了。")]),t._v(" "),e("p",[t._v("值得注意的是，这的确是架设一个几个人拥有连接权的 Git 服务的全部——只要在服务器上加入可以用 SSH 登录的帐号，然后把裸仓库放在大家都有读写权限的地方。 你已经准备好了一切，无需更多。")]),t._v(" "),e("p",[t._v("下面的几节中，你会了解如何扩展到更复杂的设定。 这些内容包含如何避免为每一个用户建立一个账户，给仓库添加公共读取权限，架设网页界面等等。 然而，请记住这一点，如果只是和几个人在一个私有项目上合作的话，"),e("em",[t._v("仅仅")]),t._v(" 是一个 SSH 服务器和 "),e("strong",[t._v("裸仓库")]),t._v(" 就足够了。")]),t._v(" "),e("h2",{attrs:{id:"小型安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小型安装"}},[t._v("#")]),t._v(" 小型安装")]),t._v(" "),e("p",[t._v("如果设备较少或者你只想在小型开发团队里尝试 Git ，那么一切都很简单。 架设 Git 服务最复杂的地方在于用户管理。 如果需要仓库对特定的用户可读，而给另一部分用户读写权限，那么访问和许可安排就会比较困难。")]),t._v(" "),e("h2",{attrs:{id:"ssh-连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh-连接"}},[t._v("#")]),t._v(" SSH 连接")]),t._v(" "),e("p",[t._v("如果你有一台所有开发者都可以用 SSH 连接的服务器，架设你的第一个仓库就十分简单了，因为你几乎什么都不用做（正如我们上一节所说的）。 如果你想在你的仓库上设置更复杂的访问控制权限，只要使用服务器操作系统的普通的文件系统权限就行了。")]),t._v(" "),e("p",[t._v("如果需要团队里的每个人都对仓库有写权限，又不能给每个人在服务器上建立账户，那么提供 SSH 连接就是唯一的选择了。 我们假设用来共享仓库的服务器已经安装了 SSH 服务，而且你通过它访问服务器。")]),t._v(" "),e("p",[t._v("有几个方法可以使你给团队每个成员提供访问权。 第一个就是给团队里的每个人创建账号，这种方法很直接但也很麻烦。 或许你不会想要为每个人运行一次 adduser 并且设置临时密码。")]),t._v(" "),e("p",[t._v("第二个办法是在主机上建立一个 "),e("em",[t._v("git")]),t._v(" 账户，让每个需要写权限的人发送一个 SSH 公钥，然后将其加入 git 账户的 "),e("code",[t._v("~/.ssh/authorized_keys")]),t._v(" 文件。 这样一来，所有人都将通过 "),e("em",[t._v("git")]),t._v(" 账户访问主机。 这一点也不会影响提交的数据——访问主机用的身份不会影响提交对象的提交者信息。")]),t._v(" "),e("p",[t._v("另一个办法是让 SSH 服务器通过某个 LDAP 服务，或者其他已经设定好的集中授权机制，来进行授权。 只要每个用户可以获得主机的 shell 访问权限，任何 SSH 授权机制你都可视为是有效的。")])])}),[],!1,null,null,null);s.default=n.exports}}]);