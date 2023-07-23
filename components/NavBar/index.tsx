import Button from '../Button'
import Logo from '/public/logo.png'
import { redirectTo} from '../../utils/helpers'

export default function NavBar() {
  return (
    <div className='flex justify-between py-14 items-center '>
      <img src={Logo.src} alt="logo" className='h-10' />
      <Button onClick={() => redirectTo('https://github.com/CeoFred/bonpay-js')} content="Get Started" />
    </div>
  )
}
