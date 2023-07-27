import Image from 'next/image'
import React from 'react'
import tick from '../../public/tick-circle.svg'
import lineImg from '../../public/Line 6.png'
import bg from '../../public/Frame4.png'
import message from '../../public/messages-2.png'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

export default function Pricing() {
  return (
    <>
        <NavBar />
            <div className='flex flex-col text-center justify-center bg-white'>
            <h1 className='font-bold text-[2em] mb-6 w-auto'>Pricing built for businesses<br /> of all sizes.</h1>
            {/* <div className='border border-slate-300 rounded-md px-1 py-1 flex justify-around gap-3 ml-auto mr-auto'>
                <span className='py-1 px-1 rounded-md bg-rose-500'>Monthly billing</span>
                <span className='py-1 px-1 rounded-md '>Annula billing</span>
            </div> */}
            <div className='relative bg-slate-100 lg:bg-white md:bg-none py-6 lg:py-0' style={{position: 'relative'}}>
                <Image alt='background' src={bg} width={2000} height={2000} className='transform ' style={{width: '100%', height: '100%', position: 'absolute'}}/>
                <div className='border border-slate-200 rounded-md px-1 py-1 w-[17.8em] bg-[#FCFCFD] flex justify-around gap-3 ml-auto mr-auto'>
                <span className='py-2 px-2 font-bold rounded-md bg-[#7B61FF] text-white'>Monthly billing</span>
                <span className='py-2 px-2 font-bold rounded-md '>Annual billing</span>
                </div>
                <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-[4%] md:gap-5 lg:px-[5em] md:px-[2em] px-[1em]'>
                    <div className='flex flex-col bg-white z-[2] text-left lg:mb-[-1.5em] lg:mt-auto md:mt-[2em] p-6 transition-all duration-300 lg:scale-90 lg:h-[25.5em] cursor-pointer border border-slate-300 rounded-lg'>
                        <h2 className='text-[2em] pb-4 font-bold'>1.0%</h2>
                        <p className='font-bold'>Standard plan</p>
                        <p className='text-slate-500'>Billed monthly</p>

                        <div className='text-slate-500 flex items-start mt-4 gap-2'>
                        <Image alt='tick' height={30} width={30} src={tick}/>
                        <p className='text-[0.9em]'>Creators can fix the price in any Fiat/Cryptocurrency and receive payment in any Cryptocurrency</p>
                        </div>
                        <div className='text-slate-500 flex items-start mt-4 pb-4 gap-2'>
                        <Image alt='tick' height={30} width={30} src={tick}/>
                        <p className='text-[0.9em]'>Business can fix the price in a fiat/cryptocurrency and receive payment in any currency</p>
                        </div>

                        <button className='font-bold text-[0.9em] text-[#7B61FF] border-2 transition-all duration-300 border-[#7B61FF] hover:bg-[#7B61FF] hover:text-white rounded-md mb-[1em] mt-auto p-2'>Choose this plan</button>
                    </div>

                    <div className='flex mb-5 flex-col bg-white z-[2] text-left lg:mb-[1.3em] lg:mt-[5em] md:mt-[2em] p-6 transition-all duration-300 border border-slate-300  lg:scale-[1.15] cursor-pointer lg:border-[0.2em] lg:border-[#7B61FF] rounded-lg'>
                        <h2 className='text-[2em] pb-4 font-bold'>1.5%</h2>
                        <p className='font-bold'>Currency Conversion</p>
                        <p className='text-slate-500'>Billed monthly</p>

                        <div className='text-slate-500 flex items-start mt-4 gap-2'>
                        <Image alt='tick' height={30} width={30} src={tick}/>
                        <p className='text-[0.9em]'>Creators can fix the price in any Fiat/Cryptocurrency and receive payment in any Cryptocurrency</p>
                        </div>
                        <div className='text-slate-500 flex items-start mt-4 pb-4 gap-2'>
                        <Image alt='tick' height={30} width={30} src={tick}/>
                        <p className='text-[0.9em]'>Business can fix the price in a fiat/cryptocurrency and receive payment in any currency</p>
                        </div>

                        <button className='font-bold text-[0.9em] border-2 transition-all duration-300 border-[#7B61FF] bg-[#7B61FF] text-white rounded-md mt-auto p-2'>Choose this plan</button>
                    </div>

                    <div className='flex flex-col bg-white z-[2] text-left lg:mt-auto lg:mb-[-1.5em] md:mt-[2em] p-6 transition-all duration-300 lg:scale-90 lg:h-[25.5em] cursor-pointer border border-slate-300 rounded-lg'>
                        <h2 className='text-[2em] pb-4 font-bold'>Customised</h2>
                        <p className='font-bold'>Enterprise Plan</p>
                        <p className='text-slate-500 text-[0.9em]'>A custom package for your business</p>

                        <div className='text-slate-500 flex items-start mt-4 pb-4 gap-2'>
                        <Image alt='tick' height={30} width={30} src={tick}/>
                        <p className='text-[0.9em]'>Available for businesses with large payments volume, high-value transactions, or unique business models</p>
                        </div>

                        <button className='font-bold text-[0.9em] text-[#7B61FF] border-2 transition-all duration-300 border-[#7B61FF] hover:bg-[#7B61FF] hover:text-white rounded-md mb-[1em] mt-auto p-2'>Contact us</button>
                    </div>
                </div>
            </div>

            {/* COMMON QUESTIONS */}
            <div className='pt-12 lg:px-[5em] md:px-[2em] px-[1em] z-[2] bg-white'>
                <h2 className='text-[2em] font-bold mb-2'>Common Questions</h2>
                <p className='text-slate-500'>Everything you need to know regarding Pricing and <br /> Billing in BonPay</p>

                <div className='grid mt-8 lg:grid-cols-3 gap-4 my-5 md:grid-cols-2'>

                    <div className='text-left rounded-md bg-[#FFE8F0] bg-opacity-40 p-6'>
                        <p className='pb-2 font-bold text-[#551E33]'>Is there a free trial available</p>
                        <p className='text-[#551E33]'>Yes, you can try us for free for 30 days. If you want, we’ll 
                        provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#E4DFFF] bg-opacity-40 p-6'>
                        <p className='pb-2 font-bold text-[#3D3080]'>Can I change my plan later?</p>
                        <p className='text-[#292055]'>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#D1E9FF] bg-opacity-40 p-6'>
                        <p className='pb-2 font-bold text-[#1849A9]'>What is your cancellation policy?</p>
                        <p className='text-[#194185]'>We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#D1E9FF] bg-opacity-40 p-6'>
                        <p className='pb-2 font-bold text-[#1849A9]'>Can I change my plan later?</p>
                        <p className='text-[#194185]'>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#FFE8F0] bg-opacity-40 p-6'>
                        <p className='pb-2 font-bold text-[#551E33]'>Is there a free trial available</p>
                        <p className='text-[#551E33]'>Yes, you can try us for free for 30 days. If you want, we'll 
                        provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#FFE8F0] bg-opacity-40 p-6'>
                        <p className='pb-2 font-bold text-[#551E33]'>Is there a free trial available</p>
                        <p className='text-[#551E33]'>Yes, you can try us for free for 30 days. If you want, we'll 
                        provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>

                </div>

            </div>

            {/* Contact Us Section */}
            <div className='relative lg:mx-[5em] md:mx-[2em] mx-[1em] my-[4em] bg-[#6651D4]  py-6 rounded-xl'>
                <Image alt='tick' height={1000} width={1000} src={lineImg} className='w-[100%] h-[88%] absolute'/>
                <div className='flex flex-col gap-1 items-center z-[2] relative text-white'>
                <Image alt='message icon' src={message} height={50} width={50} className='z-[2]'/>
                <p className=' font-bold'>Still have questions?</p>
                <p className='lg:w-[50%] md:w-[50%] w-[90%] mt-2'>if you're unable to find the answer you're seeking please feel free to chat with our friendly team for further assistance.</p>
                <button className='bg-white border-none py-2 px-6 rounded-lg font-bold text-[#6651D4] text-sm mt-5'>Contact Us</button>
                </div>
            </div>

            {/* TRY BONPAY */}
            <div className='pb-[3em] px-[1em] flex flex-col items-center'>
                <h1 className='text-[2em] text-[#101828] font-bold'>Try B<span className='text-[#7B61FF]'>o</span>nPay now!</h1>
                <p className='w-100% lg:w-[30%] text-slate-500'>Get started with us today and get access to lorem ipsum dolor sit amet</p>
                <button className='bg-[#7B61FF] font-bold border-none py-2 px-6 rounded-lg text-white text-sm mt-5'>Get Started</button>
            </div>
        </div>
        <Footer />
    </>

  )
}
