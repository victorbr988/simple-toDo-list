import styled from 'styled-components';

export const InputStyle = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;

  input {
    border: none;
    border-bottom: 1px solid #f4f4f4;
    background-color: transparent;
    color: white;
    padding: 0.5rem;
    border-radius: 0.2rem;
    outline: none;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border-color: 1px white;
    border-style: dashed;
    background-color: transparent;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
`;
