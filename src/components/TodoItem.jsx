import { useDispatch } from 'react-redux';
import {toggleTodo, deleteTodo} from '../store/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
