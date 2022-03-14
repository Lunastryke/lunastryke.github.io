import Title from '../components/title'
import CustomHead from '../components/customhead'
import Education from '../components/resume/education'
import ResumePdf from '../components/resume/resumePdf'
import Introduction from '../components/resume/introduction'

const sections = [
    'Introduction',
    'Education',
    'Experience',
    'Skills',
    'Resume'
]

export default function Resume({ section }) {
    return (
        <div className="flex flex-col flex-grow flex-shrink scroll-smooth md:w-8/12 justify-center">
            <CustomHead title="Resume" />
            <Title text="Resume" sections={sections} />
            <div className="flex flex-col flex-grow flex-shrink self-center max-w-2xl pt-6">
                <Introduction id="Introduction"/>
                <Education id="Education" />
                <section className="flex" id="Experience">
                    Here is my experience
                </section>
                <section className="flex" id="Skills">
                    Here is my skills
                </section>
                <ResumePdf id="Resume" text="Download my resume here!"/>
            </div>
        </div>
    )

}