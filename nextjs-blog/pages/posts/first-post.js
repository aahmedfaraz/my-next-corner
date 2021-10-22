import Link from "next/link"
import Head from 'next/head'
import Layout from "../../components/layout"
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Post | Ahmed</title>
            </Head>
            <h1>Ahmed First Post</h1>
            <h2>
                <Link href="/">
                    Back to Home
                </Link>
            </h2>
        </Layout>
    )
}