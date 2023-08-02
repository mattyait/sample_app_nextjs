// These styles apply to every route in the application
import '@/src/styles/globals.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { AppProps } from 'next/app'

// export default function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <div className={inter.className}>
      <Component {...pageProps} />
    //  </div>
  )
}

export default MyApp;
