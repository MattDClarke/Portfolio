import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Matt D. Clarke's portfolio and blog`,
    description: `Web developer portfolio and blog`,
    siteUrl: 'https://www.mattdclarke.tech/',
  },
  plugins: [
    // surfaces CSS to Gatsby - optimize - critical CSS, ...
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
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
