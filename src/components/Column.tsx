
import { useState } from 'react';
import type { Task } from '../types/task';
import TaskCard from './TaskCard';

type ColumnProps = {
  column: {
    id: number;
    title: string;
    tasks: Task[];
  };
  onAddTask: (columnId: number, title: string) => void;
  onDeleteTask: (taskId: number) => void;
};

function Column({ column, onAddTask, onDeleteTask }: ColumnProps) {
  const [title, setTitle] = useState('');

  function handleAddTask() {
    if (title.trim() === '') return;

    onAddTask(column.id, title.trim());
    setTitle('');
  }

  return (
    <div>
      <h2>{column.title}</h2>

      {column.tasks.map((task) => (
        <TaskCard
            key={task.id}
            id={task.id}
            task={task.title}
            onDeleteTask={onDeleteTask}
        />
        ))}

      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Название задачи"
        aria-label={`Новая задача в ${column.title}`}
      />

      <button onClick={handleAddTask}>
        Добавить задачу
      </button>
      
    </div>
  );
}

export default Column;
