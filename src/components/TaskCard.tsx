type TaskCardProps = {
  task: string;
  status: 'todo' | 'in-progress' | 'done';
};

function TaskCard({ task, status }: TaskCardProps) {
  return (
    <div>
      <h2>{task}</h2>
      <p>Status: {status}</p>
    </div>
  );
}

export default TaskCard;