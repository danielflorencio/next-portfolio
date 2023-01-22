import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '../src/components/Projects'
import SkillBlocks from '../src/components/SkillBlocks'
import { IconContext } from 'react-icons'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='bg-slate-100 flex justify-center pt-8'>
          <nav className='bg-slate-200 w-4/6 h-24 flex border border-solid justify-between p-6 pr-14 rounded-3xl'>
            <div className='ml-10 bg-black rounded-full w-14 h-14 text-white text-3xl flex justify-center items-center pb-2'>
              {'</>'}
            </div>
            <ul className='flex'>
              <li className='mr-8 text-lg'><strong><a>Skills</a></strong></li>
              <li className='mr-8 text-lg'><strong><a>Projects</a></strong></li>
              <li className='mr-8 text-lg'><strong><a>Resume</a></strong></li>
            </ul>
          </nav>
        </section>
        <section className='flex w-full h-screen flex-1 flex-col items-center justify-center text-center bg-slate-100'>
          <h1 className="text-6xl font-bold">
            Hi, I am{' '}
            <span className="text-blue-600">
              Daniel.
            </span>
          </h1>

          <p className="mt-12 text-4xl">
            And your search for a React developer has just ended.
          </p>
          {/* <p className='mt-28 text-1xl font-bold '>Scroll down to see my projects and the benefits you get by having me on your team.</p> */}
          <p className='mt-28 text-1xl text-gray-700 '>Scroll down to see my projects and the benefits you get with me on your team.</p>
          
          <div className='mt-10 float'>
            <IconContext.Provider value={{size: '1.8rem'}}>
              <BsFillArrowDownCircleFill/>
            </IconContext.Provider>
          </div>
        </section>
        <section className='w-full text-center'>
          <h2 className='font-bold text-4xl mt-12'>These are the technologies i specialize in.</h2>
          <h3 className='text-2xl mt-8 mb-20'>You're just a few clicks away from making them work for your company.</h3>
          <div className='flex justify-center items-center'>
            <SkillBlocks/>
          </div>
        </section>
        <section className='w-full text-center bg-slate-100'>
          <h2 className=' text-4xl p-12 font-bold'>Take a look at some of the projects I've made.</h2>
          <Projects/>
        </section>
        <section className='w-full text-center'>
          <h2 className=' text-4xl mt-12 font-bold'>Title</h2>
          <form>
            <text></text>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Home
