import CustomHead from "../components/customhead";
import Title from "../components/title";
export default function Contact({}) {
    return (
        <div className="flex flex-grow flex-col flex-shrink scroll-smooth divide-y md:w-8/12 justify-start">
            <CustomHead title="Contact"/>
            <Title text="Contact"/>
        </div>
    )
}