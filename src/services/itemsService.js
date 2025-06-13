import { getToken } from './authService';

const API_URL = import.meta.env.VITE_API_URL;

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    if (response.status === 401) {
      logout();
    }
    const error = (data && data.message) || response.statusText;
    throw new Error(error);
  }
  return data;
};

export const addItemToServer = async (task, date) => {
  try {
    const response = await fetch(`${API_URL}/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ task, date }),
    });
    const item = await handleResponse(response);
    return mapServerItemToLocalItem(item);
  } catch (error) {
    // console.error('Add item error:', error);
    throw error;
  }
};

export const getItemsFromServer = async () => {
  try {
    const response = await fetch(`${API_URL}/todo`, {
      headers: {
        "Authorization": `Bearer ${getToken()}`,
      },
    });
    const items = await handleResponse(response);
    return items.map(mapServerItemToLocalItem);
  } catch (error) {
    // console.error('Get items error:', error);
    throw error;
  }
};

export const markItemCompletedOnServer = async (id) => {
  try {
    const response = await fetch(
      `${API_URL}/todo/${id}/completed`,
      {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      }
    );
    const item = await handleResponse(response);
    return mapServerItemToLocalItem(item);
  } catch (error) {
    // console.error('Mark completed error:', error);
    throw error;
  }
};

export const deleteItemFromServer = async (id) => {
  try {
    const response = await fetch(`${API_URL}/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${getToken()}`,
      },
    });
    
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.status = response.status;
      throw error;
    }

    if (response.status === 204) {
      return id;
    }

    const data = await response.json();
    return data._id;
  } catch (error) {
    console.error('Delete item error:', error);
    throw error;
  }
};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
