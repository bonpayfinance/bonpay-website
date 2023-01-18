import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import HeaderImage from 'public/illustrations/header.png'

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
      <main className="px-6 lg:px-14">
        <NavBar />
        <div className="flex lg:flex-row flex-col items-center">
          <div className="lg:text-left text-center lg:w-[50%]">
            <h2 className="text-green text-2xl lg:text-5xl py-8 leading-norm font-bold">Streamline your Payments. 
            <br/>
            Simplify your Business.</h2>
            <p className="text-gray text-base lg:mb-10 mb-5 font-light lg:mr-[11.5rem]">Easily accept cryptocurrency payments for your business with Bonpay. Our decentralized open source platform allows you to process digital asset payments with ease and security. With our payment gateway, you can integrate with your existing e-commerce platform and start accepting payments in multiple cryptocurrencies.</p>
            <Button content="Quick Demo" />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-[50%]">
              <img src={HeaderImage.src} />
          </div>

    
        </div>
      </main>
    </>
  )
}
