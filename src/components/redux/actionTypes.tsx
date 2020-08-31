export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export type CurrentData = {
    id: number,
    title: string,
}

interface ReceiveData {
  type: typeof RECEIVE_DATA;
  payload: CurrentData[];
}

interface AddToDo {
  type: typeof ADD_TODO;
}

interface DeleteToDo {
  type: typeof DELETE_TODO;
}

interface EditData {
  type: typeof EDIT_TODO;
}


export type WorkingDispatchTypes = ReceiveData | AddToDo | DeleteToDo | EditData
