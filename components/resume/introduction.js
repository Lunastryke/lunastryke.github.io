import SectionTitle from "../text-stylings/sectionTitle"

export default function Introduction({}) {
    return (
        <div className="flex flex-col flex-grow text-center">
            <SectionTitle text="Introduction"/>
            <p>
                Enter introduction text here
            </p>
        </div>
    )
}