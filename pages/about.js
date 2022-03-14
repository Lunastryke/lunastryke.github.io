import Title from '../components/title'
import CustomHead from '../components/customhead'
import Education from '../components/resume/education'

const sections = [
    'Introduction',
    'Education',
    'Experience',
    'Skills'
]

export default function About({ }) {
    return (
        <div className="flex flex-col flex-grow flex-shrink scroll-smooth divide-y md:w-8/12 justify-center">
            <CustomHead title="About"/>
            <Title text="About" sections={sections}/>
            <div className="flex flex-col flex-grow flex-shrink self-center max-w-2xl">
                <section     id="Introduction">
                    Here is my intro asihdkajsdkajsbndkjasndkjsan
                    ashiofuhaoshfoajsnkcsa
                    asoihfboinzxocnas dalsk ndsalkndla
                    asgbioasbgoanxbokmaossa dsaaajknknkzmxnc,zxmnc,zxmnc,zxmnc,zmxncasodnoiwqja
                </section>
                <Education id="Education"/>
                <section className="flex" id="Experience">
                    Here is my experience
                </section>
                <section className="flex" id="Skills">
                    Here is my skills
                </section>
            </div>
        </div>
    )
}