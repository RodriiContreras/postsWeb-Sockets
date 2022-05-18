import React from 'react'
import { Box } from '@chakra-ui/react'
import { MdAddToPhotos } from 'react-icons/md';
import { Flex } from '@chakra-ui/react'
import Lago from '../img/Lago-Moraine.jpg'
import Image from 'next/image'
import Disney from '../img/disney.jpg'
import Link from 'next/link'
import { AiOutlineHeart,AiOutlineComment } from 'react-icons/ai';
import { MdReport} from 'react-icons/md';
import { MdVerified } from 'react-icons/md';
const FeedPosts =() => {
  return (
    <div>
        <Box w='100%' h={24} border='1px solid #EBEBEB' borderRadius={4} background={'white'}>
        <button style={{width:'100%',height:'100%'}}>
       <Box w='100%' height='100%' display={'flex'} justifyContent='center' alignItems='center'>
         <Box>
                <Flex>
                <MdAddToPhotos fontSize={30} color='black'/> 
                <p style={{marginLeft:'10px'}}>Add your POST</p>
                </Flex>
        </Box>
      </Box>
        </button>
        </Box>

        <Box w='100%' background='#F3F2EF' h={4}></Box>

        <Box w='100%' h='580px' border='1px solid #EBEBEB'>
            <Box w='100%' h='550px' background='white' border='1px solid #EBEBEB' >
              <Box w='100%' h='450px' >
                <Image style={{width:'100%','height':'100%'}} src={Lago}/>
              </Box>  

              <Box background='' height='40px' display='flex'>
                  <button style={{marginLeft:'20px'}}><AiOutlineHeart  fontSize={30} color='black'/></button>
                  <button style={{marginLeft:'20px'}}><AiOutlineComment fontSize={30} color='black'/></button>
                  <button style={{marginLeft:'20px'}}><MdReport fontSize={30} color='black'/></button> 
              </Box>

              <Box marginTop='4px' display='flex'>
              <Link href='/feed'><Box style={{'marginLeft':'20px'}} display='flex'><button style={{'fontWeight':'bolder',display:'flex'}}>RodriiContreras_ <MdVerified style={{'marginLeft':'5px','marginTop':'5px',color:'red'}}/></button></Box></Link>
              <p style={{marginLeft:'5PX'}}>Look at this beautiful landscape! You like this? I ❤ it</p>
              </Box> 

            </Box>
        </Box>

        <Box w='100%' mt='0' h='580px' border='1px solid #EBEBEB'>
            <Box w='100%' h='550px' background='white' border='1px solid #EBEBEB' >
              <Box w='100%' h='450px'>
                <Image src={Disney}/>
              </Box>

              <Box height='40px' display='flex'>
                  <button style={{marginLeft:'20px'}}><AiOutlineHeart  fontSize={30} color='black'/></button>
                  <button style={{marginLeft:'20px'}}><AiOutlineComment fontSize={30} color='black'/></button>
                  <button style={{marginLeft:'20px'}}><MdReport fontSize={30} color='black'/></button> 
              </Box>

              <Box marginTop='4px' display='flex'>
              <Link href='/feed'><Box style={{'marginLeft':'20px'}} display='flex'><button style={{'fontWeight':'bolder'}}>RodriiContreras_</button><MdVerified style={{'marginLeft':'5px','marginTop':'5px',color:'red'}}/></Box></Link>
              <p style={{marginLeft:'5PX'}}>This is Awesome!!</p>
              </Box> 
            </Box>
        </Box>
    </div>
  )
}

export default FeedPosts