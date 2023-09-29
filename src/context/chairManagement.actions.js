import { reducerActions } from './chairManagement.constants';

const useActions = (state, dispatch) => {
  const saveChair = async (newChairToSave) => {
    try {
      dispatch(reducerActions.setChair(newChairToSave));
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return {
    saveChair
  };
};

export { useActions };
