import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import HeaderImage from 'public/illustrations/header.png'
import BUSD_Illustration from 'public/illustrations/busd_illustration_1.svg'
import Nftbusd from 'public/illustrations/nftbusd.svg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bonpay Finance</title>
        <meta name="description" content="Easily accept cryptocurrency payments for your business with Bonpay. Our decentralized open source platform allows you to accept digital payments with ease and security." />
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
            <p className="text-gray text-base lg:mb-10 mb-5 font-light lg:mr-[11.5rem]">Easily accept cryptocurrency payments for your business with Bonpay. Our decentralized open source platform allows you to accept digital payments with ease and security. With our payment gateway, you can integrate with your existing e-commerce platform and start accepting payments in multiple cryptocurrencies.</p>
            <Button content="Quick Demo" />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-[50%]">
              <img src={HeaderImage.src} />
          </div>

    
        </div>

        {/* Bonpay offerings */}
          <div className="my-14">
            <h3 className='font-bold text-green text-center text-xl lg:text-3xl lg:my-24'>Bonpay Offerings</h3>

          <div className="flex lg:flex-row flex-col items-center">
            <div className="lg:w-[55%] flex flex-col text-center lg:text-left">
                  <div className="mb-8 font-bold lg:mr-[10rem] mt-10">
                    <h4 className="mb-4 lg:text-2xl">Wallet Transfers</h4>
                <p className="text-gray font-light">Using supported browser wallets like metamask, users can initiate payment transaction for services while using bonPay on any network.</p>
                  </div>
              <div className="mb-8 font-bold lg:mr-[10rem]">
                <h4 className="mb-4 lg:text-2xl">Third Party Wallet Transfers</h4>
                <p className="text-gray font-light">Let’s businesses accept payments from customers who do not have a MetaMask Wallet by connecting to alternative wallets outside the browser environment like Trustwallet. This feature gives businesses and users more flexibility.</p>
              </div>
            </div>
            <div className="lg:w-[45%]">
              <img src={BUSD_Illustration.src} />

            </div>

            </div>



          <div className="flex lg:flex-row flex-col items-center lg:my-16">
            <div className="lg:w-[55%] flex flex-col order-last lg:order-1">
              <img src={Nftbusd.src} className="lg:h-[30rem]" />
              
            </div>
            <div className="lg:w-[45%] lg:order-last text-center lg:text-left ">
              <div className="mb-8 font-bold  mt-10">
                <h4 className="mb-4 lg:text-2xl">Accept NFT Payments</h4>
                <p className="text-gray font-light">BonPay supports payments in Non-Fungible Tokens (NFTs). Businesses can choose an NFT collection and allow customers to pay with assets from that collection. This feature provides businesses with a new revenue stream and access to the world of digital art and collectibles.</p>
              </div>
              <div className="mb-8 font-bold">
                <h4 className="mb-4 lg:text-2xl">Stable Coin</h4>
                <p className="text-gray font-light">Businesses can accept stablecoins as a form of payment. Businesses can choose to accept payments in BUSD, USDC, DAI and USDT, which are pegged to the value of a fiat currency, providing a stable and reliable form of payment.</p>
              </div>

            </div>

          </div>
          </div>
        {/* Bonpay offerings */}

      </main>
    </>
  )
}
