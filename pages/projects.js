import CustomHead from "../components/customhead";
import Title from "../components/title";
export default function Projects({}) {
    return (
        <div className="flex flex-grow flex-col flex-shrink scroll-smooth divide-y md:w-8/12 justify-start">
            <CustomHead title="Projects"/>
            <Title text="Projects"/>
        </div>
    )
}