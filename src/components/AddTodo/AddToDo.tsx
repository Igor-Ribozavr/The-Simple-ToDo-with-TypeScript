import React, { useCallback, useState, useEffect } from 'react';
import { ToDo } from './ToDo.model';
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
  console.log(deleter);
  
  
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
  // const [rep, setRep] = useState<boolean>(false);

  // const todoSubmitHandler = useCallback(
  //   async (e) => {
  //     e.preventDefault();
  //     await fetch(`https://test.megapolis-it.ru/api/list`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         title: title,
  //       }),
  //     });
  //     setRep(!rep);
  //   },
  //   [title]
  // );

  // async function data() {
  //   const response = await fetch('https://test.megapolis-it.ru/api/list');
  //   const result = await response.json();
  //   setArr(result.data);
  //   setRep(!rep);
  // }

  // useEffect(() => {
  //   data();
  // }, [rep]);

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
      {data && data.map((el) => (
        <div className="todo-container">
          <ul className="todoList">
            <div className="todo">
              <li key={el.id}>{el.title}</li>
              <DeleteToDo  value={el}/> 
            </div>
            {/* <EditToDo value={el}/> */}
          </ul>
        </div>
      ))}
    </>
  );
};

export default AddToDo;
