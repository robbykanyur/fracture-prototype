module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.fractureme.com`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      },
    },
  ],
};