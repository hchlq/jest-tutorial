(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{488:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"为什么要测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要测试"}},[t._v("#")]),t._v(" 为什么要测试")]),t._v(" "),a("p",[t._v("一谈到单测，可能大家的第一反应都是敬而远之。")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("没啥用，没时间，我不会")])])]),t._v(" "),a("p",[t._v("我承认写单测是个非常有挑战性，且难度不小的活，但 "),a("strong",[t._v("我依然推荐大家尝试去写一写单元测试，因为它所带来的好处不仅仅是大家想的那么简单：“只是 Bug 少了一点”")]),t._v("。 所以，"),a("strong",[t._v("我会尝试从另外一些角度来讨论单测可以给我们带来哪些好处。")])]),t._v(" "),a("h2",{attrs:{id:"优化流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化流程"}},[t._v("#")]),t._v(" 优化流程")]),t._v(" "),a("p",[t._v("接着刚刚说到的 “只是 Bug 少一点” 这句话，可能大多数觉得单测就是在提测前减少一点 Bug 而已：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3364ba640d443e7bb4ce5eca49d1a1a~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[t._v("这样的想法确实是最直观的。但这只是想到了第一层，如果我们把 "),a("strong",[t._v("开发流程所有步骤")]),t._v(" 都加进来，会发现是这样的：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/235e9c8636374d338641fc8ed4fff6fa~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("开发过程")]),t._v(" 后面，几乎每个流程都可能抛出 Bug。"),a("strong",[t._v("越是到后面流程才抛出的 Bug，程序员就越是要投入比开发阶段更大的时间和业务，而且所承受的风险也是最高的。")])]),t._v(" "),a("p",[t._v("或许大家会想：不就改个 Bug，改几行而已。 "),a("strong",[t._v("可是大家有没有想过在跟测的过程中，很可能你已经开始另一个需求的评审了！")]),t._v(" 此时的你在解决突然插入的 Bug 的时候，心态还会像刚开始写代码时候那么轻松么？")]),t._v(" "),a("p",[t._v("实际上，还有更多的隐性成本没有考虑，"),a("strong",[t._v("比如反复确认产品逻辑、反复确认交互设计、反复确认前后端接口设计、各端对产品的理解。")]),t._v(" 有的时候，你就会发现这样很魔幻的场景：明明是一个字段的展示问题，竟然要花上一上午，拉了 4、5 个人来开会核对的情况。")]),t._v(" "),a("p",[t._v("下面这张图，也在说明两个问题：一是 85% 的缺陷都在代码设计阶段产生；二是发现 Bug 的阶段越靠后，耗费成本就越高，呈指数级别的增长。这种 “指数成本” 的案例也经常发生，当我们改正一个 Bug 的时候，可能随之而来又会多出 3 个 Bug，俗称："),a("strong",[t._v("改崩了。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0dc5069bfff84135b32f8940715c2c4c~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("所以，在早期的单元测试就能发现bug，不仅可以省时省力，在开发流程上提高效率，也能降低反复修改出现的风险和时间成本。")])]),t._v(" "),a("h2",{attrs:{id:"保证质量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保证质量"}},[t._v("#")]),t._v(" 保证质量")]),t._v(" "),a("p",[t._v("这一节主题就是大家经常想的：减少 Bug 率。我们不妨来想一个问题："),a("strong",[t._v("什么才是 Bug？")]),t._v(" 相信所有开发人员都不愿意写 Bug，在 "),a("strong",[t._v("《软件测试》")]),t._v(" 这本书中将 Bug 描述成 “软件缺陷”，里面说道：")]),t._v(" "),a("blockquote",[a("p",[t._v("大多数的 “软件缺陷” 并非源自编程错误，对众多从小到大的项目进行研究而得出的结论往往是一致的，导致软件缺陷最大的原因是产品说明书！见下图")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58cc7c6deab74de9b7d900935d34d664~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[t._v("大多数的产品还是能够写出一份清晰明了的需求单的，奈何 ta 也不可能把所有情况想都枚举出来，这也导致了开发时很容易出现考虑不周全的情况。"),a("strong",[t._v("往往能够发现异常情况的人要么是测试、要么是交互视觉、要么是后期产品体验。")]),t._v(" 那到这个时候才发现的问题，然后再去修复又会出现的 "),a("strong",[t._v("指数爆炸的成本")]),t._v("。")]),t._v(" "),a("p",[t._v("如果把实现功能看成走迷宫，把找到通路看成上线需求， "),a("strong",[t._v("那么编码实现的过程就像从入口找出口，而单元测试则像从出口找入口。")]),t._v(" 这种开两个线程 “双向奔赴” 的找通路方法能够用最精准最快的方式找到通路。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2d176624866416184fd183f1a670146~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[t._v("单测所保障的不仅仅只是代码的正确性，毕竟大家在边开发边 Debug 的时候已经能验证 99% 的正确性了，而单测更大的地方在于 "),a("strong",[t._v("让我们不得不去思考到一些异常情况")]),t._v(" ，这无形中就能增强代码的质量。")]),t._v(" "),a("h2",{attrs:{id:"优化更新项目的后盾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化更新项目的后盾"}},[t._v("#")]),t._v(" 优化更新项目的后盾")]),t._v(" "),a("p",[t._v("可能大家对上面这一节也不以为意，我能理解大家的侥幸心理。毕竟在公司里，开发写完 Bug，然后交给测试找出来是大家其乐融融表现。而且不写测试大家过得还挺好的，也没出什么大乱子。")]),t._v(" "),a("p",[t._v("造成这样的错觉在两个方面："),a("strong",[t._v("一是测试找 Bug，开发再 Debug，这确实能解决燃眉之急，短期内很有效果。二是需求一直不断快速迭代，一期的 Bug，二期还能合着去改，二期改不了还有三期，三期结束了还有四期......")]),t._v(" 。")]),t._v(" "),a("p",[t._v("这种永无止境的测试 + 开发模式能在一定程度上让我们的代码 "),a("strong",[t._v("“看起来是有保障的”")]),t._v(" 。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd00b5dc94404943aea524e400dc1bdc~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[t._v("人肉测试固然好用，但是也有下面的缺点：")]),t._v(" "),a("ul",[a("li",[t._v("使用一次成本非常高")]),t._v(" "),a("li",[t._v("回归测试成本更高")]),t._v(" "),a("li",[t._v("只有到上线功能的时候才会使用一次人力测试来轰炸")])]),t._v(" "),a("p",[t._v("由于成本很高，人肉测试一般只会用来测业务功能，并没有太多测试资源可以分配到优化需求、技术需求上。 "),a("strong",[t._v("所以对于这类需求只能通过前端开发人员自测，到目前为止也只是优化一个点，然后点点鼠标来自测，效率并不高。一旦优化过程中改出了问题，回滚、和修复的成本又会非常高，这也会助长大家 “不敢优化”、“能不动就不动” 的思想。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4283da0c0f94446a9216f65829261166~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("如果能有一定量的测试，则有足够强大的信心来支撑项目的优化，也有助于整个项目的未来发展和改进。")])]),t._v(" "),a("h2",{attrs:{id:"测试驱动开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试驱动开发"}},[t._v("#")]),t._v(" 测试驱动开发")]),t._v(" "),a("p",[t._v("测试驱动开发（Testing-Driven Development）是敏捷开发中的一项核心实践和技术，也是一种设计方法论。")]),t._v(" "),a("p",[a("strong",[t._v("上面说的单测特点比较偏向于 “防守”，而 TDD 中的测试则偏向于 “进攻”。")]),t._v(" TDD 的原理是在开发功能代码之前，先编写单元测试用例代码，在此基础上再补充产品代码。比如要实现 "),a("code",[t._v("getUserById")]),t._v(" 这个服务，那么可以先写如下测试，然后再补充 "),a("code",[t._v("getUserById")]),t._v(" 的实现：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'getUserById'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'可以根据 id 返回用户信息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TODO: getUserById 未实现")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'122'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toEqual")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'122'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("这种方法在 Node 端非常实用。由于 Node 端要依赖的项非常多，比如数据库、各方接口、配置中心等等。每次用 Postman 去测接口，就会一次性将多个模块以及服务一起测了。 "),a("strong",[t._v("如果别的服务还在开发或者有问题，就会直接阻塞了接口的开发。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7045c1cea674dd5a928f055ba7c816f~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[t._v("虽然 Postman 在接口测试的时候很好用，但是它也有如下缺点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("用例不足。")]),t._v(" 由于 Postman 一般只做简单的接口测试，并不像单测那样会把所有分支情况都枚举")]),t._v(" "),a("li",[a("strong",[t._v("用例无法共享。")]),t._v(" 虽然 Postman 也能写简单的用例，但是现在每个人的 Postman 会有自己的用例，难以覆盖所有情况")]),t._v(" "),a("li",[a("strong",[t._v("用例无法保鲜。")]),t._v(" 当接口更新了之后，Postman 的用例可能存在过期的情况")])]),t._v(" "),a("p",[a("strong",[t._v("单元测试则很好地填补了这一块，利用单测强大的 Mock 能力先将依赖项都 Mock 掉，开发时可以只关注某个函数、服务的开发，不会受其依赖项干扰：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77788c9e58224baba8366ca5a75c1162~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[t._v("由于每次提交代码都应该保证测试通过率 100%，所以我们也不会担心这些例子是否过期的问题。")]),t._v(" "),a("h2",{attrs:{id:"用例即例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用例即例子"}},[t._v("#")]),t._v(" 用例即例子")]),t._v(" "),a("p",[t._v("测试用例还有个很好的功能："),a("strong",[t._v("将使用案例记录在案。")])]),t._v(" "),a("p",[t._v("很多时候别人写一些工具函数和方法，使用者是不能一眼就能学会怎么用的。往往这时写函数的人就会说："),a("strong",[t._v("你看 XXX 文件就知道怎么用了。")]),t._v(" 但这些 “真实例子” 中通常会夹杂着很多依赖项，无法作用一个最小 Use Case 来理解。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/567c665c9c2840b698d960bbd57e0d10~tplv-k3u1fbpfcp-zoom-1.image",alt:""}})]),t._v(" "),a("p",[a("strong",[t._v("而单测里的每个用例都可以看成一个最小的 "),a("code",[t._v("example")]),t._v("，通过阅读 Test Case 就能马上知道这个函数怎么使用了。")]),t._v(" 这里举 redux 的 "),a("code",[t._v("compose")]),t._v(" 函数的例子：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Utils'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("describe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'composes from right to left'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("double")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("square")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" x\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compose")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" double"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("就算我们不知道 "),a("code",[t._v("compose")]),t._v(" 是用来干嘛的，但是我们很清楚地知道，使用方法就是从右到左地执行回调。")]),t._v(" "),a("p",[a("strong",[t._v("由于每次发布时我们都要保证单测 100% 通过率，所以永远不用担心这个 Use Case 无法使用、过期的问题。")])]),t._v(" "),a("h2",{attrs:{id:"提升个人能力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提升个人能力"}},[t._v("#")]),t._v(" 提升个人能力")]),t._v(" "),a("p",[t._v("抛开这些项目质量、优化流程的原因，推荐大家写单测的另一重要原因就是 "),a("strong",[t._v("提升个人能力")]),t._v("。")]),t._v(" "),a("p",[t._v("几乎所有 Jest 的入门文章的开头都会有一个非常简单的 Test Case：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toEqual")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("这很容易让人误以为单测很简单，以为不就是学一个框架那样嘛。然而，只有在真正编写测试用例的时候才会发现单测的难度呈指数级上涨。 "),a("strong",[t._v("因为测试的本身是另一个领域，是需要通过不断练习才能掌握测试技巧的。")]),t._v(" 对前端单测来说，它的难度包括但不限于如下几点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("测试框架与开发框架的不配合。")]),t._v(" 比如版本冲突问题")]),t._v(" "),a("li",[a("strong",[t._v("模拟环境问题。")]),t._v(" 比如模拟浏览器环境，往往项目一出现 "),a("code",[t._v("localStorage")]),t._v("，"),a("code",[t._v("cookie")]),t._v(" 这些浏览器独有的东西时，Jest 就会报错，很多人受不了直接放弃了")]),t._v(" "),a("li",[a("strong",[t._v("不同框架、库的测试方法都是需要学习的")]),t._v("。有的框架 Nest.js 有 "),a("code",[t._v("@nestjs/testing")]),t._v("，React.js 有 "),a("code",[t._v("react-testing-library")]),t._v("。有的库 Redux 又会有自己独特的 testing guide")])]),t._v(" "),a("p",[t._v("总的来说，写单测并不像大家想的这么简单，"),a("code",[t._v("jest")]),t._v(" 只是个开始的地方。不过，从另一个角度来看，如果你能坚持写好单测，对个人能力也大有裨益：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("提升不同环境的 Mock 能力。")]),t._v(" 掌握不同测试框架的测试技巧")]),t._v(" "),a("li",[a("strong",[t._v("提升异常分支的感知能力。")]),t._v(" 写代码的时候也能代入测试者视角，在开发时能马上发现并处理异常分支")]),t._v(" "),a("li",[a("strong",[t._v("了解并实践更多的测试策略。")]),t._v(" 如自上而下、自下而上，影子数据库等")]),t._v(" "),a("li",[a("strong",[t._v("为简历增光添彩。")]),t._v(" 在写测试的过程中我们也可以深入测试这个领域，将编程知识融会贯通")])]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("稍微总结一下，单测可以在 "),a("strong",[t._v("优化开发流程、保证项目质量、给项目优化上保险、驱动开发、提供 Use Case、提升个人能力")]),t._v(" 方面有着非常大的益处。")]),t._v(" "),a("p",[t._v("当然，这一章也是希望大家能够多尝试自己领域之外的东西，不要固步自封。对个人而言，多练习写单测能力肯定是好处多于坏处。现在，让我们开始测试之旅吧。")])])}),[],!1,null,null,null);s.default=e.exports}}]);