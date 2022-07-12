import styled from 'styled-components';
import { FiTrash } from 'react-icons/fi';

interface PropsType {
  checked: boolean;
}

export const LiStyle = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: black;
  font-family: sans-serif;
  align-items: center;
  gap: 1rem;
  background-color: ${({ checked }: PropsType) => (checked ? '#64748b' : '#94a3b8')};
  width: 100%;
  word-wrap: break-word;

  input {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
  }
  h2 {
    word-break: break-all;
    font-size: 1.5rem;
    text-decoration: ${({ checked }: PropsType) => checked && 'line-through'};
  }
`;

export const IconTrash = styled(FiTrash) `
  color: red;
  cursor: pointer;
`;
