import React from 'react';

const snakesOfTaiwan = function () {
  return (
    <>
      <h1>Snakes of Taiwan</h1>
      <p>
        Just before the COVID-19 pandemic started, I went to Taiwan for a
        vacation. Being somewhat of an amateur naturalist, I was interested in
        seeing what kind of snakes are in Taiwan. I found a website called
        Snakes of Taiwan made by two snake enthusiasts living in Taiwan. It is
        the most comprehensive online field guide about the snakes of Taiwan.
        They have given talks at schools about the snakes of Taiwan, written new
        articles and have appeared in news reports. It had good information and
        nice, useful pictures but the website was a bit outdated, it was not
        mobile-friendly. I had recently started learning how to program so I
        thought that it would be a good project to update the website. I
        contacted the website owners and offered to update their website. They
        accepted the offer and in the end, they were happy with the website
        re-design.
      </p>
      <h2>Tech Stack</h2>
      <p>
        Nunjucks was used as a templating language and Gulp was used to build
        HTML pages from the Nunjucks templates. Gulp and Python were used to
        create different sized images for different devices.
      </p>
      <ul>
        <li>Nunjucks</li>
        <li>JavaScript</li>
        <li>SASS</li>
        <li>Gulp</li>
        <li>Python</li>
      </ul>
      <h2>Key Features</h2>
      <h3>Multilingual - English and Chinese pages</h3>
      <p>
        For each page, two Nunjucks templates were created. One for English and
        one for Chinese. Different fonts were used for English text and Chinese
        text.
      </p>
      <h3>Image carousels</h3>
      <p>
        The{' '}
        <a
          href="https://swiperjs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Swiper
        </a>{' '}
        library was used for creating image carousels. The image carousels have
        touch swipe functionality. They also have thumbnails to view multiple
        images at once and the images can also be viewed full screen. The images
        are lazy-loaded. Only the current, next and previous images are loaded.
      </p>
      <h3>Species Search</h3>
      <p>
        A JavaScript filter function is used to search for species pages, in an
        unordered list, from the search input. The list is populated with
        species data from a JSON file, using Gulp, at build time.
      </p>

      <h2>Difficult Problems Faced</h2>
      <h3>Creating image variants</h3>
      <p>
        I naively made all of the image variants myself. I used Gulp, the{' '}
        <a
          href="https://www.npmjs.com/package/sharp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sharp image processing library
        </a>{' '}
        and Python to create each image in different sizes and formats (JPEG and
        WebP) for desktop, tablet and mobile. It was a good learning exercise to
        understand how responsive images are created, but I wouldn't do it
        again. There is a reason why services such as Cloudinary exist.
        Cloudinary also serves images with a CDN and caches images, which
        improves page load times.
      </p>

      <h2>Future Improvements</h2>
      <p>
        The website host uses FTP to upload files. For future updates, I would
        suggest the owners change to a more modern Git integrated host such as
        Netlify. This would make updating and testing the website much easier. I
        would also make use of a cloud-based image host such as Cloudinary to
        store images and dynamically generate responsive image sizes. The site
        can also be further improved by using Gatsby and Sanity CMS, which I
        used to create this portfolio website. A CMS would allow the owners to
        easily update content.
      </p>
    </>
  );
};
export default snakesOfTaiwan;
