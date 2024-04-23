import React, { ReactElement } from 'react'
import Header from './header/Header'
import BottomHeader from './header/BottomHeader'
import Footer from './Footer'
import Head from 'next/head';

interface Props{
    children: ReactElement;
}

const RootLayout = ({children}: Props) => {
  return (
    <>
    <Head>
    <title>{'ShopGreen'}</title>  
    <meta name='description' content='Ecommerce Website'/>
    <link rel="icon" href="/favicon.png" />
    </Head>

    <Header/>
    <BottomHeader/>
    {children}
    <Footer/>
    </>
  )
}

export default RootLayout
