import axios from "axios";
import { chaletsApi } from "../../api/notAuthApi";
import { Get_Chalets, GET_Error, Get_ChaletById } from "../actionTypes";
export const getChalets = () => (dispatch) => {
  axios
    .get(`${chaletsApi}`)
    .then((response) => {
      const chalets = response.data.response.data;
      // const pagesNum = response.data.response.meta.last_page;
      console.log(chalets);
      dispatch(getChaletsSuccess(chalets));
    })
    .catch((error) => {
      dispatch(getChaletsFailed(error.response.data.message));
    });
};

const getChaletsSuccess = (chalets) => {
  return { type: Get_Chalets, payload: chalets };
};
const getChaletsFailed = (err) => {
  return { type: GET_Error, payload: err };
};
/////////////////////////////get chalet by id/////////////////
export const getChaletById = (id) => (dispatch) => {
  return axios
    .get(`${chaletsApi}/${id}`)
    .then((response) => {
      const chalet = response.data.response.data;
      // console.log("chalit", chalit);
      dispatch(getChaletByIdSuccess(chalet));
      //return user;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getChaletByIdSuccess = (chalet) => {
  return { type: Get_ChaletById, payload: chalet };
};
