import { useState } from 'react'
import { Link } from 'react-router-dom'
import JapLogo from '../assets/JapLogo.png'
import { GiHamburgerMenu } from "react-icons/gi"
import { FaCopyright } from "react-icons/fa";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState<boolean>(false)
  
  return (
    <div className='w-screen h-[80px] bg-[#1B1A17] px-[30px] sm:px-[50px] md:px-[80px] lg:px-[100px] xl:px-[150px] 2xl:px-[300px] flex items-center justify-between box-border'>
      <Link to={'/'}><img className='w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[180px] 2xl:w-[210px] h-auto' src={JapLogo} alt="<JAP/>" /></Link>
      <button className='lg:hidden' onClick={() => setNavOpen(true)}><GiHamburgerMenu className='text-white hover:text-[#CBCBCB]' size={30} /></button>
      <div className={`h-screen w-3/4 bg-white absolute top-0 right-0 drop-shadow-md flex flex-col justify-start items-end ${navOpen ? 'block' : 'hidden'} lg:flex lg:relative lg:h-auto lg:w-auto lg:flex-row lg:bg-transparent lg:text-white`}>
        <button onClick={() => setNavOpen(false)} className='pr-[35px] pt-[28px] hover:text-[#6B6A66] text-[#1B1A17] font-bold font-sans text-center text-[20px] pr-2 pb-1 lg:hidden'>X</button>
        <div className='w-full font-sans pt-10 lg:flex lg:items-center lg:h-full lg:justify-center lg:pt-0'>
          <Link to='/'><p className='flex items-center w-full h-[40px] text-[#1B1A17] lg:text-white hover:bg-[#2E2D28] lg:hover:bg-transparent hover:text-[#F0A500] hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 hover:border-[#F0A500]  px-[20px]'>PROFILE</p></Link>
          <Link to='/projects'><p className='flex items-center w-full h-[40px] text-[#1B1A17] lg:text-white hover:bg-[#2E2D28] lg:hover:bg-transparent hover:text-[#F0A500] hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 hover:border-[#F0A500]  px-[20px]'>PROJECTS</p></Link>
          <Link to='/store'><p className='flex items-center w-full h-[40px] text-[#1B1A17] lg:text-white hover:bg-[#2E2D28] lg:hover:bg-transparent hover:text-[#F0A500] hover:border-l-4 lg:hover:border-l-0 lg:hover:border-b-4 hover:border-[#F0A500]  px-[20px]'>STORE</p></Link>
        </div>
        <div className='w-full pt-12 flex justify-center lg:hidden'><Link to='/contact'><p className='hover:bg-[#FFC851] w-[130px] h-[35px] bg-[#F0A500] text-white justify-center flex items-center rounded'>CONNECT</p></Link></div>
        <div className='mt-auto pb-2 w-full flex justify-center items-center text-xs lg:hidden'>
          <FaCopyright className='mx-1'/>
          <p>Copyright 2024</p>
        </div>
      </div>
      <Link className='hidden lg:block' to='/contact'><p className='hover:bg-[#FFC851] w-[160px] xl:w-[170px] 2xl:w-[180px] h-[40px] 2xl:h-[45px] bg-[#F0A500] text-white flex justify-center items-center rounded'>CONNECT</p></Link>
    </div>

    
  )
}

export default Navbar