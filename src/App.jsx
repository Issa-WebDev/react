import React, { useReducer, useState } from "react";

const initialValue = [];
const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TODO":
      return state.filter((t) => t.id !== action.payload);
    case "OVER_TODO":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t
      );
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialValue);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    dispatch({ type: "ADD_TODO", payload: inputValue });
    setInputValue("");
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const overTodo = (id) => {
    dispatch({ type: "OVER_TODO", payload: id });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Gestionnaire de tâches</h1>

      <form onSubmit={addTodo} className="flex gap-2 mb-6">
        <input
          type="text"
          className="px-3 py-2 rounded-md text-white w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputValue}
          placeholder="Ajouter une tâche..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Ajouter
        </button>
      </form>

      <div className="w-full max-w-md">
        {todos.map(({ id, text, completed }) => (
          <ul key={id} className="bg-gray-800 rounded-lg p-3 mb-2 shadow-md">
            <li className="flex justify-between items-center">
              <span
                className={`flex-1 ${
                  completed ? "line-through text-gray-400" : ""
                }`}
              >
                {text}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => overTodo(id)}
                  className={`px-3 py-1 rounded-md ${
                    completed
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white`}
                >
                  {completed ? "Annuler" : "Terminer"}
                </button>
                <button
                  onClick={() => deleteTodo(id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  ❌
                </button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
