export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export type CurrentData = {
  id: number;
  title: string;
};
export type ResponseCreate = {
  id: number;
  success: boolean;
  error: string;
};
export type ResponseDelete = {
  success: boolean;
  error: string;
};
export type ResponseEdit = {
  success: boolean;
  error: string;
};

interface ReceiveData {
  type: typeof RECEIVE_DATA;
  payload: CurrentData[];
}

interface AddToDo {
  type: typeof ADD_TODO;
  payload: ResponseCreate;
}

interface DeleteToDo {
  type: typeof DELETE_TODO;
  payload: ResponseDelete;
}

interface EditData {
  type: typeof EDIT_TODO;
  payload: ResponseEdit;
}

export type WorkingDispatchTypes =
  | ReceiveData
  | AddToDo
  | DeleteToDo
  | EditData;
