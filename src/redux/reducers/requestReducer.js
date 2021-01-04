import {
  Get_SentRentRequests,
  Get_ReciviedRentRequests,
  Get_SentExchangeRequests,
  Get_ReciviedExchangeRequests,
  Get_notAvailableDays,
  Edit_HostStatus,
  Edit_GuestStatus,
} from "../actionTypes";
const initialState = {
  sentRentRequests: [],
  reciviedRentRequests: [],
  sentExchangeRequests: [],
  reciviedExchangeRequests: [],
  days: [],
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
    case Get_notAvailableDays:
      newState = { ...state };
      console.log(action.payload);
      newState.days = action.payload;
      break;
    case Edit_HostStatus:
      const updateditem = action.payload;
      const id = action.payload.id;
      console.log(updateditem);
      newState = {
        ...state,
        reciviedExchangeRequests: state.reciviedExchangeRequests.map((t) =>
          t.id === id ? updateditem : t
        ),
      };
      break;
    case Edit_GuestStatus:
      const updatedRequest = action.payload;
      const requestId = action.payload.id;
      console.log(updatedRequest);
      newState = {
        ...state,
        sentExchangeRequests: state.sentExchangeRequests.map((t) =>
          t.id === requestId ? updatedRequest : t
        ),
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
