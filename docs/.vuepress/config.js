const version = require("./../../package.json").version;

module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/public/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#fff' }],
    // ...other tags
  ],
  lang: 'pt-BR',
  title: `Barca Community ${version}`,
  description: 'Veja as principais novidades de como utilizar ferramentas, tecnologias, linguagens de programação e outros',
  theme: '@vuepress/theme-default',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'Português-Brasileiro',
      title: 'Barca Community',
      description: 'Barca é uma plataforma com um ecossistema poderoso com diversos serviços que pode ser de seu agrado'
    },
    '/it/': {
      lang: 'Italiano',
      title: 'Barca Community',
      description: 'Barca è una piattaforma con un potente ecosistema con diversi servizi che potrebbero piacerti'
    },
    '/fr/': {
      lang: 'Francês',
      title: 'Barca Community',
      description: 'Barca est une plate-forme avec un écosystème puissant avec plusieurs services que vous pourriez aimer'
    },
    '/en/': {
      lang: 'Inglês',
      title: 'Barca Community',
      description: 'Barca is a platform with a powerful ecosystem with several services that you may like'
    },
    '/al/': {
      lang: 'Alemão',
      title: 'Barca Community',
      description: 'Barca ist eine Plattform mit einem leistungsstarken Ökosystem mit mehreren Diensten, die Ihnen gefallen könnten'
    },
    '/cn/': {
      lang: 'China',
      title: 'Barca Community',
      description: 'Barca 是一个拥有强大生态系统的平台，提供您可能喜欢的多种服务'
    },
    '/in/': {
      lang: 'India',
      title: 'Barca Community',
      description: 'बार्का एक शक्तिशाली पारिस्थितिकी तंत्र वाला एक मंच है जिसमें कई सेवाएं हैं जो आपको पसंद आ सकती हैं'
    },
    '/ru/': {
      lang: 'Russia',
      title: 'Barca Community',
      description: 'Barca — это платформа с мощной экосистемой и несколькими сервисами, которые могут вам понравиться.'
    },
    '/es/': {
      lang: 'Espanha',
      title: 'Barca Community',
      description: 'El Barça es una plataforma con un ecosistema potente con varios servicios que te pueden gustar'
    },
    '/tr/': {
      lang: 'Turquia',
      title: 'Barca Community',
      description: 'Barca, beğenebileceğiniz çeşitli hizmetlere sahip güçlü bir ekosisteme sahip bir platformdur.'
    },
    '/kr/': {
      lang: 'Coréia',
      title: 'Barca Community',
      description: 'Barca는 사용자가 좋아할 수 있는 여러 서비스가 포함된 강력한 에코시스템을 갖춘 플랫폼입니다.'
    },
    '/jp/': {
      lang: 'Japonês',
      title: 'Barca Community',
      description: 'バルカはあなたが好きかもしれないいくつかのサービスを備えた強力なエコシステムを備えたプラットフォームです'
    },
  },
  plugins: [
    '@vuepress/back-to-top', 
    '@vuepress/medium-zoom', 
    '@vuepress/plugin-search',
    {
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    },
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-XXXXXXXXXX',
      },
    ],
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
  ],
  themeConfig: {
    docsRepo: 'https://github.com/project-barca/community',
    docsBranch: 'main',
    navbar: [
      // DOCS
      {
        text: 'Documentação',
        children: [
          {
            text: 'Ferramentas',
            children: [
              {text: 'Barca', link: '/engine/intro.html'},
              {text: 'BWCloud', link: '/tools/cloud/bwc.html'},
              {text: 'Mamute', link: '/tools/mamute/intro.html'},
              {text: 'Rino', link: '/tools/rino/intro.html'},
              {text: 'Ares', link: '/tools/ares/intro.html'},
              {text: 'Harpia', link: '/tools/harpia/intro.html'},
            ]
          },
          {
            text: 'Plataformas',
            children: [
              {text: 'Barca Cine', link: '/platforms/bcine/docs/intro.html'},
              {text: 'Barca Store', link: '/platforms/bstore/docs/intro.html'},
              {text: 'Barca Academic', link: '/platforms/bacademic/docs/intro.html'},
            ]
          },
          {
            text: 'Desenvolvimento',
            children: [
              {text: 'Interfaces', link: '/develop/docs/interfaces.html'},
              {text: 'Software', link: '/develop/docs/software.html'},
              {text: 'Infraestrutura', link: '/develop/docs/infra.html'},
              {text: 'Deploy', link: '/develop/docs/deploy.html'},
              {text: 'Security', link: '/develop/docs/security.html'},
            ]
          },
          {
            text: 'Cloud',
            children: [
              {text: 'Armazenamento', link: '/cloud/docs/storage.html'},
              {text: 'Clusters', link: '/cloud/docs/clusters.html'},
              {text: 'Implantação', link: '/cloud/docs/deploy.html'},
            ]
          },
        ],
      },
      // TUTORIALS
      {
        text: 'Tutoriais',
        link: '/tutorials/intro-tutorials.html',
      },
      // APRENDER
      {
        text: 'Aprender',
        link: '/learn/intro-learn.html',
      },
      // LICENSE
      {
        text: 'Licença',
        link: '/license/license.html',
      },
      // SUPORT
      {
        text: 'Suporte',
        children: [
          {
            text: 'Contato',
            children: [
              {text: 'Discord', link: 'https://discord.im/'},
              {text: 'Line', link: 'https://line.im/'},
              {text: 'Status', link: 'https://status.im/'},
              {text: 'Telegram', link: 'https://telegram.im/'},
              {text: 'Viber', link: 'https://viber.im/'},
            ]
          },
          {
            text: 'Ajuda',
            children: [
              {text: 'Issues', link: 'https://github.com/project-barca/community/issues'},
              {text: 'Pull Request', link: 'https://github.com/project-barca/community/pulls'}
            ]
          },
        ],
      },
      // VERSIONS
      {
        text: 'v0.1.0',
        children: ['v0.1.0', 'v0.1.0-beta'],
        link: '/barca/releases.html'
      },
    ],
    backToHome: 'Voltar ao inicio',
    locales: {
      '/': {
        selectLanguageName: 'Português-Brasileiro',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
    logo: 'https://raw.githubusercontent.com/project-barca/community/main/static/ivd/barca-logo.jpeg',
    logoDark: 'https://raw.githubusercontent.com/project-barca/community/main/static/ivd/barca-logo.jpeg',
    lastUpdated: false,
    sidebar: {
      '/tutorials/intro-tutorials.html': [
        {
          text: 'Web Servers',
          link: '/tutorials/webservers/intro-webservers-tutorial.html',
          children: [
            {text: 'Apache', link: '/tutorials/webservers/apache/installing.html'},
            {text: 'Lighttpd', link: '/tutorials/webservers/lighttpd/generate.html#api-com-laravel-php'},
            {text: 'NGINX', link: '/tutorials/webservers/nginx/generate.html#api-com-laravel-php'},
            {text: 'XAMPP', link: '/tutorials/webservers/xampp/generate.html#api-com-go-lang'},
            {text: 'Caddy', link: '/tutorials/webservers/caddy/generate.html#api-com-rocket-rust'},
          ],
        },
        {
          text: 'Programação',
          link: '/tutorials/programm/intro-programm-tutorial.html',
          children: [ 
            {text: 'C/C++', link: '/tutorials/programm/cplusplus/intro.html'}, 
            {text: 'CSharp', link: '/tutorials/programm/csharp/intro.html'}, 
            {text: 'Go lang', link: '/tutorials/programm/go/intro.html'}, 
            {text: 'Rust lang', link: '/tutorials/programm/rust/intro.html'},
            {text: 'Ruby', link: '/tutorials/programm/ruby/intro.html'}, 
            {text: 'Javascript', link: '/tutorials/programm/js/intro.html'}, 
            {text: 'JAVA', link: '/tutorials/programm/java/intro.html'}, 
            {text: 'Kotlin', link: '/tutorials/programm/kotlin/intro.html'}, 
            {text: 'Swift', link: '/tutorials/programm/swift/intro.html'}, 
            {text: 'PHP', link: '/tutorials/programm/php/intro.html'}, 
            {text: 'Python', link: '/tutorials/programm/python/intro.html'}, 
            {text: 'Scala', link: '/tutorials/programm/scala/intro.html'},
            {text: 'Haskell', link: '/tutorials/programm/haskell/intro.html'}
          ],
        },
        {
          text: 'Banco de Dados',
          link: '/tutorials/database/intro-database-tutorial.html',
          children: [ 
            {text: 'Apache', link: '/tutorials/database/apache/intro.html'}, 
            {text: 'Couchbase', link: '/tutorials/database/couchbase/intro.html'}, 
            {text: 'Exasol', link: '/tutorials/database/exasol/intro.html'}, 
            {text: 'Ingres', link: '/tutorials/database/ingres/intro.html'},
            {text: 'Firebird', link: '/tutorials/database/firebird/intro.html'},
            {text: 'Linter', link: '/tutorials/database/linter/intro.html'},
            {text: 'Mimer SQL', link: '/tutorials/database/mimersql/intro.html'},
            {text: 'Microsoft SQL Server', link: '/tutorials/database/mss/intro.html'},
            {text: 'MongoDB', link: '/tutorials/database/mongodb/intro.html'}, 
            {text: 'MariaDB', link: '/tutorials/database/mariadb/intro.html'},
            {text: 'MySQL', link: '/tutorials/database/mysql/intro.html'},
            {text: 'Netezza', link: '/tutorials/database/netezza/intro.html'}, 
            {text: 'Oracle DB', link: '/tutorials/database/oracle/intro.html'},
            {text: 'PostgreSQL', link: '/tutorials/database/psql/intro.html'},
            {text: 'PrestoDB', link: '/tutorials/database/pdb/intro.html'},
            {text: 'Redis', link: '/tutorials/database/redis/intro.html'},
            {text: 'SAP MaxDB', link: '/tutorials/database/sap/intro.html'},
            {text: 'Teradata', link: '/tutorials/database/teradata/intro.html'},
            {text: 'Vertica', link: '/tutorials/database/vertica/intro.html'}, 
          ],
        },
        {
          text: 'Sistemas Operacionais',
          link: '/tutorials/os/intro-os-tutorial.html',
          children: [ 
            {text: 'Linux', link: '/tutorials/os/unix/linux.html'},
            {text: 'MacOS', link: '/tutorials/os/macos/macos.html'},
            {text: 'Windows', link: '/tutorials/os/win/windows.html'},
          ],
        },
      ],

      '/tutorials/os/unix/linux.html': [
        {
          text: 'Distribuições',
          link: '/tutorials/os/unix/distributions/intro-linux.html',
          children: [ 
            {text: 'Ubuntu', link: '/tutorials/database/apache/intro.html'}, 
            {text: 'Fedora', link: '/tutorials/database/couchbase/intro.html'}, 
            {text: 'Mint', link: '/tutorials/database/exasol/intro.html'}, 
            {text: 'OpenSuse', link: '/tutorials/database/ingres/intro.html'},
            {text: 'Slackware', link: '/tutorials/database/firebird/intro.html'},
            {text: 'Debian', link: '/tutorials/database/linter/intro.html'},
            {text: 'GuaranaOS', link: '/tutorials/database/vertica/intro.html'}, 
            {text: 'Red Hat', link: '/tutorials/database/mimersql/intro.html'},
            {text: 'CentOS', link: '/tutorials/database/mss/intro.html'},
            {text: 'FreeBSD', link: '/tutorials/database/mss/intro.html'},
            {text: 'Arch', link: '/tutorials/database/mongodb/intro.html'}, 
            {text: 'Kubuntu', link: '/tutorials/database/mariadb/intro.html'},
            {text: 'Lubuntu', link: '/tutorials/database/mysql/intro.html'},
            {text: 'Kali', link: '/tutorials/database/netezza/intro.html'}, 
            {text: 'Parrot', link: '/tutorials/database/oracle/intro.html'},
            {text: 'PopOS', link: '/tutorials/database/oracle/intro.html'},
            {text: 'Blackbox', link: '/tutorials/database/psql/intro.html'},
            {text: 'PrestoDB', link: '/tutorials/database/pdb/intro.html'},
            {text: 'ZorinOS', link: '/tutorials/database/redis/intro.html'},
            {text: 'ElementaryOS', link: '/tutorials/database/sap/intro.html'},
            {text: 'Teradata', link: '/tutorials/database/teradata/intro.html'},
          ],
        },
      ],
      '/tutorials/programm/cplusplus/intro.html': [
        {
          text: 'Requisitos',
          link: '/tutorials/programm/cplusplus/prerequisites.html',
          children: [ 
            {text: 'Instalando GCC/G++', link: '/tutorials/programm/cplusplus/installing.html'},
          ],
        },
        {
          text: 'Desenvolver',
          link: '/tutorials/programm/cplusplus/tcp.html',
          children: [ 
            {text: 'TCP Client/Server', link: '/tutorials/programm/cplusplus/tcp.html#client'},
            {text: 'UDP Client/Server', link: '/tutorials/programm/cplusplus/tcp.html#server'}
          ],
        },
      ],

      
    },
    nav: [
      { text: "Home", link: "/" }
    ],
    repoLabel: "Open Source",
    displayAllHeaders: true
  },
}