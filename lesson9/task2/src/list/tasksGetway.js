const baseUrl = 'https://6294ab7e63b5d108c190df45.mockapi.io/api/v1/TodoList';

export const getTasksList = () => fetch(`${baseUrl}`).then((response) => response.json()); // отримали масив задач які зберігаються на сервері

export const onCreateTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updatedTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});
