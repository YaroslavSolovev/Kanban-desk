import TaskCard from './components/TaskCard';

type Task = {
  id: number;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'done';
};

const tasks: Task[] = [
  { id: 1, title: 'Task 1', status: 'todo' },
  { id: 2, title: 'Task 2', status: 'in-progress' },
  { id: 3, title: 'Task 3', status: 'done' },
];

function App() {
  return (
    <div>
      <h1>My Kanban Board</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task.title} status={task.status} />
      ))}
    </div>
  );
}

export default App;