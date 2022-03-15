import Link from 'next/link'
import SectionTitle from '../text-stylings/sectionTitle'
export default function ResumePdf({ id }) {
    return (
        <div className="flex flex-col flex-grow text-center" id={id}>
            <SectionTitle spacing="mb-2">Resume</SectionTitle>
            <Link href={"/pdf/resume.pdf"}>
                <a className="uppercase tracking-wider hover:text-blue-800 mt-2 underline underline-offset-4" target="_blank">Download my resume here!</a>
            </Link>
        </div>
    )
}