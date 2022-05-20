(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{457:function(s,t,a){s.exports=a.p+"assets/img/error.c1865300.png"},458:function(s,t,a){s.exports=a.p+"assets/img/esbuild.71f8178c.png"},459:function(s,t,a){s.exports=a.p+"assets/img/swc.d86a0c28.png"},460:function(s,t,a){s.exports=a.p+"assets/img/path-error.00dfe35b.png"},484:function(s,t,a){"use strict";a.r(t);var n=a(34),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"转译器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#转译器"}},[s._v("#")]),s._v(" 转译器")]),s._v(" "),n("p",[s._v("如今 2022 年，无论我们写业务还是写测试，都会采用比较高级的 JavaScript 语法，或者 TypeScript。")]),s._v(" "),n("p",[n("strong",[s._v("但是，Jest 本身不做代码转译工作。")]),s._v(" 在执行测试时，它会调用已有的 "),n("strong",[s._v("转译器/编译器")]),s._v(" 来做代码转译。在前端，我们最熟悉的两个转译器就是 "),n("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Babel"),n("OutboundLink")],1),s._v(" 以及 "),n("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("TSC"),n("OutboundLink")],1),s._v(" 了。")]),s._v(" "),n("p",[s._v("下面我们就以 "),n("code",[s._v("Jest x TypeScript")]),s._v(" 为例子来讲如何对测试代码做转译吧。")]),s._v(" "),n("h2",{attrs:{id:"tsc-转译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tsc-转译"}},[s._v("#")]),s._v(" TSC 转译")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[s._v("本教程使用 "),n("code",[s._v("ts-jest")]),s._v(" 作为主力转译器，后面 "),n("strong",[s._v("《Jest 性能部分》")]),s._v(" 会尝试使用其它转译器。")])]),s._v(" "),n("p",[s._v("首先安装 "),n("a",{attrs:{href:"https://www.npmjs.com/package/typescript",target:"_blank",rel:"noopener noreferrer"}},[s._v("typescript"),n("OutboundLink")],1),s._v(" ：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D typescript@4.6.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("安装 "),n("code",[s._v("typescript")]),s._v(" 的同时也会安装转译器 "),n("code",[s._v("tsc")]),s._v("，可以用它来初始化 TypeScript 的配置：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("npx tsc --init\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("会发现在根目录创建了一个 "),n("code",[s._v("tsconfig.json")]),s._v(" 文件：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"target"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es2016"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"module"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commonjs"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"esModuleInterop"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"forceConsistentCasingInFileNames"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"strict"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"skipLibCheck"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("现在安装 "),n("a",{attrs:{href:"https://kulshekhar.github.io/ts-jest/",target:"_blank",rel:"noopener noreferrer"}},[s._v("ts-jest"),n("OutboundLink")],1),s._v(" ：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D ts-jest@27.1.4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),n("p",[n("strong",[s._v("注意，这里 "),n("code",[s._v("ts-jest")]),s._v(" 一定要和 "),n("code",[s._v("jest")]),s._v(" 的大版本一致！")]),s._v(" 比如 27 对 27，或者 26 对 26，否则会有兼容问题！")])]),s._v(" "),n("p",[s._v("在 "),n("code",[s._v("jest.config.js")]),s._v(" 里添加一行配置：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("preset")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ts-jest'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("把 "),n("code",[s._v("sum.js")]),s._v(" 改成 "),n("code",[s._v("sum.ts")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sum.ts")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("sum")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" sum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("把 "),n("code",[s._v("sum.test.js")]),s._v(" 改成 "),n("code",[s._v("sum.test.ts")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-ts line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sum "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../../src/utils/sum'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("describe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sum'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("it")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'可以做加法'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("expect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("toEqual")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("不过，改完后你会发现有很多的报错：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(457),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"jest-的类型声明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jest-的类型声明"}},[s._v("#")]),s._v(" Jest 的类型声明")]),s._v(" "),n("p",[s._v("上面的报错是因为 TS 找不到 "),n("code",[s._v("describe")]),s._v(" 和 "),n("code",[s._v("it")]),s._v(" 的类型定义，这里要安装对应的 Jest 类型声明包：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -D @types/jest@27.4.1\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("同样地，TS 声明类型包的大版本最好和 "),n("code",[s._v("jest")]),s._v(" 一样。")])]),s._v(" "),n("p",[s._v("然后在 "),n("code",[s._v("tsconfig.json")]),s._v(" 里加上 "),n("code",[s._v("jest")]),s._v(" 和 "),n("code",[s._v("node")]),s._v(" 类型声明：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"types"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jest"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("最后执行 "),n("code",[s._v("npm run test")]),s._v("，测试通过。")]),s._v(" "),n("h2",{attrs:{id:"更多转译器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#更多转译器"}},[s._v("#")]),s._v(" 更多转译器")]),s._v(" "),n("p",[s._v("还记得这一章开头说的："),n("strong",[s._v("Jest 本身不做转译，而是利用别的转译器的能力来转译。")]),s._v(" 因此，我们除了用 "),n("code",[s._v("tsc")]),s._v(" 来转译，还能用其它转译器。")]),s._v(" "),n("h3",{attrs:{id:"babel-转译器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#babel-转译器"}},[s._v("#")]),s._v(" Babel 转译器")]),s._v(" "),n("p",[s._v("可能有些同学的项目就是 Webpack + Babel 为主，那么你也可以选择使用 "),n("code",[s._v("babel-jest")]),s._v(" 来做转译，\n具体配置看 "),n("a",{attrs:{href:"https://jestjs.io/docs/getting-started#using-typescript-via-babel",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网的教程"),n("OutboundLink")],1),s._v(" 。")]),s._v(" "),n("p",[s._v("Babel 做转译的 "),n("strong",[s._v("缺点是无法让 Jest 在运行时做类型检查")]),s._v("，所以更推荐大家使用 "),n("code",[s._v("ts-jest")]),s._v("，利用 "),n("code",[s._v("tsc")]),s._v(" 来转译 TypeScript。")]),s._v(" "),n("blockquote",[n("p",[s._v("Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. —— 官网")])]),s._v(" "),n("h3",{attrs:{id:"非官方转译器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#非官方转译器"}},[s._v("#")]),s._v(" 非官方转译器")]),s._v(" "),n("p",[s._v("当然，我们也能用现在非常火的 "),n("a",{attrs:{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("esbuild"),n("OutboundLink")],1),s._v(" 和 "),n("a",{attrs:{href:"https://swc.rs/docs/getting-started",target:"_blank",rel:"noopener noreferrer"}},[s._v("swc"),n("OutboundLink")],1),s._v(" 来做转译。\n由于它们都不是 Jest 官方推荐的转译器，所以使用时要注意兼容性和坑。")]),s._v(" "),n("p",[s._v("顺便说一下，"),n("code",[s._v("esbuild")]),s._v(" 是 "),n("a",{attrs:{href:"https://go.dev/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Golang"),n("OutboundLink")],1),s._v(" 写的一个转译器，速度巨快：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(458),alt:""}})]),s._v(" "),n("p",[s._v("而 "),n("code",[s._v("swc")]),s._v(" 则是 "),n("a",{attrs:{href:"https://www.rust-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rust"),n("OutboundLink")],1),s._v(" 写的一个转译器，速度更快：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(459),alt:""}})]),s._v(" "),n("p",[s._v("不过，速度快只是一方面，Jest 在构建测试环境的时会有很多 Tricky 的操作，"),n("strong",[s._v("但并不是所有转译器都支持这些骚操作的")]),s._v("。\n像 "),n("code",[s._v("swc")]),s._v(" 这种要用到计算机比较底层的转译工具，在不同平台的的表现可能有所不同，所以，使用这些转译器会存在一定的风险。")]),s._v(" "),n("p",[s._v("目前来说，建议大家把它们当作实验品来试用，就算出问题再回退到 "),n("code",[s._v("babel")]),s._v(" 和 "),n("code",[s._v("tsc")]),s._v(" 也很简单。")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("生产环境推荐使用 "),n("code",[s._v("ts-jest")]),s._v("，后面会用 "),n("code",[s._v("@swc/jest")]),s._v(" 作为实验品带大家体验一下。")])]),s._v(" "),n("h2",{attrs:{id:"路径简写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#路径简写"}},[s._v("#")]),s._v(" 路径简写")]),s._v(" "),n("p",[s._v("你对这个测试满意了么？反正我还不满意，为啥我要写一句 "),n("code",[s._v("../../src/utils/sum")]),s._v(" 这么长的路径？我写成 "),n("code",[s._v("utils/sum")]),s._v(" 不是更香？\n这也是很多大型项目的必备配置了 —— "),n("strong",[s._v("路径简写/别名")]),s._v("。")]),s._v(" "),n("p",[s._v("要实现这样的效果，我们可以在 "),n("code",[s._v("moduleDirectories")]),s._v(" 添加 "),n("code",[s._v('"src"')]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// jest.config.js")]),s._v("\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("moduleDirectories")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("这样一来 "),n("code",[s._v("jest")]),s._v(" 就能看懂 "),n("code",[s._v("utils/sum")]),s._v(" 对应的是 "),n("code",[s._v("../../src/utils/sum")]),s._v("，但是，"),n("code",[s._v("tsc")]),s._v(" 看不懂呀：")]),s._v(" "),n("p",[n("img",{attrs:{src:a(460),alt:""}})]),s._v(" "),n("p",[s._v("我们还得在 "),n("code",[s._v("tsconfig.json")]),s._v(" 里指定 "),n("code",[s._v("paths")]),s._v(" 路径：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"paths"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"utils/*"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/utils/*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("解释一下， "),n("strong",[s._v("所谓的 “路径简写” 本质上只是路径映射。所以 "),n("code",[s._v("tsconfig.json")]),s._v(" 里的 "),n("code",[s._v("paths")]),s._v(" 就是把 "),n("code",[s._v("utils/xxx")]),s._v(" 映射成 "),n("code",[s._v("src/utils/xxx")]),s._v("，\n而 "),n("code",[s._v("jest.config.js")]),s._v(" 里的 "),n("code",[s._v("moduleDirectories")]),s._v(" 则稍微狠一点，直接把 "),n("code",[s._v("utils/sum")]),s._v(" 当作第三方模块，先在 "),n("code",[s._v("node_modules")]),s._v(" 里找，找不到再从 "),n("code",[s._v("src/xxx")]),s._v(" 下去找。\n所以这两者是有区别的。")])]),s._v(" "),n("p",[s._v("有的同学可能不会这么写，而是用别名作为路径开头："),n("code",[s._v('import sum from "@/utils/sum"')]),s._v("。这依旧是路径匹配，"),n("code",[s._v("tsconfig.json")]),s._v(" 的配置相当简单：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"compilerOptions"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"paths"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token property"}},[s._v('"@/*"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/*"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("但对 Jest 的配置就不能再用 "),n("code",[s._v("moduleDirectories")]),s._v(" 了，也得用路径匹配。我们可以使用 "),n("code",[s._v("moduleNameMapper")]),s._v("，这也是使用频率非常高的一个配置项：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// jest.config.js")]),s._v("\nmodulex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"moduleNameMapper"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"@/(.*)"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<rootDir>/src/$1"')]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("那有的同学就会问了：难道每次写路径匹配规则都在 "),n("code",[s._v("tsconfig.json")]),s._v(" 和 "),n("code",[s._v("jest.config.js")]),s._v(" 写两份么？"),n("strong",[s._v("很遗憾，确实如此。造成这个问题的主要原因是 "),n("code",[s._v("jest")]),s._v(" 根本不管 "),n("code",[s._v("tsc")]),s._v("。")]),s._v("\n不过，好消息是，你可以用 "),n("code",[s._v("ts-jest")]),s._v(" 里的工具函数 "),n("code",[s._v("pathsToModuleNameMapper")]),s._v(" 来把 "),n("code",[s._v("tsconfig.json")]),s._v(" 里的 "),n("code",[s._v("paths")]),s._v(" 配置复制到 "),n("code",[s._v("jest.config.js")]),s._v(" 里的 "),n("code",[s._v("moduleNameMapper")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// jest.config.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" pathsToModuleNameMapper "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ts-jest/utils'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" compilerOptions "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./tsconfig'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [...]")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// { prefix: '<rootDir/>' }")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("moduleNameMapper")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("pathsToModuleNameMapper")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("compilerOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("paths"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("看到这样的配置方法，你是不是觉得 JS 的单一原则太难顶了？这么简单的一个功能都要通过第三方的 "),n("code",[s._v("ts-jest")]),s._v(" 来提供？然而，坏消息是 "),n("code",[s._v("webpack")]),s._v(" 的配置也不会读 "),n("code",[s._v("tsconfig.json")]),s._v(" 里面的 "),n("code",[s._v("paths")]),s._v("，\n"),n("strong",[s._v("所以，开发者不仅要在 "),n("code",[s._v("tsconfig.json")]),s._v(" 里写一份路径映射，还要在 "),n("code",[s._v("webpack.config.js")]),s._v(" 里再写一份")]),s._v(" 。"),n("a",{attrs:{href:"https://stackoverflow.com/questions/40443806/webpack-resolve-alias-does-not-work-with-typescript",target:"_blank",rel:"noopener noreferrer"}},[s._v("详见这里"),n("OutboundLink")],1),s._v(" 。")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),n("p",[s._v("本次教程将用 "),n("code",[s._v("moduleDirectories")]),s._v(" 来实现路径别名，如果你想用 "),n("code",[s._v("moduleNameMapper")]),s._v("，那么后续的 Webpack 配置可能也要跟着改一下。")])]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("这一章，我们了解到了 Jest 与转译器的关系，Jest 本身不做任何转译，只是利用了其它转译器的能力来做代码转译。")]),s._v(" "),n("p",[s._v("常见的转译器有 "),n("code",[s._v("babel")]),s._v(", "),n("code",[s._v("tsc")]),s._v(", "),n("code",[s._v("esbuild")]),s._v(" 和 "),n("code",[s._v("swc")]),s._v("，后面两个速度较快，但存在一定风险。")]),s._v(" "),n("p",[s._v("在一些大型项目中，经常会出现路径别名。由于 Jest 不做转译，所以在做转译时需要在 "),n("code",[s._v("tsconfig.json")]),s._v(" 里不仅要做别名的路径映射，\n还要在 "),n("code",[s._v("jest.config.js")]),s._v(" 里也要做同样的路径匹配。这可以通过配置 "),n("code",[s._v("moduleDirectories")]),s._v(" 和 "),n("code",[s._v("moduleNameMapper")]),s._v(" 来实现。")])])}),[],!1,null,null,null);t.default=e.exports}}]);