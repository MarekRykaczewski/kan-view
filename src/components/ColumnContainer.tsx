import { Column, Id } from '../types';
import TrashIcon from '../icons/TrashIcon';

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
}

function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;
  return (
    <div className="bg-shadeTwo w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      <div className="bg-shadeOne text-md h-[60px] cursor-pointer rounded-md rounded-b-none p-3 font-bold border-shadeTwo border-4 flex items-center justify-between">
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
