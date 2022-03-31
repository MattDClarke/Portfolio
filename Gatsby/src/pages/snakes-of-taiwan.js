import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FiGithub } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ProjectPageStyles } from '../components/ProjectPageStyles/ProjectPageStyles';
import {
  headerVariants,
  imageSlideInFromLeftVariants,
  imageSlideInFromRightVariants,
} from '../components/animation/projectPageVariants';
import SEO from '../components/SEO';
import { PageViewContext } from '../components/PageViewContext';

const SnakesOfTaiwanPage = function ({ data }) {
  const snakesOfTaiwanInfo = data.snakesOfTaiwan.edges[0].node;
  const { pageViewCountSOT } = useContext(PageViewContext);
  pageViewCountSOT.current += 1;
  const isFirstPageView = !(pageViewCountSOT.current > 1);

  return (
    <>
      <SEO
        title="Snakes of Taiwan Project Details"
        image={
          snakesOfTaiwanInfo?.darkModeImages[1]?.asset?.gatsbyImageData?.images
            ?.fallback?.src
        }
      />

      <ProjectPageStyles>
        <motion.h1
          variants={headerVariants}
          initial={isFirstPageView ? 'hidden' : false}
          animate="visible"
        >
          Snakes of Taiwan
        </motion.h1>

        <div className="links-container">
          {snakesOfTaiwanInfo.projectPageInfo.gitHubLink ? (
            <a
              href={snakesOfTaiwanInfo.projectPageInfo.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              <title id="gitHub">GitHub</title>
              <span>Source code</span>
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
            Just before the COVID-19 pandemic started, I spent some time in
            Taiwan. Being somewhat of an amateur naturalist, I was interested in
            learning about the snakes on the island. I found a website called
            Snakes of Taiwan, it was the most comprehensive online field guide
            of the region's snakes. It was made by two local snake enthusiasts
            who have given educational talks at schools, written news articles
            and have featured in news reports. The site had good information and
            clear, useful pictures but it was a bit outdated, it was not
            mobile-friendly. I had recently started learning how to program so I
            thought that it would be a good project to update the website. I
            contacted them and offered to update their website. They accepted
            the offer and in the end, they were happy with the website
            re-design.
          </p>
          <motion.div
            className="imgs-container"
            variants={imageSlideInFromRightVariants}
            initial={isFirstPageView ? 'hidden' : false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GatsbyImage
              image={snakesOfTaiwanInfo.darkModeImages[0].asset.gatsbyImageData}
              alt="Screenshot of home page - desktop"
            />
            <div className="img-container--tall">
              <GatsbyImage
                image={
                  snakesOfTaiwanInfo.darkModeImages[1].asset.gatsbyImageData
                }
                alt="Screenshot of home page - mobile"
              />
            </div>
          </motion.div>
        </section>

        <section>
          <h2>Tech stack</h2>
          <p>
            Gulp was used to build HTML pages from the Nunjucks templates. Gulp
            and Python were used to create different sized images for different
            devices.
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
          <h2>Key features</h2>
          <h3>Multilingual - English and Chinese</h3>
          <p>
            For each page, two Nunjucks templates were created. One for English
            and one for Chinese. Different fonts were used for English text and
            Chinese text.
          </p>

          <motion.div
            className="extra-padding-bottom"
            variants={imageSlideInFromLeftVariants}
            initial={isFirstPageView ? 'hidden' : false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GatsbyImage
              image={snakesOfTaiwanInfo.darkModeImages[2].asset.gatsbyImageData}
              alt="Screenshot of Chinese page"
            />
          </motion.div>

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
            was used for creating image carousels. The image carousels have
            touch swipe functionality. They also have thumbnails to view
            multiple images at once and the images can also be viewed full
            screen. The images are lazy-loaded. Only the current, next and
            previous images are loaded.
          </p>
          <motion.div
            variants={imageSlideInFromRightVariants}
            initial={isFirstPageView ? 'hidden' : false}
            whileInView="visible"
            viewport={{ once: true }}
            className="img-container--centered img-container--tall extra-padding-bottom"
          >
            <GatsbyImage
              image={snakesOfTaiwanInfo.darkModeImages[3].asset.gatsbyImageData}
              alt="Screenshot of image carousel"
            />
          </motion.div>
          <h3>Species search</h3>
          <p>
            A JavaScript filter function was used to search for species pages,
            in a list of page links, from the search input in the navigation
            bar. The list is populated with species data from a JSON file, using
            Gulp, at build time.
          </p>

          <motion.div
            variants={imageSlideInFromLeftVariants}
            initial={isFirstPageView ? 'hidden' : false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GatsbyImage
              image={snakesOfTaiwanInfo.darkModeImages[4].asset.gatsbyImageData}
              alt="Screenshot of species search input"
            />
          </motion.div>
        </section>

        <section>
          <h2>Difficult problems faced</h2>
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
            Cloudinary exist. Cloudinary also serves images with a CDN and
            caches images, which improves page load times.
          </p>
        </section>

        <section>
          <h2>Future improvements</h2>
          <p>
            The current website hosting platform uses FTP to upload files. For
            future updates, I would move the site to a host that has Git
            integration, such as Netlify. This would make updating and testing
            the website much easier. I would also make use of a cloud-based
            image host, such as Cloudinary, to store images and dynamically
            generate responsive image sizes.
          </p>
        </section>
      </ProjectPageStyles>
    </>
  );
};

export default SnakesOfTaiwanPage;

export const query = graphql`
  query snakesOfTaiwanPageQuery {
    snakesOfTaiwan: allSanityProjectPage(
      filter: { name: { eq: "Snakes of Taiwan" } }
    ) {
      edges {
        node {
          lightModeImages {
            asset {
              gatsbyImageData(placeholder: BLURRED, width: 500)
            }
          }
          projectPageInfo {
            gitHubLink
            websiteLink
          }
          darkModeImages {
            asset {
              gatsbyImageData(placeholder: BLURRED, width: 500)
            }
          }
        }
      }
    }
  }
`;
