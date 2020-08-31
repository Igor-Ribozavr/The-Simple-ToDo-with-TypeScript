import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import './modalWindow.css';
import { ToDoProps } from '../AddTodo/ToDoProps';
import { editToDo } from '../redux/actions';

const EditToDo: React.FC<ToDoProps> = (props) => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState<string>(props.value.title);

  const sendEdit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(editToDo(props.value.id, info));
    },
    [dispatch, props.value.id, info]
  );

  const [display, setDisplay] = useState<string>('none');

  const modal = document.querySelector('.modal');

  window.addEventListener('click', (event: MouseEvent) => {
    if (event.target === modal) {
      setDisplay('none');
    }
  });

  return (
    <>
      <button
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
            <button className="buttonModal" onClick={() => setDisplay('none')}>
              Сохранить
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditToDo;
