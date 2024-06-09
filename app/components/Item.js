export default function Item(props) {
  const { data, deleteTask, editTask } = props;

  return (
    <>
      <div className="grid grid-cols-3 mt-4 text-start">
        <span className="dark:text-white">{data.title}</span>
        <span className="dark:text-white">{data.dueDate}</span>
        <div className="flex gap-2 lg:gap-4 mx-auto">
          <button
            className="bg-red-600 text-white py-1 px-2"
            onClick={() => deleteTask(data.id)}
          >
            Delete
          </button>
          <button className="bg-slate-200 py-1 px-2" onClick={() => editTask(data.id)}>Config</button>
        </div>
      </div>
    </>
  );
}
