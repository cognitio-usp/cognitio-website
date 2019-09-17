const fsApi = require('netlify-cms-backend-fs/dist/fs/fs-express-api');

module.exports = {
  siteMetadata: {
    title: 'COGNITIO · USP',
    description:
      'O grupo Cognitio desenvolve atividades na área da computação cognitiva, tratando desde assuntos relacionados aos princípios e fundamentos da área (com caráter interdisciplinar) até aplicações voltadas a problemas de engenharia. Em termos de aplicações o foco tem sido em mobilidade urbana e inteligência computacional aplicacada a problemas de trânsito.',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-remark-reading-time',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-147513414-1',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Nunito Sans:300,400,400i,600,600i',
          'Roboto:300,400i,400,500', // you can also specify font weights and styles
          'Roboto Condensed:300,400i,400,500', // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
              showCaptions: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`, // Or another path if you don't want to create /src/cms/init.js
        manualInit: true,
        htmlTitle: '⚙ CMS · COGNITIO',
        htmlFavicon: 'static/img/favicon-32x32.png',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: false,
      },
    }, // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    fsApi(app);
  },
};
