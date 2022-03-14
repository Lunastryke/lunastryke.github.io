import Link from 'next/link'

export default function Degree({ data }) {
    return (
        <header className='text-left font-light py-2'>
            <span className="font-normal">{data.degree}</span>
            <p>
                <Link href={data.link}>
                    <a className="underline-offset-2">{data.school}</a>
                </Link>
                , {data.year}
            </p>
        </header>
    )
}