import { Get_Chalets, Get_ChaletById } from "../actionTypes";
const initialState = {
  chalets: [],
  chalet: {},
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
    default:
      newState = state;
      break;
  }
  return newState;
};
