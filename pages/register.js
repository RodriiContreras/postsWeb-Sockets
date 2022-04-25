import React,{useState} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import {Box, Button,Flex,Heading,Input} from '@chakra-ui/react'
import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'


const register =() => {

 const [errorMessageBackend, seterrorMessageBackend] = useState()
 const [successMessage, setSuccessMessage] = useState()

  const formik = useFormik({
    initialValues:{
      nickname:'',
      password:'',
      email:'',
      password1:'',
      cellphone:''
    },
    validationSchema:Yup.object({

      nickname:Yup.string()
      .required('Nickname required'),
   
      password:
      Yup.string()
      .required('Password required'),

      password1:
      Yup.string()
      .required('Password required'),

      email:
      Yup.string()
      .email('not email')
      .required('Email required'),

      cellphone:
      Yup.number()
      .required('La empresa es necesaria')

    }),
    onSubmit: async valores=>{
      const {nickname, password,password1,email,cellphone} = valores;
      if(password === password1){
         fetch('http://localhost:8080/auth/post-createUser',{
           method:'POST',
           mode:'cors',
           headers:{
             'Content-Type':'application/json'
           },
           body:JSON.stringify(valores)
         })
         .then(resp=> resp.json())
         .then(respJSON => {
           console.log(respJSON)
            if(respJSON.msg === 'This user already exists'){
              seterrorMessageBackend(respJSON.msg)
              setSuccessMessage()
            }
            else{
               setSuccessMessage(respJSON.msg)
               seterrorMessageBackend()
            }
         })


    }
    else{
      console.log('passwords are not the same value')
    }

  }})


  return (
    <div>
        <Head>
        <title>Register</title>
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
        <form style={{'width':'250px'}} onSubmit={formik.handleSubmit}>
         <Heading mb={6}>Register</Heading>
         <Input  mb={6} placeholder='Type your Nickname' name='nickname' type='nickname' value={formik.values.nickname} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
         <Input  mb={6} placeholder='Type your Email' type='email' name='email'  value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
         <Input  mb={6} placeholder='***********' type='password' name='password'  value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} variant='filled'/> 
         <Input  mb={6} placeholder='Type your cellphone' type='cellphone'  value={formik.values.cellphone} onChange={formik.handleChange} onBlur={formik.handleBlur} name='cellphone' variant='filled'/> 
         <Input  mb={6} placeholder='Re-Write your password' type='password'  value={formik.values.password1} onChange={formik.handleChange} onBlur={formik.handleBlur} name='password1' variant='filled'/> 
         <Link  href='/signin'>You already have an account?</Link>
        { errorMessageBackend? <Box background='red.100' textAlign={'center'} borderLeftColor='red.50' borderLeft='4px' color='red.600'>{errorMessageBackend}</Box> : null} 
        { successMessage? <Box background='green.100' textAlign={'center'} borderLeftColor='green.50' borderLeft='4px' color='green.600'>{successMessage}</Box> : null} 
         <Button width={250} mt={3} type='submit' colorScheme='blue'>Register</Button>
         </form>
     </Flex>

   </Flex>
    </div>
  )
}

export default register