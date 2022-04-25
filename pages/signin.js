import React,{useState} from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import {Box, Button,Flex,Heading,Input} from '@chakra-ui/react'
import Link from 'next/link'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'

const signin = () => {
  const [errorMessage, setErrorMessage] = useState()
  const [successMessage, setSuccessMessage] = useState()
  const router = useRouter();

  const formik = useFormik({
    initialValues:{
      password:'',
      email:'',

    },
    validationSchema:Yup.object({

      password:
      Yup.string()
      .required('Password required'),

      email:
      Yup.string()
      .email('Not email')
      .required('Email required'),
    }),
    onSubmit: async valores=> {
     fetch('http://localhost:8080/auth/post-userLogin',{
       method:'POST',
       mode:'cors',
       headers:{
         'Content-Type':'application/json'
       },
       body:JSON.stringify(valores)
     }).then(resp=>resp.json())
     .then(respJSON => {
      console.log(respJSON)
       if(respJSON.msg){
        setErrorMessage(respJSON.msg)
        setSuccessMessage()
       }
       else{
        console.log(respJSON)
        setErrorMessage()
        setSuccessMessage('Success')
        setTimeout(() => {
          router.push('/feed')
        }, 1500);
       }
     })
    }})

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
     <Flex direction='column' position='absolute' border='1px solid #EDF0F3' background='white' p={12} rounded={4}>
       <form onSubmit={formik.handleSubmit} style={{'width':'250px'}}>
         <Heading mb={6}>Sign in</Heading>
         <Input  mb={6} placeholder='Type your Email' name='email' type='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
         <Input  mb={3} placeholder='***********' type='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
         {errorMessage ? <Box bg='red.100' borderLeft={'4px'} textAlign='center' color={'red.600'} borderLeftColor='red.400' w={250}>{errorMessage}</Box> : null}
        {successMessage ? <Box bg='green.100' borderLeft={'4px'} textAlign='center' color={'green.600'} borderLeftColor='green.400' w={250}>{successMessage}</Box> : null}
         <Link  href='/register'>You don't have an account ?</Link>
         <Button width={250} mt={3} type='submit' colorScheme='blue'>Sign in</Button>
       </form>
     </Flex>
     
   </Flex>
    </div>
  )
}

export default signin