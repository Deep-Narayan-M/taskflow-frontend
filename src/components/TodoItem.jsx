function TodoItem({
  id,
  todoName,
  todoDate,
  completed,
  onDeleteClick,
  onToggleComplete,
}) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-between p-4 mb-3 rounded-lg border ${
        completed
          ? "bg-[#1E3A8A]/20 border-[#3B82F6]/30"
          : "bg-[#0F766E]/20 border-[#2DD4BF]/30"
      } shadow-lg transition-all duration-300 group hover:border-[#38BDF8]`}
    >
      <div className="flex items-center mb-2 sm:mb-0 sm:flex-1">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(id)}
          className="w-5 h-5 text-[#38BDF8] rounded-md border-[#4B5563] focus:ring-[#38BDF8] focus:ring-offset-[#1F2937] bg-[#374151] transition-colors duration-200"
        />
        <span
          className={`ml-3 font-medium ${
            completed 
              ? "text-[#94A3B8] line-through" 
              : "text-[#2DD4BF]"
          } transition-all duration-200`}
        >
          {todoName}
        </span>
      </div>
      <div className={`mb-2 sm:mb-0 sm:w-1/3 text-sm ${
        completed 
          ? "text-[#94A3B8]" 
          : "text-[#5EEAD4]"
      }`}>
        {formatDate(todoDate)}
      </div>
      <div>
        <button
          type="button"
          className="px-4 py-2 bg-[#BE123C]/10 text-[#FDA4AF] rounded-lg hover:bg-[#BE123C]/20 focus:outline-none focus:ring-2 focus:ring-[#FDA4AF] focus:ring-offset-2 focus:ring-offset-[#1F2937] transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center"
          onClick={() => onDeleteClick(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
