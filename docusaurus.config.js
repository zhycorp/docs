const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Zhycorp Docs',
  url: 'https://docs.zhycorp.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'zhycorp',
  projectName: 'documentation',
  plugins: [
    [
			'docusaurus-plugin-typedoc',
			{
				id: 'Sapphire-Plugins',
				entryPointStrategy: 'resolve',
				entryPoints: [
					'./projects/sapphire-plugins/packages/command-context/src/index.ts'
				],
				tsconfig: './tsconfig.typedoc.json',
				readme: 'none',
				out: 'documentation/plugins',
				plugin: ['typedoc-plugin-mdn-links', 'typedoc-plugin-djs-links'],
				sidebar: {
					categoryLabel: 'Zhycorp Sapphire Plugins',
					position: 2
				}
			}
		],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/zhycorp/docs/tree/main/',
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
      navbar: {
        title: 'Zhycorp',
        logo: {
          alt: 'Zhycorp Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/zhycorp/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://zhycorp.org/discord',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/zhycorp',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Zhycorp Organization`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
