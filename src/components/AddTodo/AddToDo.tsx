import React, { useCallback, useState, useEffect } from 'react';
import EditToDo from '../EditToDo/EditToDo';
import DeleteToDo from '../DeleteToDo/DeleteToDo';
import './AddToDo.css';
import { useDispatch, useSelector } from 'react-redux';
import { receiveData } from '../redux/actions';
import { addToDo } from '../redux/actions';
import { TypeState } from '../../index';

const AddToDo: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useDispatch();
  const creature = useSelector((state: TypeState) => state.creature);
  const edit = useSelector((state: TypeState) => state.edit);
  const deleter = useSelector((state: TypeState) => state.deleter);

  const todoSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addToDo(title));
    },
    [title, dispatch]
  );

  useEffect(() => {
    dispatch(receiveData());
  }, [dispatch, creature, deleter, edit]);

  const data = useSelector((state: TypeState) => state.data);

  return (
    <>
      <header className="header">
        <h1 className="h1">Список дел</h1>
      </header>
      <form onSubmit={todoSubmitHandler} className="addToDo">
        <div className="todo-container">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="inputAdd"
          />
          <button type="submit" className="btnAdd">
            Добавить
          </button>
        </div>
      </form>
      <br />
      {data &&
        data.map((el, i) => (
          <div key={i} className="todo-container">
            <ul className="todoList">
              <div className="todo">
                <li key={el.id}>{el.title}</li>
                <DeleteToDo value={el} />
              </div>
              <EditToDo value={el} />
            </ul>
          </div>
        ))}
    </>
  );
};

export default AddToDo;
