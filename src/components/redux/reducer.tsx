import {
  RECEIVE_DATA,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  WorkingDispatchTypes,
  CurrentData,
} from './actionTypes';

interface DefaultState {
  loading: boolean;
  data?: CurrentData[];
}

const defaultState: DefaultState = {
  loading: false,
  data: [],
}

export const reducer = (state: DefaultState = defaultState, action: WorkingDispatchTypes) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        // ...state,
        loading: false,
        data: action.payload, 
      };
    //     case ADD_TODO:
    //       return {
    //         ...state,
    //         creature: [action.payload],
    //       };
    //     case DELETE_TODO:
    //       return {
    //         ...state,
    //         delete: [action.payload],
    //       };
    //       case EDIT_TODO:
    //         return {
    //         ...state,
    //         edit: [action.payload]
    //         }
    default:
      return state;
  }
};
