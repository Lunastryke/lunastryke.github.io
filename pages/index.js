import Head from 'next/head'
import { siteTitle } from '../components/layout'

export default function Home({ }) {
  return (
    <div className="flex flex-grow flex-col flex-shrink scroll-smooth divide-y md:w-8/12 justify-start">
      <Head>
        <title>{"Home | " + siteTitle}</title>
      </Head>
      <div className='font-normal font-sans'>
        <section>
          <p className="text-5xl">Hi Xuan Hao here! Passionate about developing solutions to meaningful problems</p>
          <br></br>
          <p>
            This site was built with {' '}
            <a href="https://nextjs.org/">NextJS</a>.
          </p>
          <p>Site is still under construction as of now!</p>
        </section>
      </div>
    </div>
  )
}