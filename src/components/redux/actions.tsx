import { RECEIVE_DATA, ADD_TODO, DELETE_TODO, EDIT_TODO, WorkingDispatchTypes } from './actionTypes';
import { Dispatch } from 'redux';

export const receiveData = () => {
  return async (dispatch: Dispatch<WorkingDispatchTypes>) => {
    const response = await fetch('https://test.megapolis-it.ru/api/list');
    const result = await response.json();
    console.log(result);
    
    dispatch({
      type: RECEIVE_DATA,
      payload: result.data,
    });
  };
};



// export const addToDo = (title) => {
//   return async (dispatch: Dispatch) => {
//     const response = await fetch(`https://test.megapolis-it.ru/api/list`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         title: title,
//       }),
//     });
//     const result = await response.json();
//     dispatch({
//       type: ADD_TODO,
//       payload: result,
//     });
//   };
// };

// export const deleteToDo = (id) => {
//   return async (dispatch: Dispatch) => {
//     const response = await fetch(
//       `https://test.megapolis-it.ru/api/list/${id}`,
//       {
//         method: 'DELETE',
//         headers: {
//           'Content-type': 'application/json',
//         },
//       }
//     );
//     const result = await response.json();
//     dispatch({
//       type: DELETE_TODO,
//       payload: result,
//     });
//   };
// };

// export const editToDo = (title) => {
//   return async (dispatch: Dispatch) => {
//     const response = await fetch(`https://test.megapolis-it.ru/api/list/3237`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         title: title,
//       }),
//     });
//     const result = await response.json();
//     dispatch({
//       type: EDIT_TODO,
//       payload: result,
//     });
//   };
// };
