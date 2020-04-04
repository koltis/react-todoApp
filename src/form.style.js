import styled from 'styled-components';

export const styledForm = styled.div`
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  label,
  legend {
    font-family: 'Mukta', sans-serif;
    font-size: 2.4rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 1.8rem;
  }
  button {
    font-family: 'Mukta', sans-serif;
    font-size: 1.5rem;
    width: 80px;
    height: 45px;
    border: none;
    color: white;
    background-color: #f06161;
    margin: 1rem;
  }
  input,
  textarea {
    width: 24rem;
    height: 2rem;
    border: #f06161 solid 2.5px;
    padding-left: 5px;
    font-family: 'Mukta', sans-serif;
    font-size: 1.5rem;
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
  .descriptionInput {
    width: 24rem;
    height: 15rem;
    overflow: auto;
  }
  .descriptionInput {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .descriptionInput::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;
