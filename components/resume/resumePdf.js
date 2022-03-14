import Link from 'next/link'
import SectionTitle from '../text-stylings/sectionTitle'
export default function ResumePdf({ text }) {
    return (
        <div className="flex flex-col flex-grow text-center">
            <SectionTitle text="Resume"/>
            <Link href={"/pdf/resume.pdf"}>
                <a className='hover:text-blue-800 mt-2 underline underline-offset-2'>{text}</a>
            </Link>
        </div>
    )
}