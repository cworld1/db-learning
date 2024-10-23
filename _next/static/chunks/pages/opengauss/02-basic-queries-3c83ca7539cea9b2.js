(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{5943:function(i,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/opengauss/02-basic-queries",function(){return e(4835)}])},4835:function(i,s,e){"use strict";e.r(s),e.d(s,{default:function(){return x},useTOC:function(){return useTOC}});var n=e(5893),h=e(7812),l=e(845),d=e(8925),r={src:"/db-learning/_next/static/media/2178907.8b5b382c.png",height:347,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEUHBAQcExMy7eK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAADklEQVR4nGNgZIACGAMAACsAA1QZR8AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},t={src:"/db-learning/_next/static/media/2178911.d557bfe9.png",height:323,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEUGBQUYFhZ2edfeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADklEQVR4nGNgZIACGAMAACsAA1QZR8AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2},a={src:"/db-learning/_next/static/media/278079.fad75e3c.png",height:206,width:847,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAABlBMVEUFBAQTERGoQQcgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAD0lEQVR4nGNgZGSAABgDAABCAAUs4fdhAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},c={src:"/db-learning/_next/static/media/2179643.c51c9d68.png",height:204,width:1198,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEUEBAMNDg/fJ1G7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAADElEQVR4nGNgZIAAAAARAALyGaCZAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1};function useTOC(i){let s={code:"code",...(0,d.a)()};return[{value:"内连接查询",id:"内连接查询",depth:2},{value:"内连接查询",id:"内连接查询-1",depth:3},{value:"内连接查询的使用",id:"内连接查询的使用",depth:3},{value:"外连接查询",id:"外连接查询",depth:2},{value:"外连接查询",id:"外连接查询-1",depth:3},{value:"外连接查询的使用",id:"外连接查询的使用",depth:3},{value:"关键字子查询",id:"关键字子查询",depth:2},{value:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.code,{children:"ALL"})," 关键字"]}),id:"all-关键字",depth:3},{value:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.code,{children:"ANY"})," 和 ",(0,n.jsx)(s.code,{children:"SOME"})," 关键字"]}),id:"any-和-some-关键字",depth:3},{value:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.code,{children:"IN"})," 关键字"]}),id:"in-关键字",depth:3},{value:"分页子查询",id:"分页子查询",depth:2},{value:"什么是分页查询",id:"什么是分页查询",depth:3},{value:"limit 和 offset 实现的分页查询",id:"limit-和-offset-实现的分页查询",depth:3},{value:"大数据量下分页查询优化",id:"大数据量下分页查询优化",depth:3}]}var x=(0,h.c)(function(i){let{toc:s=useTOC(i)}=i,e={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,n.jsx)(e.p,{children:"为了完成本关任务，你需要掌握："}),"\n",(0,n.jsx)(e.p,{children:"1.什么是内连接查询； 2.如何使用内连接查询。"}),"\n",(0,n.jsx)(e.h3,{id:s[1].id,children:s[1].value}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"仅将两个表中满足连接条件的行组合起来作为结果集，称为内连接；"}),"\n",(0,n.jsxs)(e.li,{children:["关键字：",(0,n.jsx)(e.code,{children:"[inner] join ...  on"}),"。"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"语法："}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"表1 [inner] "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"join"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" 表2 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"on"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 表1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"字段"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"表2"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"字段"})]})})}),"\n",(0,n.jsx)(e.p,{children:"语法解释："}),"\n",(0,n.jsx)(e.p,{children:"从表 1 中取出每一条记录，去表 2 中与所有的记录进行匹配，匹配必须是某个条件在表 1 中与表 2 中相同，最终才会保留结果，否则不保留。inner 关键字可省略不写；on 表示连接条件：条件字段就是代表相同的业务含义（如下面两张表中的 employee.dept_id 和 department.id），大多数情况下为两张表中的主外键关系。"}),"\n",(0,n.jsx)(e.h3,{id:s[2].id,children:s[2].value}),"\n",(0,n.jsxs)(e.p,{children:["现在我们有两张表，数据如下： ",(0,n.jsx)(e.code,{children:"employee"}),"表数据："]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"id"}),(0,n.jsx)(e.th,{children:"name"}),(0,n.jsx)(e.th,{children:"dept_id"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Nancy"}),(0,n.jsx)(e.td,{children:"4"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"Tod"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"Carly"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"4"}),(0,n.jsx)(e.td,{children:"Allen"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"5"}),(0,n.jsx)(e.td,{children:"Mary"}),(0,n.jsx)(e.td,{children:"(null)"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"department"}),"表数据："]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"id"}),(0,n.jsx)(e.th,{children:"name"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"开发部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"测试部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"运维部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"4"}),(0,n.jsx)(e.td,{children:"销售部"})]})]})]}),"\n",(0,n.jsx)(e.p,{children:"现在想要查询出员工姓名以及其对应的部门名称，我们就使用内连接来进行查询。"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"我们可以将关联查询思路分为三步："}),"\n"]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"确定所连接的表"}),"\n",(0,n.jsx)(e.li,{children:"确定所要查询的字段，"}),"\n",(0,n.jsx)(e.li,{children:"确定连接条件与连接方式。"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"示例："}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" emp"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" as"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" empname,"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"dept"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" as"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" deptname"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" department "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"as"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" dept"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"join"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" employee "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"as"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" amp "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"on"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" dept"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"id"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"emp"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"dept_id"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(e.span,{children:" "})]})}),"\n",(0,n.jsx)(e.p,{children:"结果："}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"empname"}),(0,n.jsx)(e.th,{children:"deptname"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Carly"}),(0,n.jsx)(e.td,{children:"开发部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Tod"}),(0,n.jsx)(e.td,{children:"测试部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Allen"}),(0,n.jsx)(e.td,{children:"测试部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Nancy"}),(0,n.jsx)(e.td,{children:"销售部"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["其中，没有部门的员工和部门没有员工的部门都没有被查出来，这就是内连接的特点，只查询在连接表中有对应的记录，其中 ",(0,n.jsx)(e.code,{children:"dept.id=emp.dept_id"})," 是连接条件。"]}),"\n",(0,n.jsx)(e.h2,{id:s[3].id,children:s[3].value}),"\n",(0,n.jsx)(e.p,{children:"为了完成本关任务，你需要掌握："}),"\n",(0,n.jsx)(e.p,{children:"1.什么是外连接查询； 2.如何使用外连接查询。"}),"\n",(0,n.jsx)(e.h3,{id:s[4].id,children:s[4].value}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["以某张表为主，取出里面的所有记录，然后每条与另外一张表进行连接，不管能不能匹配上条件，最终都会保留。能匹配，正确保留；不能匹配，其它表的字段都置空（",(0,n.jsx)(e.code,{children:"null"}),"），称为外连接。"]}),"\n",(0,n.jsx)(e.li,{children:"外连接查询分为左外连接查询和右外连接查询；"}),"\n",(0,n.jsxs)(e.li,{children:["关键字：",(0,n.jsx)(e.code,{children:"left/right [outer] join ... on"}),"。"]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"语法："}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"表1 left"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"/"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"right [outer]  "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"join"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" 表2 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"on"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 表1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"字段"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"表2"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"字段"})]})})}),"\n",(0,n.jsx)(e.p,{children:"语法解释："}),"\n",(0,n.jsx)(e.p,{children:"左外连接：在内连接的基础上，还包含表 1 中所有不符合条件的数据行，并在其中的表 2 列填写 NULL；右外连接：在内连接的基础上，还包含表 2 中所有不符合条件的数据行，并在其中的表 1 列填写 NULL。"}),"\n",(0,n.jsx)(e.h3,{id:s[5].id,children:s[5].value}),"\n",(0,n.jsx)(e.p,{children:"我们仍使用如下两张数据表："}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"employee"}),"表数据："]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"id"}),(0,n.jsx)(e.th,{children:"name"}),(0,n.jsx)(e.th,{children:"dept_id"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"Nancy"}),(0,n.jsx)(e.td,{children:"4"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"Tod"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"Carly"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"4"}),(0,n.jsx)(e.td,{children:"Allen"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"5"}),(0,n.jsx)(e.td,{children:"Mary"}),(0,n.jsx)(e.td,{children:"(null)"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"department"}),"表数据："]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"id"}),(0,n.jsx)(e.th,{children:"name"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"开发部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"测试部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"运维部"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"4"}),(0,n.jsx)(e.td,{children:"销售部"})]})]})]}),"\n",(0,n.jsxs)(e.p,{children:["例如查询所有员工姓名以及他所在部门，在",(0,n.jsx)(e.strong,{children:"内连接"}),"中 ",(0,n.jsx)(e.code,{children:"Mary"})," 没有被查出，因为他没有对应的部门，现在想把 ",(0,n.jsx)(e.code,{children:"Mary"})," 也查出来，就要使用",(0,n.jsx)(e.strong,{children:"左外连接"}),"。"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:",",placeholder:"blur",src:r})}),"\n",(0,n.jsxs)(e.p,{children:["此查询语句以 ",(0,n.jsx)(e.code,{children:"employee"})," 为主表查询，因此最终记录至少不少于主表已有的记录数。"]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"右外连接是同理的，只是基准表的位置变化了而已。"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:",",placeholder:"blur",src:t})}),"\n",(0,n.jsxs)(e.p,{children:["我们在这里只是将 ",(0,n.jsx)(e.code,{children:"left"})," 修改成了 ",(0,n.jsx)(e.code,{children:"right"})," ,但是基准表变化了，是以 ",(0,n.jsx)(e.code,{children:"department"})," 表的数据去匹配 ",(0,n.jsx)(e.code,{children:"employee"})," 表，所以左外连接能做到的查询，右外连接也能做到，仅展现的效果有所不同。"]}),"\n",(0,n.jsx)(e.p,{children:"虽然左外连接和右外连接有主表差异，但左外连接和右外连接可以互转，如上面的右外连接也等效于如下查询语句，只需将基准表换一下："}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"img",placeholder:"blur",src:a})}),"\n",(0,n.jsx)(e.h2,{id:s[6].id,children:s[6].value}),"\n",(0,n.jsxs)(e.p,{children:["由于列子查询返回的结果集是 ",(0,n.jsx)(e.code,{children:"N"})," 行一列，因此不能直接使用 ",(0,n.jsx)(e.code,{children:"="})," 、",(0,n.jsx)(e.code,{children:">"}),"、",(0,n.jsx)(e.code,{children:"<"}),"、",(0,n.jsx)(e.code,{children:">="}),"、",(0,n.jsx)(e.code,{children:"<="}),"、",(0,n.jsx)(e.code,{children:"<>"}),"这些比较标量结果的操作符。在列子查询中可以使用 ",(0,n.jsx)(e.code,{children:"ALL"}),"、",(0,n.jsx)(e.code,{children:"ANY"}),"、",(0,n.jsx)(e.code,{children:"SOME"})," 和 ",(0,n.jsx)(e.code,{children:"IN"}),"关键字操作符。"]}),"\n",(0,n.jsx)(e.p,{children:"为了完成本关任务，你需要掌握：如何在子查询中使用关键字进行查询。"}),"\n",(0,n.jsx)(e.h3,{id:s[7].id,children:s[7].value}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"ALL"}),"必须接在一个比较运算符的后面，表示与子查询返回的",(0,n.jsx)(e.strong,{children:"所有值"}),"比较都为 ",(0,n.jsx)(e.code,{children:"TRUE"})," 则返回 ",(0,n.jsx)(e.code,{children:"TRUE"}),"。"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"table1"})," 表数据："]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsx)(e.tr,{children:(0,n.jsx)(e.th,{children:"col1"})})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsx)(e.tr,{children:(0,n.jsx)(e.td,{children:"2"})}),(0,n.jsx)(e.tr,{children:(0,n.jsx)(e.td,{children:"10"})})]})]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"table2"})," 表数据："]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsx)(e.tr,{children:(0,n.jsx)(e.th,{children:"col2"})})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsx)(e.tr,{children:(0,n.jsx)(e.td,{children:"5"})}),(0,n.jsx)(e.tr,{children:(0,n.jsx)(e.td,{children:"12"})}),(0,n.jsx)(e.tr,{children:(0,n.jsx)(e.td,{children:"20"})})]})]}),"\n",(0,n.jsx)(e.p,{children:"举个例子："}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"SELECT"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" col1 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"FROM"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" table1 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"WHERE"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" col1 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ALL ("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"SELECT"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" col2 "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"FROM"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" table2)"})]})})}),"\n",(0,n.jsxs)(e.p,{children:["该查询语句不会返回任何结果，因为 ",(0,n.jsx)(e.code,{children:"col1"})," 中没有比 ",(0,n.jsx)(e.code,{children:"col2"})," 所有值都大的值。"]}),"\n",(0,n.jsx)(e.h3,{id:s[8].id,children:s[8].value}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"ANY"})," 与比较操作符联合使用，表示与子查询返回的",(0,n.jsx)(e.strong,{children:"任何值"}),"比较为 ",(0,n.jsx)(e.code,{children:"TRUE "}),"，则返回 ",(0,n.jsx)(e.code,{children:"TRUE"}),"。 ",(0,n.jsx)(e.code,{children:"SOME"})," 是 ",(0,n.jsx)(e.code,{children:"ANY"})," 的别名，一般用的比较少。"]}),"\n",(0,n.jsx)(e.p,{children:"仍使用上面二张表的数据："}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{alt:"img",placeholder:"blur",src:c})}),"\n",(0,n.jsxs)(e.p,{children:["在子查询中，返回的是 ",(0,n.jsx)(e.code,{children:"table2"})," 的所有 ",(0,n.jsx)(e.code,{children:"col2"}),"列的结果 ",(0,n.jsx)(e.code,{children:"（5,12,20）"}),"，然后将 ",(0,n.jsx)(e.code,{children:"table1"})," 中 ",(0,n.jsx)(e.code,{children:"col1"})," 的值与之进行比较，只要大于",(0,n.jsx)(e.code,{children:"col2"}),"的任何值则为",(0,n.jsx)(e.code,{children:"TRUE"}),"，因此查询结果为",(0,n.jsx)(e.code,{children:"10"}),"。"]}),"\n",(0,n.jsx)(e.h3,{id:s[9].id,children:s[9].value}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"IN"})," 的意思就是指定的一个值是否在这个集合中，如果在就返回 ",(0,n.jsx)(e.code,{children:"TRUE"}),"；否则就返回 ",(0,n.jsx)(e.code,{children:"FALSE"})," 了，同 ",(0,n.jsx)(e.code,{children:"IN"})," (项 ",(0,n.jsx)(e.code,{children:"1"}),"，项 ",(0,n.jsx)(e.code,{children:"2"}),"，…)；"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"IN"})," 是 ",(0,n.jsx)(e.code,{children:"= ANY"})," 的别名，二者相同，但 ",(0,n.jsx)(e.code,{children:"NOT IN"})," 的别名却不是 ",(0,n.jsx)(e.code,{children:"<> ANY"})," 而是 ",(0,n.jsx)(e.code,{children:"<> SOME"}),"。"]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:s[10].id,children:s[10].value}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"如何根据页数和每页数据量进行分页查询；"}),"\n",(0,n.jsx)(e.li,{children:"大数据量级进行优化分页查询。"}),"\n"]}),"\n",(0,n.jsx)(e.h3,{id:s[11].id,children:s[11].value}),"\n",(0,n.jsxs)(e.p,{children:["当一个表中有很多符合查询条件的数据的时候，我们往往不需要把他们全部一次性取出来，那样对查询效率或者服务器性能来说都会是一个极大的挑战:例如最简单的商城，假设商城中有一万个数据，但我们在前端可能只会每次看到一页 ",(0,n.jsx)(e.code,{children:"10"})," 个左右的数据，当我们浏览完这十个商品后，点击下一页浏览其他的商品，这样的分页浏览，对实际存储商品数据的 ",(0,n.jsx)(e.code,{children:"MySQL"})," 数据库来说，实际上就是使用了 ",(0,n.jsx)(e.code,{children:"MySQL"})," 的分页查询功能。"]}),"\n",(0,n.jsx)(e.p,{children:"那么我们该怎么实现分页查询呢？"}),"\n",(0,n.jsx)(e.h3,{id:s[12].id,children:s[12].value}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"limit"})," 在之前的学习中应该有学习到，它可以返回符合条件的 ",(0,n.jsx)(e.code,{children:"limit"})," 条数据："]}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 10"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(e.span,{children:" "})]})}),"\n",(0,n.jsx)(e.p,{children:"输出： 检索记录行符合条件的10条数据"}),"\n",(0,n.jsxs)(e.p,{children:["那么我们也可以利用 ",(0,n.jsx)(e.code,{children:"limit"})," 和 ",(0,n.jsx)(e.code,{children:"offset"})," 来进行分页查询:"]}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 10"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" offset "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(e.span,{children:" "})]})}),"\n",(0,n.jsxs)(e.p,{children:["输出：检索记录行符合条件的 ",(0,n.jsx)(e.code,{children:"11-20"})," 条数据"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"limit"})," 之后的数字代表偏移量，",(0,n.jsx)(e.code,{children:"offset"})," 代表返回记录的最大值，可以通俗的理解为，从 ",(0,n.jsx)(e.code,{children:"table"})," 中取出第 ",(0,n.jsx)(e.code,{children:"limit+1"})," 行到 ",(0,n.jsx)(e.code,{children:"limit+offset+1"})," 行数据(",(0,n.jsx)(e.code,{children:"MySQL"})," 偏移值从 ",(0,n.jsx)(e.code,{children:"0"})," 开始计算)。"]}),"\n",(0,n.jsxs)(e.p,{children:["在实际使用中，我们可以直接把 ",(0,n.jsx)(e.code,{children:"offset"})," 直接省略掉："]}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 10"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsx)(e.span,{children:" "})]})}),"\n",(0,n.jsxs)(e.p,{children:["该语句效果与带 ",(0,n.jsx)(e.code,{children:"offset"})," 实际上是一模一样的。"]}),"\n",(0,n.jsx)(e.p,{children:"通过分页查询，我们可以精确的定位到行数直接取出符合条件的多条数据，但是这也同样存在着性能问题。"}),"\n",(0,n.jsx)(e.h3,{id:s[13].id,children:s[13].value}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 100"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"100"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"100"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 10000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"100"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 100000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"100"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 1000000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"100"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]})]})}),"\n",(0,n.jsx)(e.p,{children:"以上语句在实际使用中实际上查询速度会是越来越慢的，这是因为分页查询方式会从数据库第一条记录开始扫描，所以越往后，查询速度越慢，而且查询的数据越多，也会拖慢总查询速度。"}),"\n",(0,n.jsx)(e.p,{children:"如果可以直接定位到偏移量所在记录，那么查询速度肯定能得到一个巨大的提升，所以可以考虑添加一个嵌套子查询，先查询到偏移量位置，再进行分页："}),"\n",(0,n.jsx)(e.pre,{tabIndex:"0","data-language":"sql","data-word-wrap":"","data-copy":"",children:(0,n.jsx)(e.code,{children:(0,n.jsxs)(e.span,{children:[(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" *"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" and"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" id"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"select"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" id "}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" table"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" where"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" xxx"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"xxx"'}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 100000"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"limit"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" 100"}),(0,n.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:";"})]})})})]})},"/opengauss/02-basic-queries",{filePath:"pages/opengauss/02-basic-queries.md",timestamp:1729695176e3,pageMap:l.v,frontMatter:{title:"连接查询和子查询"},title:"连接查询和子查询"},"undefined"==typeof RemoteContent?useTOC:RemoteContent.useTOC)},845:function(i,s,e){"use strict";e.d(s,{v:function(){return n}});let n=[{data:{intro:"Introduction","00-at-the-beginning":"At the beginning","-- Main Chapter":{type:"separator",title:"Main Chapter"},"01-ds-sys-summary":"数据库系统概述","02-relation-db-sys":"关系数据库","03-data-def-lang":"关系数据库标准语言——SQL","04-relation-db-theory":"关系数据库理论","05-ds-security-protect":"数据库安全保护","06-db-design":"数据库设计","-- Extend":{type:"separator",title:"Extend"},opengauss:"OpenGauss",experiment:"Experiment","ex01-ds-type":"Ex01: 数据库类型",last:"At the last",index:{title:"Home",type:"page",theme:{layout:"raw"}},documention:{title:"Documention",type:"page",href:"./intro"},contact:{title:"Blog ↗",type:"page",href:"https://blog.cworld.top/",newWindow:!0}}},{name:"00-at-the-beginning",route:"/00-at-the-beginning",frontMatter:{title:"At the Beginning"}},{name:"01-ds-sys-summary",route:"/01-ds-sys-summary",frontMatter:{title:"第 1 章 数据库系统概述"}},{name:"02-relation-db-sys",route:"/02-relation-db-sys",frontMatter:{title:"第 2 章 关系数据库"}},{name:"03-data-def-lang",route:"/03-data-def-lang",frontMatter:{title:"第 3 章 关系数据库标准语言--SQL"}},{name:"04-relation-db-theory",route:"/04-relation-db-theory",frontMatter:{title:"第 4 章 关系数据库理论"}},{name:"05-ds-security-protect",route:"/05-ds-security-protect",frontMatter:{title:"第 5 章 数据库安全保护"}},{name:"06-db-design",route:"/06-db-design",frontMatter:{title:"第 6 章 数据库设计"}},{name:"ex01-ds-type",route:"/ex01-ds-type",frontMatter:{title:"数据库类型"}},{name:"experiment",route:"/experiment",children:[{name:"01-setup-mysql",route:"/experiment/01-setup-mysql",frontMatter:{title:"01 Basic Mysql, Create table, alter table"}},{name:"02-select-create-view",route:"/experiment/02-select-create-view",frontMatter:{title:"02 Practicing Select and Creating view"}},{name:"03-constraints-and-indexing",route:"/experiment/03-constraints-and-indexing",frontMatter:{title:"03 Data integrity constraints, the function of use, index creation"}},{name:"04-procedure-function-cursor",route:"/experiment/04-procedure-function-cursor",frontMatter:{title:"04 Procedure, Function and Cursor"}},{name:"05-access-control",route:"/experiment/05-access-control",frontMatter:{title:"05 Mysql access control"}}]},{name:"experiment",route:"/experiment",frontMatter:{sidebarTitle:"Experiment"}},{name:"index",route:"/",frontMatter:{title:"Database Learning – Created by CWorld",gitTimestamp:!1}},{name:"intro",route:"/intro",frontMatter:{sidebarTitle:"Intro"}},{name:"last",route:"/last",frontMatter:{sidebarTitle:"Last"}},{name:"opengauss",route:"/opengauss",children:[{name:"01-getting-started",route:"/opengauss/01-getting-started",frontMatter:{title:"初识 OpenGauss"}},{name:"02-basic-queries",route:"/opengauss/02-basic-queries",frontMatter:{title:"连接查询和子查询"}},{name:"03-aggregate-fun-query",route:"/opengauss/03-aggregate-fun-query",frontMatter:{title:"使用聚合函数查询"}},{name:"04-select-data-group",route:"/opengauss/04-select-data-group",frontMatter:{title:"分组选择数据"}},{name:"05-alter-database",route:"/opengauss/05-alter-database",frontMatter:{title:"修改数据库"}},{name:"06-other-func-use",route:"/opengauss/06-other-func-use",frontMatter:{title:"其他函数的使用"}}]},{name:"opengauss",route:"/opengauss",frontMatter:{sidebarTitle:"Opengauss"}}]}},function(i){i.O(0,[812,774,888,179],function(){return i(i.s=5943)}),_N_E=i.O()}]);