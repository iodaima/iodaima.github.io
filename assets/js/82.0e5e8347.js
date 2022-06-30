(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{582:function(t,a,s){"use strict";s.r(a);var r=s(4),o=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("font",{attrs:{color:"green"}},[t._v("正例：")])],1),t._v(" "),s("p",[s("font",{attrs:{color:"red"}},[t._v("反例：")])],1),t._v(" "),s("p",[s("font",{attrs:{color:""}},[t._v("说明：")])],1),t._v(" "),s("h2",{attrs:{id:"命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名规范"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),s("ol",[s("li",[s("p",[s("font",{attrs:{color:"red"}},[t._v("【强制】")]),t._v("命名规则不允许出现中英文融合，"),s("br"),t._v(" "),s("font",{attrs:{color:"green"}},[t._v("正例：")]),t._v("如 Detail、XiangQing、UserList"),s("br"),t._v(" "),s("font",{attrs:{color:"red"}},[t._v("反例：")]),t._v("XiangQingDetail、YongHuList")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"red"}},[t._v("【强制】")]),t._v("基本功能页面需按照规范进行命名")],1)])]),t._v(" "),s("p",[s("font",{attrs:{color:"green"}},[t._v("正例：")]),t._v("列表页（Index）、表单页（Form）"),s("br"),t._v(" "),s("font",{attrs:{color:"red"}},[t._v("反例：")]),t._v(" 列表页（UserList）、表单页（Edit、Add）")],1),t._v(" "),s("h2",{attrs:{id:"使用规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用规范"}},[t._v("#")]),t._v(" 使用规范")]),t._v(" "),s("ol",[s("li",[s("p",[s("font",{attrs:{color:"red"}},[t._v("【强制】")]),t._v("不允许对用户进行单独功能授权、数据授权、IP限制、访问时段限制，必须通过角色管理进行授权")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"red"}},[t._v("【强制】")]),t._v("不允许将日志文件记录地址配置在C盘")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"red"}},[t._v("【强制】")]),t._v("不允许直接复制其他系统的代码及数据库成立一个新项目")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"red"}},[t._v("【强制】")]),t._v("公司规定的模块、如经济、CMS、楼宇模块等，非项目特有功能，必须在相应的模块进行开发，不允许在TwoDevelopment类包中进行代码生成")],1)])]),t._v(" "),s("h1",{attrs:{id:"joy-framework-v1-0-框架说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#joy-framework-v1-0-框架说明"}},[t._v("#")]),t._v(" Joy. Framework-v1.0 框架说明")]),t._v(" "),s("h2",{attrs:{id:"_01-framework-基础模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-framework-基础模块"}},[t._v("#")]),t._v(" 01 Framework 基础模块")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("内置Util、Ioc容器、Cache缓存、Log日志、DataAccess数据库模块，主要存放通用类包")])]),t._v(" "),s("h3",{attrs:{id:"util-实用类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#util-实用类"}},[t._v("#")]),t._v(" Util 实用类")]),t._v(" "),s("h3",{attrs:{id:"ioc-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ioc-容器"}},[t._v("#")]),t._v(" Ioc 容器")]),t._v(" "),s("p",[t._v("非开发经理禁止更改此模块")]),t._v(" "),s("h3",{attrs:{id:"cahce缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cahce缓存"}},[t._v("#")]),t._v(" Cahce缓存")]),t._v(" "),s("p",[t._v("现有Redis、原始Cache 两种缓存方式，默认使用Redis缓存，继续增加可扩展")]),t._v(" "),s("h3",{attrs:{id:"log日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log日志"}},[t._v("#")]),t._v(" Log日志")]),t._v(" "),s("h3",{attrs:{id:"dataaccess数据库模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dataaccess数据库模块"}},[t._v("#")]),t._v(" DataAccess数据库模块")]),t._v(" "),s("p",[t._v("非开发经理禁止更改此模块")]),t._v(" "),s("h2",{attrs:{id:"_02-application-应用模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-application-应用模块"}},[t._v("#")]),t._v(" 02 Application 应用模块")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("主要将各个业务模块进行分类、拆分、更有效、清晰的梳理业务模块")])]),t._v(" "),s("h3",{attrs:{id:"base模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base模块"}},[t._v("#")]),t._v(" Base模块")]),t._v(" "),s("p",[s("strong",[t._v("AuthModule 权限模块")])]),t._v(" "),s("p",[s("strong",[t._v("CodeGenogeterMoudle 代码生成模块")])]),t._v(" "),s("p",[s("strong",[t._v("SystemModule 系统模块")])]),t._v(" "),s("h3",{attrs:{id:"cms模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cms模块"}},[t._v("#")]),t._v(" CMS模块")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"_03-soa-应用服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_03-soa-应用服务"}},[t._v("#")]),t._v(" 03 SOA 应用服务")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("主要存放、集中供应模块")])]),t._v(" "),s("h2",{attrs:{id:"_04-application-应用界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_04-application-应用界面"}},[t._v("#")]),t._v(" 04 Application 应用界面")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("主要将模块操作、展示等功能可视化")])]),t._v(" "),s("h2",{attrs:{id:"_05-tool-开发工具应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-tool-开发工具应用"}},[t._v("#")]),t._v(" 05 Tool 开发工具应用")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("针对于平台、系统开发出来的工具，如数据同步、清洗等不需要面向客户的功能，可在此类别下开发")])])])}),[],!1,null,null,null);a.default=o.exports}}]);