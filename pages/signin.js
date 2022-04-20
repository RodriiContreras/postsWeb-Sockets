import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import {Button,Flex,Heading,Input} from '@chakra-ui/react'
import Link from 'next/link'

const signin = () => {
  return (
    <div>
        <Head>
        <title>Sign in</title>
        <meta name="description" content="A simple posts SPA with ReactNextJS"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header/>
     <div style={{width:'100%',backgroundColor:'#1C39BB',position:'absolute',height:'800px',clipPath:'polygon(0 0, 100% 0, 100% 19%, 60% 53%, 0 100%, 0 66%, 0 39%, 0 17%)'}}></div>
   <Flex h='85vh' alignItems='center' justifyContent='center'>
     <Flex direction='column' position='absolute' border='1px solid gray' background='white' p={12} rounded={4}>
         <Heading mb={6}>Sign in</Heading>
         <Input  mb={6} placeholder='Type your Email' type='email' variant='filled'/> 
         <Input  mb={6} placeholder='***********' type='password' variant='filled'/> 
         <Link  href='/register'>You don't have an account ?</Link>
         <Button mt={3} colorScheme='teal'>Sign in</Button>
     </Flex>
   </Flex>
    </div>
  )
}

export default signin