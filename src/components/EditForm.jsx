import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getBooks, postBook, updateBook } from '../Redux/BookReducer/action'
import { Button, Input } from '@chakra-ui/react'

export default function EditForm({id}) {
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

    console.log(payload,id)
    dispatch(updateBook(payload,id))
    
    }

   
  
  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <br/>
            <h5>Update the book details</h5>
            <br/>
            <Input value={titel} onChange={(e)=>settitle(e.target.value)} type='text' placeholder='Title' />
            <Input value={auther} onChange={(e)=>setauther(e.target.value)} type='text' placeholder='Auther' />
            <Input value={year} onChange={(e)=>setYear(e.target.value)} type='text' placeholder='Year of Publication' />
            <Input value={ibsn} onChange={(e)=>setibsn(e.target.value)} type='text' placeholder='IBSN' />
            <Input value={image} onChange={(e)=>setimage(e.target.value)} type='text' placeholder='Image' />
            <Button onClick={()=>alert("your book detail is updated")} type='submit'>submit</Button>
        </form>
    </div>
  )
}
