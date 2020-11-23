import { Get_Chalets, Get_ChaletById, Get_UserChalet } from "../actionTypes";
const initialState = {
  chalets: [],
  chalet: {},
  currentUserChalets: [],
};
export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case Get_Chalets:
      newState = { ...state };
      newState.chalets = action.payload;
      console.log(newState.chalets);
      // newState.pagesNum = action.payload.pagesNum;
      // newState.loading = action.payload === [] ? false : true;
      // console.log(newState,"reducer");
      break;
    case Get_ChaletById:
      newState = { ...state };
      newState.chalet = action.payload;
      // newState.loading = true;
      break;
    case Get_UserChalet:
      newState = { ...state };
      newState.currentUserChalets = action.payload;
      console.log(newState.currentUserChalets);
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
