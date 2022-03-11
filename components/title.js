import Link from "next/link";
export default function Title({ text, sections }) {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="p-4">
                <span className="font-bold tracking-wide text-6xl uppercase">{text}</span>
            </div>
            {
                sections ? <div className="flex justify-center items-center">
                    {sections.map(section => (
                        <Link href={"#" + section}>
                            <a className="uppercase font-semibold hover:text-blue-800 mr-6 tracking-wider">{section}</a>
                        </Link>
                    ))}
                </div> :
                <></>
            }
        </div>
    )
}