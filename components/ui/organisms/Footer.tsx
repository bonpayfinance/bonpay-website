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
          <div className='flex flex-[2] md:flex-[1] flex-col font-extralight text-[0.9em] '>
            <h3 className='pb-3 font-bold text-lg'>Products</h3>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Online Payments</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Payments Links</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>No-Code Payment</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Payment for Platforms</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Customizable Payments UIs</Link>
          </div>        
          <div className='flex flex-[1] md:flex-[1] flex-col font-extralight text-[0.9em] '>
            <h3 className='pb-3 font-bold text-lg'>Company</h3>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>About us</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Blog</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Contact Us</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Terms of Use</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Help</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>FAQ</Link>
          </div>
          <div className='flex flex-[1] md:flex-[1] flex-col font-extralight text-[0.9em] '>
            <h3 className='pb-3 font-bold text-lg'>Developers</h3>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Developer Resources</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Documentation</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>API Documentation <FiExternalLink className='ml-2'/></Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin' >Get an API key</Link>
            <Link href={'/#'} className='flex items-center pb-3 md:pb-4 font-thin'>Test with Sample App <FiExternalLink className='ml-2' /></Link>
          </div>
          <div className=' flex flex-col ml-auto mt-6 md:mt-0 md:grid lg:flex lg:flex-[3] md:items-stretch' >
            <h3 className='pb-3 font-bold text-lg text-center md:text-left' >Subscribe to Bonpay Newsletter</h3>
            <div className='flex gap-2 lg:gap-1 flex-col lg:flex-row md:flex-col'>
              <input className='flex lg:flex-[3] pl-4 w-[100%] rounded-lg py-2 lg:py-0 md:py-3' type='text' placeholder='Enter your email address'/>
              <button className='px-4 py-4 lg:flex-[1] rounded-lg bg-[#7B61FF] md:w-[100%] w-[8em] mx-auto'>Subscribe</button>
            </div>
            <p className='pt-8 md:py-8 text-center md:text-left text-[0.9em] lg:text-[1em] font-thin'>
              By subscribing to this form, you agree to receive marketing and other information from Bonpay about Bonpay Products 
              and other company updates. You can unsubscribe from these communications at anytime. 
            </p>
            <div className='mt-8 md:mt-3 w-[13.7em] mx-auto lg:mx-0 md:mx-0'>
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
        <p className='hidden md:flex font-semibold'>c 2023 Bonpay, Inc.</p>
    </footer>
  )
}


