import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaChevronRight } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';

const IndexPageStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 4rem 0;
  }
  // illustration
  --circle-diameter: 50px;
  --triangle-width: 20.15px;
  --middle-circle-width: 14.5px;
  --ball-diameter: 7.5px;
  --animation-time: 3s;

  .illustration {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 3rem;
    justify-content: center;
    align-items: center;
  }

  .grid-container {
    position: relative;
    padding: 10px;
    width: 270px;
    height: 220px;
    border-radius: 10px;
    overflow: hidden;
  }

  .grid-container:hover .top-container .top-item {
    opacity: 0;

    &:nth-child(odd) {
      will-change: transform;
      animation: rotationCross calc(var(--animation-time) * 2)
        cubic-bezier(0.63, 0.01, 0.41, 1.01) forwards infinite;
    }
    &:nth-child(even) {
      will-change: transform;
      animation: rotationCross calc(var(--animation-time) * 2) 0.75s
        cubic-bezier(0.63, 0.01, 0.41, 1.01) forwards infinite;
    }
  }

  .grid-container:hover .bottom-container .bottom-item {
    border: 0.5px solid var(--color-primary);
    will-change: transform;
    animation: rotationItem var(--animation-time) infinite linear;
  }

  .top-container {
    position: absolute;
    display: grid;
    width: 350px;
    height: 250px;
    grid-template-columns: repeat(7, var(--circle-diameter));
    grid-template-rows: repeat(5, var(--circle-diameter));
    z-index: 2;
    transform: translate(
      calc(var(--circle-diameter) / 2 * -1),
      calc(var(--circle-diameter) / 2 * -1)
    );
  }

  .top-item {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
    overflow: hidden;
    // mouse out animation
    will-change: transform;
    animation: rotationReset 2s linear;
    transition: opacity 5s 1s ease-in-out;
  }

  #top-item-no-fade {
    opacity: 1;
  }

  .triangle-top-left {
    position: absolute;
    width: var(--triangle-width);
    height: var(--triangle-width);
    background-color: var(--color-gray-900);
  }

  .triangle-top-right {
    position: absolute;
    right: 0;
    width: var(--triangle-width);
    height: var(--triangle-width);
    background-color: var(--color-gray-900);
    opacity: 0.2;

    animation: fadeIn 2s forwards linear;
    transition: all 0.6s ease-out;
  }

  .triangle-bottom-left {
    position: absolute;
    bottom: 0;
    width: var(--triangle-width);
    height: var(--triangle-width);
    background-color: var(--color-gray-900);
    opacity: 0.5;
    animation: fadeIn 2s forwards linear;
  }

  .triangle-bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: var(--triangle-width);
    height: var(--triangle-width);
    background-color: var(--color-gray-900);
  }

  .middle-circle {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * var(--middle-circle-width) / 2);
    left: 50%;
    margin-left: calc(-1 * var(--middle-circle-width) / 2);
    width: var(--middle-circle-width);
    height: var(--middle-circle-width);
    z-index: -1;
    background-color: var(--color-gray-600);
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
  }

  .bottom-container {
    position: absolute;
    display: grid;
    grid-template-columns: repeat(5, var(--circle-diameter));
    grid-template-rows: repeat(4, var(--circle-diameter));
  }

  .bottom-item {
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 50%;
    z-index: 1;
    transition: all 3s ease-in-out;
    will-change: transform;
    animation: rotationReset 2s linear;
  }

  .bottom-item:nth-child(odd)::before {
    content: '';
    background-color: var(--color-primary);
    display: block;
    position: absolute;
    /* -4.75px (half height) + border width */
    top: -4.75px;
    left: 50%;
    margin-left: calc(-1 * var(--ball-diameter) / 2);
    width: var(--ball-diameter);
    height: var(--ball-diameter);
    border-radius: 50%;
  }

  .bottom-item:nth-child(odd)::after {
    content: '';
    background-color: var(--color-primary);
    display: block;
    position: absolute;
    bottom: -4.75px;
    left: 50%;
    margin-left: calc(-1 * var(--ball-diameter) / 2);
    width: var(--ball-diameter);
    height: var(--ball-diameter);
    border-radius: 50%;
  }

  .bottom-item:nth-child(even)::before {
    content: '';
    background-color: var(--color-primary);
    display: block;
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * var(--ball-diameter) / 2);
    left: -4.75px;
    width: var(--ball-diameter);
    height: var(--ball-diameter);
    border-radius: 50%;
  }

  .bottom-item:nth-child(even)::after {
    content: '';
    background-color: var(--color-primary);
    display: block;
    position: absolute;
    right: 0;
    margin-right: -4.75px;
    top: 50%;
    margin-top: calc(-1 * var(--ball-diameter) / 2);
    width: var(--ball-diameter);
    height: var(--ball-diameter);
    border-radius: 50%;
  }

  .bottom-item:nth-child(odd) .line {
    width: 1px;
    height: var(--circle-diameter);
    position: absolute;
    background: rgba(0, 0, 0, 0);
    right: 50%;
    margin-right: -0.5px;
  }

  .bottom-item:nth-child(even) .line {
    width: var(--circle-diameter);
    height: 1px;
    position: absolute;
    background: rgba(0, 0, 0, 0);
    top: 50%;
    margin-top: -0.5px;
  }

  @keyframes rotationItem {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-359deg);
    }
  }

  @keyframes rotationCross {
    0% {
      transform: rotate(0deg);
    }
    12.5% {
      transform: rotate(90deg);
    }
    25% {
      transform: rotate(90deg);
    }
    37.5% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    62.5% {
      transform: rotate(270deg);
    }
    75% {
      transform: rotate(270deg);
    }
    87.5% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes rotationReset {
    from {
      transform: rotate(-90deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .color-primary {
    color: var(--color-primary);
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
    will-change: transform;
    transition: all 0.3s;
    text-decoration: none;

    &:hover {
      --cast: 2px;
      opacity: 0.9;
      transform: translateY(1px);
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
  }

  #projects {
    padding: 0;
    margin-top: 5rem;
  }

  .project-grid {
    display: grid;
    margin-top: 3rem;
    grid-template-areas:
      'paragraph img'
      'details img';

    .info {
      grid-area: paragraph;
      align-self: end;

      p {
        font-size: 1.25rem;
        padding-bottom: 0;
      }
    }
    img {
      grid-area: img;
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
  }

  #contact {
    margin-top: 3rem;
  }
`;
const IndexPage = function () {
  function createTopItems() {
    const divs = [];
    for (let i = 0; i < 35; i += 1) {
      if (i === 17) {
        divs.push(
          <div id="top-item-no-fade" className="top-item" key={i}>
            <div className="triangle-top-right" />
            <div className="triangle-top-left" />
            <div className="triangle-bottom-right" />
            <div className="triangle-bottom-left" />
            <div className="middle-circle" />
          </div>
        );
      } else {
        divs.push(
          <div className="top-item" key={i}>
            <div className="triangle-top-right" />
            <div className="triangle-top-left" />
            <div className="triangle-bottom-right" />
            <div className="triangle-bottom-left" />
            <div className="middle-circle" />
          </div>
        );
      }
    }
    return divs;
  }

  function createBottomItems() {
    const divs = [];
    for (let i = 0; i < 20; i += 1) {
      divs.push(
        <div className="bottom-item" key={i}>
          <div className="line" />
        </div>
      );
    }
    return divs;
  }

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
        <div className="illustration">
          <div className="grid-container">
            <div className="top-container">{createTopItems()}</div>
            <div className="bottom-container">{createBottomItems()}</div>
          </div>
        </div>
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
        <div className="project-grid">
          <div className="info">
            <h3>ppt Create</h3>
            <p>
              A web app that helps English teachers in Korea make PowerPoint
              presentations, that introduce new vocabulary, quickly.
            </p>
          </div>
          <img
            src=""
            alt="Collage of ppt Create screenshots"
            width="665"
            height="330"
          />
          <div className="details">
            <div className="tech-labels">
              <div className="tech-label">React</div>
              <div className="tech-label">React Query</div>
              <div className="tech-label">MUI</div>
              <div className="tech-label">Redis</div>
              <div className="tech-label">Express</div>
              <div className="tech-label">MongoDB</div>
            </div>
            <div className="project-links">
              <Link to="/#" className="text-link">
                View project details
              </Link>
              <span>
                <FaChevronRight
                  style={{ fontSize: '13px', marginLeft: '6.5px' }}
                />
              </span>
              <span>
                <a
                  href="https://pptcreate.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="project-grid">
          <div className="info">
            <h3>Snakes of Taiwan</h3>
            <p>
              A freelance project done for a client in Taiwan. An online field
              guide to the snakes of Taiwan. The website is multilingual -
              English and Chinese.
            </p>
          </div>
          <img
            src=""
            alt="Collage of Snakes of Taiwan screenshots"
            width="665"
            height="330"
          />
          <div className="details">
            <div className="tech-labels">
              <div className="tech-label">Nunjucks</div>
              <div className="tech-label">SASS</div>
              <div className="tech-label">JavaScript</div>
              <div className="tech-label">Gulp</div>
              <div className="tech-label">Python</div>
            </div>
            <div className="project-links">
              <Link to="/#" className="text-link">
                View project details
              </Link>
              <span>
                <FaChevronRight
                  style={{ fontSize: '13px', marginLeft: '6.5px' }}
                />
              </span>
              <span style={{ paddingRight: '13px' }}>
                <a
                  href="https://github.com/MattDClarke/Website-redesign"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://snakesoftaiwan.com/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 id="contact">Contact</h2>
        <ContactForm />
      </section>
    </IndexPageStyles>
  );
};

export default IndexPage;
