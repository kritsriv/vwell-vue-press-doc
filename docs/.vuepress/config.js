module.exports = {
    // site config
    lang: 'en-TH',
    title: 'VWELL Asset management',
    description: 'This is my first VuePress site',
  
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      navbar: [
        // NavbarItem
        {
          text: 'คู่มือการใช้งาน',
          link: '/guide/',
        },
      ],
      sidebar: [
        // SidebarItem
        {
          text: 'คู่มือการใช้งาน',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/how-to-install.md',
            '/guide/setting.md',
          ]
        },
      ],
    },

  }