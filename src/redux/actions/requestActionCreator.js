import axios from "axios";
import { authApi } from "../../api/authApi";
import {
  GET_Error,
  Get_SentRentRequests,
  Get_ReciviedRentRequests,
  Get_SentExchangeRequests,
  Get_ReciviedExchangeRequests,
  Get_notAvailableDays,
  Edit_HostStatus,
  Edit_GuestStatus,
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
////////////////////////////////get sent Exchange requests///////////
export const getSentExchangeRequests = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  axios
    .get(`${authApi}exchange_chalet`, config)
    .then((response) => {
      const data = response.data.response.data;
      console.log(response);
      console.log(data);
      // const pagesNum = response.data.response.meta.last_page;
      // console.log(data);
      dispatch(getSentExchangeRequestsSuccess(data));
    })
    .catch((error) => {
      dispatch(getSentExchangeRequestsFailed(error));
      console.log(error);
    });
};

const getSentExchangeRequestsSuccess = (sentExchangeRequests) => {
  return {
    type: Get_SentExchangeRequests,
    payload: sentExchangeRequests,
  };
};
const getSentExchangeRequestsFailed = (err) => {
  return { type: GET_Error, payload: err };
};
////////////////////////////////get recevied Exchange requests///////////
export const getReciviedExchangeRequests = () => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  axios
    .get(`${authApi}recieved_exchange_request`, config)
    .then((response) => {
      const data = response.data.response.data;
      //   const pagesNum = response.data.response.meta.last_page;
      // console.log(data);
      dispatch(getReciviedExchangeRequestsSuccess(data));
    })
    .catch((error) => {
      dispatch(getReciviedExchangeRequestsFailed(error));
      console.log(error);
    });
};

const getReciviedExchangeRequestsSuccess = (reciviedExchangeRequests) => {
  return {
    type: Get_ReciviedExchangeRequests,
    payload: reciviedExchangeRequests,
  };
};
const getReciviedExchangeRequestsFailed = (err) => {
  return { type: GET_Error, payload: err };
};
///////////////////////get NOT AVAILABLE DAYS////////
export const getNotAvailableDays = (id) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(`${authApi}calender/${id}`, config)
    .then((response) => {
      console.log(response);

      const days = response.data.response.data;
      if (response.data.status === 200) {
        console.log(days);
        dispatch(getNotAvailableDaysSuccess(days));
      }
      // console.log("chalit", chalets);
      // return user;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
const getNotAvailableDaysSuccess = (days) => {
  return { type: Get_notAvailableDays, payload: days };
};
////////////////////////////////exchange host status//////////////
export const editHostStatus = (id, editStatus) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .put(`${authApi}exchangeHost_status/${id}`, editStatus, config)
    .then((response) => {
      console.log(response);
      const UpdatedRequest = response.data.response.data;
      if (response.status === 200)
        dispatch(EditHostStatusSuccess(UpdatedRequest));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const EditHostStatusSuccess = (UpdatedRequest) => {
  return { type: Edit_HostStatus, payload: UpdatedRequest };
};
////////////////////////////////exchange guest status//////////////
export const editGuestStatus = (id, editStatus) => (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .put(`${authApi}exchangeGuest_status/${id}`, editStatus, config)
    .then((response) => {
      console.log(response);
      const UpdatedRequest = response.data.response.data;
      if (response.status === 200)
        dispatch(EditGuestStatusSuccess(UpdatedRequest));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const EditGuestStatusSuccess = (UpdatedRequest) => {
  return { type: Edit_GuestStatus, payload: UpdatedRequest };
};
