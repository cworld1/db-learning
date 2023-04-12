import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const logo = (
  <span>
    Database Learning
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)

const config: DocsThemeConfig = {
  // 顶栏
  logo,
  project: {
    link: 'https://github.com/cworld1/db-learning',
  },
  chat: {
    link: 'https://t.me/cworld0_cn',
    icon: <svg width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 16C238 16 16 238 16 512s222 496 496 496 496-222 496-496S786 16 512 16z m243.6 339.8l-81.4 383.6c-6 27.2-22.2 33.8-44.8 21l-124-91.4-59.8 57.6c-6.6 6.6-12.2 12.2-25 12.2l8.8-126.2 229.8-207.6c10-8.8-2.2-13.8-15.4-5l-284 178.8-122.4-38.2c-26.6-8.4-27.2-26.6 5.6-39.4l478.2-184.4c22.2-8 41.6 5.4 34.4 39z"></path></svg>
  },

  // seo 优化
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Database Learning'
      }
    }
  },
  head: function useHead() {
    const { title } = useConfig()
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="cn-zh" />
        <meta
          name="description"
          content="CWorld 的 Database 笔记，零散的记录了一些数据库原理及应用课程的内容。"
        />
        <meta
          name="og:description"
          content="CWorld 的 Database 笔记，零散的记录了一些数据库原理及应用课程的内容。"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/assets/og.png" />
        <meta name="twitter:site:domain" content="ds.cworld.top" />
        <meta name="twitter:url" content="https://ds.cworld.top" />
        <meta
          name="og:title"
          content={title ? title + ' – Database Learning' : 'CWorld'}
        />
        <meta name="og:image" content="/assets/og.png" />
        <meta name="apple-mobile-web-app-title" content="Database Learning" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/icons/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/icons/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="stylesheet" href="/custom.css" />
      </>
    )
  },

  // 左侧侧栏
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  // 右侧侧栏
  docsRepositoryBase: 'https://github.com/cworld1/db-learning',
  editLink: {
    text: '在 GitHub 上编辑此页面 →'
  },
  feedback: {
    content: '有问题？来 Github 提 Issues',
    labels: 'feedback'
  },

  // 底栏
  footer: {
    text: (
      <p className="mt-6 text-xs" style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
        <span>
          <script async src="https://busuanzi.icodeq.com/busuanzi.pure.mini.js"></script>
          © {new Date().getFullYear()} • <a href="https://cworld.top/" target="_blank">CWorld</a> • 总访问 <span id="busuanzi_value_site_pv">???</span>
        </span>
        <span>
          由 <a href="https://nextjs.org" target="_blank" rel="external nofollow noopener">Next.js</a> 强力驱动
          <span style={{ padding: "0 .8rem" }}>|</span>
          主题 - <a href="https://nextra.site" target="_blank" rel="external nofollow noopener">Nextra</a>
        </span>
        <style jsx>{`
          a {
            border-bottom: 1px dotted;
          }
        `}</style>
      </p>
    )
  },
}

export default config
