import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
// import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
//make sure any react icon I use has the "fa" if not there'll be an error.
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import CV from '../assets/CV.pdf'





const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width: '50px'}} />
        </div>

 
        {/* MENU */}
        {/* The <ul> below has a medium screen size of flex which is on keeping with Tailwind's mobile-first approach. */}
            <ul className='hidden md:flex'>
            <li>
            <Link to="home" smooth={true} duration={500}>
                Home
             </Link>
            </li>

            <li>
            <Link to="about" smooth={true} duration={500} >
                About
             </Link>
            </li>

           
            <li>
            <Link to="skills" smooth={true} duration={500} >
                Skills
             </Link>
            </li>

            <li>
            <Link to="work" smooth={true} duration={500} >
                Work
             </Link>
            </li>

            <li>
            <Link to="contact" smooth={true} duration={500} >
                Contact
             </Link>
            </li>

            </ul>
        

        {/* HAMBURGER */}
    <div onClick={handleClick} className='md:hidden z-10'>
        {/* Ternary operator, if the nav is true, show icon (FaBars), if not show (FaTimes)*/}
    {!nav ? <FaBars/> : <FaTimes/>}
    </div>

        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
             </Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                About
             </Link>
            </li>

            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                Skills
             </Link>
            </li>
            
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                Work
             </Link>    
            </li>


            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                Contact
             </Link>
            </li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/efo-kokuavornyo/" target="_blank" rel="noopener noreferrer">
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Efo-Koku?tab=repositories" target="_blank" rel="noopener noreferrer">
                    GitHub <FaGithub size={30} />
                    </a>
                </li>

                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#607EAA]'>
                    <a className='flex justify-between items-center w-full text-gray-300'  href="/">
                    Email <HiOutlineMail size={30} />
                    </a>
                </li> */}

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#127681]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href={CV} download>
                    Download CV <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>

        </div>
        </div>
  );
};

export default Navbar;