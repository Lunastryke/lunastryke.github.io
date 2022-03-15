import Link from 'next/link'

import experiences from '../../data/about/experiences'
import SectionTitle from '../text-stylings/sectionTitle'

export default function Experience({ id }) {
    return (
        <div className="flex flex-col flex-grow text-center gap-2" id={id}>
            <SectionTitle>Experience</SectionTitle>
            <div className="flex flex-col gap-2">
                {experiences ?
                    experiences.map(
                        exp => (
                            <div className="flex flex-col text-left">
                                <div className="uppercase font-medium tracking-wider">
                                    <Link href={exp.link} target="_blank">
                                        <a className="hover:text-blue-800" target="_blank">{exp.company}</a>
                                    </Link>
                                    <span> - {exp.position}</span>
                                </div>
                                <span className="uppercase font-light tracking-wider">{exp.daterange}</span>
                            </div>
                        )
                    )
                    : <></>}
            </div>
        </div >
    )
}