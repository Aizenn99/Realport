
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Sidebar() {
  return (
    <div 
    className='w-[90px] h-screen shadow-2xl fixed flex flex-col items-center justify-around ' >
        <h2 className='-rotate-90 font-medium tracking-widest ' >HomePage</h2>
        <div className='flex flex-col gap-7 text-[1.4rem] ' >
            
            <FaGithub  className='cursor-pointer  text-gray-500 hover:scale-110  transition-all hover:text-black ease-in-out' />
            <FaInstagram className='cursor-pointer  text-gray-500 hover:scale-110  transition-all hover:text-black ease-in-out' />
            <FaLinkedin  className='cursor-pointer  text-gray-500 hover:scale-110  transition-all hover:text-black ease-in-out'/> 
            </div>
        

    </div>
  )
}

export default Sidebar