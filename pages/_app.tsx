import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Home from './index'
import { ContextProvider } from '../context/dataprovider.js';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Home {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
