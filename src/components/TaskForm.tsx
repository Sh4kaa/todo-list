import React from 'react';

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Título da tarefa"
        />
      </div>
      <div>
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
