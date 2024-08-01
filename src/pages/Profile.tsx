import Jeyms from '../assets/Jeyms.png'
import { Link } from 'react-router-dom'
import htmlLogo from '../assets/HTML.png'
import cssLogo from '../assets/CSS.png'
import javascriptLogo from '../assets/JS.png'
import reactLogo from '../assets/reactpng.png'
import nodeLogo from '../assets/nodejs.png'
import expressLogo from '../assets/ExpressJS.png'
import tailwindLogo from '../assets/tailwindcss.png'
import vbLogo from '../assets/vb.net.png'
import mssqlLogo from '../assets/mssql.png'
import mysqlLogo from '../assets/mysql.png'
import gitLogo from '../assets/Git.png'
import landingImage from '../assets/Website Landing.png'
import portfolioImage from '../assets/Portfolio.png'
import mobileImage from '../assets/Mobile Development.png'
import JapLogo from '../assets/JapLogo.png'
import { FaCopyright, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useEffect } from 'react'

const Profile = () => {

  useEffect(() => {
    document.title = 'JAP - Profile';
  }, []);

  let skills =  [
    {no: 1, skill: 'HTML', skillLogo: htmlLogo, link: 'https://www.w3schools.com/html/'},
    {no: 2, skill: 'CSS', skillLogo: cssLogo, link: 'https://www.w3schools.com/css/default.asp'},
    {no: 3, skill: 'Javascript', skillLogo: javascriptLogo, link: 'https://www.w3schools.com/js/default.asp'},
    {no: 4, skill: 'ReactJS', skillLogo: reactLogo, link: 'https://react.dev/'},
    {no: 5, skill: 'NodeJS', skillLogo: nodeLogo, link: 'https://nodejs.org/en'},
    {no: 6, skill: 'ExpressJS', skillLogo: expressLogo, link: 'https://expressjs.com/'},
    {no: 7, skill: 'React Native', skillLogo: reactLogo, link: 'https://reactnative.dev/'},
    {no: 8, skill: 'Tailwind CSS', skillLogo: tailwindLogo, link: 'https://tailwindcss.com/'},
    {no: 9, skill: 'VB.Net', skillLogo: vbLogo, link: 'https://en.wikipedia.org/wiki/Visual_Basic_(.NET)'},
    {no: 10, skill: 'MSSQL Server', skillLogo: mssqlLogo, link: 'https://en.wikipedia.org/wiki/Microsoft_SQL_Server'},
    {no: 11, skill: 'MySql', skillLogo: mysqlLogo, link: 'https://www.mysql.com/'},
    {no: 12, skill: 'Git', skillLogo: gitLogo, link: 'https://git-scm.com/'},
  ]

  let services = [
    {no: 1, title: 'Landing Page Development', image: landingImage, paragraph: 'Boost your online presence with our customized, high-converting landing pages. Our expert team designs and optimizes every element to reflect your brand and engage your audience, ensuring maximum impact and conversions. Transform visitors into loyal customers with our tailored landing page solutions.'},
    {no: 2, title: 'Portfolio Development', image: portfolioImage, paragraph: 'Showcase your work with our custom portfolio websites. Our expert team creates visually stunning and user-friendly sites that highlight your projects and skills, helping you attract new clients and opportunities. Make a lasting impression with a professional portfolio tailored to your needs.'},
    {no: 3, title: 'Mobile App Development', image: mobileImage, paragraph: 'Turn your ideas into reality with our custom mobile app development services. I create innovative, user-friendly apps tailored to your business needs, ensuring seamless performance and exceptional user experience. Elevate your brand with a standout mobile app.'},
  ]
  
  return (
    <div className='w-screen'>
      <div className='h-[calc(100vh-80px)] w-full flex flex-col lg:flex-row-reverse justify-center items-center lg:px-[100px] xl:px-[150px] 2xl:px-[300px]'>
        <div className='lg:w-1/2 lg:flex lg:flex-col lg:items-end lg:justify-center lg:h-full'>
            <img className='w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px] 2xl:w-[300px] h-auto' src={Jeyms} alt="JeymsPats" />
        </div>
        <div className='font-sans flex flex-col items-center lg:items-start lg:justify-center lg:h-full lg:w-1/2'>
            <h1 className='font-black text-[30px] sm:text-[40px] md:text-[50px] 2xl:text-[60px] text-[#F0A500] text-center pt-10 px-[100px] sm:px-[180px] md:px-[0px] lg:px-0 lg:text-left'>Let's Develop Your Ideas</h1>
            <p className='text-sm sm:text-lg md:text-xl 2xl:text-2xl text-center px-[70px] sm:px-[100px] md:px-[50px] lg:px-0 lg:text-left pt-3'>Hello, I'm <span className='text-[#F0A500] font-bold'>James Ariel Pates</span>, a fullstack developer specializing in React, VB.Net & NodeJS development. Let's bring your vision to life together.</p>
            <Link className='pt-12' to='/contact'><p className='hover:bg-[#FFC851] w-[130px] sm:w-[150px] md:w-[160px] 2xl:w-[250px] h-[40px] sm:h-[50px] md:h-[60px] 2xl:h-[75px] bg-[#1B1A17] text-sm 2xl:text-2xl text-white flex justify-center items-center rounded'>WORK WITH ME</p></Link>
        </div>
      </div>
      <div className='bg-[#1B1A17] w-screen pt-8 sm:py-10 md:py-12 text-white px-[30px] sm:px-[50px] md:px-[80px] lg:px-[100px] xl:px-[150px] 2xl:px-[300px]'>
        <h1 className='text-[30px] sm:text-[40px] md:text-[50px] 2xl:text-[60px] text-center text-white font-bold'>Tech Stack</h1>
        <div className='flex pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-16 2xl:pt-20 w-full flex-wrap'>
          {skills.map((skill, index) => (
            <div onClick={() => window.open(skill.link)} className='flex flex-col items-center justify-center h-[120px] sm:h-[150px] md:h-[180px] 2xl:h-[240px] lg:py-2 xl:py-3 2xl:py-4 w-1/3 xl:w-1/4 mt-2 mb-5 hover:bg-[#302E29] rounded' key={index}>
              <div className='h-2/3 py-4'>
                <img className='w-[70px] sm:w-[80px] md:w-[90px] h-auto' src={skill.skillLogo} alt={skill.skill} />
              </div>
              <div className='h-1/3 items-center'>
                <p className='mt-4 text-center text-xs md:text-lg'>{skill.skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-screen pt-8 sm:py-10 md:py-12 px-[30px] sm:px-[50px] md:px-[80px] lg:px-[100px] xl:px-[150px] 2xl:px-[300px] py-10'>
        <h1 className='text-[30px] sm:text-[40px] md:text-[50px] 2xl:text-[60px] text-center text-[#1B1A17] font-bold'>Services</h1>
        <div className='flex flex-col xl:flex-row xl:justify-between'>
          {services.map((service, index) => (
            <div className='mt-12 shadow-lg flex flex-col items-center text-center py-8 rounded-xl xl:w-[32%]' key={index}>
              <h2 className='font-semibold text-lg sm:text-2xl h-12'>{service.title}</h2> 
              <img className='w-[200px] sm:w-[250px] lg:w-[300px] h-auto mt-8 lg:mt-12 xl:mt-16 shadow-md' src={service.image} alt={service.title} />
              <p className='mt-6 sm:mt-12 lg:mt-14 text-xs sm:text-sm px-5 sm:px-16 lg:px-20 xl:px-8 xl:h-52'>{service.paragraph}</p>
              <Link className='pt-7 lg:pt-11 xl:p-2' to='/services'><p className='text-xs sm:text-sm hover:bg-[#2E2D28] bg-[#1B1A17] text-white w-[120px] sm:w-[130px] lg:w-[150px] h-[25px] sm:h-[30px] lg:h-[35px] flex justify-center items-center rounded'>AVAIL SERVICE</p></Link>
            </div>
          ))}
        </div>
      </div>
      <div className='w-screen bg-[#1B1A17] h-auto px-[30px] sm:px-[50px] md:px-[80px] lg:px-[100px] xl:px-[150px] 2xl:px-[300px] flex justify-between items-center'>
        <Link to='/' className='w-20 md:w-24 lg:w-32 xl:w-40 2xl:w-44'><img className='h-auto w-auto sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[180px] 2xl:w-[210px]' src={JapLogo} alt="<JAP/>" /></Link>
        <div className='flex justify-center items-center text-xs md:text-sm 2xl:text-lg text-white'>
          <FaCopyright className='mr-1'/>
          <p>COPYRIGHT 2024</p>
        </div>
        <div className='text-white flex items-center space-x-3 lg:space-x-4 xl:space-x-5 2xl:space-x-6'>
          <FaPhone className='text-[16px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl cursor-pointer' />
          <FaLinkedin onClick={() => window.open('https://www.linkedin.com/in/james-ariel-pates-17a4a1292/', '_blank', 'noopener,noreferrer')} className='text-[16px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl cursor-pointer' />
          <BiLogoGmail className='text-[16px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl cursor-pointer' />
          <FaInstagram className='text-[16px] md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Profile