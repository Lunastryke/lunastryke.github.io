import Link from 'next/link'
import CustomHead from './customhead'
import Navbar from './navbar'
import Footer from './footer'

const name = 'Lim Xuan Hao'
export const siteTitle = 'Xuan Hao'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col h-screen'>
      <CustomHead title="Home" desc="Site is built using NextJS and TailwindCSS" />
      <Navbar className= "flex" name={name}/>
      <main className="flex flex-auto items-start self-center w-full lg:w-6/12">{children}</main>
      <Footer className="flex"/>
    </div>
  )
}