(window.webpackJsonp=window.webpackJsonp||[]).push([[463],{1333:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"重写历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重写历史"}},[s._v("#")]),s._v(" 重写历史")]),s._v(" "),t("p",[s._v("许多时候，在使用 Git 时，"),t("strong",[s._v("可能会因为某些原因想要修正提交历史")]),s._v("。 Git 很棒的一点是它 "),t("strong",[s._v("允许你在最后时刻做决定")]),s._v("。 你可以在  "),t("strong",[s._v("将暂存区内容提交前决定哪些文件进入提交")]),s._v("，"),t("strong",[s._v("可以通过 stash 命令来决定不与某些内容工作")]),s._v("，也 "),t("strong",[s._v("可以重写已经发生的提交就像它们以另一种方式发生的一样")]),s._v("。 这 "),t("strong",[s._v("可能涉及改变提交的顺序")]),s._v("，"),t("strong",[s._v("改变提交中的信息")]),s._v(" 或  "),t("strong",[s._v("修改文件")]),s._v("，"),t("strong",[s._v("将提交压缩或是拆分")]),s._v("，或 "),t("strong",[s._v("完全地移除提交")]),s._v(" –  "),t("strong",[s._v("在将你的工作成果与他人共享之前")]),s._v("。")]),s._v(" "),t("p",[s._v("在本节中，你可以学到如何完成这些非常有用的工作，这样在与他人分享你的工作成果时你的提交历史将如你所愿地展示出来。")]),s._v(" "),t("h2",{attrs:{id:"修改最后一次提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改最后一次提交"}},[s._v("#")]),s._v(" 修改最后一次提交")]),s._v(" "),t("p",[s._v("修改你 "),t("strong",[s._v("最近一次提交可能是所有修改历史提交的操作中最常见的一个")]),s._v("。 对于你的最近一次提交，你往往想做两件事情："),t("strong",[s._v("修改提交信息")]),s._v("，或者 "),t("strong",[s._v("修改你添加、修改和移除的文件的快照")]),s._v("。")]),s._v(" "),t("p",[s._v("如果，你 "),t("strong",[s._v("只是想修改最近一次提交的提交信息")]),s._v("，那么很简单：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这会 "),t("strong",[s._v("把你带入文本编辑器")]),s._v("，里面包含了你最近一条提交信息，供你修改。 当 "),t("strong",[s._v("保存并关闭编辑器后，编辑器将会用你输入的内容替换最近一条提交信息")]),s._v(" 。")]),s._v(" "),t("p",[s._v("如果你 "),t("strong",[s._v("已经完成提交")]),s._v("，又因为之前 "),t("strong",[s._v("提交时忘记添加一个新创建的文件")]),s._v("，"),t("strong",[s._v("想通过添加或修改文件来更改提交的快照")]),s._v("，也可以通过类似的操作来完成。 通过修改文件然后运行 "),t("code",[s._v("git add")]),s._v("  或  "),t("code",[s._v("git rm")]),s._v(" 一个已追踪的文件，随后运行 "),t("code",[s._v("git commit –amend")]),s._v("  拿走当前的暂存区域并使其做为新提交的快照。")]),s._v(" "),t("p",[t("strong",[s._v("使用这个技巧的时候需要小心")]),s._v("，因为 "),t("strong",[s._v("修正会改变提交的 SHA-1 校验和")]),s._v("。 它 "),t("strong",[s._v("类似于一个小的变基")]),s._v(" – "),t("strong",[s._v("如果已经推送了最后一次提交就不要修正它")])]),s._v(" "),t("h2",{attrs:{id:"修改多个提交信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改多个提交信息"}},[s._v("#")]),s._v(" 修改多个提交信息")]),s._v(" "),t("p",[s._v("为了修改在提交历史中 "),t("strong",[s._v("较远的提交")]),s._v("，必须使用更复杂的工具。 "),t("strong",[s._v("Git 没有一个改变历史工具")]),s._v("，但是可以 "),t("strong",[s._v("使用变基工具来变基一系列提交")]),s._v("，基于它们原来的 HEAD 而不是将其移动到另一个新的上面。 通过交互式变基工具，可以在任何想要修改的提交后停止，然后修改信息、添加文件或做任何想做的事情。 可以通过给 "),t("code",[s._v("git rebase")]),s._v("  增加  "),t("code",[s._v("-i")]),s._v("  选项来交互式地运行变基。 必须指定想要重写多久远的历史，这可以通过告诉命令将要变基到的提交来做到。")]),s._v(" "),t("p",[s._v("例如，如果想要修改最近三次提交信息，或者那组提交中的任意一个提交信息，将想要修改的最近一次提交的父提交作为参数传递给  "),t("code",[s._v("git rebase -i")]),s._v(" 命令，即 "),t("code",[s._v("HEAD~2^ 或 HEAD~3")]),s._v(" 。 记住 "),t("code",[s._v("~3")]),s._v("  可能比较容易，因为你正尝试修改最后三次提交；但是注意实际上指定了以前的四次提交，即想要修改提交的父提交：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 还可以指定 commit id 前几位，比如")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\n7831d6882263aaa5d6236c9f0d1347075563d506 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 将 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 次提交压缩成一个提交\n9d0468fa3501b1c212254c47342bce1e2f4de0ca ruby_client\n696566822ba14ffc11cd1b8939100a73d1af4f9d update  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面编辑写的这个提交的 id")]),s._v("\n41bb89cba2032d3bb3278c3ec80aa412dbec255b init\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6965668")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 那么将要改变的将是 这个 id 前面的 7831d6 和 9d0468 提交记录")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("再次记住 "),t("strong",[s._v("这是一个变基命令")]),s._v(" – 在 "),t("code",[s._v("HEAD~3..HEAD")]),s._v("  范围内的每一个提交都会被重写，无论你是否修改信息。 "),t("strong",[s._v("不要涉及任何已经推送到中央服务器的提交")]),s._v("  –  这样做会产生一次变更的两个版本，因而使他人困惑。")]),s._v(" "),t("p",[s._v("运行这个命令会在文本编辑器上给你一个提交的列表，看起来像下面这样：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('pick f7f3f6d changed my name a bit\npick 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n\n# Rebase 710f0f8..a5f4a0d onto 710f0f8\n#\n# Commands:\n#  p, pick = use commit\n#  r, reword = use commit, but edit the commit message\n#  e, edit = use commit, but stop for amending\n#  s, squash = use commit, but meld into previous commit\n#  f, fixup = like "squash", but discard this commit\'s log message\n#  x, exec = run command (the rest of the line) using shell\n#\n# These lines can be re-ordered; they are executed from top to bottom.\n#\n# If you remove a line here THAT COMMIT WILL BE LOST.\n#\n# However, if you remove everything, the rebase will be aborted.\n#\n# Note that empty commits are commented out\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[s._v("需要重点注意的是相对于正常使用的 log 命令，这些提交显示的顺序是相反的。 运行一次 "),t("em",[s._v("log")]),s._v(" 命令，会看到类似这样的东西：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%h %s"')]),s._v(" HEAD~3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("HEAD\na5f4a0d added cat-file\n310154e updated README formatting and added blame\nf7f3f6d changed my name a bit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("注意其中的反序显示。 交互式变基给你一个它将会运行的脚本。 它将会从你在命令行中指定的提交（"),t("code",[s._v("HEAD~3")]),s._v("）开始，从上到下的依次重演每一个提交引入的修改。 它将最旧的而不是最新的列在上面，因为那会是第一个将要重演的。")]),s._v(" "),t("p",[s._v("你需要修改脚本来让它停留在你想修改的变更上。 要达到这个目的，你只要将你想修改的每一次提交前面的 「pick」 改为 「edit」。 例如，只想修改第三次提交信息，可以像下面这样修改文件：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("edit f7f3f6d changed my name a bit\npick 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当保存并退出编辑器时，Git 将你带回到列表中的最后一次提交，把你送回命令行并提示以下信息：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase -i HEAD~3\nStopped at f7f3f6d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". changed my name a bit\nYou can amend the commit now, with\n\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n\nOnce you’re satisfied with your changes, run\n\n       "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这些指令准确地告诉你该做什么。 输入")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit --amend\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("修改提交信息，然后退出编辑器。 然后，运行")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个命令将会自动地应用另外两个提交，然后就完成了。 如果需要将不止一处的 pick 改为 edit，需要在每一个修改为 edit 的提交上重复这些步骤。 每一次，Git 将会停止，让你修正提交，然后继续直到完成。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("如果你只修改其中一个提交信息的内容，他的后续提交的校验和都会改变。")])]),s._v(" "),t("h2",{attrs:{id:"重新排序提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新排序提交"}},[s._v("#")]),s._v(" 重新排序提交")]),s._v(" "),t("p",[s._v("也可以使用交互式变基来 "),t("strong",[s._v("重新排序")]),s._v(" 或 "),t("strong",[s._v("完全移除提交")]),s._v("。 如果想要移除 「added cat-file」 提交然后修改另外两个提交引入的顺序，可以将变基脚本从这样：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pick f7f3f6d changed my name a bit\npick 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("改为这样")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pick 310154e updated README formatting and added blame\npick f7f3f6d changed my name a bit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("当保存并退出编辑器时，Git 将你的分支带回这些提交的父提交，应用 310154e 然后应用 f7f3f6d，最后停止。 事实修改了那些提交的顺序并完全地移除了 「added cat-file」 提交。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("当移除一个提交时，当 Git 停下来的时候，你需要仔细看他的响应信息，和当前工作目录的状态。")]),s._v(" "),t("p",[s._v("有些是需要 "),t("strong",[s._v("合并冲突")]),s._v("、有些是需要 "),t("strong",[s._v("你确定跟踪某个文件")]),s._v(" 等操作。")])]),s._v(" "),t("h2",{attrs:{id:"压缩提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#压缩提交"}},[s._v("#")]),s._v(" 压缩提交")]),s._v(" "),t("p",[s._v("通过交互式变基工具，也可以将一连串提交压缩成一个单独的提交。 在变基信息中脚本给出了有用的指令：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Commands:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  p, pick = use commit  # 使用提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  r, reword = use commit, but edit the commit message  # 使用提交，但编辑提交信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  e, edit = use commit, but stop for amending #  使用提交，但停止修改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  s, squash = use commit, but meld into previous commit #  使用提交，但合并到之前的提交中去")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  f, fixup = like "squash", but discard this commit\'s log message # 就像 "压扁 "一样，但要丢弃这次提交的日志信息。')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  x, exec = run command (the rest of the line) using shell # 使用shell运行命令（行内其余部分）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  这些行可以重新排序；它们从上到下执行。 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# These lines can be re-ordered; they are executed from top to bottom.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果你在这里删掉一行，那承诺就会丢失。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you remove a line here THAT COMMIT WILL BE LOST.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是，如果你把所有的东西都删掉，重构基地就会被中止。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# However, if you remove everything, the rebase will be aborted.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意，空的提交会被注释掉")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note that empty commits are commented out")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("如果，指定 "),t("code",[s._v("squash")]),s._v("  而不是  "),t("code",[s._v("pick")]),s._v(" 或  "),t("code",[s._v("edit")]),s._v("，Git 将应用两者的修改并合并提交信息在一起。 所以，如果想要这三次提交变为一个提交，可以这样修改脚本：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pick f7f3f6d changed my name a bit\nsquash 310154e updated README formatting and added blame\nsquash a5f4a0d added cat-file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("当保存并退出编辑器时，Git 应用所有的三次修改然后将你放到编辑器中来合并三次提交信息：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# This is a combination of 3 commits.\n# The first commit's message is:\nchanged my name a bit\n\n# This is the 2nd commit message:\n\nupdated README formatting and added blame\n\n# This is the 3rd commit message:\n\nadded cat-file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("当你保存之后，你就拥有了一个包含前三次提交的全部变更的提交。")]),s._v(" "),t("h2",{attrs:{id:"拆分提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拆分提交"}},[s._v("#")]),s._v(" 拆分提交")]),s._v(" "),t("p",[t("strong",[s._v("拆分一个提交会撤消这个提交")]),s._v("，然后 "),t("strong",[s._v("多次地部分地暂存与提交直到完成你所需次数的提交")]),s._v("。 例如，假设想要拆分三次提交的中间那次提交。 想要将它拆分为两次提交：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("第一个 “updated README formatting”")])]),s._v(" "),t("li",[t("p",[s._v("第二个 “added blame” 来代替原来的 “updated README formatting and added blame”。")])])]),s._v(" "),t("p",[s._v("可以通过修改 "),t("code",[s._v("rebase -i")]),s._v(" 的脚本来做到这点，将要拆分的提交的指令修改为 「edit」：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("pick f7f3f6d changed my name a bit\nedit 310154e updated README formatting and added blame\npick a5f4a0d added cat-file\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("然后，当脚本将你进入到命令行时，重置那个提交，拿到被重置的修改，从中创建几次提交。 当保存并退出编辑器时，Git 带你到列表中第一个提交的父提交，应用第一个提交（f7f3f6d），应用第二个提交（310154e），然后让你进入命令行。 那里，可以通过 "),t("code",[s._v("git reset HEAD^")]),s._v("  做一次针对那个提交的混合重置，实际上将会撤消那次提交并将修改的文件未暂存。 现在可以暂存并提交文件直到有几个提交，然后当完成时运行  "),t("code",[s._v("git rebase –continue")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset HEAD^\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'updated README formatting'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" lib/simplegit.rb\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'added blame'")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("Git 在脚本中应用最后一次提交（a5f4a0d），历史记录看起来像这样：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log -4 --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("format:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%h %s"')]),s._v("\n1c002dd added cat-file\n9b29157 added blame\n35cfb2b updated README formatting\nf3cc40e changed my name a bit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("再一次，"),t("strong",[s._v("这些改动了所有在列表中的提交的 SHA-1 校验和")]),s._v("，"),t("strong",[s._v("所以要确保列表中的提交还没有推送到共享仓库中")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"核武器级选项-filter-branch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核武器级选项-filter-branch"}},[s._v("#")]),s._v(" 核武器级选项：filter-branch")]),s._v(" "),t("p",[s._v("有另一个历史改写的选项，如果想要通过脚本的方式改写大量提交的话可以使用它 – 例如，"),t("strong",[s._v("全局修改你的邮箱地址")]),s._v(" 或从  "),t("strong",[s._v("每一个提交中移除一个文件")]),s._v("。 这个命令是 "),t("code",[s._v("filter-branch")]),s._v(" ，它可以改写历史中大量的提交，除非你的项目还没有公开并且其他人没有基于要改写的工作的提交做的工作，你不应当使用它。 然而，它可以很有用。 你将会学习到几个常用的用途，这样就得到了它适合使用地方的想法。")]),s._v(" "),t("h3",{attrs:{id:"从每一个提交移除一个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从每一个提交移除一个文件"}},[s._v("#")]),s._v(" 从每一个提交移除一个文件")]),s._v(" "),t("p",[s._v("这经常发生。 有人粗心地通过 "),t("code",[s._v("git add .")]),s._v(" 提交了一个巨大的二进制文件，你想要从所有地方删除它。 可能偶然地提交了一个包括一个密码的文件，然而你想要开源项目。 "),t("code",[s._v("filter-branch")]),s._v("  是一个可能会用来擦洗整个提交历史的工具。 为了从整个提交历史中移除一个叫做 "),t("code",[s._v("passwords.txt")]),s._v("  的文件，可以使用 "),t("code",[s._v("–tree-filter")]),s._v("  选项给 "),t("code",[s._v("filter-branch")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --tree-filter "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rm -f passwords.txt'")]),s._v(" HEAD\nRewrite 6b9b3cf04e7c5686a9cb838c3f36a8cb6a0fc2bd "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("/21"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRef "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refs/heads/master'")]),s._v(" was rewritten\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("code",[s._v("–tree-filter")]),s._v(" 选项在检出项目的每一个提交后运行指定的命令然后重新提交结果。 在本例中，你从每一个快照中移除了一个叫作 passwords.txt 的文件，无论它是否存在。 如果想要移除所有偶然提交的编辑器备份文件，可以运行类似 "),t("code",[s._v("git filter-branch –tree-filter ‘rm -f *~’ HEAD")]),s._v("  的命令。")]),s._v(" "),t("p",[s._v("最后将可以看到 Git 重写树与提交然后移动分支指针。 通常一个好的想法是在一个测试分支中做这件事，然后当你决定最终结果是真正想要的，可以硬重置 master 分支。 为了让  "),t("code",[s._v("filter-branch")]),s._v("  在所有分支上运行，可以给命令传递  "),t("code",[s._v("–all")]),s._v("  选项。")]),s._v(" "),t("h3",{attrs:{id:"使一个子目录做为新的根目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使一个子目录做为新的根目录"}},[s._v("#")]),s._v(" 使一个子目录做为新的根目录")]),s._v(" "),t("p",[s._v("假设已经从另一个源代码控制系统中导入，并且有几个没意义的子目录（trunk、tags 等等）。 如果想要让 trunk 子目录作为每一个提交的新的项目根目录，filter-branch 也可以帮助你那么做：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --subdirectory-filter trunk HEAD\nRewrite 856f0bf61e41a27326cdae8f09fe708d679f596f "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("/12"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nRef "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'refs/heads/master'")]),s._v(" was rewritten\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("现在新项目根目录是 trunk 子目录了。 Git 会自动移除所有不影响子目录的提交。")]),s._v(" "),t("h3",{attrs:{id:"全局修改邮箱地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局修改邮箱地址"}},[s._v("#")]),s._v(" 全局修改邮箱地址")]),s._v(" "),t("p",[s._v("另一个常见的情形是在你开始工作时忘记运行  "),t("code",[s._v("git config")]),s._v("  来设置你的名字与邮箱地址，或者你想要开源一个项目并且修改所有你的工作邮箱地址为你的个人邮箱地址。 任何情形下，你也可以通过  "),t("code",[s._v("filter-branch")]),s._v("  来一次性修改多个提交中的邮箱地址。 需要小心的是只修改你自己的邮箱地址，所以你使用  "),t("code",[s._v("–commit-filter")]),s._v(" ：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" filter-branch --commit-filter "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\n        if [ \""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GIT_AUTHOR_EMAIL")]),s._v('" = "schacon@localhost" ];\n        then\n                GIT_AUTHOR_NAME="Scott Chacon";\n                GIT_AUTHOR_EMAIL="schacon@example.com";\n                git commit-tree "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('";\n        else\n                git commit-tree "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v("\";\n        fi'")]),s._v(" HEAD\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这会遍历并重写每一个提交来包含你的新邮箱地址。 因为提交包含了它们父提交的 SHA-1 校验和，这个命令会修改你的历史中的每一个提交的 SHA-1 校验和，而不仅仅只是那些匹配邮箱地址的提交。")])])}),[],!1,null,null,null);a.default=n.exports}}]);