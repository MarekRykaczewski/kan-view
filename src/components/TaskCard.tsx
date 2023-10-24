import { useState } from 'react';
import TrashIcon from '../icons/TrashIcon';
import { Id, Task } from '../types';

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
}

function TaskCard({ task, deleteTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      className="bg-shadeOne p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-accentMain cursor-grab relative"
    >
      {task.content}
      {mouseIsOver && (
        <button
          onClick={() => deleteTask(task.id)}
          className="stroke-white opacity-60 hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 bg-shadeTwo p-2 rounded"
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
