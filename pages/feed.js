import React from 'react'
import HeaderFeed from '../components/HeaderFeed'
import Head from 'next/head'

const feed =() => {
  return (
    <div>
         <Head>
        <title>Feed</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HeaderFeed/>
    </div>
  )
}

export default feed