import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import {fetchTweets} from '../utils/fetchTweets'

interface Props {
  tweets:Tweet[]
}
const Home = ({tweets}:Props) => {
  return (
    <div className=' lg:max-w-6xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main className=' grid grid-cols-9'>
        {/* sidebar */}
        <SideBar/>

        {/* main feed */}
        <Feed tweets={tweets}/>

        {/* widgets */}
        <Widgets/>
      </main>
    </div>
  )
}

export default Home

export const getServerSideprops: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props:{
      tweets,
    }
  }
}