// These styles apply to every route in the application
import '@/src/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { AppProps } from 'next/app'
import NavBar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <NavBar/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
