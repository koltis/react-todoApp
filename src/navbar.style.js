import styled from 'styled-components';

export const navbar = styled.div`
  div {
    height: 6rem;
    width: 100%;
    background: #f06161;
  }
  ul {
    height: 6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  li {
    list-style-type: none;
  }

  .link {
    text-decoration: none;
    font-family: 'Mukta', sans-serif;
    font-weight: 400;
    color: white;
    font-size: 2rem;
  }
`;
