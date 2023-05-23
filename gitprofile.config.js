// gitprofile.config.js

const config = {
  github: {
    username: 'fahedhermoza', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 4, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['PerfilDeveloper', 'Principios-SOLID', 'Escribiendo-Readme.md', 'DevFest-Arequipa-2019'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'fahedhermoza',
    //twitter: 'FahedHermoza',
    //mastodon: 'arifszn@mastodon.social',
    facebook: 'fahedhermoza',
    //instagram: '',
    //dribbble: '',
    //behance: '',
    medium: 'fahedhermoza',
    //dev: 'arifszn',
    //stackoverflow: '6254339/fahed-hermoza', // format: userid/username
    //skype: '',
    //telegram: '',
    //website: 'https://arifszn.com',
    //phone: '',
    //email: 'arifulalamszn@gmail.com',
  },
  /*resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },*/
  skills: [
    'Android',
    'Kotlin',
    'Java',
    'Koin',
    'Coroutines',
    'Room',
    'SQLite',
    'Navigation',
    'MVVM',
    'MVC',
    'MVP',
    'Clean Architecture',
    'Architecture pattern',
    'Design pattern',
    'Android Architecture',
    'Git Flow'

  ],
  experiences: [
    {
      company: 'NTT DATA',
      position: 'Android Engineer',
      from: 'May 2021',
      to: 'Present',
      companyLink: 'https://www.nttdata.com/global/en/about-us',
    },
    {
      company: 'PERU APPS',
      position: 'Android Developer',
      from: 'Aug 2020',
      to: 'Nov 2020',
      companyLink: 'https://www.peruapps.com.pe/',
    },
    {
      company: 'CHUNGHAEMARU PERÚ',
      position: 'Android Developer',
      from: 'Apr 2020',
      to: 'Aug 2020',
      companyLink: 'https://biotraceperu.com/',
    },
    {
      company: 'MASTER PROVIDER',
      position: 'Android Lead',
      from: 'Nov 2019',
      to: 'Mar 2020',
      companyLink: 'http://www.masterprovider.com.pe/',
    },
    {
      company: 'JAVA FOR SMART INFORMATION TECHNOLOGIES',
      position: 'Android Developer',
      from: 'May 2019',
      to: 'Oct 2019',
      companyLink: 'http://www.masterprovider.com.pe/',
    },
    {
      company: 'CHUNGHAEMARU PERÚ',
      position: 'Android Developer',
      from: 'Jun 2016',
      to: 'May 2018',
      companyLink: 'https://biotraceperu.com/',
    },
    {
      company: 'JAVA FOR SMART INFORMATION TECHNOLOGIES',
      position: 'Android Developer',
      from: 'Jun 2015',
      to: 'Jun 2016',
      companyLink: 'http://www.masterprovider.com.pe/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Universidad Nacional de San Antonio Abad del Cusco',
      degree: 'Engineer in Computer and Systems Engineering',
      from: '2018',
      to: '2019',
    },
    {
      institution: 'Universidad Nacional de San Antonio Abad del Cusco',
      degree: 'Bachelor in Computer and Systems Engineering',
      from: '2010',
      to: '2016',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Telefónica',
      description:
        'Esta plataforma interna de ventas es una solución digital que permite la gestion de productos de telefonía como Portabilidad, Cambio de Plan, Cambio de Equipo, Duos, Trios y otros.',
      imageUrl: 'https://static-s.aa-cdn.net/img/gp/20600007542461/B-s53ScPibeZq2X-ItHknmQPi284qUeqn5D_Y_V3QWf6Zbl8PCfL9D6J_DQyGCQGpVo?v=1',
      link: 'https://www.telefonica.com/es/',
    },
    {
      title: 'Tersus Max',
      description:
        'Plataforma integral para el manejo de dispositivos hardware, dispositivos de desinfección con radiación ultravioleta Tipo C (UVC).',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Me Apunto',
      description:
        'Plataforma social para que descubras los mejores centros de vida nocturna, actividades referente a cultura y las mejores promociones de tu ciudad.',
      imageUrl: 'https://drive.google.com/file/d/1P6gnLjgLo452RVXd5VYCBAx0Hwb_CPt0/view?usp=sharing',
      link: 'https://www.facebook.com/MeApuntoQBB',
    },
    {
      title: 'AgrumSoft',
      description:
        'Plataforma de Biotrazabilidad TIC-GPS para los cultivos agrícolas de café y recursos silvestres.',
      imageUrl: 'https://pbs.twimg.com/profile_images/875467286731137024/Ghu23Tqg_400x400.jpg',
      link: 'https://www.youtube.com/watch?v=Y-RaFppOp4Y',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'fahedhermoza', // to hide blog section, keep it empty
    limit: 6, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lemonade',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
