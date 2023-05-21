import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostBook from './PostBook'
import Books from './Books'

export default function AllRoutes() {
 return( <Routes>
    <Route path = "/Add" element={<PostBook/>}/>
    <Route path = "/" element={<Books/>}/>
  </Routes>
 )
}
