import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from '../components/HomePage/ContactForm';
import Illustration from '../components/HomePage/Illustration';
import Project from '../components/HomePage/Project';
import AnimatedLetters from '../components/HomePage/AnimatedLetters';

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

  /* h1 {
    @media (max-width: 600px) {
      font-size: 1.5rem;
      padding-top: 2rem;
      padding-bottom: 3rem;
    }
  } */

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
      animation: cursorMove 2s ease-in-out infinite alternate-reverse;
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

  .paragraph-skills {
    font-size: 1.3rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
    li {
      width: 130px;
      padding: 0.5rem 0;
      font-weight: 500;

      &:before {
        content: '';
        background: var(--color-secondary);
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        display: inline-block;
        line-height: 0.5rem;
        color: white;
        text-align: center;
        margin-right: 0.5rem;
      }
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
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
      duration: 1.5,
    },
  },
};

const linkButtonVariants = {
  hidden: { opacity: 0, x: -400 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2 },
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 1.8 },
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

  const controlsContact = useAnimation();
  const [refContact, inViewContact] = useInView();

  useEffect(() => {
    if (inViewContact) {
      controlsContact.start('visible');
    }
  }, [controlsContact, inViewContact]);

  return (
    <IndexPageStyles>
      <div className="container">
        <div className="info">
          <motion.h1
            variants={headerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={headerItem}>Hi, I’m Matt.</motion.span>{' '}
            <br />
            <motion.span variants={headerItem}>
              I’m a Full Stack <br />
            </motion.span>
            <motion.span variants={headerItem} className="color-primary">
              JavaScript <AnimatedLetters title="Developer" />
            </motion.span>
          </motion.h1>
          <motion.div
            variants={linkButtonVariants}
            initial="hidden"
            animate="visible"
          >
            <Link to="/#projects" className="internal-link">
              My Projects
            </Link>
          </motion.div>
        </div>
        <Illustration />
      </div>

      <motion.div
        className="scroll-indicator"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.section
        variants={skillsVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>My skills</h2>
        <p className="paragraph-skills">
          I am a full stack developer with a primary focus on React. Here are
          some of the technologies that I have experience with:
        </p>
        <ul className="skills-list">
          <li>Figma</li>
          <li>Git</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </motion.section>

      <section>
        <h2 id="projects">My Projects</h2>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </section>

      <section>
        <h2 id="contact">Contact</h2>
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate={controlsContact}
          ref={refContact}
        >
          <ContactForm />
        </motion.div>
      </section>
    </IndexPageStyles>
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
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        imageHomePageLight {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
