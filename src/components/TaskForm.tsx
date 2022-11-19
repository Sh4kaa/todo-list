import React from 'react';

//css
import styles from './TaskForm.module.css';

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Título da tarefa"
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          id="difficulty"
          type="text"
          name="difficulty"
          placeholder="Dificuldade"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
