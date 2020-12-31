module.exports = {
  title: 'hito-blog',
  description: 'hito-blog',
  dest: 'dist',
  base: '/hito-blog/',
  head: [
      ['link', { rel: 'icon', href: `/favicon.png` }],
  ],
  plugins: [
      ['redirect', {
          redirectors: [
              { base: '/frontend', alternative: ['canvas/事件'] }
          ]
      }]
  ],
  themeConfig: {
      logo: '/favicon.png',
      lastUpdated: '上次更新',
      editLinks: true,
      docsDir: 'docs',
      nav: [
          { text: '前端', link: '/frontend/' },
          // { text: '后端', link: '/backend/' },
          // { text: 'Demo', link: '/samples/' },
      ],
      sidebar: {
          '/frontend/': [
              {
                  title: 'Canvas',
                  collapsable: false,
                  children: [
                      'canvas/事件'
                  ]
              }
          ]
      }
  }
}