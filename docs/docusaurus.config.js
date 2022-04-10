// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  themes: ['@docusaurus/theme-live-codeblock'],
  title: 'string-factory',
  tagline: 'A tiny JavaScript library for working with strings.',
  url: 'https://string-factory.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sandypockets', // Usually your GitHub org/user name.
  projectName: 'string-factory', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */

      ({
        gtag: {
          trackingID: 'G-XLD52JB83P',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sandypockets/string-factory/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/calendar.svg",
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true
      },
      navbar: {
        title: 'string-factory',
        hideOnScroll: true,
        logo: {
          alt: 'My Site Logo',
          src: 'img/production.svg',
          srcDark: 'img/production.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'docs',
          },
          {
            href: 'https://github.com/sandypockets/string-factory',
            label: 'github',
            position: 'right',
          },
          {
            href: 'https://npmjs.com/package/string-factory',
            label: 'npm',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'docs',
            items: [
              {
                label: 'installation',
                to: '/docs/introduction/',
              },
              {
                label: 'usage',
                to: '/docs/introduction/usage',
              },
              {
                label: 'functions',
                to: '/docs/functions/',
              },
              {
                label: 'playground',
                to: '/docs/introduction/playground',
              },
              {
                label: 'contributing',
                to: '/docs/contributing',
              },
            ],
          },
          {
            title: 'where to get string-factory',
            items: [
              {
                label: 'npm',
                href: 'https://www.npmjs.com/package/string-factory',
              },
              {
                label: 'yarn',
                href: 'https://yarnpkg.com/package/string-factory',
              },
              {
                label: 'unpkg',
                href: 'https://unpkg.com/string-factory/dist/index.js',
              },
              {
                label: 'jsdeliver',
                href: 'https://cdn.jsdelivr.net/npm/string-factory/dist/index.js',
              },
            ],
          },
          {
            title: 'more',
            items: [
              {
                label: 'github',
                href: 'https://github.com/sandypockets/string-factory',
              },
              {
                label: 'blog',
                href: 'https://sandypockets/dev',
              },
              {
                label: 'buy me a coffee',
                href: 'https://buymeacoffee.com/sandypockets',
              },
            ],
          },
        ],
        copyright: `copyright © ${new Date().getFullYear()} string-factory docs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
