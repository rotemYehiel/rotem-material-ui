import React, { useEffect, useMemo, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  List,
  Pagination,
} from "@mui/material";
import { Todo } from "../../types/todo";
import TodoItem from "../TodoItem/TodoItem";

const ITEMS_PER_PAGE = 5;

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

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
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(updatedTodos);

    const totalPages = Math.ceil(updatedTodos.length / ITEMS_PER_PAGE);

    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
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

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const pageCount = useMemo(
    () => Math.ceil(filteredTodos.length / ITEMS_PER_PAGE),
    [filteredTodos]
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedTodos = useMemo(
    () => filteredTodos.slice(startIndex, startIndex + ITEMS_PER_PAGE),
    [filteredTodos, startIndex]
  );

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

        {!!paginatedTodos.length && (
          <List>
            {paginatedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodoCompletion}
                onDelete={deleteTodo}
              />
            ))}
          </List>
        )}

        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          />
        )}
      </Box>
    </Container>
  );
};

export default TodoList;
