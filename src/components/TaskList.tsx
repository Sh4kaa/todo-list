import React from 'react';
import { ITask } from '../interfaces/Task';
//css
import styles from './TaskList.module.css';

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
}

const TaskList = ({ taskList, handleDelete }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.task} key={task.id}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>{task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil"></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
