import {
  Get_Chalets,
  Get_ChaletById,
  Get_UserChalet,
  Get_ChaletsByPrice,
  Get_ChaletsByFilter,
  Post_AddChalet,
  Delete_Chalet,
} from "../actionTypes";
const initialState = {
  chalets: [],
  chalet: {},
  currentUserChalets: [],
  pagesNum: 1,
  total: 0,
};
export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Get_ChaletsByFilter:
    case Get_ChaletsByPrice:
    case Get_Chalets:
      newState = { ...state };
      newState.chalets = action.payload.chalets;
      console.log(newState.chalets);
      newState.pagesNum = action.payload.pagesNum;
      newState.total = action.payload.total;
      // newState.loading = action.payload === [] ? false : true;
      // console.log(action.payload.pagesNum);
      break;
    case Get_ChaletById:
      newState = { ...state };
      newState.chalet = action.payload;
      // newState.loading = true;
      break;
    case Get_UserChalet:
      newState = { ...state };
      newState.currentUserChalets = action.payload.chalets;
      newState.pagesNum = action.payload.pagesNum;
      newState.total = action.payload.total;
      console.log(newState.currentUserChalets);
      break;
    case Post_AddChalet:
      newState = {
        ...state,
        currentUserChalets: [...state.currentUserChalets, action.payload],
      };
      break;
    case Delete_Chalet:
      newState = { ...state };
      console.log(action.payload);
      // newState.chalets = [...state.chalets];
      newState.currentUserChalets = newState.currentUserChalets.filter(
        (chalet) => chalet.id !== action.payload
      );
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
