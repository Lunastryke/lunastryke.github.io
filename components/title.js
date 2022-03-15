import Link from "next/link";
import MainTitle from "./text-stylings/mainTitle";
import SectionTitle from "./text-stylings/sectionTitle";

export default function Title({ text, sections }) {
    return (
        <div className="flex flex-col justify-center items-center p-2">
            <MainTitle text={text} />
            {
                sections ? <div className="flex flex-row flex-grow text-center">
                    {sections.map(section => (
                        <Link href={"#" + section} key={section}>
                            <a className=" hover:text-blue-800 mr-6">
                                <SectionTitle size="text-base">
                                    {section}
                                </SectionTitle>
                            </a>
                        </Link>
                    ))}
                </div> :
                    <></>
            }
        </div>
    )
}