import Link from 'next/link'
import CustomHead from './customhead'
import Navbar from './navbar'
import Footer from './footer'

const name = 'Xuan Hao'
export const siteTitle = 'Xuan Hao'

export default function Layout({ children, home }) {
  return (
    <div>
      <CustomHead title="Home" desc="Learn how to build a personal website using Next.js" />
      <Navbar />
      <header className="flex min-h-screen justify-center items-center">
        {home ? (
          <>
            <img src={require('/public/images/profile.jpeg')}
              height={144}
              width={144}
              alt={name} />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src={require('/public/images/profile.jpeg')}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
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