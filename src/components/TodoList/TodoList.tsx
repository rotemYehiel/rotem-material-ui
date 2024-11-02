import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  List,
} from "@mui/material";
import { Todo } from "../../types/todo";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const updateTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = () => {
    if (newTask.trim()) {
      updateTodos([
        ...todos,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const toggleTodoCompletion = (id: number) => {
    updateTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    updateTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Incomplete") return !todo.completed;
    return true;
  });

  const sanitizeInput = (input: string) => {
    const sanitized = input.replace(/<[^>]+>/g, "");
    return sanitized;
  };

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedInput = sanitizeInput(e.target.value);
    setNewTask(sanitizedInput);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Todo List
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="New Task"
          value={newTask}
          onChange={handleNewTaskChange}
          fullWidth
        />
        <Button
          onClick={addTodo}
          variant="contained"
          color="primary"
          fullWidth
          disabled={!newTask.length}
        >
          Add Task
        </Button>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          fullWidth
          disabled={!todos.length}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Incomplete">Incomplete</MenuItem>
        </Select>

        {!!filteredTodos.length && (
          <List>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodoCompletion}
                onDelete={deleteTodo}
              />
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default TodoList;
