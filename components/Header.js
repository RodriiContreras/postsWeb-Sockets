import React from 'react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer,Center,Square, Circle ,Text} from '@chakra-ui/react'
import logo from '../images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

function Header() {
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
      <Center  h='70px'>
     <Link href='/signin'><Text cursor='pointer'  color='blackAlpha.800' mr='10'>Sign In</Text></Link>
     <Link href='/register'><Text cursor='pointer'  color='blackAlpha.800'>Register</Text></Link>
      </Center>
    </Box>  
  </Flex>
</div>
  )
}

export default Header