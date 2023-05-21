import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {DeleteIcon} from "@chakra-ui/icons"
import {EditIcon} from "@chakra-ui/icons"

export default function Bookcard({image,auther,title,IBSN,Year_of_publication}) {
  return (
    <Box _hover={{border:"0.4px solid black"}} fontStyle={"oblique"}  borderRadius={"15px"} bg={"#F8F8FF"} fontSize={"15px"} p={"20px"} textAlign={"start"}  boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}>
<Image m={"auto"}  w={"90%"} h={"70%"} src={image} alt = "prof"/>
<Text mt={"4px"}  fontWeight={"8px"} fontSize={{base:"13px",sm:"18px",lg:"17px",xl:"16px","2xl":"16px",md:"13px"}} color={"teal"}>{title}</Text>
<Box ml={"1px"} mt={"2px"} fontSize={"12px"}>
<Text fontWeight={"light"}  color={"grey"}><span style={{fontWeight:"bold"}}>Published Year : </span> {Year_of_publication}</Text>
<Text fontWeight={"light"} color={"grey"}><span style={{fontWeight:"bold"}}>IBSN : </span>{IBSN}</Text>
<Text fontWeight={"light"}  color={"grey"}><span style={{fontWeight:"bold"}}>Auther: </span>{auther}</Text>
<br/>



</Box>


    </Box>
  )
}
