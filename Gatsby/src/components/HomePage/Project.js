import React, { useContext, useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'gatsby';
import { FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ThemeContext } from '../ThemeContext';

const ProjectStyles = styled(motion.div)`
  display: grid;
  margin-top: 4rem;
  grid-template-areas:
    'info img'
    'details img';

  column-gap: 5rem;

  @media (max-width: 1000px) {
    column-gap: 2rem;
  }

  @media (max-width: 900px) {
    grid-template-areas:
      'info'
      'img'
      'details';
    row-gap: 1rem;
    margin-top: 2.8rem;
    max-width: 500px;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
  }

  .info {
    grid-area: info;
    align-self: end;
    max-width: 450px;

    p {
      font-size: 1.25rem;
      padding-bottom: 0;

      @media (max-width: 900px) {
        max-width: 500px;
        font-size: 1rem;
      }
    }
  }

  .img-container {
    grid-area: img;
    align-self: center;

    .gatsby-image-wrapper {
    }
  }

  .details {
    grid-area: details;
    align-self: end;
    max-width: 450px;

    .tech-labels {
      padding: 1rem 0;

      .tech-label {
        display: inline-block;
        background: var(--color-tertiary);
        color: black;
        font-weight: 500;
        border: 2px solid hsl(0deg, 0%, 10%);
        --cast: 2px;
        box-shadow: 0 var(--cast) 0 0 hsl(0deg, 0%, 10%);
        padding: 0.25rem 0.5rem;
        margin: 0.25rem;
        border-radius: 6px;
        transition: all 0.3s;

        @media (max-width: 900px) {
          --cast: 1px;
          font-size: 0.9rem;
          padding: 0.175rem 0.35rem;
          margin: 0.175rem;
          border-radius: 4.2px;
        }
      }
    }

    .project-links {
      display: flex;
      font-size: 1.25rem;
      justify-content: space-between;
      align-items: baseline;

      span:nth-child(2) {
        flex: 1;
        align-self: center;
      }

      @media (max-width: 900px) {
        font-size: 1rem;
      }

      a {
        color: var(--color-text);
        transition: color 0.3s ease-in-out;
        &:hover {
          color: var(--color-primary);
        }
        &:focus {
          color: var(--color-primary);
        }
      }
    }
    @media (max-width: 900px) {
      max-width: 500px;
    }
  }

  .animate {
    transform: translateY(-50%);
    transition: all 0.5s;
  }
`;

const projectVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

const Project = function ({ project }) {
  const {
    slug,
    name,
    summary,
    tech,
    websiteLink,
    gitHubLink,
    imageHomePageDark,
    imageHomePageLight,
  } = project;

  const { colorMode } = useContext(ThemeContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <ProjectStyles
      variants={projectVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="info">
        <h3>{name}</h3>
        <p>{summary}</p>
      </div>

      <div className="img-container">
        <GatsbyImage
          image={
            colorMode === 'dark'
              ? imageHomePageDark.asset.gatsbyImageData
              : imageHomePageLight.asset.gatsbyImageData
          }
          alt={`Collage of ${name} screenshots`}
        />
      </div>

      <div className="details">
        <div className="tech-labels">
          {tech.map((item) => (
            <div className="tech-label" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="project-links">
          <Link to={`/${slug.current}`} className="text-link">
            View project details
          </Link>
          <span>
            <FaChevronRight style={{ fontSize: '13px', marginLeft: '6.5px' }} />
          </span>

          {gitHubLink ? (
            <span style={{ paddingRight: '13px' }}>
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <title id="gitHub">GitHub</title>
                <FiGithub />
              </a>
            </span>
          ) : (
            ''
          )}

          <span>
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live website"
            >
              <FaExternalLinkAlt />
            </a>
          </span>
        </div>
      </div>
    </ProjectStyles>
  );
};

export default Project;
