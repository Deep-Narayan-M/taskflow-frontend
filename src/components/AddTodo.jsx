import { useState, useRef } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dateInputRef = useRef(null);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDateClick = () => {
    dateInputRef.current.showPicker();
  };

  const handleAddButtonClicked = () => {
    if (!todoName.trim()) return;
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <div className="flex-1">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={todoName}
            onChange={handleNameChange}
            className="w-full px-4 py-3 rounded-lg bg-[#334155] border border-[#475569] text-[#F1F5F9] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all duration-300"
          />
        </div>
        <div 
          className="sm:w-1/3 relative cursor-pointer group"
          onClick={handleDateClick}
        >
          <input
            ref={dateInputRef}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            className="w-full px-4 py-3 rounded-lg bg-[#334155] border border-[#475569] text-[#F1F5F9] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all duration-300 cursor-pointer"
          />
          <div className="absolute inset-0 opacity-0"></div>
        </div>
        <div>
          <button
            type="button"
            className="w-full sm:w-auto px-6 py-3 bg-[#0EA5E9] text-white font-medium rounded-lg hover:bg-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#38BDF8] focus:ring-offset-2 focus:ring-offset-[#1E293B] transition-all duration-300"
            onClick={handleAddButtonClicked}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
