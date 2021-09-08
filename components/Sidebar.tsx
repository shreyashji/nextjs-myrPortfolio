import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import {useTheme} from 'next-themes'
import Image from 'next/image'
const Sidebar = () => {
   const {theme,setTheme } =useTheme();

   const  changeTheme = () =>{
      setTheme(theme === "light" ? "dark": "light")
   };
    return (
        <>
        <Image
            src='https://media-exp1.licdn.com/dms/image/C5603AQFGCVXPa62KIg/profile-displayphoto-shrink_100_100/0/1625136559076?e=1635379200&v=beta&t=VP5ERNpgf09OZjtRwT_XT3kgL8xEPC-2DwLMPGnP-Jg'
            alt='avatar'
            className='w-32 h-32 mx-auto rounded-full'
            width="128px"
            height="128px"
            layout="intrinsic"
            quality="100"
         /> 
            {/* <img
            src='https://media-exp1.licdn.com/dms/image/C5603AQFGCVXPa62KIg/profile-displayphoto-shrink_100_100/0/1625136559076?e=1635379200&v=beta&t=VP5ERNpgf09OZjtRwT_XT3kgL8xEPC-2DwLMPGnP-Jg'
            alt='avatar'
            className='w-32 h-32 mx-auto rounded-full'
         /> */}
         <h3 className='my-4 text-3xl font-medium tracking-wider tracking font-kaushan'>
            <span className='text-green'>Shreyash</span> Choudhary
         </h3>
         <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-500'>
            Software Engineer
         </p>

         {/* Resume */}
         <a
            className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-500'
            href='/public/assets/Shreyash Resume.pdf'
            download='Shreyash Resume.pdf'
            >
            <GiTie className='w-6 h-6' /><span>Download Resume</span>
         </a> 

         {/* Socials */}
         <div className='flex justify-around w-9/12 my-5 text-green-500 md:w-full'>
            <a href='https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A'>
               <AiFillYoutube className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.linkedin.com/in/sumit-dey-4a04431a9/'>
               <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href='https://www.instagram.com/_sumax__/'>
               <AiFillGithub className='w-8 h-8 cursor-pointer' />
            </a>
         </div>

         {/* address */} 
         <div
            className='py-4 my-5 bg-gray-200 dark:bg-dark-500' 
            style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
            <div className='flex items-center justify-center space-x-2'>
               <GoLocation className='mr-2' /> <span>Indore,India </span>
            </div>
            <p className='my-2 '> shreyashchoudhary@gmail.com </p>
            <p className='my-2'> 8514961665 / 8640960375 </p>
         </div>

         <button
            className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
            onClick={() => window.open('mailto:code.sumax@gmail.com')}>
            Email me
         </button>
         <button
            onClick={changeTheme}
            className='w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 '>
            Toggle Theme
         </button>
        </>
    );
};

export default Sidebar;
