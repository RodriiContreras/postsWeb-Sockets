import React from 'react'
import Head from 'next/head'
import { Flex,Box ,Center,Text} from '@chakra-ui/react'
import logo from '../images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillHeart ,AiOutlineUser,AiFillHome} from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";


function HeaderFeed() {
  return (
    <div>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap" rel="stylesheet"/>
 </Head>
    
  <Flex h='70px' bg='white' borderBottom='1px' borderBottomColor='blackAlpha.200' color='red'>
    <Center w='800px'>
    <Link href='/'><Image cursor='pointer' width='50px' height='50px' src={logo}/></Link>
    </Center>
    <Box flex='1'>
      <Center h='70px'>
      <Link  href='/'><AiFillHome cursor='pointer'  color='black' fontSize='22px'/></Link>
     <Link  href='/'><AiFillHeart cursor='pointer' style={{'marginLeft':'20px'}} color='black' fontSize='22px'/></Link>
     <Link href='/'><AiOutlineUser cursor='pointer' style={{'marginLeft':'20px'}} color='black' fontSize='22px'/></Link>
      </Center>
    </Box>  
  </Flex>
    </div>
  )
}

export default HeaderFeed