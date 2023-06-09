import {
  GetBookReq,
  GetBookReqFail,
  GetBookReqSucc,
  deleteBookReq,
  deleteBookReqFail,
  deleteBookReqSucc,
  postBookReq,
  postBookReqFail,
  postBookReqSucc,
  updateBookReq,
  updateBookReqFail,
  updateBookReqSucc,
} from "./actionType";
import axios from "axios";
export const postBookReqAct = () => {
  return { type: postBookReq };
};

export const postBookReqActSucc = () => {
  return { type: postBookReqSucc };
};

export const postBookReqActFail = () => {
  return { type: postBookReqFail };
};

export const GetBookReqAct = () => {
  return { type: GetBookReq };
};

export const GetBookReqActSucc = (payload) => {
  return { type: GetBookReqSucc,payload:payload };
};

export const GetBookReqActFail = () => {
  return { type: GetBookReqFail };
};

export const deleteBookReqAct = () => {
  return { type: deleteBookReq };
};

export const deleteBookReqActSucc = (payload) => {
  return { type: deleteBookReqSucc,payload:payload };
};

export const deleteBookReqActFail = () => {
  return { type: deleteBookReqFail };
};

export const updateBookReqAct = () => {
  return { type: updateBookReq };
};

export const updateBookReqActSucc = (payload) => {
  return { type: updateBookReqSucc,payload:payload };
};

export const updateBookReqActFail = () => {
  return { type: updateBookReqFail };
};

export const postBook = (payload) => (dispatch) => {
  console.log(dispatch);
  dispatch(postBookReqAct());
  return axios
    .post(`https://calm-teal-cod-kit.cyclic.app/books`, payload)
    .then(() =>{

     dispatch(postBookReqActSucc())
    }
     )
    .catch((err) => dispatch(postBookReq()));
};

export const getBooks = (dispatch) => {
  dispatch(GetBookReqAct());
  return axios
    .get(`https://calm-teal-cod-kit.cyclic.app/books`)
    .then((res) => {
        console.log(res.data)
        dispatch(GetBookReqActSucc(res.data))
    }
    
   )
    .catch((err) => dispatch(GetBookReqActFail()));
};


export const deleteBook = (id) => (dispatch) => {
  console.log(dispatch,id);
  dispatch(deleteBookReqAct());
  return axios
    .delete(`https://calm-teal-cod-kit.cyclic.app/books/${id}`)
    .then(() =>{
    console.log(`book is deleted with ${id}`)
    dispatch(deleteBookReqActSucc(Math.random()))
    
})
    .catch((err) => dispatch(deleteBookReqActFail()));
};

export const updateBook = (payload,id)=> (dispatch) => {
  let obj = {}
  for (let key in payload){
    if(payload[key].length>1){
      if(obj[key]==undefined){
        obj[key]=payload[key]
      }
    }
  }

  console.log(obj)
  console.log(dispatch,id,obj);
  dispatch(updateBookReqAct());
  console.log("id:",id,"payload",obj)
  return axios
    .patch(`https://calm-teal-cod-kit.cyclic.app/books/${id}`,obj)
    .then(() => dispatch(updateBookReqActSucc(Math.random())))
    .catch((err) => dispatch(updateBookReqActFail()));
};