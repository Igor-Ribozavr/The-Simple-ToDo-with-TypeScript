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
  // const submitDelete = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   await fetch(`https://test.megapolis-it.ru/api/list/${props.value.id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   });
  //   props.setRep(!props.rep);
  // };

  return (
    <>
      <form method="DELETE" onSubmit={submitDelete}>
        <button className="deleteBtn">Удалить</button>
      </form>
    </>
  );
};

export default DeleteToDo;
