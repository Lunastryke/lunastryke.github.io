import Title from '../components/title'
import CustomHead from '../components/customhead'

const sections = [
    'Introduction',
    'Education',
    'Experience',
    'Skills'
]

export default function About({ }) {
    return (
        <div className="flex flex-grow flex-col flex-shrink scroll-smooth divide-y md:w-8/12 justify-start">
            <CustomHead title="About"/>
            <Title text="About" sections={sections}/>
            <div>
                <section className="flex" id="introduction">
                    Here is my intro
                </section>
                <section className="flex" id="education">
                    Here is my education
                </section>
                <section className="flex" id="experience">
                    Here is my experience
                </section>
                <section className="flex" id="skills">
                    Here is my skills
                </section>
            </div>
        </div>
    )
}