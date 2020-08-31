import {
  RECEIVE_DATA,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  WorkingDispatchTypes,
  CurrentData,
  ResponseCreate,
  ResponseDelete,
  ResponseEdit,
} from './actionTypes';

interface DefaultState {
  loading: boolean;
  data?: CurrentData[];
  creature?: ResponseCreate;
  deleter?: ResponseDelete;
  edit?: ResponseEdit;
}

const defaultState: DefaultState = {
  loading: false,
  // data: [],
};

export const reducer = (
  state: DefaultState = defaultState,
  action: WorkingDispatchTypes
) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        loading: true,
        creature: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        loading: true,
        deleter: action.payload,
      };
    case EDIT_TODO:
      return {
        ...state,
        loading: true,
        edit: action.payload,
      };
    default:
      return state;
  }
};
