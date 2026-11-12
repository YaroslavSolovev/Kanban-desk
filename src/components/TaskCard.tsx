type TaskCardProps = {
  task: string;
  id: number;
  onDeleteTask: (id: number) => void;
};

function TaskCard({ task, id, onDeleteTask }: TaskCardProps) {
  return (
    <div>
      <h3>{task}</h3>
      <button onClick={() => onDeleteTask(id)}>Удалить</button>
    </div>
  );
}

export default TaskCard;