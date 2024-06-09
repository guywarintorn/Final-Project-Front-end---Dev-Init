export default function TodoForm(props) {
  const { title, setTitle, dueDate, setDuedate, addTask, editId } = props;

  return (
    <>
      <h2 className="dark:text-white">Manage Task</h2>
      <form className="mt-4 grid grid-cols-3">
        <input
          type="text"
          placeholder="Enter your task"
          className="border mr-4 text-base"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="border mr-4 text-base"
          value={dueDate}
          onChange={(e) => setDuedate(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 border text-base font-medium bg-green-600 text-white"
          onClick={addTask}
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </form>
    </>
  );
}
