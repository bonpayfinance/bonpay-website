
import Button from '../Button'
import Logo from '/public/logo.svg'
import { redirectTo} from '../../utils/helpers'

export default function Footer() {
  return (
    <div className="bg-dark pt-10 mt-[5rem] absolute w-[100%] left-0 ">
      <div className='px-6 py-8 lg:px-14 flex flex-col justify-start text-left'>
        <div className="flex justify-between items-center">
          <img src={Logo.src} className='h-6' alt="bonpay" />
          <Button className="lg:d-none text-sm lg:invisible" onClick={() => redirectTo('https://github.com/CeoFred/bonpay-js')} content="Get Started" />
        </div>
        <h5 className='font-bold my-8 text-sm lg:text-xl'>Streamline your Payments. Simplify your Business.</h5>
        <div className="flex flex-row mt-8 justify-between items-center">
            <div className="text-gray font-base w-[100%] lg:w-[20%] flex justify-between text-sm ">
              <a className="mr-5" href='https://github.com/CeoFred/bonpay-react'>React SDK</a>
              <a className="mr-5" href="https://github.com/CeoFred/bonpay-js">Web SDK</a>
              <a className="mr-5" href="https://github.com/CeoFred/bonpay-ui">Bonpay UI</a>

            </div>
           <Button className="text-sm hidden lg:inline-flex" onClick={() => redirectTo('https://github.com/CeoFred/bonpay-js')} content="Get Started" />
        </div>
      </div>
      <footer className="border border-b-transparent border-r-transparent border-l-transparent border-t-gray ">
        <p className="text-gray text-sm  text-center pt-[3rem] pb-[4rem] font-light">© 2023 BonPay. All rights reserved.</p>
      </footer>
    </div>
  )
}
