import Column from './components/Column';
import type { Task } from './types/task';
import type { BoardColumn } from './types/column';
import { useState } from 'react';




const columns: BoardColumn[] = [
  { id: 1, title: 'To Do', order: 1 },
  { id: 2, title: 'In Progress', order: 2 },
  { id: 3, title: 'Done', order: 3 },
];



function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Task 1', columnId: 1 },
    { id: 2, title: 'Task 2', columnId: 2 },
    { id: 3, title: 'Task 3', columnId: 3 },
  ]);

  function addTask(columnId: number, title: string) {
    setTasks((prev) => [
      ...prev,
      {
        id: prev.reduce((max, task) => Math.max(max, task.id), 0) + 1,
        title: title,
        columnId: columnId,
      },
    ]);
  }

  function deleteTask(id: number) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div>
      <h1>My Kanban Board</h1>

      {columns.map((column) => (
        <Column
          key={column.id}
          column={{
            ...column,
            tasks: tasks.filter((task) => task.columnId === column.id),
          }}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;