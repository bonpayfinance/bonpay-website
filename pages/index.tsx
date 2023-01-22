import Head from 'next/head'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import HeaderImage from 'public/illustrations/header.png'
import BUSD_Illustration from 'public/illustrations/busd_illustration_1.svg'
import Nftbusd from 'public/illustrations/nftbusd.svg'
import CodeBlock from "@/components/Codeblock";

// Import Swiper React components
import { Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';


import WhyBonPayIcon1 from 'public/icons/WhyBonpay1.svg'
import WhyBonPayIcon2 from 'public/icons/WhyBonpay2.svg'
import WhyBonPayIcon3 from 'public/icons/WhyBonpay3.svg'
import WhyBonPayIcon4 from 'public/icons/WhyBonpay4.svg'
import WhyBonPayIcon5 from 'public/icons/WhyBonpay5.svg'
import WhyBonPayIcon6 from 'public/icons/WhyBonpay6.svg'

import EthereumNetworkIcon from 'public/icons/networks/Ethereum.svg'
import BinanceNetworkIcon from 'public/icons/networks/Binance.svg'
import PolygonNetworkIcon from 'public/icons/networks/Polygon.svg'

import YoutubeEmbed from '@/components/Video/Youtube'

import CodeMonImage from 'public/team/codemon.png'
import MaryamImage from 'public/team/maryam.png'

import LinkedInIcon from 'public/icons/socials/linkedin.svg'
import TwitterIcon from 'public/icons/socials/twitter.svg'

import Footer from '../components/Footer'
import { redirectTo } from '../utils/helpers'

export default function Home() {



  const sampleReactSnippet = `
import React from 'react'
import { useBonPay } from 'bonpay-react'

const App = () => {
  const bonPay = useBonPay({
    value: '0.0001',
    recipient: '0xAFcC4d55a83ae1A449Bee7783A2737aFb5d82254',
    chainId: 5,
    tokens: ['USDT','DAI','USDC']
  })

  function handlePayment() {
    const pay = bonPay()
    pay.setup()
    pay.open()
  }

  return <button onClick={handlePayment}>Pay Now</button>
}

export default App
  `
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
              <br />
              Simplify your Business.</h2>
            <p className="text-gray text-base lg:mb-10 mb-5 font-light lg:mr-[11.5rem]">Easily accept cryptocurrency payments for your business with Bonpay. Our decentralized open source platform allows you to accept digital payments with ease and security. With our payment gateway, you can integrate with your existing e-commerce platform and start accepting payments in multiple cryptocurrencies.</p>
            <Button content="Quick Demo" onClick={() => redirectTo('https://bonpay-js.vercel.app/')} />
          </div>
          <div className="mt-8 lg:mt-0 lg:w-[50%]">
            <img src={HeaderImage.src} className="h-[15rem] md:h-[19rem] lg:h-[20rem]" />
          </div>


        </div>

        {/* Bonpay offerings */}
        <section className="my-14">
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
              <img src={BUSD_Illustration.src} className="h-[15rem] md:h-[19rem] lg:h-[20rem]"  />

            </div>

          </div>



          <div className="flex lg:flex-row flex-col items-center lg:my-16">
            <div className="lg:w-[55%] flex flex-col order-last lg:order-1">
              <img src={Nftbusd.src} className="h-[15rem] md:h-[19rem] lg:h-[20rem]" />

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
        </section>
        {/* Bonpay offerings */}

        <section className="flex flex-col lg:mt-[15rem]">

          <div className="my-8 flex items-center text-center justify-center flex-col">
            <h4 className="font-bold text-green text-2xl lg:text-3xl ">Why Bonpay</h4>
            <p className="font-light text-gray my-4 lg:px-[16rem]">Your users can pay with the these stable coins; BUSD, USDC, DAI and USDT</p>
          </div>


          <div className="grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-1">

            <div className="flex items-center text-center justify-center flex-col">
              <div className="bg-green rounded-md p-4 w-14 flex items-center text-center justify-center my-4">
                <img src={WhyBonPayIcon1.src} />

              </div>
              <h4 className="font-bold lg:text-2xl">Increased payment options</h4>
              <p className="font-light text-gray my-4 lg:px-14">By accepting cryptocurrency payments, businesses can tap into a growing market of users who prefer to use digital currencies.</p>
            </div>

            <div className="flex items-center text-center justify-center flex-col">
              <div className="bg-green rounded-md p-4 w-14 flex items-center text-center justify-center my-4">
                <img src={WhyBonPayIcon2.src} />

              </div>
              <h4 className="font-bold lg:text-2xl">Cost Effective</h4>
              <p className="font-light text-gray my-4 lg:px-14">Being open-source and free, businesses can use the platform without incurring any additional costs.</p>
            </div>

            <div className="flex items-center text-center justify-center flex-col">
              <div className="bg-green rounded-md p-4 w-14 flex items-center text-center justify-center my-4">
                <img src={WhyBonPayIcon3.src} />

              </div>
              <h4 className="font-bold lg:text-2xl">Borderless Transactions</h4>
              <p className="font-light text-gray my-4 lg:px-14">Businesses can expand their reach globally without any issue of currency conversion or cross-border transaction fees.</p>
            </div>

          </div>

          <div className="grid lg:grid-cols-3 grid-rows-3 my-8 lg:grid-rows-1">

            <div className="flex items-center text-center justify-center flex-col">
              <div className="bg-green rounded-md p-4 w-14 flex items-center text-center justify-center my-4">
                <img src={WhyBonPayIcon4.src} />

              </div>
              <h4 className="font-bold lg:text-2xl">99% Uptime</h4>
              <p className="font-light text-gray my-4 lg:px-14">To ensure that transactions can be processed quickly and efficiently, Bonpay is available and accessible to businesses and their customers at all times.</p>
            </div>

            <div className="flex items-center text-center justify-center flex-col">
              <div className="bg-green rounded-md p-4 w-14 flex items-center text-center justify-center my-4">
                <img src={WhyBonPayIcon5.src} alt="Security" />

              </div>
              <h4 className="font-bold text-xl">Security</h4>
              <p className="font-light text-gray my-4 lg:px-14">Bonpay utilizes blockchain technology, which ensures that transactions are cryptographically secure and tamper-proof. </p>
            </div>

            <div className="flex items-center text-center justify-center flex-col">
              <div className="bg-green rounded-md p-4 w-14 flex items-center text-center justify-center my-4">
                <img src={WhyBonPayIcon6.src} alt="Ease of integration" />

              </div>
              <h4 className="font-bold text-xl">Ease of integration</h4>
              <p className="font-light text-gray my-4 lg:px-14">In just a few lines of code, you can easily integrate bonpay using our SDKs into your existing/new application.</p>
            </div>

          </div>

        </section>

        {/* Supported networks */}
        <section className="lg:mt-[15rem] mb-[5rem]">
          <div className="my-8 flex items-center text-center justify-center flex-col">
            <h4 className="font-bold text-green text-2xl lg:text-3xl ">Supported Networks</h4>
            <p className="font-light text-gray my-4 lg:px-[16rem]">Bonpay is available across a myriad of multiple EVM Compatible networks</p>
          </div>


          <div className="bg-dark py-10 absolute w-[100%] left-0 ">

            <Swiper
              spaceBetween={10}
              modules={[Autoplay, A11y]}
              slidesPerView={6}

              autoplay={true}
            >
              <SwiperSlide>
                <img src={EthereumNetworkIcon.src} alt="ETH" />

              </SwiperSlide>
              <SwiperSlide>            <img src={BinanceNetworkIcon.src} alt="Binance" />
              </SwiperSlide>
              <SwiperSlide>            <img src={PolygonNetworkIcon.src} alt="Polygon" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={EthereumNetworkIcon.src} alt="ETH" />

              </SwiperSlide>
              <SwiperSlide>            <img src={BinanceNetworkIcon.src} alt="Binance" />
              </SwiperSlide>
              <SwiperSlide>            <img src={PolygonNetworkIcon.src} alt="Polygon" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={EthereumNetworkIcon.src} alt="ETH" />

              </SwiperSlide>
              <SwiperSlide>            <img src={BinanceNetworkIcon.src} alt="Binance" />
              </SwiperSlide>
              <SwiperSlide>            <img src={PolygonNetworkIcon.src} alt="Polygon" />
              </SwiperSlide>
            </Swiper>


          </div>


        </section>
        {/* Supported networks */}


        <section className="lg:mt-[20rem] mt-[13rem] grid lg:grid-cols-2 grid-rows-2 lg:grid-rows-1">
          <div className="my-8 flex lg:text-left justify-start flex-col">
            <h4 className="font-bold text-green text-2xl lg:text-3xl lg:text-left ">How it works</h4>
            <p className="font-light text-gray my-5 lg:pr-[10rem]">
              In the video, you will see a demonstration of how easy it is to make payments using our platform. You will also learn about our customizable payment gateway that can be integrated with your website or e-commerce platform.
              <br />
              <br />

              We understand the importance of security, flexibility, and compliance, and that is why we have designed our platform to meet the needs of businesses and individuals alike. We invite you to try Bonpay today and see the benefits for yourself.
            </p>
          </div>

          <div>
            <YoutubeEmbed embedId={"A9jjvWlFmG4"} />
          </div>
        </section>


        {/* Code sample */}
        <section className="lg:mt-[10rem] mt-[13rem]">
          <div className="my-8 flex lg:text-left justify-start flex-col">
            <h4 className="font-bold text-green text-2xl lg:text-3xl lg:text-left ">React SDK Code Sample</h4>
            <p className="font-light text-gray my-5 lg:pr-[40rem]">
              Bonpay ships with a React typescript SDK for all javascript fans, also integrating bonpay into your web app is very simple,see below.
            </p>
          </div>

          <CodeBlock code={sampleReactSnippet} showLineNumbers={false} language="jsx" />

        </section>

        {/* code sample end */}


        {/* meet the team */}
        <section className="lg:mt-[10rem] mt-[13rem] mb-8">
          <div className="my-8 flex items-center text-center justify-center flex-col">
            <h4 className="font-bold text-green text-2xl lg:text-3xl">Meet the team</h4>
            <p className="font-light text-gray my-4">Meet the passionate team behind Bonpay&apos;s success.</p>
          </div>

          <div className="flex justify-center items-center">
            <div className="lg:mx-4 text-center">
              <img src={CodeMonImage.src} alt="CodeMon" />
              <h2 className="font-bold mt-8 lg:text-xl">Codemon</h2>
              <p className="text-green">Blockchain Engineer</p>
              <div className="flex justify-center my-4">
                <a href="https://linkedin.com/in/johnson-awah-alfred" target="_blank" rel="noreferrer">
                  <img src={LinkedInIcon.src} alt="CodeMon" />

                </a>
                <a href="https://twitter.com/codemon_" target="_blank" rel="noreferrer">
                  <img src={TwitterIcon.src} alt="CodeMon" />

                </a>

              </div>
            </div>
            <div className="lg:mx-4 text-center">
              <img src={MaryamImage.src} alt="Maryam" />
              <h2 className="font-bold mt-8 lg:text-xl">Maryam</h2>
              <p className="text-green">UI Designer</p>
              <div className="flex justify-center my-4">
                <a href="https://www.linkedin.com/in/maryam-akanbi" target="_blank" rel="noreferrer">
                  <img src={LinkedInIcon.src} alt="Maryam_linkedin" />

                </a>
                <a href="https://www.twitter.com/maryam__ay" target="_blank" rel="noreferrer">
                  <img src={TwitterIcon.src} alt="Maryam_twitter" />

                </a>

              </div>
            </div>
          </div>
        </section>


{/* ready to scale */}
        <section className="lg:mt-[10rem] mt-[13rem] mb-8">
          <div className="my-8 flex items-center text-center justify-center flex-col">
            <h4 className="font-bold text-green text-2xl lg:text-3xl ">Ready to Scale your Business with Bonpay?</h4>
            <Button onClick={() => redirectTo('https://github.com/CeoFred/bonpay-js')} className="my-8 text-sm  lg:text-xl">Get started</Button>
          </div>
          </section>

          {/* footer */}
        <Footer />
      </main>
    </>
  )
}
