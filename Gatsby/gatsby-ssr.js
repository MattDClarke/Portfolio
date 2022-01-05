import React from 'react';
import Terser from 'terser';
import Layout from './src/components/Layout';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';

import {
  COLOR_MODE_KEY,
  COLORS,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/utils/constants';

import App from './src/components/App';

// will be stringified, placeholders replaced, and immediately invoked when page loaded - will block HTML rendering
function setColorsByTheme() {
  // inital placeholder values - will be replaced
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  // check users light / dark mode preferences
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  // access global styles
  const root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    // create the needed CSS variables
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

// added before body - used to check user preferences and update CSS variables before content rendered
// Replace that rainbow string with our COLORS object.
// We need to stringify it as JSON so that it isn't
// inserted as [object Object].
// script tag injected as string - will be exe as fn later
const MagicScriptTag = function () {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  // Wrap it in an IIFE - prevent polluting global namespace - dnt need to store it globally.
  let calledFunction = `(${boundFn})()`;
  // minify script - outside module build system of Gatsby so Webpack does not know about it
  // minor performance improvement
  calledFunction = Terser.minify(calledFunction).code;

  // Inject it
  // not dangerous because injection at compile time - user can't add to it
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = function () {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) =>
      `${acc}\n--color-${name}: ${colorByTheme.light};`,
    ''
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

// lifecycle method that Gatsby exposes - runs function when generating HTML during build process
export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  // set defaults incase JS disabled - else would cause no colors (CSS variables not set)
  setHeadComponents(<FallbackStyles />);
  // injects React component above everything else, within <body>
  setPreBodyComponents(<MagicScriptTag />);
};

export function wrapPageElement({ element, props }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout {...props}>{element}</Layout>
    </>
  );
}

export const wrapRootElement = ({ element }) => <App>{element}</App>;
