import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonpay Finance</title>
        <meta name="description" content="A Web3 payment framework for small and large businesses." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className="">
        <NavBar />
        <div className="">
          <p>
             Hello World!
          </p>
    
        </div>
      </main>
    </>
  )
}
