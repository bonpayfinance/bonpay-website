import Image from 'next/image'
import React from 'react'
import { tickCircle, Frame4, Line6, messages2 } from '@/components/assets';
// import tick from '../../pricing_page_assests/tick-circle.svg'
// import lineImg from '../../pricing_page_assests/Line 6.png'
// import bg from '../../pricing_page_assests/Frame4.png'
// import message from '../../pricing_page_assests/messages-2.png'

export default function PricingPage() {
    return (
        <div className='flex flex-col text-center justify-center bg-white'>
            <h1 className='font-bold mb-6 mt-4 text-[1.9em] md:text-[2em] lg:text-[2.5em] lg:w-[37%] md:w-[55%] w-[92%] mx-auto text-black'>Pricing built for businesses of all sizes.</h1>
            {/* <div className='border border-slate-300 rounded-md px-1 py-1 flex justify-around gap-3 ml-auto mr-auto'>
                <span className='py-1 px-1 rounded-md bg-rose-500'>Monthly billing</span>
                <span className='py-1 px-1 rounded-md '>Annula billing</span>
            </div> */}
            <div className='relative bg-slate-100 lg:bg-white md:bg-none py-6 lg:py-0' style={{position: 'relative'}}>
                <Image alt='background' src={Frame4} width={2000} height={2000} className='transform ' style={{width: '100%', height: '100%', position: 'absolute'}}/>
                <div className='border border-slate-200 rounded-md px-1 py-1 w-[16.6em] bg-[#FCFCFD] flex justify-around gap-3 ml-auto mr-auto'>
                    <span className='py-2 px-2 font-semibold rounded-md bg-[#7B61FF] text-white'>Monthly billing</span>
                    <span className='py-2 px-2 font-semibold rounded-md text-slate-500 '>Annual billing</span>
                </div>
                <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-[2.4%] md:gap-5 lg:pt-[6em] lg:px-[9em] md:px-[2em] px-[1em]'>
                    <div className='flex flex-col rounded-lg bg-white z-[2] text-left lg:mb-[-1.8em] lg:mt-auto md:mt-[2em] p-6 pb-10 transition-all duration-300 lg:h-[100%] cursor-pointer border border-slate-300'>
                        <h2 className='text-black text-[2em] md:text-[2.5em] pb-4 font-bold'>1.0%</h2>
                        <p className='font-bold text-[1.2em]'>Standard plan</p>
                        <p className='text-slate-700'>Billed monthly</p>

                        <div className='text-slate-700 flex items-start mt-8 gap-2'>
                        <Image alt='tick' height={20} width={20} src={tickCircle}/>
                        <p className='text-[0.9em] '>Creators can set the price and receive payments in the same currency</p>
                        </div>
                        <div className='text-slate-700 flex items-start mt-4 pb-4 gap-2'>
                        <Image alt='tick' height={20} width={20} src={tickCircle}/>
                        <p className='text-[0.9em]'>businesses set the price and receive payment in the same currency</p>
                        </div>

                        <button className='font-bold text-[0.9em] text-[#7B61FF] border-2 transition-all duration-300 border-[#7B61FF] hover:bg-[#7B61FF] hover:text-white rounded-md mt-auto p-2'>Choose this plan</button>
                    </div>

                    {/* <div className='flex flex-col rounded-lg bg-white z-[2] text-left lg:mb-[1.3em] lg:mt-[5em] md:mt-[2em] p-6 transition-all duration-300 border border-slate-300 cursor-pointer lg:border-[0.2em] lg:border-[#7B61FF] lg:scale-[1.15]'> */}
                    <div className='flex flex-col rounded-lg bg-white z-[2] text-left lg:mb-[-1.5em] lg:bottom-3 relative lg:mt-auto md:mt-[2em] p-6 pb-10 transition-all duration-300 lg:h-[110%] lg:border-[0.2em] lg:border-[#7B61FF] cursor-pointer border border-slate-300'>
                        <h2 className='text-black text-[2em] md:text-[2.5em] pb-4 font-bold'>1.5%</h2>
                        <p className='font-bold text-[1.2em]'>Currency Conversion</p>
                        <p className='text-slate-700'>Billed monthly</p>

                        <div className='text-slate-700 flex items-start mt-8 gap-2'>
                        <Image alt='tick' height={20} width={20} src={tickCircle}/>
                        <p className='text-[0.9em]'>Creators can fix the price in any Fiat/Cryptocurrency and receive payment in any Cryptocurrency</p>
                        </div>
                        <div className='text-slate-700 flex items-start mt-4 pb-4 gap-2'>
                        <Image alt='tick' height={20} width={20} src={tickCircle}/>
                        <p className='text-[0.9em]'>Business can fix the price in a fiat/cryptocurrency and receive payment in any currency</p>
                        </div>

                        <button className='font-bold text-[0.9em] border-2 transition-all duration-300 border-[#7B61FF] bg-[#7B61FF] text-white hover:bg-white hover:text-[#7861FF] rounded-md mt-auto p-2'>Choose this plan</button> 
                    </div>

                    <div className='flex flex-col rounded-lg bg-white z-[2] text-left lg:mt-auto lg:mb-[-1.8em] md:mt-[2em] p-6 pb-10 transition-all duration-300 lg:h-[100%] cursor-pointer border border-slate-300'>
                        <h2 className='text-black text-[2em] md:text-[2.5em] pb-4 font-bold'>Customised</h2>
                        <p className='font-bold text-[1.2em]'>Enterprise Plan</p>
                        <p className='text-slate-700 '>A custom package for your business</p>

                        <div className='text-slate-700 flex items-start mt-8 gap-2'>
                        <Image alt='tick' height={20} width={20} src={tickCircle}/>
                        <p className='text-[0.9em]'>Available for businesses with large payments volume, high-value transactions, or unique business models</p>
                        </div>

                        <button className='font-bold text-[0.9em] text-[#7B61FF] border-2 transition-all duration-300 border-[#7B61FF] hover:bg-[#7B61FF] hover:text-white rounded-md mt-5 lg:mt-auto p-2'>Contact us</button>
                    </div>
                </div>
            </div>

            {/* COMMON QUESTIONS */}
            <div className='pt-12 lg:px-[5em] md:px-[2em] px-[1em] z-[2] bg-white'>
                <h2 className='text-black text-[2em] lg:text-[2.2em] font-bold mb-2'>Common Questions</h2>
                <p className='text-slate-600'>Everything you need to know regarding Pricing and <br /> Billing in BonPay</p>

                <div className='grid mt-8 lg:grid-cols-3 gap-4 lg:gap-7 my-5 md:grid-cols-2'>

                    <div className='text-left rounded-md bg-[#FFE8F0] bg-opacity-40 border-solid border border-[#FFE8F0] p-6 h-[12em] md:h-auto'>
                        <p className='pb-2 font-extrabold text-[1.1em] text-[#551E33]'>Is there a free trial available</p>
                        <p className='text-[#551E33] text-[0.9em] '>Yes, you can try us for free for 30 days. If you want, we’ll 
                        provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#E4DFFF] bg-opacity-40 border border-[#E4DFFF] p-6 h-[12em] md:h-auto'>
                        <p className='pb-2 font-extrabold text-[1.1em] text-[#3D3080]'>Can I change my plan later?</p>
                        <p className='text-[#292055] text-[0.9em] '>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#D1E9FF] bg-opacity-40 border border-[#D1E9FF] p-6 h-[12em] md:h-auto'>
                        <p className='pb-2 font-extrabold text-[1.1em] text-[#1849A9]'>What is your cancellation policy?</p>
                        <p className='text-[#194185] text-[0.9em] '>We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#D1E9FF] bg-opacity-40 border border-[#D1E9FF] p-6 h-[12em] md:h-auto'>
                        <p className='pb-2 font-extrabold text-[1.1em] text-[#1849A9]'>Can I change my plan later?</p>
                        <p className='text-[#194185] text-[0.9em] '>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#FFE8F0] bg-opacity-40 border border-[#FFE8F0] p-6 h-[12em] md:h-auto'>
                        <p className='pb-2 font-extrabold text-[1.1em] text-[#551E33]'>What is your cancellation policy?</p>
                        <p className='text-[#551E33] text-[0.9em] '>We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                    </div>
                    <div className='text-left rounded-md bg-[#E4DFFF] bg-opacity-40 border border-[#E4DFFF] p-6 h-[12em] md:h-auto'>
                        <p className='pb-2 font-extrabold text-[1.1em] text-[#292055]'>Is there a free trial available</p>
                        <p className='text-[#292055] text-[0.9em] '>Yes, you can try us for free for 30 days. If you want, we'll 
                        provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
                    </div>

                </div>

            </div>

            {/* Contact Us Section */}
            <div className='relative lg:mx-[5em] md:mx-[2em] mx-[1em] mt-[2em] md:mt-[4em] mb-[2em] bg-[#6651D4] py-10 md:py-6 rounded-xl'>
                <Image alt='tick' height={1000} width={1000} src={Line6} className='w-[100%] hidden lg:flex md:flex h-[88%] absolute'/>
                <div className='flex flex-col gap-1 items-center z-[2] relative text-white'>
                <Image alt='message icon' src={messages2} height={50} width={50} className='z-[2]'/>
                <p className=' font-bold text-[1.1em] pt-4'>Still have questions?</p>
                <p className='lg:w-[50%] md:w-[50%] text-white w-[90%] mt-2 font-extralight text-[0.9em]'>if you're unable to find the answer you're seeking please feel free to chat with our friendly team for further assistance.</p>
                <button className='bg-white border-none py-3 p-6 md:px-12 rounded-lg font-bold text-[#6651D4] text-sm mt-5'>Contact Us</button>
                </div>
            </div>

            {/* TRY BONPAY */}
            <div className='pb-[4em] md:pb-[6em] px-[1em] flex flex-col items-center'>
                <h1 className='text-[2em] md:text-[2.5em] text-[#101828] font-bold'>Try B<span className='text-[#7B61FF]'>o</span>nPay now!</h1>
                <p className='w-[85%] lg:w-[30%] pt-4 text-slate-600'>Get started with us today and get access to lorem ipsum dolor sit amet</p>
                <button className='bg-[#7B61FF] font-bold border-none py-3 p-6 md:px-10 rounded-lg text-white text-sm mt-5'>Get Started</button>
            </div>
        </div>        
    )
}