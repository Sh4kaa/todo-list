import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import { ITask } from '../interfaces/Task';

//css
import styles from './TaskForm.module.css';

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.name === 'title'
      ? setTitle(e.target.value)
      : setDifficulty(parseInt(e.target.value));
    console.log(title);
    console.log(difficulty);
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
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
