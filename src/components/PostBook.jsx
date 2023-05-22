import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import {  postBook } from '../Redux/BookReducer/action'
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
   
  
  return (
    <div>
      <br/>
      <h4  style={{color:"#454545"}}>Post a New Book</h4>
<br/>
        <form onSubmit={HandleSubmit}>
            <Input value={titel} onChange={(e)=>settitle(e.target.value)} type='text' placeholder='Title' />
            <Input value={auther} onChange={(e)=>setauther(e.target.value)} type='text' placeholder='Auther' />
            <Input value={year} onChange={(e)=>setYear(e.target.value)} type='text' placeholder='Year of Publication' />
            <Input value={ibsn} onChange={(e)=>setibsn(e.target.value)} type='text' placeholder='IBSN' />
            <Input value={image} onChange={(e)=>setimage(e.target.value)} type='text' placeholder='Image' />
            
            <Button  mt={"10px"} type='submit'>submit</Button>
          
        </form>
        <br/>
     
   {isLoading?<Loaders/>:<h6 style={{textDecoration:"underline",color:"#6495ED"}}>Hey writers This is a Your place..</h6>}
        
    </div>
  )
}
