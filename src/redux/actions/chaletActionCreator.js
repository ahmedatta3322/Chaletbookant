import axios from "axios";
import { authApi } from "../../api/authApi";
import { chaletsApi } from "../../api/notAuthApi";
import {
  Get_Chalets,
  GET_Error,
  Get_ChaletById,
  Get_UserChalet,
  Get_ChaletsByPrice,
  Get_ChaletsByFilter,
  Post_AddChalet,
  Delete_Chalet,
} from "../actionTypes";
export const getChalets = (pagenaite, page) => (dispatch) => {
  axios
    .get(`${chaletsApi}?pagenaite=${pagenaite}&page=${page}`)
    .then((response) => {
      const chalets = response.data.response.data;
      const pagesNum = response.data.response.meta.last_page;
      const total = response.data.response.meta.total;
      // console.log(pagesNum);
      dispatch(getChaletsSuccess(chalets, pagesNum, total));
    })
    .catch((error) => {
      dispatch(getChaletsFailed(error.response.data.message));
    });
};

const getChaletsSuccess = (chalets, pagesNum, total) => {
  return { type: Get_Chalets, payload: { chalets, pagesNum, total } };
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
///////////////////////get user chalet////////
export const getUserChalet = (page) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(`${authApi}user_chalets?page=${page}`, config)
    .then((response) => {
      console.log(response);
      const chalets = response.data.response.data;
      const pagesNum = response.data.response.meta.last_page;
      const total = response.data.response.meta.total;
      console.log("chalit", chalets);
      dispatch(getUserChaletSuccess(chalets, pagesNum, total));
      // return user;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getUserChaletSuccess = (chalets, pagesNum, total) => {
  return { type: Get_UserChalet, payload: { chalets, pagesNum, total } };
};
//////////////////////////////get related chalets///////////////
export const getChaletsByPrice = (pagenaite, fees, page) => (dispatch) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //   },
  // };
  // console.log(typeof status, "chalits");
  return axios
    .get(`${chaletsApi}?pagenaite=${pagenaite}&fees=${fees}&page=${page}`)
    .then((response) => {
      const chalets = response.data.response.data;
      console.log(response);
      const pagesNum = response.data.response.meta.last_page;
      const total = response.data.response.meta.total;
      // console.log("chalit", response.data.response.meta);
      dispatch(getChaletsByPriceSuccess(chalets, pagesNum, total));
      //return user;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getChaletsByPriceSuccess = (chalets, pagesNum, total) => {
  return {
    type: Get_ChaletsByPrice,
    payload: { chalets, pagesNum, total },
  };
};
///////////////////////////////get chalets by filter/////////
export const getChaletsByFilter = (status, fees, from, to) => (dispatch) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  //   },
  // };
  // console.log(typeof status, "chalits");
  return axios
    .get(`${chaletsApi}?status=${status}&fees=${fees}&from=${from}&to=${to}`)
    .then((response) => {
      const chalets = response.data.response.data;
      // const pagesNum = response.data.response.meta.last_page;
      // console.log("chalit", response.data.response.meta);
      dispatch(getChaletsByFilterSuccess(chalets));
      //return user;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getChaletsByFilterSuccess = (chalets) => {
  return { type: Get_ChaletsByFilter, payload: chalets };
};
//////////////////////add chalet/////////////
export const addChalet = (newChalet, data) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const data = {};
  for (var pair of newChalet.entries()) {
    // console.log(pair[0] + ":" + pair[1]);
    // data.push(pair[0] + ":" + pair[1]);
    data[pair[0]] = pair[1];
  }
  console.log(data);
  axios
    .post(`${authApi}chalets`, newChalet, config)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        dispatch(addChaletSuccess(data));
      }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const addChaletSuccess = (newChalet) => {
  return { type: Post_AddChalet, payload: newChalet };
};
//////////////////////Delete Chalet////////////
export const deleteChalet = (chaletId) => (dispatch) => {
  console.log(authApi);
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  axios
    .delete(`${authApi}chalets/${chaletId}`, config)
    .then((response) => {
      if (response.status === 200) dispatch(deleteChaletSuccess(chaletId));
    })
    .catch(console.log);
};

const deleteChaletSuccess = (chaletId) => {
  return { type: Delete_Chalet, payload: chaletId };
};
