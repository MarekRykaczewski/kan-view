import { useState } from 'react';
import PlusIcon from '../icons/PlusIcon';
import { Column } from '../types';
import ColumnContainer from './ColumnContainer';

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function generateId() {
    return Math.floor(Math.random() * 10000);
  }

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-2">
        <div className="flex gap-4">
          {columns.map((col) => (
            <ColumnContainer
              key={col.id}
              column={col}
              deleteColumn={deleteColumn}
            />
          ))}
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-shadeOne border-2 border-shadeTwo p-4 ring-accentMain hover:ring-2 flex gap-2"
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
    </div>
  );
}

export default KanbanBoard;
