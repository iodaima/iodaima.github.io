(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{521:function(t,s,a){"use strict";a.r(s);var r=a(4),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" find")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("查找 /路径下 名称为xxx的文件或文件夹\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" / -name xxx\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"cp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[t._v("#")]),t._v(" cp")]),t._v(" "),a("h2",{attrs:{id:"tar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[t._v("#")]),t._v(" tar")]),t._v(" "),a("p",[a("strong",[t._v("解压")])]),t._v(" "),a("p",[a("code",[t._v("tar zxvf xxx.tar")])]),t._v(" "),a("h2",{attrs:{id:"shutdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shutdown"}},[t._v("#")]),t._v(" shutdown")]),t._v(" "),a("p",[a("strong",[t._v("关机")])]),t._v(" "),a("p",[a("code",[t._v("shutdown -h now")])]),t._v(" "),a("p",[a("strong",[t._v("重启")])]),t._v(" "),a("p",[a("code",[t._v("shutdown -r now")])]),t._v(" "),a("h2",{attrs:{id:"centos7对外开放端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centos7对外开放端口"}},[t._v("#")]),t._v(" Centos7对外开放端口")]),t._v(" "),a("p",[a("strong",[t._v("一、查看对外开放的端口状态")])]),t._v(" "),a("p",[t._v("查询已开放的端口 netstat -anp")]),t._v(" "),a("p",[t._v("查询指定端口是否已开 firewall-cmd --query-port=3306/tcp")]),t._v(" "),a("p",[t._v("提示 yes，表示开启；no表示未开启")]),t._v(" "),a("p",[a("strong",[t._v("二、查看防火墙状态")])]),t._v(" "),a("p",[t._v("查看防火墙状态 systemctl status firewalld")]),t._v(" "),a("p",[t._v("开启防火墙 systemctl start firewalld")]),t._v(" "),a("p",[t._v("关闭防火墙 systemctl stop firewalld")]),t._v(" "),a("p",[t._v("开启防火墙 service firewalld start")]),t._v(" "),a("p",[t._v("若遇到无法开启")]),t._v(" "),a("p",[t._v("先用：systemctl unmask firewalld.service")]),t._v(" "),a("p",[t._v("然后：systemctl start firewalld.service")]),t._v(" "),a("p",[a("strong",[t._v("三、对外开发端口")])]),t._v(" "),a("p",[t._v("查看想开的端口是否已开")]),t._v(" "),a("p",[t._v("firewall-cmd --query-port=3306/tcp")]),t._v(" "),a("p",[a("strong",[t._v("四、添加指定需要开放的端口")])]),t._v(" "),a("p",[t._v("firewall-cmd --add-port=3306/tcp --permanent")]),t._v(" "),a("p",[t._v("重载入添加的端口")]),t._v(" "),a("p",[t._v("firewall-cmd --reload")]),t._v(" "),a("p",[t._v("查询指定端口是否开启成功")]),t._v(" "),a("p",[t._v("firewall-cmd --query-port=3306/tcp")]),t._v(" "),a("p",[a("strong",[t._v("五、移除指定端口")])]),t._v(" "),a("p",[t._v("firewall-cmd --permanent --remove-port=3306/tcp")])])}),[],!1,null,null,null);s.default=e.exports}}]);