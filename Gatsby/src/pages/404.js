import { Link } from 'gatsby';
import React from 'react';
import { BsArrowUpLeft } from 'react-icons/bs';
import styled from 'styled-components';

const NotFoundStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  @media (max-width: 900px) {
    padding: 2.8rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
`;

const NotFoundPage = function () {
  return (
    <NotFoundStyles>
      <h1>NOT FOUND</h1>
      <p>There is no page at this URL.</p>
      <Link to="/" className="internal-link">
        Go back to home page
      </Link>
    </NotFoundStyles>
  );
};

export default NotFoundPage;
