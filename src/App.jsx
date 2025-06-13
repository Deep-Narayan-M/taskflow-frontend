import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import Auth from "./components/Auth";
import { useEffect, useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer,
} from "./services/itemsService";
import { isAuthenticated, getToken, logout } from "./services/authService";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [isAuth, setIsAuth] = useState(isAuthenticated());

  useEffect(() => {
    if (isAuth) {
      getItemsFromServer().then((initialItems) => {
        // Add completed property if it doesn't exist
        const itemsWithCompletedStatus = initialItems.map((item) => ({
          ...item,
          completed: item.completed || false,
        }));
        setTodoItems(itemsWithCompletedStatus);
      });
    }
  }, [isAuth]);

  const handleNewItem = async (itemName, itemDueDate) => {
    const item = await addItemToServer(itemName, itemDueDate);
    const newItem = { ...item, completed: false };
    const newTodoItems = [...todoItems, newItem];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    try {
      setTodoItems(prevItems => prevItems.filter(item => item.id !== id));
      await deleteItemFromServer(id);
    } catch (error) {
      console.error('Error deleting item:', error);
      getItemsFromServer().then((items) => {
        const itemsWithCompletedStatus = items.map((item) => ({
          ...item,
          completed: item.completed || false,
        }));
        setTodoItems(itemsWithCompletedStatus);
      });
    }
  };

  const handleToggleComplete = async (id) => {
    const updatedItem = await markItemCompletedOnServer(id);
    // Update the item with the response from server
    const updatedItems = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: updatedItem.completed };
      }
      return item;
    });

    setTodoItems(updatedItems);
  };

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setTodoItems([]);
  };

  const handleAuthSuccess = () => {
    setIsAuth(true);
  };

  // Sort items: incomplete items first, then completed items
  const sortedItems = [...todoItems].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  if (!isAuth) {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E293B] rounded-2xl shadow-2xl overflow-hidden mb-8 border border-[#334155]">
          <div className="p-8">
            <div className="flex justify-end mb-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-[#F1F5F9] hover:text-[#38BDF8] transition-colors duration-300"
              >
                Logout
              </button>
            </div>
            <AppName />
            <AddTodo onNewItem={handleNewItem} />
            {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
            <TodoItems
              todoItems={sortedItems}
              onDeleteClick={handleDeleteItem}
              onToggleComplete={handleToggleComplete}
            ></TodoItems>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
