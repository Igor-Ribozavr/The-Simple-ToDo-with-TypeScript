import React, { useState, useCallback } from 'react';
import './modalWindow.css';
import { ToDoProps } from '../AddTodo/ToDoProps';

const EditToDo: React.FC<ToDoProps> = (props) => {
  // const [display, setDisplay] = useState<string>('none');
  // const [info, setInfo] = useState<string>(props.value.title);

  // const modal = document.querySelector('.modal');

  // window.addEventListener('click', (event: MouseEvent) => {
  //   if (event.target == modal) {
  //     setDisplay('none');
  //   }
  // }); 

  // const sendEdit = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     await fetch(`https://test.megapolis-it.ru/api/list/${props.value.id}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         title: info,
  //       }),
  //     });
  //     props.setRep(!props.rep);
  //   },
  //   [info]
  // );

  return (
    <>
      {/* <button
        id="modalBtn"
        className="button"
        onClick={() => setDisplay('block')}
      >
        Редактировать
      </button>
      <form onSubmit={sendEdit} method="POST">
        <div id="simpleModal" className="modal" style={{ display: display }}>
          <div className="modal-content">
            <span className="closeBtn" onClick={() => setDisplay('none')}>
              X
            </span>
            <input
              name="edit"
              onChange={(e) => {
                setInfo(e.target.value);
              }}
              defaultValue={props.value.title}
              className="inputEdit"
            ></input>
            <button className="buttonModal"onClick={() => setDisplay('none')}>Сохранить</button>
          </div>
        </div>
      </form> */}
    </>
  );
};

export default EditToDo;
