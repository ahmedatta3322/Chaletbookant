import axios from "axios";
import { authApi } from "../../api/authApi";
import { chaletsApi } from "../../api/notAuthApi";
import { Post_addAlbum, Post_ExchangeChalet } from "../actionTypes";
import {
  Get_Chalets,
  GET_Error,
  Get_ChaletById,
  Get_UserChalet,
  Get_ChaletsByPrice,
  Get_ChaletsByFilter,
  Post_AddChalet,
  Delete_Chalet,
  Edit_Chalet,
  // Delete_Image,
  // Post_addAlbum,
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
      if (error.response)
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
  console.log(page);
  return axios
    .get(`${authApi}user_chalets?page=${page}`, config)
    .then((response) => {
      // console.log(response);
      console.log(page);
      const chalets = response.data.response.data;
      if (page !== "") {
        console.log(page);
        const pagesNum = response.data.response.meta.last_page;
        const total = response.data.response.meta.total;
        dispatch(getUserChaletSuccess(chalets, pagesNum, total));
      } else {
        dispatch(getUserChaletSuccess(chalets));
      }
      // console.log("chalit", chalets);
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
      const pagesNum = response.data.response.meta.last_page;
      const total = response.data.response.meta.total;
      // console.log("chalit", response.data.response.meta);
      dispatch(getChaletsByFilterSuccess(chalets, pagesNum, total));
      //return user;
    })
    .catch((err) => {
      console.log(err);
    });
};
const getChaletsByFilterSuccess = (chalets, pagesNum, total) => {
  return { type: Get_ChaletsByFilter, payload: { chalets, pagesNum, total } };
};
//////////////////////add chalet/////////////
export const addChalet = (newChalet) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  // const data = {};
  // for (var pair of newChalet.entries()) {
  //   data[pair[0]] = pair[1];
  // }
  // console.log(data);
  axios
    .post(`${authApi}chalets`, newChalet, config)
    .then((response) => {
      console.log(response);
      const chalet = response.data.response.data;
      if (response.status === 200) {
        dispatch(addChaletSuccess(chalet));
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
//////////////////////verify chalet/////////////
export const verifyChalet = (id, document) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  };
  for (var pair of document.entries()) {
    console.log(pair[0] + ":" + pair[1]);
    // data.pair[0] = pair[1];
  }
  // const data = {};
  // for (var pair of newChalet.entries()) {
  //   data[pair[0]] = pair[1];
  // }
  // console.log(data);
  axios
    .post(`${authApi}verify_chalet/${id}`, document, config)
    .then((response) => {
      console.log(response);
      // const chalet = response.data.response.data;
      // if (response.status === 200) {
      //   dispatch(verifyAccountSuccess(chalet));
      // }
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// const verifyChaletSuccess = (newChalet) => {
//   return { type: Post_AddChalet, payload: newChalet };
// };
////////////////////////////////edit chalet//////////////
export const EditChalet = (id, editChalet) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      // "Content-Type": "multipart/form-data",
    },
  };
  // for (var pair of editChalet.entries()) {
  //   console.log(pair[0] + ":" + pair[1]);
  //   // data.pair[0] = pair[1];
  // }
  //app.apptechegy.com/api/gateway/chalets/125?_method=PUT
  return axios
    .post(`${authApi}chalets/${id}?_method=PUT`, editChalet, config)
    .then((response) => {
      const newChalet = response.data.response.data;
      console.log(response);
      console.log(newChalet);
      if (response.status === 200) dispatch(EditChaletSuccess(newChalet, id));
    })
    .catch((err) => {
      console.log(err);
    });
};

const EditChaletSuccess = (editChalet, id) => {
  return { type: Edit_Chalet, payload: { editChalet, id } };
};
//////////////////////Delete image////////////
export const deleteImage = (imageId) => (dispatch) => {
  // console.log(authApi);
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  axios
    .delete(`${authApi}del_album/${imageId}`, config)
    .then((response) => {
      console.log(response);
      // if (response.status === 200) dispatch(deleteImageSuccess(imageId));
    })
    .catch(console.log);
};

// const deleteImageSuccess = (imageId) => {
//   return { type: Delete_Image, payload: imageId };
// };
//////////////////////add Image/////////////
export const addImage = (newImage, id) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      // "Content-Type": "multipart/form-data",
    },
  };
  // const data = {};
  // for (var pair of newImage.entries()) {
  //   console.log(pair[0] + ":" + pair[1]);
  // }
  // console.log(data);
  axios
    .post(`${authApi}add_album/${id}`, newImage, config)
    .then((response) => {
      console.log(response);
      console.log(response.data.response.data.images);
      const chalet = response.data.response.data;
      if (response.data.status === 200) {
        dispatch(addImageSuccess(chalet, id));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const addImageSuccess = (chalet, id) => {
  return { type: Post_addAlbum, payload: { chalet, id } };
};
//////////////////////send exchange request/////////////
export const exchangeChalet = (requestData) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  axios
    .post(`${authApi}exchange_chalet`, requestData, config)
    .then((response) => {
      console.log(response);
      if (response.data.status === 200) {
        console.log(response.statusText);
        dispatch(exchangeChaletSuccess(response.statusText));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const exchangeChaletSuccess = (status) => {
  return { type: Post_ExchangeChalet, payload: status };
};
