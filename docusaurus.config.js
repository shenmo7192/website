const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  plugins: ['docusaurus-plugin-sass'],
  title: '星火商店官方网站',
  tagline: '星火商店是Linux系统下的一款应用商店',
  url: 'https://www.spark-app.store/',  
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'metanoia1989', // Usually your GitHub org/user name.
  projectName: 'spark-store-website', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  themeConfig: {
    colorMode:{
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
            switchConfig: {        
              // Icon for the switch while in dark mode       
              darkIcon: '🌙',
        // CSS to apply to dark icon,        // React inline style object        // see https://reactjs.org/docs/dom-elements.html#style       
              darkIconStyle: {
                marginLeft: '2px',        
              },
        // Unicode icons such as '\u2600' will work        // Unicode with 5 chars require brackets: '\u{1F602}'       
              lightIcon: '\u{1F602}',
              lightIconStyle: {
                marginLeft: '1px',        
              },      
            },
    },
    navbar: {
      title: '星火商店',
      logo: {
        alt: 'Logo',
        src: 'img/dalogo.png',
      },
      items: [
        {
          to: '/', 
          label: 'Home', 
          position: 'right'
        },
        {
          to: '/donate', 
          label: 'Donate', 
          position: 'right'
        },
        {
          to: '/timeline', 
          label: 'Timeline', 
          position: 'right'
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'right'
        },
        {
          type: 'doc',
          docId: 'index',
          position: 'right',
          label: 'Tutorial',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Spark Store, Inc. Built with Docusaurus.`,
      // links: [
      //   {
      //     title: '社区协作',
      //     items: [
      //       {
      //         label: 'Gitee',
      //         href: 'https://gitee.com/deepin-community-store/website',
      //       },
      //       {
      //         label: 'Rocket chat',
      //         href: 'https://chat.spark-app.store/',
      //       },
      //       {
      //         label: 'Wekan',
      //         href: 'https://wekan.spark-app.store/',
      //       },
      //     ]
      //   },
      //   {
      //     title: '友情链接',
      //     items: [
      //       {
      //         label: '深度科技论坛',
      //         href: 'https://bbs.deepin.org/',
      //       },
      //       {
      //         label: '统信UOS社区',
      //         href: 'https://bbs.chinauos.com/',
      //       },
      //       {
      //         label: 'DOSU社区',
      //         href: 'https://www.deepinos.org/',
      //       },
      //       {
      //         label: '快点搜',
      //         href: 'https://quickso.cn/',
      //       }
      //     ]
      //   }
      // ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://gitee.com/deepin-community-store/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitee.com/deepin-community-store/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
  }
};
