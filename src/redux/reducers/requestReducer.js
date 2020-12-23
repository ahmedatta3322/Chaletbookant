import {
  Get_SentRentRequests,
  Get_ReciviedRentRequests,
  Get_SentExchangeRequests,
  Get_ReciviedExchangeRequests,
} from "../actionTypes";
const initialState = {
  sentRentRequests: [],
  reciviedRentRequests: [],
  sentExchangeRequests: [],
  reciviedExchangeRequests: [],
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
    case Get_SentExchangeRequests:
      newState = { ...state };
      newState.sentExchangeRequests = action.payload;
      // newState.pagesNum = action.payload.pagesNum;
      // newState.total = action.payload.total;
      break;
    case Get_ReciviedExchangeRequests:
      newState = { ...state };
      newState.reciviedExchangeRequests = action.payload;
      console.log(action.payload);
      //   newState.pagesNum = action.payload.pagesNum;
      //   newState.total = action.payload.total;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
