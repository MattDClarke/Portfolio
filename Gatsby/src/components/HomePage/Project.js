import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ThemeContext } from '../ThemeContext';

const ProjectStyles = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-areas:
    'paragraph img'
    'details img';

  column-gap: 5rem;

  @media (max-width: 1000px) {
    column-gap: 2rem;
  }

  @media (max-width: 900px) {
    grid-template-areas:
      'paragraph'
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
    grid-area: paragraph;
    align-self: end;

    p {
      font-size: 1.25rem;
      padding-bottom: 0;

      @media (max-width: 900px) {
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
  }

  .animate {
    transform: translateY(-50%);
    transition: all 0.5s;
  }
`;

const Project = function ({ project }) {
  const { colorMode } = useContext(ThemeContext);
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

  // animation state of teach tech item

  return (
    <ProjectStyles>
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
                aria-label="GitHub Link"
              >
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
              aria-label="External Link to website"
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
