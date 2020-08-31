import React from 'react';
import { ToDoProps } from '../AddTodo/ToDoProps';
import './DeleteToDo.css'

const DeleteToDo: React.FC<ToDoProps> = (props) => {
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
      {/* <form method="DELETE" onSubmit={submitDelete}>
        <button className="deleteBtn">Удалить</button>
      </form> */}
    </>
  );
};

export default DeleteToDo;
