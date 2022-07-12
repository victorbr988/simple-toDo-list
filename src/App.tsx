import { useState } from 'react';
import { InputGroup } from './components/Input';
import { TitleApp } from './components/styles/styles';
import { ContentApp } from './components/styles/ContentApp';
import { LiStyle } from './components/styles/LiStyle';
import { UlStyle } from './components/styles/UlStyle';
import { IconTrash } from './components/styles/LiStyle';

interface TaskType {
  title: string;
  id: number;
  checked: boolean;
}

export const App: React.FC = () => {
  const [tasks, addTask] = useState<TaskType[]>([]); // tipando função com genereic

  function addTitle(title: string): void {
    addTask([...tasks, { title, id: Date.now(), checked: false }]);
  }

  function toggleTaskDone(id: number): void {
    const taskIsDone = tasks.map((task) => {
      if (task.id === id) task.checked = !task.checked;
      return task;
    });
    addTask(taskIsDone);
  }

  function removeTask(id: number) :void{
    const tasksRemoved = tasks.filter((task) => task.id !== id)
    addTask(tasksRemoved)
  }
  return (
    <div>
      <TitleApp>My toDo List with Typescript and styled components</TitleApp>
      <header>
        <InputGroup addTask={addTitle} />
      </header>

      <ContentApp>
        <UlStyle>
          {tasks.map(({ title, id, checked }, index) => (
            <LiStyle checked={checked} color="red" key={index}>
              <input type="checkbox" onChange={() => toggleTaskDone(id)} checked={checked} />
              <h2>{title}</h2>
              <IconTrash onClick={() => removeTask(id)} />
            </LiStyle>
          ))}
        </UlStyle>
      </ContentApp>
    </div>
  );
};
