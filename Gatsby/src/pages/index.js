import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import ContactForm from '../components/HomePage/ContactForm';
import Illustration from '../components/HomePage/Illustration';
import Project from '../components/HomePage/Project';

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

  .link {
    display: inline-block;
    font-size: 1.15rem;
    font-weight: bold;
    color: var(--color-background);
    background: var(--color-primary);
    border: 2px solid hsl(0deg, 0%, 10%);
    --cast: 3px;
    box-shadow: 0 var(--cast) 0 0 hsl(0deg, 0%, 10%);
    padding: 0.6rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover,
    &:focus {
      --cast: 2.5px;
      opacity: 0.9;
    }

    @media (max-width: 900px) {
      padding: 0.42rem 0.7rem;
      border-radius: 4.2px;
    }

    @media (max-width: 600px) {
      font-size: 1rem;
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

const IndexPage = function ({ data }) {
  const projects = data.projects.nodes;

  return (
    <IndexPageStyles>
      <div className="container">
        <div className="info">
          <h1>
            <span>Hi, I’m Matt.</span> <br />
            <span>
              I’m a Full Stack <br />
            </span>
            <span className="color-primary">JavaScript Developer.</span>
          </h1>
          <Link to="/#projects" className="link">
            My Projects
          </Link>
        </div>
        <Illustration />
      </div>

      <div className="scroll-indicator" />

      <section>
        <h2>My skills</h2>
        <p className="paragraph-skills">
          I am a full stack developer with a primary focus on React. Here are
          some the technologies that I have experience with:
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
      </section>

      <section>
        <h2 id="projects">My Projects</h2>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </section>

      <section>
        <h2 id="contact">Contact</h2>
        <ContactForm />
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
            gatsbyImageData
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
