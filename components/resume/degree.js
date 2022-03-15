import Link from 'next/link'

export default function Degree({ data }) {
    return (
        <header className='text-left'>
            <span className="uppercase font-medium tracking-wider">{data.degree}</span>
            <p className="uppercase font-light tracking-wider">
                <Link href={data.link}>
                    <a className="hover:text-blue-800">{data.school}</a>
                </Link>
                , {data.year}
            </p>
        </header>
    )
}