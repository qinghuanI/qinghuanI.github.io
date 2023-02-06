module.exports = {
  title: "qinghuanI", // Title for the site. This will be displayed in the navbar.
  theme: "@vuepress/theme-blog",
  port: 3002,
  base: "/",
  themeConfig: {
    // Please keep looking down to see the available options.
    nav: [
      {
        text: "博客",
        link: "/",
      },
      {
        text: "标签",
        link: "/tag/",
      },
      // TODO: support it in coming soon
      // {
      //   text: "读书",
      //   link: "/read/",
      // },
      // {
      //   text: "笔记",
      //   link: "/notes/",
      // },
      {
        text: "关于我",
        link: "/about/",
      },
    ],
    sidebar: {
      "/read/": [{ title: "阅读", path: "/read/", children: [] }],
    },
    dateFormat: "YYYY-MM-DD",
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/qinghuanI",
        },
        {
          type: "mail",
          link: "1062217965@qq.com",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2020-present qinghuanI",
        },
      ],
    },
    globalPagination: {
      prevText: "上一页", // Text for previous links.
      nextText: "下一页", // Text for next links.
      lengthPerPage: "10", // Maximum number of posts per page.
      layout: "Pagination",
    },
    feed: {
      canonical_base: "https://qinghuanI.github.io/my-blog",
      rss: true,
      atom: false,
      json: false,
    },
    serviceWorker: true,
    updatePopup: true,
  },
  plugins: [],
};
