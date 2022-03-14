import degrees from "../../data/about/degrees"
import SectionTitle from "../text-stylings/sectionTitle"
import Degree from "./degree"
export default function Education({}) {
    return (
        <div className="flex flex-col flex-grow text-center">
            <SectionTitle text="Education"/>
            {
                degrees.map(degree => (
                    <Degree data={degree}/>
                ))
            }
        </div>
    )
}