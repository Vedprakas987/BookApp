import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { deleteBook, getBooks, updateBook } from '../Redux/BookReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import Loaders from './Loader'
import Bookcard from './Bookcard'
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import EditForm from './EditForm'
export default function Books() {
    const [bool,setbool] = useState(false)
    const store = useSelector((store)=>store)
    let count = store.count
    console.log(count)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBooks)
            },[count])
        const Books = store.Books
        const isLoading = store.isLoading
        const isError = store.isError
        console.log(Books,isLoading,isError)
  return (
    <div>
        <br/>
        <h3 style={{color:"teal.200"}}>Welcome to Book App</h3>
        <br/>
        <SimpleGrid gap={"2%"} columns={[1,2,3,4]}>
{
    isLoading?<Loaders/>:Books.map((el)=>{
        console.log(el._id)
        return(
        <Box fontStyle={"oblique"}  borderRadius={"15px"} bg={"#F8F8FF"} fontSize={"15px"} p={"20px"} textAlign={"start"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}>
                <Bookcard key={el._id} {...el}/>
                <br/>
                <Flex mr={"5px"} gap={"5px"}>

<Button onClick={()=>{
    dispatch(deleteBook(el._id))
    count++;
}
}  >
    <DeleteIcon/>
</Button>

<Button  onClick={()=>{
setbool(!bool)
}} >
    {bool?<Button onClick={()=>{
        setbool(!bool)
    }}>Close the Form</Button>:<EditIcon/>}
</Button>
</Flex>
{bool?<EditForm  id={el._id}/>:null}

        </Box>
        )
    })
        }

        </SimpleGrid>
      
    </div>
    
  )
}
