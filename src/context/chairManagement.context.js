import { createContext } from 'react';
import { Types } from './chairManagement.constants';

export const initialState = {
  chairs: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.SAVE_CHAIR: {
      const chairsInfo = [...state.chairs];
      chairsInfo.push(action.payload);
      return { ...state, chairs: [...chairsInfo] }
    }
    default:
      return state;
  }
};

export const ChairManagementContext = createContext(initialState);
