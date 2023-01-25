import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {AiOutlineCode} from 'react-icons/ai'
import type { NextPage } from 'next'
import Head from 'next/head'
import SkillBlocks from '../src/components/SkillBlocks'
import { IconContext } from 'react-icons'
import ContactSection from '../src/components/Contact'
import { FiExternalLink } from 'react-icons/fi'
import Projects from '../src/components/Projects'
const Home: NextPage = () => {
  return (
    <div className='w-full'>
      <Head>
        <title>Daniel React Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <main>
        <section className='bg-slate-100 flex justify-center pt-4 w-full'>
          <nav className='bg-slate-200 sm:w-11/12 lg:w-4/5 h-16 flex border border-solid border-slate-300 justify-between items-center rounded-3xl'>
            <div className='bg-black p-2 sm:ml-2 md:ml-4 rounded-full text-white text-3xl flex justify-center items-center'>
              <AiOutlineCode/>
            </div>
            <ul className='flex text-slate-800 gap-3'>
              <li className=' pl-2 lg:mr-8 text-lg font-semibold'><a className='hover:text-sky-400 transition-colors duration-150' href="#skills">Skills</a></li>
              <li className=' lg:mr-8 text-lg font-semibold'><a className='hover:text-sky-400 transition-colors duration-150' href="#projects">Projects</a></li>
              <li className=' lg:mr-8 text-lg font-semibold'><a className='hover:text-sky-400 transition-colors duration-150' href="#contact" >Contact</a></li>
              <li className=' lg:mr-8 text-lg font-semibold'><span className='flex pr-2 hover:text-sky-400 transition-colors duration-150'><a href="https://drive.google.com/file/d/1KB-gJxcTCpCg6ojEivJ0E1S7lW6X-0ep/view?usp=share_link">Resume</a><FiExternalLink/></span></li>
            </ul>
          </nav>
        </section>
        <section className='flex w-full h-screen flex-1 flex-col items-center justify-center text-center bg-slate-100'>
          <h1 className="sm:text-5xl sm:px-2 md:px-0 md:text-6xl font-bold">
            Hi, I'm{' '}
            <span className="text-blue-600">
              Daniel.
            </span>
          </h1>

          <p className="mt-12 sm:text-3xl sm:px-2 md:text-4xl">
            And your search for a React developer has just ended.
          </p>
          <p className='mt-28 text-1xl text-gray-700 '>Scroll down to see my skills and projects.</p>
          <div className='mt-10 float'>
            <IconContext.Provider value={{size: '1.8rem'}}>
              <BsFillArrowDownCircleFill/>
            </IconContext.Provider>
          </div>
        </section>
        <section className='w-full text-center pb-20'>
          <h2 className='font-bold text-4xl mt-12' id='skills'>These are the technologies I've been specializing in.</h2>
          <h3 className='text-2xl mt-8 mb-20'>Everything you need to get your company's frontend back on track.</h3>
          <div className='flex justify-center items-center'>
            <SkillBlocks/>
          </div>
        </section>
        <section className='w-full text-center bg-slate-100'>
          <h2 className='text-4xl p-12 font-bold' id='projects'>Take a look at some of the projects I've made.</h2>
          <Projects/>
        </section>
        <section className='w-full text-center'>
          <h2 className='text-3xl mt-12 font-bold' id='contact'>You are just a few clicks away from finding your team's newest Web Developer.</h2>
          <h3 className=' text-2xl mt-8'>Click either one of the icons in the first row to get in touch right now.</h3>
          <ContactSection/>
        </section>
      </main>
    </div>
  )
}
export default Home