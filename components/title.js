import Link from "next/link";
import MainTitle from "./text-stylings/mainTitle";

export default function Title({ text, sections }) {
    return (
        <div className="flex flex-col justify-center items-center p-2">
            <MainTitle text={text} />
            {
                sections ? <div className="flex flex-row justify-center items-center self-center">
                    {sections.map(section => (
                        <Link href={"#" + section} key={section}>
                            <a className=" hover:text-blue-800 mr-6 uppercase font-semibold tracking-wider">
                                {section}
                            </a>
                        </Link>
                    ))}
                </div> :
                    <></>
            }
        </div>
    )
}