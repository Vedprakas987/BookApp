import React from 'react'
import { GetBookReq, GetBookReqFail, GetBookReqSucc, deleteBookReq, deleteBookReqFail, deleteBookReqSucc, postBookReq, postBookReqFail, postBookReqSucc, updateBookReq, updateBookReqFail, updateBookReqSucc } from './actionType'
const initialState={
    isLoading:false,
    Books:[],
    isError:false,
    count:0
}
export default function reducer(state=initialState,{type,payload}){
    console.log(type,payload)
  switch(type){
   case postBookReq:{
    return {...state,isLoading:true}
   }
   case postBookReqSucc:{
    return {...state,isLoading:false}
  }
  case postBookReqFail:{
    return {...state,isError:true,isLoading:false}
  }
  case GetBookReq:{
    return {...state,isLoading:true}
   }
   case GetBookReqSucc:{
    return {...state,isLoading:false,Books:payload}
  }
  case GetBookReqFail:{
    return {...state,isError:true,isLoading:false}
  }
  case updateBookReq:{
    return {...state,isLoading:true}
   }
   case updateBookReqSucc:{
    return {...state,isLoading:false,count:payload}
  }
  case updateBookReqFail:{
    return {...state,isError:true,isLoading:false}
  }
  case deleteBookReq:{
    return {...state,isLoading:true}
   }
   case deleteBookReqSucc:{
    return {...state,isLoading:false,count:payload}
  }
  case deleteBookReqFail:{
    return {...state,isError:true,isLoading:false}
  }
  default:return state
}
}
