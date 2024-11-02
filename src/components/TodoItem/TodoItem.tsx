import { ListItem, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../../types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <Typography
        variant="body1"
        sx={{
          textDecoration: todo.completed ? "line-through" : "none",
          flexGrow: 1,
        }}
      >
        {todo.text}
      </Typography>
      <IconButton onClick={() => onDelete(todo.id)}>
        <DeleteIcon color="secondary" />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
