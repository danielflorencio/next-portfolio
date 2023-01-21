import type { NextPage } from 'next'
import Head from 'next/head'
import SkillBlocks from '../src/components/SkillBlocks'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='flex w-full h-screen flex-1 flex-col items-center justify-center text-center bg-slate-100'>
          <h1 className="text-6xl mt-2 font-bold">
            Hi, I am{' '}
            <span className="text-blue-600">
              Daniel.
            </span>
          </h1>

          <p className="mt-12 text-4xl">
            And your search for a React developer has just ended.
          </p>
          <p className='mt-28 text-1xl font-bold '>Scroll down to see my projects and the benefits you get by having me on your team.</p>
        </section>
        <section className='w-full text-center'>
          <h2 className='font-bold text-4xl mt-12'>These are the technologies i specialize in.</h2>
          <h3 className='text-2xl mt-8 mb-20'>You're just a few clicks away from making them work for your company.</h3>
          <div className='flex justify-center items-center'>
            <SkillBlocks/>
          </div>
        </section>
        <section className='w-full'>
          <h2 className='text-4x1 mt-12 font-bold'>These are some of the projects I've made.</h2>
          
        </section>
      </main>
    </div>
  )
}

export default Home
