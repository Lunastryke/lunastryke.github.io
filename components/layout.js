import Link from 'next/link'
import CustomHead from './customhead'
import Navbar from './navbar'
import Footer from './footer'

const name = 'Lim Xuan Hao'
export const siteTitle = 'Xuan Hao'

export default function Layout({ children, home }) {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <CustomHead title="Home" desc="Site is built using NextJS and TailwindCSS" />
      <Navbar name={name}/>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  )
}