const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Matt D. Clarke's portfolio`,
    description: `Web developer portfolio`,
    siteUrl: 'https://www.mattdclarke.tech',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // surfaces CSS to Gatsby - optimize - critical CSS, ...
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'wzifomhg',
        dataset: 'production',
        // in dev - Sanity change - auto update in Gatsby
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    `gatsby-plugin-anchor-links`,
  ],
};
