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
      position: 'Lead Android Engineer',
      from: 'Jul 2023',
      to: 'Present',
      companyLink: 'https://www.nttdata.com/global/en/about-us',
    },
    {
      company: 'NTT DATA',
      position: 'Android Engineer',
      from: 'May 2021',
      to: 'Abr 2023',
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
  
   // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Interbank',
      description:
        'Interbank is one of the main financial institutions in Peru and belongs to the Intercorp Financial Services holding.',
      imageUrl: 'https://github.com/FahedHermoza/FahedHermoza.github.io/blob/main/images/Interbank.png?raw=true',
      link: 'https://play.google.com/store/apps/details?id=pe.com.interbank.mobilebanking',
    },
    {
      title: 'Telefónica',
      description:
        'This internal sales platform is a digital solution that allows the management of telephony products such as Portability, Plan Change, Equipment Change, Duos, Trios, and others.',
      imageUrl: 'https://github.com/FahedHermoza/FahedHermoza.github.io/blob/main/images/Telefonica.png?raw=true',
      link: 'https://www.telefonica.com/es/',
    },
    {
      title: 'Tersus Max',
      description:
        'Comprehensive platform for the management of hardware devices, disinfection devices with Type C ultraviolet radiation (UVC).',
      imageUrl: 'https://github.com/FahedHermoza/FahedHermoza.github.io/blob/main/images/TersusMax.jpeg?raw=true',
      link: 'https://www.youtube.com/watch?v=fLEQ9DDHzsM',
    },
    {
      title: 'Me Apunto',
      description:
        'Social platform for you to discover the best nightlife centers, cultural activities, and the best promotions in your city.',
      imageUrl: 'https://github.com/FahedHermoza/FahedHermoza.github.io/blob/main/images/MeApunto.png?raw=true',
      link: 'https://www.youtube.com/watch?v=mEJCUNRvAiA&t=14s',
    },
    {
      title: 'AgrumSoft',
      description:
        'TIC-GPS Biotraceability Platform for agricultural coffee crops and wild resources.',
      imageUrl: 'https://github.com/FahedHermoza/FahedHermoza.github.io/blob/main/images/Agrumsoft.jpeg?raw=true',
      link: 'https://www.youtube.com/watch?v=Y-RaFppOp4Y',
    },
  ],
   certifications: [
    {
      name: 'Good and bad practices in software development',
      body: 'GDSC Fest Perú - Ica, DevFest Ica, Interbank, DevFest Cusco',
      year: 'Sep - Dec, 2023',
      link: 'https://www.linkedin.com/posts/fahedhermoza_gdg-devfest-devfestica23-activity-7140043490842894336-sPtP?utm_source=share&utm_medium=member_desktop'
    },
    {
      name: 'Experiences of a mobile developer',
      body: 'Continental University',
      year: 'Sep 2023',
      link: 'https://www.linkedin.com/posts/fahedhermoza_desarrollomaejvil-androiddev-compartiendoconocimiento-activity-7108140674637570048-DcI6?utm_source=share&utm_medium=member_desktop'
    },
    {
      name: 'Android architecture in the real world',
      body: 'GDG Cusco',
      year: 'May 2023',
      link: 'https://www.linkedin.com/posts/fahedhermoza_gdgcusco-arquitectura-android-activity-7059934148165017600-8p3X?utm_source=share&utm_medium=member_desktop'
    },
    {
      name: 'Flow-based architecture',
      body: 'Android Dev Perú',
      year: 'May 2021',
      link: 'https://youtu.be/4gctqbyKpNA'
    },
    {
      name: 'Architecture Patterns in Android',
      body: 'Smart Cities Perú, GDG Cusco',
      year: 'Feb 2020',
      link: 'https://www.facebook.com/fahed19/posts/pfbid02qbDJMXzU2iSwWxaSupVFijMt3SpDeNzYtybNyaesjPxU6iSmbe6wbPj1G7Afq5czl'
    },
    {
      name: 'Building database with Room',
      body: 'Dev Fest Arequipa',
      year: 'Nov 2019',
      link: 'https://www.facebook.com/fahed19/posts/pfbid0eTzzDPv8emAbEnGnCAHUe3RF2ajLMZxxL7yrkVa1FWYkSASk8Z75WTkjrNmkKpDkl'
    },
    {
      name: 'Migrating Android apps from Java to Kotlin',
      body: 'Dev Fest Cusco',
      year: 'Oct 2019',
      link: 'https://www.facebook.com/gdgcusco/photos/a.1207259889309222/2505608196141045/'
    },
    {
      name: 'Agile development methodology using Scrum and Kanban',
      body: 'GDG Cusco',
      year: 'Mar 2019',
      link: 'https://www.facebook.com/gdgcusco/posts/pfbid02JnkhsXgDbecNrva8F4CoD1B4KRYPrj5ABogPf6QUBGeJoYPc3nE28TP1dUd9Fp27l'
    },
    {
      name: 'Importancia de las aplicaciones móviles en la región del Cusco',
      body: 'Flisol Cusco',
      year: 'Mar 2018',
      link: 'https://www.facebook.com/fahedhermoza/posts/pfbid0c4sEXCPFurPktytRB3G7x6WaiuV6sQUViJs5rnEX26L11MqWWwUesHjw9Az7ZZ61l'
    },
    {
      name: 'APIs Underprotected',
      body: 'OWASP Cusco',
      year: 'Dec 2017',
      link: 'https://www.facebook.com/fahedhermoza/posts/pfbid0c4sEXCPFurPktytRB3G7x6WaiuV6sQUViJs5rnEX26L11MqWWwUesHjw9Az7ZZ61l'
    },
  ], 
  education: [
    {
      institution: 'EF Education First',
      degree: 'Course Certificate - English B1.1',
      from: 'Dec',
      to: '2022',
    },
    {
      institution: 'EF Education First',
      degree: 'Certificate of Achievement - A2 EFSET level',
      from: 'Nov',
      to: '2022',
    },
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
