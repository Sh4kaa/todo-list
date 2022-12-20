import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import { ITask } from '../interfaces/Task';

//css
import styles from './TaskForm.module.css';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: string): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validações do input
    if (title === '') {
      alert('Digite uma tarefa');
      return;
    } else if (difficulty === '') {
      alert('Insira uma dificuldade');
      return;
    }
    // fim das validações do input
    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };
      setTaskList!([...taskList, newTask]);
      setTitle('');
      setDifficulty('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'title'
      ? setTitle(e.target.value)
      : setDifficulty(e.target.value);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          id="difficulty"
          type="text"
          name="difficulty"
          placeholder="Dificuldade"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
