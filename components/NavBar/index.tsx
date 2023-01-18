import Button from '../Button'
import Logo from '/public/logo.png'

export default function NavBar() {
  return (
    <div className='flex justify-between p-5 lg:p-14 items-center '>
      <img src={Logo.src} alt="logo" className='h-6' />
      <Button content="Get Started" />
    </div>
  )
}
