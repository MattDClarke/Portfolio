import React from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const IllustrationStyles = styled(motion.div)`
  --circle-diameter: 50px;
  --triangle-width: 20.15px;
  --middle-circle-width: 14.5px;
  --ball-diameter: 7.5px;
  --animation-time: 3s;

  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 3rem;
  align-items: center;
  perspective: 2000;

  @media (max-width: 990px) {
    display: none;
  }

  .grid-container {
    padding: 10px;
    position: relative;
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
`;

const illustrationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.6 },
  },
};

const Illustration = function ({ isFirstPageView }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // when y changes from dragging - transform the value of rotateX -> rotating along x axis
  const rotateX = useTransform(y, [-100, 100], [83, -83]);
  const rotateY = useTransform(x, [-100, 100], [-83, 83]);

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
    <IllustrationStyles
      variants={illustrationVariants}
      initial={isFirstPageView ? 'hidden' : false}
      animate="visible"
    >
      <motion.div
        className="grid-container"
        // x and y are motion values (passed in as props via style prop) from useMotionValue
        // x and y motion values track state of drag
        // rotateX and rotateY are motion values from useTransform - change when x and y change
        style={{ x, y, rotateX, rotateY, translateZ: 120, cursor: 'grab' }}
        drag
        dragElastic={0.2}
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        whileDrag={{ cursor: 'grabbing' }}
      >
        <div className="top-container">{createTopItems()}</div>
        <div className="bottom-container">{createBottomItems()}</div>
      </motion.div>
    </IllustrationStyles>
  );
};

export default Illustration;
