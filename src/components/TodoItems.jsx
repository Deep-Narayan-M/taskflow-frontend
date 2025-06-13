import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onToggleComplete }) => {
  // Group items by completion status
  const pendingItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  return (
    <div className="space-y-8">
      {pendingItems.length > 0 && (
        <div className="bg-[#0F766E]/5 p-6 rounded-xl border border-[#2DD4BF]/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#2DD4BF] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M8 6h10" />
                <path d="M6 12h9" />
                <path d="M4 18h8" />
              </svg>
              Active Tasks
            </h2>
            <span className="px-3 py-1 bg-[#0F766E]/20 text-[#2DD4BF] text-sm font-medium rounded-full">
              {pendingItems.length} task{pendingItems.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="space-y-3">
            {pendingItems.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todoDate={item.dueDate}
                todoName={item.name}
                completed={item.completed}
                onDeleteClick={onDeleteClick}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        </div>
      )}

      {completedItems.length > 0 && (
        <div className="bg-[#1E3A8A]/5 p-6 rounded-xl border border-[#3B82F6]/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-[#60A5FA] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Completed Tasks
            </h2>
            <span className="px-3 py-1 bg-[#1E3A8A]/20 text-[#60A5FA] text-sm font-medium rounded-full">
              {completedItems.length} task{completedItems.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="space-y-3">
            {completedItems.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                todoDate={item.dueDate}
                todoName={item.name}
                completed={item.completed}
                onDeleteClick={onDeleteClick}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItems;
