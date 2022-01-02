import { graphql } from 'gatsby';
import React from 'react';

const pptCreate = function ({ data }) {
  const pptCreateInfo = data.pptCreate.edges[0].node;
  console.log(pptCreateInfo);
  return (
    <>
      <h1>ppt Create</h1>
      <p>
        When I was an Elementary School English teacher in Korea, I often had to
        make PowerPoint presentations to introduce new vocabulary. Many of these
        presentations followed the same format. They contained images, the new
        vocabulary word and a translation. They were tedious to edit. I wanted
        to automate the process. I learned how to use PowerPoint Macros to
        automate positioning images. This was a slight improvement. I then made
        an{' '}
        <a
          href="https://github.com/MattDClarke/Image-and-Translation-Downloader"
          target="_blank"
          rel="noopener noreferrer"
        >
          Image and translation downloader application
        </a>{' '}
        to automate the task even further. In this app, a list of vocabulary
        words is added to a form and submitted to a back end. An automated
        browser is then run using Selenium. It was used to obtain Korean
        translations for the words from Papago (a translation website) and
        images from Bing. I am no longer an ESL teacher, but I thought it would
        be a cool project to improve the PowerPoint automation further. I wanted
        to make a version that was user friendly for English teachers in Korea.
        The purpose of the application is to make creating PowerPoint
        presentations easier for teachers. It speeds up the process of creating
        PowerPoint presentations that introduce new vocabulary.
      </p>
      <h2>User Workflow</h2>
      <p>
        A user logs in using their email or Google authentication. They then use
        a word list to create a PowerPoint presentation. A user can select word
        lists from Korean Elementary School textbook lessons or some commonly
        used vocabulary word lists such as verbs or animals. They can also
        create and save their own word list. Once a user has selected or created
        a word list, they can create a PowerPoint presentation. For each word in
        the word list, the user selects an image or uploads an image from their
        pc. The user is then shown a form where they can select options for the
        PowerPoint presentation such as the font type, background colour,
        translation language and layout types. The created PowerPoint
        presentation is downloaded to the user's Downloads folder.
      </p>
      <h2>Tech Stack</h2>
      <h3>Front-end</h3>
      <p>
        Material UI (MUI) was chosen as a component library to make use of the
        well-tested components that I knew I would need instead of making them
        from scratch. I also like the base styling, which I further modified. -{' '}
      </p>
      <ul>
        <li>React - Create React App</li>
        <li>MUI - using Styled Components</li>
        <li>React Router</li>
        <li>React Query</li>
      </ul>
      <h3>Back-end</h3>
      <p>
        Redis, along with the library{' '}
        <a
          href="https://www.npmjs.com/package/rate-limiter-flexible"
          target="_blank"
          rel="noopener noreferrer"
        >
          node-rate-limiter-flexible
        </a>
        , was used for rate limiting certain routes. This was done to protect
        from brute force attacks and for rate-limiting the APIs for each user.
      </p>
      <ul>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Redis</li>
        <li>Cloudinary - cloud image storage</li>
      </ul>
      <h2>Key Features</h2>
      <h3>Creating PowerPoints</h3>
      <p>
        The library{' '}
        <a
          href="https://gitbrent.github.io/PptxGenJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          PptxGenJS
        </a>{' '}
        was used to create PowerPoint presentations with JavaScript. The user's
        words, selected images and PowerPoint presentation options are passed
        into a PowerPoint making function. There is a Master Slide layout
        defined for each layout type, that is used to position the text and
        images. For each layout type selected by the user, the selected images
        are looped through and slides are created. Each layout type is divided
        into a section in the created PowerPoint presentation. The created
        PowerPoint presentation is saved to the user's Downloads folder.{' '}
      </p>
      <h3>Selecting images for each word</h3>
      <p>
        For each word added in the word list used to create a PowerPoint
        presentation, the user selects an image from Unsplash or an image from
        their pc. The MUI Dialog component was very useful to create a sequence
        of dialogs for each word. The user selects an image in each dialog.
        After selecting the images, another dialog gives the user a form with
        options for the PowerPoint presentation layout.
      </p>
      <h3>Storing users word lists</h3>
      <p>
        The users saved word lists are saved in MongoDB. The user can edit,
        combine, delete or re-order the word lists. React Query was used to make
        fetching, synchronizing and updating word lists efficient. It lead to a
        better user experience because data is not fetched unnecessarily, there
        were fewer loading spinners after adding it.
      </p>
      <h3>Lists Page</h3>
      <p>
        Word lists for Korean Elementary School curriculum books and word lists
        for some common topics were added to the lists page. The word lists are
        fetched using React Query. The user can select up to 3 lists that can
        then be used to create a PowerPoint presentation. The user is
        re-directed to the create page and the word list form is auto-populated
        with their selected word lists. The word lists state is global, it makes
        use of the React Context API. This allows easy sharing of the state
        between pages.
      </p>
      <h3>Admin Page</h3>
      <p>
        An admin page was created to make adding textbook information and word
        lists easy. The book images are uploaded to Cloudinary. There is also a
        page where I can view signed up users (username and authentication type)
        and delete them if needed. The user list is paginated and React Query is
        used to fetch each page and cache previously used pages.
      </p>
      <h2>Difficult Problems Faced</h2>
      <h3>Fitting different length text into a PowerPoint slide</h3>
      <p>
        {' '}
        A function was used to find the largest font size, in pixels, that
        allows a vocabulary word to fit in the width of the PowerPoint slide.
        For each vocabulary word added to a slide, its width depends on the word
        length, font family and whether the text is bold or italicized. The
        solution makes use of the canvas element to calculate the width of a
        given word, in pixels. It also uses a binary search to find the best
        font size for a given word that will allow it to fit in the PowerPoint
        slide. The function works ok, the fit could be better. I plan to improve
        it in the future.{' '}
      </p>
      <h3>Unsplash API restarted each time that a Dialog was displayed</h3>
      <p>
        I had an issue when navigating the sequence of dialogs for each word.
        The Unsplash API calls for the images were called each time the dialog
        was navigated to. The problem was that each modal was mounting and
        unmounting. The solution was surprisingly simple: add the{' '}
        <code>keepMounted</code>
        property to the MUI <code>Dialog</code> component. This kept all the
        modals in the DOM, so they kept their state, which shows the image that
        the user selected. This is useful because a user may choose an image for
        a word, then go back and decide to change the image.{' '}
      </p>
      <h2>Future Improvements</h2>
      <p>
        The app is currently just a basic version, the minimum viable product
        (MVP). I plan to add more templates, nicely designed ones that can be
        widely used. The current templates are very basic. I also plan to add
        other image sources such as Google or Bing and GIFs from GIPHY.
      </p>
    </>
  );
};
export default pptCreate;

export const query = graphql`
  query pptCreatePageQuery {
    pptCreate: allSanityProjectPage(filter: { name: { eq: "ppt Create" } }) {
      edges {
        node {
          lightModeImages {
            asset {
              gatsbyImageData
            }
          }
          projectPageInfo {
            gitHubLink
            websiteLink
          }
          darkModeImages {
            asset {
              gatsbyImageData
            }
          }
          name
        }
      }
    }
  }
`;
