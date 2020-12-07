import { Get_SentRentRequests, Get_ReciviedRentRequests } from "../actionTypes";
const initialState = {
  sentRentRequests: [],
  reciviedRentRequests: [],
  pagesNum: 1,
  total: 0,
};
export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Get_SentRentRequests:
      newState = { ...state };
      newState.sentRentRequests = action.payload.sentRentRequests;
      newState.pagesNum = action.payload.pagesNum;
      newState.total = action.payload.total;
      break;
    case Get_ReciviedRentRequests:
      newState = { ...state };
      newState.reciviedRentRequests = action.payload.reciviedRentRequests;
      console.log(action.payload.reciviedRentRequests);
      //   newState.pagesNum = action.payload.pagesNum;
      //   newState.total = action.payload.total;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
