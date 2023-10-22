import { Column, Id } from '../types';
import TrashIcon from '../icons/TrashIcon';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-shadeTwo w-[350px] h-[500px] opacity-40 border-2 border-accentMain max-h-[500px] rounded-md flex flex-col"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-shadeTwo w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      <div
        {...attributes}
        {...listeners}
        className="bg-shadeOne text-md h-[60px] cursor-pointer rounded-md rounded-b-none p-3 font-bold border-shadeTwo border-4 flex items-center justify-between"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-shadeTwo px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="stroke-gray-500 hover:stroke-white hober:bg-shadeTwo rounded px-1 py-2"
        >
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow">Content</div>
      <div>Footer</div>
    </div>
  );
}

export default ColumnContainer;
