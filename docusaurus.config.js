import {themes as prismThemes} from 'prism-react-renderer';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ultimate GD Optimization Guide',
  tagline: 'Achieve the highest performance, lowest latency, and best experience.',
  favicon: 'img/favicon.ico',
  url: 'https://3lit3hax.github.io',
  baseUrl: '/ultimate-gd-optimization/',

  organizationName: '3lit3hax',
  projectName: 'ultimate-gd-optimization',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Optionally, update this editUrl to point to your repo if you want "Edit this page" links.
          editUrl:
            'https://github.com/3lit3hax/ultimate-gd-optimization/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Optionally, update this editUrl to point to your repo if you want "Edit this page" links.
          editUrl:
            'https://github.com/3lit3hax/ultimate-gd-optimization/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ultimate GD Optimization Guide',
        logo: {
          alt: 'Logo',
          src: 'img/3lit3hax.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            href: 'https://github.com/3lit3hax/ultimate-gd-optimization',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Optimization Guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord Server',
                href: 'https://discordapp.com/',
              },
              {
                label: 'TikTok',
                href: 'https://tiktok.com/@3lit3hax/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/3lit3hax/ultimate-gd-optimization',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 3lit3hax`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;