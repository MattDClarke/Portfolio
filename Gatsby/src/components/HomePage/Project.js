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

  .info {
    grid-area: paragraph;
    align-self: end;

    p {
      font-size: 1.25rem;
      padding-bottom: 0;
    }
  }

  .img-container {
    grid-area: img;
    align-self: center;
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

      a {
        color: var(--color-text);
        transition: color 0.3s ease-in-out;
        text-decoration: none;
        &:hover {
          color: var(--color-primary);
        }
        &:focus {
          color: var(--color-primary);
        }
      }
    }
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
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
            </span>
          ) : (
            ''
          )}

          <span>
            <a href={websiteLink} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </span>
        </div>
      </div>
    </ProjectStyles>
  );
};

export default Project;
