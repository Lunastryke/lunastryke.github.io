import degrees from "../../data/about/degrees"
import SectionTitle from "../text-stylings/sectionTitle"
import Degree from "./degree"
export default function Education({ id }) {
    return (
        <div className="flex flex-col flex-grow text-center gap-2" id={id}>
            <SectionTitle>Education</SectionTitle>
            {
                degrees.map(degree => (
                    <Degree data={degree}/>
                ))
            }
        </div>
    )
}