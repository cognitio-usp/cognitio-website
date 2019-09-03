module.exports = {
  client: {
    addTypename: false,
    includes: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './node_modules/gatsby-transformer-sharp/src/fragments.js',
      './node_modules/gatsby-source-contentful/src/fragments.js',
    ],
    service: {
      name: 'gatsby-schema',
      url: 'http://localhost:8000/___graphql',
    },
    tagName: 'graphql',
  },
};
