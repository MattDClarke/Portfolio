import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const IndexPageStyles = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  // illustration
  --box-shadow: 0.5px 2px 2.5px 0.5px var(--color-gray-900);
  --circle-diameter: 50px;
  --triangle-width: 20.15px;
  --middle-circle-width: 14.5px;
  --ball-diameter: 7.5px;
  --animation-time: 3s;

  .illustration {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  .grid-container {
    position: relative;
    padding: 10px;
    width: 270px;
    height: 220px;
    overflow: hidden;
  }

  .grid-container:hover .top-container .top-item {
    opacity: 0;

    &:nth-child(odd) {
      animation: rotationCross calc(var(--animation-time) * 2)
        cubic-bezier(0.63, 0.01, 0.41, 1.01) forwards infinite;
    }
    &:nth-child(even) {
      animation: rotationCross calc(var(--animation-time) * 2) 0.75s
        cubic-bezier(0.63, 0.01, 0.41, 1.01) forwards infinite;
    }
  }

  .grid-container:hover .bottom-container .bottom-item {
    border: 0.5px solid var(--color-primary);
    box-shadow: var(--box-shadow);
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
    animation: rotationReset 2s linear;
    transition: opacity 3s 1s ease-in-out;
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
    font-size: 1.15rem;
    font-weight: bold;
    color: var(--color-background);
    background: var(--color-primary);
    border: 2px solid hsl(0deg, 0%, 10%);
    --cast: 2px;
    box-shadow: 0 var(--cast) 0 0 hsl(0deg, 0%, 10%);
    padding: 0.6rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    text-decoration: none;

    &:hover {
      --cast: 4px;
      opacity: 0.9;
    }
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

      <h2>My skills</h2>
      <p>
        I am a full stack developer with a primary focus on React. Here are some
        the technologies that I have experience with:
      </p>

      <p>
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <h2 id="projects">My Projects</h2>
      <h3>ppt Create</h3>
      <p>
        A web app that helps English teachers in Korea make PowerPoint
        presentations, that introduce new vocabulary, quickly.{' '}
      </p>
      <p>
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <h3>Snakes of Taiwan</h3>
      <p>
        A freelance project done for a client in Taiwan. An online field guide
        to the snakes of Taiwan. The website is multilingual - English and
        Chinese.
      </p>
      <p>
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
      <h2 id="contact">Contact</h2>
      <p>
        ontrary to popular belief, Lorem Ipsum is not simply random text. It has
        roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. ontrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32.
      </p>
    </IndexPageStyles>
  );
};

export default IndexPage;
