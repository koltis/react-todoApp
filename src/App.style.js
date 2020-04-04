import styled from 'styled-components';

export const Lists = styled.ul`
  ul {
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns: repeat(auto-fit, 28rem);
    gap: 2rem;
    padding: 4rem;
  }
  h3 {
    font-family: 'Mukta', sans-serif;
    font-weight: 500;
    color: #f06161;
  }
  p {
    font-family: 'Mukta', sans-serif;
    font-weight: 40;
  }
  li {
    list-style-type: none;
    display: flex;
    height: 8.5rem;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }

  img {
    object-fit: cover;
    max-width: 9.2rem;
    clip-path: polygon(0 0, 97% 1%, 82% 100%, 0% 100%);
  }
  .textList {
    display: flex;
    flex-direction: column;
  }
  .redLine {
    content: '';
    width: 30px;
    height: 5px;
    background-color: #3272fc;
  }
  button {
    background: #f06161;
    color: white;
    rotate: 90%;
    width: 4.2rem;
    height: 1.9rem;
    border: none;
    margin: 5px;
    font-family: 'Mukta', sans-serif;
    font-size: 1rem;
  }
  .buttonContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 450px) {
    ul {
      padding: 20px 0px 20px 0px;
    }
  }
`;
