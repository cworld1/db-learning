import meta from "../../../pages/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "00-at-the-beginning",
  route: "/00-at-the-beginning",
  frontMatter: {
    "title": "At the Beginning"
  }
}, {
  name: "01-ds-sys-summary",
  route: "/01-ds-sys-summary",
  frontMatter: {
    "title": "第 1 章 数据库系统概述"
  }
}, {
  name: "02-relation-db-sys",
  route: "/02-relation-db-sys",
  frontMatter: {
    "title": "第 2 章 关系数据库"
  }
}, {
  name: "03-data-def-lang",
  route: "/03-data-def-lang",
  frontMatter: {
    "title": "第 3 章 关系数据库标准语言--SQL"
  }
}, {
  name: "04-relation-db-theory",
  route: "/04-relation-db-theory",
  frontMatter: {
    "title": "第 4 章 关系数据库理论"
  }
}, {
  name: "05-ds-security-protect",
  route: "/05-ds-security-protect",
  frontMatter: {
    "title": "第 5 章 数据库安全保护"
  }
}, {
  name: "06-db-design",
  route: "/06-db-design",
  frontMatter: {
    "title": "第 6 章 数据库设计"
  }
}, {
  name: "ex01-ds-type",
  route: "/ex01-ds-type",
  frontMatter: {
    "title": "数据库类型"
  }
}, {
  name: "experiment",
  route: "/experiment",
  children: [{
    name: "01-setup-mysql",
    route: "/experiment/01-setup-mysql",
    frontMatter: {
      "title": "01 Basic Mysql, Create table, alter table"
    }
  }, {
    name: "02-select-create-view",
    route: "/experiment/02-select-create-view",
    frontMatter: {
      "title": "02 Practicing Select and Creating view"
    }
  }, {
    name: "03-constraints-and-indexing",
    route: "/experiment/03-constraints-and-indexing",
    frontMatter: {
      "title": "03 Data integrity constraints, the function of use, index creation"
    }
  }, {
    name: "04-procedure-function-cursor",
    route: "/experiment/04-procedure-function-cursor",
    frontMatter: {
      "title": "04 Procedure, Function and Cursor"
    }
  }, {
    name: "05-access-control",
    route: "/experiment/05-access-control",
    frontMatter: {
      "title": "05 Mysql access control"
    }
  }]
}, {
  name: "experiment",
  route: "/experiment",
  frontMatter: {
    "sidebarTitle": "Experiment"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Database Learning – Created by CWorld",
    "gitTimestamp": false
  }
}, {
  name: "intro",
  route: "/intro",
  frontMatter: {
    "sidebarTitle": "Intro"
  }
}, {
  name: "last",
  route: "/last",
  frontMatter: {
    "sidebarTitle": "Last"
  }
}, {
  name: "opengauss",
  route: "/opengauss",
  children: [{
    name: "01-getting-started",
    route: "/opengauss/01-getting-started",
    frontMatter: {
      "title": "初识 OpenGauss"
    }
  }, {
    name: "02-basic-queries",
    route: "/opengauss/02-basic-queries",
    frontMatter: {
      "title": "连接查询和子查询"
    }
  }, {
    name: "03-aggregate-fun-query",
    route: "/opengauss/03-aggregate-fun-query",
    frontMatter: {
      "title": "使用聚合函数查询"
    }
  }, {
    name: "04-select-data-group",
    route: "/opengauss/04-select-data-group",
    frontMatter: {
      "title": "分组选择数据"
    }
  }, {
    name: "05-alter-database",
    route: "/opengauss/05-alter-database",
    frontMatter: {
      "title": "修改数据库"
    }
  }, {
    name: "06-other-func-use",
    route: "/opengauss/06-other-func-use",
    frontMatter: {
      "title": "其他函数的使用"
    }
  }]
}, {
  name: "opengauss",
  route: "/opengauss",
  frontMatter: {
    "sidebarTitle": "Opengauss"
  }
}];