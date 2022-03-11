import Link from 'next/link'
import CustomHead from '../components/customhead'
import Date from '../components/date'
import Title from '../components/title'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Posts({ allPostsData }) {
    return (
        <div className="flex flex-grow flex-col flex-shrink scroll-smooth divide-y md:w-8/12">
            <CustomHead title="Posts"/>
            <Title text="Posts"/>
            <section>
                <h2>Blog</h2>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>

        </div>

    )
}