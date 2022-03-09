import CustomHead from '../../components/customhead'
import Layout from '../../components/layout'
import Date from '../../components/date'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (<Layout>
        <CustomHead title={postData.title}/>
        <article>
            <h1>{postData.title}</h1>
            <div>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>)
}