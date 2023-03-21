# Database Learning

[![GitHub stars](https://img.shields.io/github/stars/cworld1/db-learning?style=flat-square)](https://github.com/cworld1/db-learning/stargazers)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/y/cworld1/db-learning?label=commits&style=flat-square)](https://github.com/cworld1/db-learning/commits)
[![Vercel Production Status](https://img.shields.io/github/deployments/cworld1/db-learning/production?label=vercel&logo=vercel&style=flat-square)](https://vercel.com/cworld0/ds-learning)
[![GitHub license](https://img.shields.io/github/license/cworld1/db-learning?style=flat-square)](https://github.com/cworld1/db-learning/blob/master/LICENSE)

Some notes and code about CWorld learning Database.

[前往阅读 →](https://ds.cworld.top/)

## Quick Start the Project Online

Click the button to clone this repository and deploy it on Vercel:

[![](https://vercel.com/button)](https://vercel.com/new/clone?s=https://github.com/cworld1/db-learning&showOptionalTeamCreation=false)

## Local Development

Environment requirements:

- [Node.js](https://nodejs.org) 16.14.0+

> If your Node.js version is lower than 16.13.0，Please install [corepack](https://nodejs.org/api/corepack.html) first.
>
> ```shell
> npm install -g corepack
> ```

### 1. Enable corepack & pnpm

```shell
corepack enable
corepack prepare pnpm@latest --activate
```

### 2. Clone the repository

```shell
git clone https://github.com/cworld1/db-learning.git
cd ds-learning
```

### 2. Install dependencies

```shell
pnpm i
```

### 3. Start the development server

```shell
pnpm dev
```

Then, visit `localhost:3000`.

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### 4. Some useful commands

`pnpm start`
Starts the development server.

`pnpm build`
Bundles your website into static files for production.

## 贡献

由于作者只是个正在浅学 Database 的初学者，所以笔记难免存在明显纰漏，还请读者们多多海涵。此外，也欢迎诸位使用 PR 或 Issues 来改善它们。

## 鸣谢

一些电子教材对作者学习上帮助颇多，没有这些资料，就没有这部笔记。在此对这些教材的原作者深表感谢。读者若对此项目笔记抱有疑惑，也可以仔细阅读以下教材以作弥补。

- [数据库原理及应用 - shark-Gao 的博客](https://blog.csdn.net/qq_58608526/article/details/122922114)
- [数据库原理及应用教程（微课版）](https://annas-archive.org/md5/08cf09ef24ff4989641044caa544b29e)
- [数据库系统概论（第 5 版）](https://z-lib.io/book/13860288)

## License

This project is licensed under the GPL 3.0 License.

[![Creative Commons](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en)

This documention is admitted by [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/).

> **Note** This website is built using [Nextra](https://nextra.site), a modern static website generator.
