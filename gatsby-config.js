module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `@alexadark`,
    wordPressUrl: `https://wp-news-api.herokuapp.com/`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `https://wp-news-api.herokuapp.com/` },
    },
  ],
};
