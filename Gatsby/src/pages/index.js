import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import ContactForm from '../components/HomePage/ContactForm';
import Illustration from '../components/HomePage/Illustration';
import Project from '../components/HomePage/Project';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import SEO from '../components/SEO';
import { PageViewContext } from '../components/PageViewContext';

const IndexPageStyles = styled.div`
  .container {
    position: relative;
    display: flex;
    align-items: center;
    padding: 4rem 0;

    @media (max-width: 900px) {
      padding: 2.8rem 0;
    }

    @media (max-width: 600px) {
      padding: 2rem 0;
    }
  }

  h1 {
    @media (max-width: 600px) {
      font-size: 1.5rem;
      padding-top: 2rem;
      padding-bottom: 3rem;
    }
  }

  .info {
    @media (max-width: 700px) {
      flex: 1;
    }
  }

  .scroll-indicator {
    display: block;
    color: var(--color-text);
    margin: 2em 0;
    padding-bottom: 1em;
    font-size: 1.3rem;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 1.2em;
      height: 2.8em;
      border: 2px solid var(--color-text);
      left: 0;
      top: -0.6em;
      border-radius: 5em;
    }
    &:after {
      content: '';
      position: absolute;
      width: 0.5em;
      height: 0.5em;
      background: var(--color-text);
      border-radius: 100%;
      left: 0.35em;
      top: -0.25em;
      animation: cursorMove 2s ease-in-out 2s forwards;
      @keyframes cursorMove {
        0% {
          transform: translateY(0);
        }
        to {
          transform: translateY(1.5em);
        }
      }
    }
  }

  #projects {
    padding: 0;
    margin-top: 5rem;

    @media (max-width: 900px) {
      margin-top: 3.5rem;
    }

    @media (max-width: 600px) {
      margin-top: 2.45rem;
    }
  }

  #contact {
    margin-top: 3rem;
  }

  #writing {
    margin-top: 3rem;
  }
`;

const headerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const headerItem = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.2,
    },
  },
};

const linkButtonVariants = {
  hidden: { opacity: 0, x: -400 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.7 },
  },
};

const skillsVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.9 },
  },
};

const contactVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const IndexPage = function ({ data }) {
  const projects = data.projects.nodes;
  const writing = data.writing.nodes;
  const { pageViewCountIndex } = useContext(PageViewContext);
  pageViewCountIndex.current += 1;
  const isFirstPageView = !(pageViewCountIndex.current > 1);

  return (
    <>
      <SEO
        title="Home"
        image={
          projects[0]?.imageHomePageLight?.asset?.gatsbyImageData?.images
            ?.fallback?.src
        }
      />
      <IndexPageStyles>
        <div className="container">
          <div className="info">
            <motion.h1
              variants={headerContainer}
              initial={isFirstPageView ? 'hidden' : false}
              animate="visible"
            >
              <motion.span variants={headerItem}>Hi, I’m Matt.</motion.span>{' '}
              <br />
              <motion.span variants={headerItem}>
                I’m a Full Stack <br />
              </motion.span>
              <motion.span variants={headerItem} className="color-primary">
                JavaScript{' '}
                <AnimatedLetters
                  title="Developer"
                  isFirstPageView={isFirstPageView}
                />
              </motion.span>
            </motion.h1>
            <motion.div
              variants={linkButtonVariants}
              initial={isFirstPageView ? 'hidden' : false}
              animate="visible"
            >
              <AnchorLink
                to="/#projects"
                className="internal-link"
                title="Projects"
              />
            </motion.div>
          </div>
          <Illustration isFirstPageView={isFirstPageView} />
        </div>

        <motion.div
          className="scroll-indicator"
          variants={scrollIndicatorVariants}
          initial={isFirstPageView ? 'hidden' : false}
          animate="visible"
        />

        <motion.section
          variants={skillsVariants}
          initial={isFirstPageView ? 'hidden' : false}
          animate="visible"
        >
          <h2>My skills</h2>
          <p>
            I'm a full stack web developer, from South Africa, with a primary
            focus on React. Here are some of the technologies that I have
            experience with:
          </p>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>Git</li>
            <li>Figma</li>
          </ul>
        </motion.section>

        <section>
          <h2 id="projects">My projects</h2>
          {projects.map((project) => (
            <Project
              project={project}
              key={project.id}
              isFirstPageView={isFirstPageView}
            />
          ))}
        </section>

        <section>
          <h2 id="writing">My technical writing</h2>
          <motion.div
            variants={contactVariants}
            initial={isFirstPageView ? 'hidden' : false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>
              Here's a selection of freelance technical writing that I have done
              for{' '}
              <a
                href="https://ritza.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Ritza:
              </a>
            </p>
            <ul className="writing-list">
              {writing.map(({ id, name, articleLink }) => (
                <li>
                  <a
                    key={id}
                    href={articleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        <section>
          <h2 id="contact">Contact</h2>
          <motion.div
            variants={contactVariants}
            initial={isFirstPageView ? 'hidden' : false}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </section>
      </IndexPageStyles>
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query ProjectQuery {
    projects: allSanityProject(sort: { fields: [name], order: DESC }) {
      nodes {
        id
        name
        summary
        tech
        websiteLink
        gitHubLink
        slug {
          current
        }
        imageHomePageDark {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 600)
          }
        }
        imageHomePageLight {
          asset {
            gatsbyImageData(placeholder: BLURRED, width: 600)
          }
        }
      }
    }
    writing: allSanityWriting(sort: { fields: [name], order: DESC }) {
      nodes {
        id
        name
        articleLink
      }
    }
  }
`;
