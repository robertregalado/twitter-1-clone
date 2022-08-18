import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className='lg:max-w-6xl mx-auto'>
      <Head>
        <title>Twitter 1.0</title>
      </Head>

      <main className='grid grid-cols-9'>

        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widget */}
        <Widgets />

      </main>
    </div>
  )
}

export default Home
