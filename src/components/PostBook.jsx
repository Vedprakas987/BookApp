import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getBooks, postBook } from '../Redux/BookReducer/action'
import { Button, Input } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Loaders from './Loader'
export default function PostBook() {
    const [titel,settitle] = useState("")
    const [auther,setauther] = useState("")
    const [year,setYear] = useState("")
    const [ibsn,setibsn] = useState("")
    const [image,setimage] = useState("")
    const dispatch = useDispatch()
    const HandleSubmit=(e)=>{
      e.preventDefault()
      const payload={
        title:titel,
        auther:auther,
        Year_of_publication:year,
        IBSN:ibsn,
        image:image
    }

    console.log(payload)
    dispatch(postBook(payload))
    }
    const store = useSelector((store)=>store)
    const isLoading = store.isLoading
    const isError = store.isError
   
  
  return (
    <div>
      <br/>
<h3 style={{color:"teal"}}>Post a New Book</h3>
<br/>
        <form onSubmit={HandleSubmit}>
            <Input value={titel} onChange={(e)=>settitle(e.target.value)} type='text' placeholder='Title' />
            <Input value={auther} onChange={(e)=>setauther(e.target.value)} type='text' placeholder='Auther' />
            <Input value={year} onChange={(e)=>setYear(e.target.value)} type='text' placeholder='Year of Publication' />
            <Input value={ibsn} onChange={(e)=>setibsn(e.target.value)} type='text' placeholder='IBSN' />
            <Input value={image} onChange={(e)=>setimage(e.target.value)} type='text' placeholder='Image' />
            
            <Button  mt={"4px"} type='submit'>submit</Button>
          
        </form>
     
   {isLoading?<Loaders/>:<h3>post a new book</h3>}
        
    </div>
  )
}
