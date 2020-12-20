import { Post_addAlbum } from "../actionTypes";
import {
  Get_Chalets,
  Get_ChaletById,
  Get_UserChalet,
  Get_ChaletsByPrice,
  Get_ChaletsByFilter,
  Post_AddChalet,
  Delete_Chalet,
  Edit_Chalet,
} from "../actionTypes";
const initialState = {
  chalets: [],
  chalet: {},
  currentUserChalets: [],
  pagesNum: 1,
  total: 0,
  status: "",
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
      //console.log(action.payload);
      newState.chalet = action.payload;
      // newState.loading = true;
      break;
    case Get_UserChalet:
      newState = { ...state };
      newState.currentUserChalets = action.payload.chalets;
      newState.pagesNum = action.payload.pagesNum;
      newState.total = action.payload.total;
      // console.log(newState.currentUserChalets);
      break;
    case Post_AddChalet:
      const chalet = action.payload;
      console.log(chalet);
      newState = {
        ...state,
        currentUserChalets: [...state.currentUserChalets, action.payload],
      };
      // newState = {
      //   ...state,
      //   chalet: { ...state.chalet, chalet },
      // };
      break;
    case Delete_Chalet:
      newState = { ...state };
      console.log(action.payload);
      // newState.chalets = [...state.chalets];
      newState.currentUserChalets = newState.currentUserChalets.filter(
        (chalet) => chalet.id !== action.payload
      );
      break;
    case Edit_Chalet:
      // newState = { ...state };
      // let editChalet = action.payload.editChalet;
      // const chaleet = newState.currentUserChalets.find(
      //   (chalet) => chalet.id === action.payload.id
      // );
      // const edit = { ...chaleet, ...editChalet };
      // console.log(edit);
      // newState.currentUserChalets = [...state.currentUserChalets, edit];
      // console.log(newState.currentUserChalets);
      const updateditem = action.payload.editChalet;
      const id = action.payload.id;
      console.log(updateditem);
      newState = {
        ...state,
        currentUserChalets: state.currentUserChalets.map((t) =>
          t.id === id ? updateditem : t
        ),
      };
      console.log(newState);
      break;
    case Post_addAlbum:
      const updatedChalet = action.payload.chalet;
      const chaletId = action.payload.id;
      console.log(updatedChalet);
      newState = {
        ...state,
        currentUserChalets: state.currentUserChalets.map((t) =>
          t.id === chaletId ? updatedChalet : t
        ),
      };

      // newState.status = action.payload;
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};
