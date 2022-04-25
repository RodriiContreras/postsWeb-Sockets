import Head from 'next/head'
import Header from '../components/Header'
import { Text ,Box,Flex,Button, Circle, Link} from '@chakra-ui/react'
import Image from 'next/image'
import Iphone from  '../images/iphone.png'
import Tablet from  '../images/tablet.png'
import { FaFacebook,FaLinkedinIn,FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>1st Blogs App</title>
        <meta name="description" content="A simple posts SPA with ReactNextJS"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <div style={{width:'100%',backgroundColor:'#1C39BB',position:'absolute',height:'800px',clipPath:'polygon(0 0, 100% 0, 100% 19%, 60% 53%, 0 100%, 0 66%, 0 39%, 0 17%)'}}></div>
        <h1><Text position='absolute' mt='250px' ml='400px' w='500px' fontSize='5xl' color='white' fontWeight='bold'>This is my first Blogs SPA app,I Hope you like it</Text></h1>
        <Box position='absolute' w='460px' ml='380px' mt='470px' p={4} color='white'>
        <Flex>
         <Button colorScheme='blue' w='200px' size='lg'>Learn More</Button>
         <Link style={{'textDecoration':'none'}} href='/signin'><Button colorScheme='blue' ml='20px' w='150px' size='lg'>Sign in</Button></Link>
        </Flex>
      </Box>
      <Box position='absolute' w='460px' ml='390px' mt='550px' p={4} color='white'>
        <Flex>
        <a href='https://www.facebook.com/rodrigito.contre/'><FaFacebook fontSize='25px'/></a>
        <a href='https://www.linkedin.com/in/rodrigocontrerasdesarrollofullstack/' style={{marginLeft:'20px'}}><FaLinkedinIn fontSize='25px'/></a>
        <a href='https://www.instagram.com/rodriicontrerass_/' style={{marginLeft:'20px'}}><FaInstagram fontSize='25px'/></a>
        </Flex>
      </Box>
         <Box ml='50%' position='absolute' mt='5%'><Image width='400px' height='750px' objectFit='cover' src={Iphone}/></Box>
      </main>

      <footer>
      </footer> 
    </div>
  )
}
