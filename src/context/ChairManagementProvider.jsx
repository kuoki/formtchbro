import { useMemo, useReducer } from 'react';
import { ChairManagementContext, initialState, reducer } from './chairManagement.context';
import { useActions } from './chairManagement.actions';

export const ChairManagementProvider = ({ children }) => {
  const [state, dispatch  ] = useReducer(reducer, initialState);
  const actions = useActions(state, dispatch);

  const contextValue = useMemo(() => ({ ...state, actions }), [state, actions]);

  return <ChairManagementContext.Provider value={contextValue}>{children}</ChairManagementContext.Provider>;
};
