import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ToDoProps } from '../AddTodo/ToDoProps';
import './DeleteToDo.css';
import { deleteToDo } from '../redux/actions';

const DeleteToDo: React.FC<ToDoProps> = (props) => {
  const dispatch = useDispatch();

  const submitDelete = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(deleteToDo(props.value.id));
    },
    [props.value.id, dispatch]
  );

  return (
    <>
      <form method="DELETE" onSubmit={submitDelete}>
        <button className="deleteBtn">Удалить</button>
      </form>
    </>
  );
};

export default DeleteToDo;
