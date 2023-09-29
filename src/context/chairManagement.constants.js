import { createAction } from "../utils/utils";

export const Types = {
  SAVE_CHAIR: 'chairManagement/saveChair',
  GET_CHAIRS: 'chairManagement/getChairs',
}
export const reducerActions = {
  setChair: createAction(Types.SAVE_CHAIR)
};
