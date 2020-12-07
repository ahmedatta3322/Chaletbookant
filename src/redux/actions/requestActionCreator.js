import axios from "axios";
import { authApi } from "../../api/authApi";
import {
  GET_Error,
  Get_SentRentRequests,
  Get_ReciviedRentRequests,
} from "../actionTypes";
////////////////////////////////get sent rent requests///////////
export const getSentRentRequests = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  axios
    .get(`${authApi}rent_chalet`, config)
    .then((response) => {
      const data = response.data.response.data;
      const pagesNum = response.data.response.meta.last_page;
      // console.log(data);
      dispatch(getSentRentRequestsSuccess(data, pagesNum));
    })
    .catch((error) => {
      dispatch(getSentRentRequestsFailed(error));
      console.log(error);
    });
};

const getSentRentRequestsSuccess = (sentRentRequests, pagesNum) => {
  return {
    type: Get_SentRentRequests,
    payload: { sentRentRequests, pagesNum },
  };
};
const getSentRentRequestsFailed = (err) => {
  return { type: GET_Error, payload: err };
};
////////////////////////////////get recevied rent requests///////////
export const getReciviedRentRequests = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  axios
    .get(`${authApi}recieved_rent_request`, config)
    .then((response) => {
      const data = response.data.response.data;
      //   const pagesNum = response.data.response.meta.last_page;
      // console.log(data);
      dispatch(getReciviedRentRequestsSuccess(data));
    })
    .catch((error) => {
      dispatch(getReciviedRentRequestsFailed(error));
      console.log(error);
    });
};

const getReciviedRentRequestsSuccess = (reciviedRentRequests) => {
  return {
    type: Get_ReciviedRentRequests,
    payload: { reciviedRentRequests },
  };
};
const getReciviedRentRequestsFailed = (err) => {
  return { type: GET_Error, payload: err };
};
