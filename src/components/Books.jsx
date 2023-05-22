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
import { deleteBook, getBooks } from '../Redux/BookReducer/action'
import { useDispatch, useSelector } from 'react-redux'
import Loaders from './Loader'
import Bookcard from './Bookcard'
import { Box, Button, Flex, SimpleGrid } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import EditForm from './EditForm'
export default function Books() {
    const [modelopen,setmodelopen]=useState(false)
    const store = useSelector((store)=>store)
    let count = store.count
    console.log(count)
    const [updateid,setupdateid] = useState("")
    const openThemodal=(id)=>{
        setmodelopen(true)
        console.log(id)
        setupdateid(id)
    }

    const closethemodal=()=>{
        setmodelopen(false)
    }
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getBooks)
            },[count,dispatch])
        const Books = store.Books
        const isLoading = store.isLoading
        const isError = store.isError
        console.log(Books,isLoading,isError)
  return (
    <div>
        <br/>
        <h4  style={{color:"#454545"}}>Welcome to Book App</h4>
        <br/>
        <SimpleGrid w={"97%"} m={"auto"} gap={"2%"} columns={[1,2,3,4]}>
{
    isLoading?<Loaders/>:Books.map((el)=>{
        console.log(el._id)
        return(
        <Box fontStyle={"oblique"}  borderRadius={"15px"} bg={"#CCCCFF"} fontSize={"15px"} p={"20px"} textAlign={"start"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}>
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

<Button onClick={()=>{
    
    openThemodal(el._id)
}
}>
    <EditIcon/>
</Button>
</Flex>

        </Box>
        )
    })
        }

        </SimpleGrid>
         <Modal isOpen={modelopen} onClose={closethemodal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Your Book Deatils</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditForm id={updateid}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={closethemodal}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
    
  )
}
