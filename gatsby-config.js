module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `@alexadark`,
    wordPressUrl: `http://api.texty.xyz`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `http://api.texty.xyz` },
    },
  ],
};
