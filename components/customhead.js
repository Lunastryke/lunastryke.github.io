import Head from 'next/head'
import { siteTitle } from './layout'

export default function CustomHead({title, desc}) {
    return (<Head>
        <link rel="icon" href="/favicon.ico" />
        {title ? <title>{title + " | " + siteTitle}</title> : <title>{siteTitle}</title>}
        {desc ? <meta
          name="description"
          content={desc}
        /> : <></>}
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
    </Head>)
}