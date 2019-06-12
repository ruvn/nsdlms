module.exports = {
  siteName: 'LMS Admin',
  copyright: 'LMS',
  logoPath: '/lms.png',
  apiPrefix: '/api/v1',
  fixedHeader: true, // sticky primary layout header

  /* Layout configuration, specify which layout to use for route. */
  layouts: [
    {
      name: 'primary',
      include: [/.*/],
      exclude: [/(\/(en|zh))*\/login/],
    },
  ],

  /* I18n configuration, `languages` and `defaultLanguage` are required currently. */
  i18n: {
    /* Countrys flags: https://www.flaticon.com/packs/countrys-flags */
    languages: [
      {
        key: 'kr',
        title: 'Korean',
        flag: '/korea.svg',
      },
      {
        key: 'en',
        title: 'English',
        flag: '/america.svg',
      },
      {
        key: 'np',
        title: 'Nepali',
        flag: '/nepal.svg',
      },
    ],
    defaultLanguage: 'en',
  },
}
