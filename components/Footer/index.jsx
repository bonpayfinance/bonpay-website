import React from 'react'
import Link from 'next/link'
import {FiExternalLink} from 'react-icons/fi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'

export default function Footer() {
  return (
      <footer className='bg-[#6651D4] text-white lg:px-16 py-11 px-6'>
        <div className='flex gap-10 lg:gap-4 md:gap-4 flex-wrap '>
          <div className='flex flex-[2] md:flex-[1] flex-col font-extralight text-[0.9em] md:text-[1em]'>
            <h3 className='pb-3 font-bold text-lg'>Products</h3>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Online Payments</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Payments Links</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>No-Code Payment</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Payment for Platforms</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Customizable Payments UIs</Link>
          </div>        
          <div className='flex flex-[1] md:flex-[1] flex-col font-extralight text-[0.9em] md:text-[1em]'>
            <h3 className='pb-3 font-bold text-lg'>Company</h3>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>About us</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Blog</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Contact Us</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Terms of Use</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Help</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>FAQ</Link>
          </div>
          <div className='flex flex-[1] md:flex-[1] flex-col font-extralight text-[0.9em] md:text-[1em]'>
            <h3 className='pb-3 font-bold text-lg'>Developers</h3>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Developer Resources</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Documentation</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>API Documentation <FiExternalLink  className='ml-2'/></Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight' >Get an API key</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-2 font-extralight'>Test with Sample App <FiExternalLink className='ml-2' /></Link>
          </div>
          <div className=' flex flex-col ml-auto md:grid lg:flex lg:flex-[3] md:items-stretch' >
            <h3 className='pb-3 font-bold text-lg text-center md:text-left' >Subscribe to Bonpay Newsletter</h3>
            <div className='flex gap-2 flex-col lg:flex-row md:flex-col'>
              <input className='flex pl-4 w-[100%] rounded-lg py-2 lg:py-0 md:py-3' type='text' placeholder='Enter your eamil address'/>
              <button className='px-4 py-2 rounded-lg bg-[#7B61FF] md:w-[100%] w-[70%] mx-auto'>Subscribe</button>
            </div>
            <p className='pt-8 md:pt-4 text-center md:text-left text-[0.9em] lg:text-[1em] font-extralight'>
              By subscribing to this form, you agree to receive marketing and other information from Bonpay about Bonpay Products 
              and other company updates. You can unsubscribe from these communications at anytime. 
            </p>
            <div className='mt-8 md:mt-4 w-[15em] lg:w-[15em] md:w-[15em] mx-auto lg:mx-0 md:mx-0'>
              <p className='font-bold text-[1.2em] mb-2'>Follow Bonpay on Social</p>
              <div className='flex justify-between'>
                <AiOutlineTwitter size={25}/>
                <AiFillInstagram size={25}/>
                <AiFillLinkedin size={25} />
                <BsDiscord size={25}/>
                <AiFillYoutube size={25}/>
              </div>
            </div>
          </div>
        </div>
        <hr className='border border-[#5241AA] my-7 hidden md:mt-10 md:flex lg:mt-16'/>
        <p className='hidden md:flex'>c 2023 Bonpay, Inc.</p>
    </footer>
  )
}


// import Button from '../Button'
// import Logo from '/public/logo.png'
// import { redirectTo} from '../../utils/helpers'

// export default function Footer() {
//   return (
//     <div className="bg-dark pt-10 mt-[5rem] absolute w-[100%] left-0 ">
//       <div className='px-6 py-8 lg:px-14 flex flex-col justify-start text-left'>
//         <div className="flex justify-between items-center">
//           <img src={Logo.src} className='h-6' alt="bonpay" />
//           <Button className="lg:d-none text-sm lg:invisible" onClick={() => redirectTo('https://github.com/bonpayfinance/bonpay-js')} content="Get Started" />
//         </div>
//         <h5 className='font-bold my-8 text-sm lg:text-xl'>Streamline your Payments. Simplify your Business.</h5>
//         <div className="flex flex-row mt-8 justify-between items-center">
//             <div className="text-gray font-base w-[100%] lg:w-[45%] md:w-[40%] flex justify-between text-sm ">
//               <a className="mr-5" href='https://github.com/bonpayfinance/bonpay-react'>React SDK</a>
//               <a className="mr-5" href="https://github.com/bonpayfinance/bonpay-js">Web SDK</a>
//               <a className="mr-5" href="https://github.com/bonpayfinance/documentation">Documentation</a>

//             </div>
//            <Button className="text-sm hidden lg:inline-flex" onClick={() => redirectTo('https://github.com/bonpayfinance/bonpay-js')} content="Get Started" />
//         </div>
//       </div>
//       <footer className="border border-b-transparent border-r-transparent border-l-transparent border-t-gray ">
//         <p className="text-gray text-sm  text-center pt-[3rem] pb-[4rem] font-light">© 2023 BonPay. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }
