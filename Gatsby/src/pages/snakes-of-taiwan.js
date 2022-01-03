import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FiGithub } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import styled from 'styled-components';

const PageStyles = styled.div`
  padding: 4rem 0;

  @media (max-width: 900px) {
    padding: 2.8rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
  .links-container {
    a {
      font-size: 1.125rem;
      display: flex;
      width: 155px;
      padding: 0.5rem 0;
      span {
        width: 130px;
      }
      svg {
        align-self: center;
      }
    }
  }

  .gatsby-image-wrapper {
    margin: 1.5rem 0;
    margin-right: 1rem;
    box-shadow: 3px 3px 3px var(--color-gray-400);
    max-width: 500px;

    @media (max-width: 800px) {
      margin-right: 0;
    }
  }

  .imgs-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .img-container--mobile {
    .gatsby-image-wrapper {
      max-width: 300px;
    }
  }

  .img-container--centered {
    text-align: center;
  }

  .img-container--extraMargin {
    padding-bottom: 2rem;
  }
`;

const snakesOfTaiwan = function ({ data }) {
  const snakesOfTaiwanInfo = data.snakesOfTaiwan.edges[0].node;
  return (
    <PageStyles>
      <h1>Snakes of Taiwan</h1>

      <div className="links-container">
        {snakesOfTaiwanInfo.projectPageInfo.gitHubLink ? (
          <a
            href={snakesOfTaiwanInfo.projectPageInfo.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <title id="gitHub">GitHub</title>
            <span>Source Code</span>
            <FiGithub />
          </a>
        ) : (
          ''
        )}

        <a
          href={snakesOfTaiwanInfo.projectPageInfo.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          <span>Website</span>
          <FaExternalLinkAlt />
        </a>
      </div>

      <section>
        <p>
          Just before the COVID-19 pandemic started, I went to Taiwan for a
          vacation. Being somewhat of an amateur naturalist, I was interested in
          seeing what kind of snakes are in Taiwan. I found a website called
          Snakes of Taiwan made by two snake enthusiasts living in Taiwan. It is
          the most comprehensive online field guide about the snakes of Taiwan.
          They have given talks at schools about the snakes of Taiwan, written
          new articles and have appeared in news reports. It had good
          information and nice, useful pictures but the website was a bit
          outdated, it was not mobile-friendly. I had recently started learning
          how to program so I thought that it would be a good project to update
          the website. I contacted the website owners and offered to update
          their website. They accepted the offer and in the end, they were happy
          with the website re-design.
        </p>
        <div className="imgs-container">
          <GatsbyImage
            image={snakesOfTaiwanInfo.darkModeImages[0].asset.gatsbyImageData}
            alt="Screenshot of home page - desktop"
          />
          <div className="img-container--mobile">
            <GatsbyImage
              image={snakesOfTaiwanInfo.darkModeImages[1].asset.gatsbyImageData}
              alt="Screenshot of home page - mobile"
            />
          </div>
        </div>
      </section>

      <section>
        <h2>Tech Stack</h2>
        <p>
          Nunjucks was used as a templating language and Gulp was used to build
          HTML pages from the Nunjucks templates. Gulp and Python were used to
          create different sized images for different devices.
        </p>
        <ul className="skills-list">
          <li>Nunjucks</li>
          <li>JavaScript</li>
          <li>SASS</li>
          <li>Gulp</li>
          <li>Python</li>
        </ul>
      </section>

      <section>
        <h2>Key Features</h2>
        <h3>Multilingual - English and Chinese pages</h3>
        <p>
          For each page, two Nunjucks templates were created. One for English
          and one for Chinese. Different fonts were used for English text and
          Chinese text.
        </p>
        <div className="img-container--centered img-container--extraMargin">
          <GatsbyImage
            image={snakesOfTaiwanInfo.darkModeImages[2].asset.gatsbyImageData}
            alt="Screenshot of Chinese page"
          />
        </div>

        <h3>Image carousels</h3>
        <p>
          <a
            href="https://swiperjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Swiper
          </a>{' '}
          was used for creating image carousels. The image carousels have touch
          swipe functionality. They also have thumbnails to view multiple images
          at once and the images can also be viewed full screen. The images are
          lazy-loaded. Only the current, next and previous images are loaded.
        </p>
        <div className="img-container--extraMargin">
          <GatsbyImage
            image={snakesOfTaiwanInfo.darkModeImages[3].asset.gatsbyImageData}
            alt="Screenshot of image carousel"
          />
        </div>
        <h3>Species Search</h3>
        <p>
          A JavaScript filter function is used to search for species pages, in
          an unordered list, from the search input. The list is populated with
          species data from a JSON file, using Gulp, at build time.
        </p>
        <div className="img-container--centered">
          <GatsbyImage
            image={snakesOfTaiwanInfo.darkModeImages[4].asset.gatsbyImageData}
            alt="Screenshot of species search input"
          />
        </div>
      </section>

      <section>
        <h2>Difficult Problems Faced</h2>
        <h3>Creating image variants</h3>
        <p>
          I naively made all of the image variants myself. I used Gulp,{' '}
          <a
            href="https://www.npmjs.com/package/sharp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Sharp
          </a>{' '}
          and Python to create each image in different sizes and formats (JPEG
          and WebP) for desktop, tablet and mobile. It was a good learning
          exercise to understand how responsive images are created, but I
          wouldn't do it again. There is a reason why services such as
          Cloudinary exist. Cloudinary also serves images with a CDN and caches
          images, which improves page load times.
        </p>
      </section>

      <section>
        <h2>Future Improvements</h2>
        <p>
          The website host uses FTP to upload files. For future updates, I would
          suggest the owners change to a more modern Git integrated host such as
          Netlify. This would make updating and testing the website much easier.
          I would also make use of a cloud-based image host such as Cloudinary
          to store images and dynamically generate responsive image sizes.
        </p>
      </section>
    </PageStyles>
  );
};
export default snakesOfTaiwan;

export const query = graphql`
  query snakesOfTaiwanPageQuery {
    snakesOfTaiwan: allSanityProjectPage(
      filter: { name: { eq: "Snakes of Taiwan" } }
    ) {
      edges {
        node {
          lightModeImages {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          projectPageInfo {
            gitHubLink
            websiteLink
          }
          darkModeImages {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
