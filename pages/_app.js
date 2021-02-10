import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
