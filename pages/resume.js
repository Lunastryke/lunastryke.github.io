import Title from '../components/title'
import CustomHead from '../components/customhead'
import Introduction from '../components/resume/introduction'
import Education from '../components/resume/education'
import Experience from '../components/resume/experience'
import Skills from '../components/resume/skills'
import ResumePdf from '../components/resume/resumePdf'

const sections = [
    'Introduction',
    'Education',
    'Experience',
    'Skills',
    'Resume'
]

export default function Resume({ section }) {
    return (
        <div className="flex flex-col flex-grow flex-shrink scroll-smooth md:w-8/12 justify-center divide-y-2">
            <CustomHead title="Resume" />
            <Title text="Resume" sections={sections} />
            <div className="flex flex-col flex-grow flex-shrink self-center max-w-4xl pt-4 gap-6">
                <Introduction id="Introduction"/>
                <Education id="Education" />
                <Experience id="Experience"/>
                <Skills id="Skills"/>
                <ResumePdf id="Resume"/>
            </div>
        </div>
    )

}