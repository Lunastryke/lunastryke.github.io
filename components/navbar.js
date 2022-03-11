import Link from 'next/link'

export default function Navbar({ name }) {
    return (
        <nav className="flex  flex-wrap items-center justify-start p-3 font-semibold bg-gray-100 text-gray-500 uppercase text-center ">
            <div className="flex items-center flex-shrink-0 font-bold tracking-wider text-gray-800 mr-6">
                <Link href={'/'}>
                    <a className="hover:text-blue-800">{name}</a>
                </Link>
            </div>
            <div className="flex divide-slate-400 justify-items-center tracking-wider">
                {[
                    ['About', '/about'],
                    ['Posts', '/posts'],
                    ['Projects', '/projects'],
                    ['Contact', '/contact'],
                    ['Resume', '/pdf/resume.pdf'],
                ].map(([title, url]) => (
                    <Link href={url} key={title} >
                        <a className="hover:text-blue-800 mr-6 tracking-wider">{title}</a>
                    </Link>
                ))}
            </div>

        </nav>
    )
}