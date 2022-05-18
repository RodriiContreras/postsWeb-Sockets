import React from 'react'
import { Grid, GridItem,Box } from '@chakra-ui/react'
import FeedPosts from './feedComponents/FeedPosts'
import Sports from './categoryImages/sports.png'
import Food from './categoryImages/food.png'
import Paisaje from './categoryImages/paisaje.png'
import Bitcoin from './categoryImages/bitcoin.png'
import Link from 'next/link'
import Image from 'next/image'
const ScrollPostsFeed =() => {
  return (
    <div>
      <Box position='absolute' fontWeight='bolder' marginTop='4vh' marginLeft='15vh'>
      <Box textAlign='center' >
      <Box background='black' ml='8px' w='5px' h='105px'></Box>
      <p>T</p>
      <p>R</p>
      <p>E</p>
      <p>N</p>
      <p>D</p>
      <p>I</p>
      <p>N</p>
      <p>G</p>
      </Box>
      <Box marginTop='1vh' textAlign='center'>
      <p>T</p>
      <p>O</p>
      <p>P</p>
      <p>I</p>
      <p>C</p>
      <p>S</p>
      <p>🤩</p>
      <Box background='black' mt='5px' ml='8px' w='5px' h='105px'></Box>
      </Box>
      </Box>
    <div>
        <Grid
  h='auto'
  w='80%'
  ml='15%'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem backgroundColor='red' mt={10}  rowSpan={1} colSpan={1} border='1px solid #EBEBEB' >
  <Link href='/feed'>
  <Box h='146px' background='red'> 
         <h1 style={{'position':'absolute',zIndex:'+400',color:'white',fontSize:'20px',marginLeft:'20PX',marginTop:'80px'}}>SPORTS</h1>
        <Image style={{'width':'100px','height':'100px'}} src={Sports}/>
  </Box>
  </Link>

  <Link href='/feed'>
    <Box h='148px'>
      <h1 style={{'position':'absolute',zIndex:'+400',color:'white',fontSize:'20px',marginLeft:'20PX',marginTop:'80px'}}>FOOD</h1>
      <Image src={Food}/>

    </Box>
  </Link>

  <Link  href='/feed'>
    <Box h='146px'>
        <h1 style={{'position':'absolute',zIndex:'+400',color:'white',fontSize:'20px',marginLeft:'20PX',marginTop:'80px'}}>LANDSCAPE</h1>
        <Image height={1050} src={Paisaje}/>
    </Box>
  </Link>

  <Link href='/feed'>
    <Box h='148px'> 
      <h1 style={{'position':'absolute',zIndex:'+400',color:'white',fontSize:'20px',marginLeft:'20PX',marginTop:'80px'}}>CRYPTO</h1>
      <Image src={Bitcoin}/>
    </Box>
  </Link>

  </GridItem>

 <GridItem  mt={10} colSpan={2} rowSpan={3}><FeedPosts/></GridItem> 
  <GridItem mt={10} colSpan={1} rowSpan={1} border='1px solid #EBEBEB' bg='white'/>
</Grid> 
    </div>
  </div>
  )
}

export default ScrollPostsFeed