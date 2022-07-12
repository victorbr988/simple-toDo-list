import { useState } from 'react';
import { InputStyle } from './styles/Input';

interface TaskProps {
  addTask: (title: string) => void;
}
// importante colocar o que uma fnunção recebe quando se trabalha com estado

export const InputGroup: React.FC<TaskProps> = ({ addTask }) => {
  const [title, addTitle] = useState<string>('');

  return (
    <InputStyle>
      <input type="text" value={title} onChange={({ target: { value } }) => addTitle(value)} />
      <button
        type="button"
        disabled={!title.length}
        onClick={() => {
          addTask(title);
          addTitle('');
        }}
      >
        Adicionar Task
      </button>
    </InputStyle>
  );
};
