import styled from 'styled-components';

export const ProjectPageStyles = styled.div`
  padding: 4rem 0;

  @media (max-width: 900px) {
    padding: 2.8rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
  .links-container {
    a {
      font-size: 1.125rem;
      display: flex;
      width: 155px;
      padding: 0.5rem 0;
      span {
        width: 130px;
      }
      svg {
        align-self: center;
      }
    }
  }

  .gatsby-image-wrapper {
    margin: 1.5rem 1rem;
    /* margin-right: 1rem; */
    /* padding: 0 1rem; */
    box-shadow: 3px 3px 3px var(--color-gray-300);
    max-width: 500px;

    @media (max-width: 600px) {
      margin: 1.5rem 0;
    }
  }

  .imgs-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .img-container--tall {
    .gatsby-image-wrapper {
      max-width: 300px;
    }
  }

  .img-container--centered {
    text-align: center;
  }

  .extra-padding-bottom {
    padding-bottom: 2rem;
  }
`;
