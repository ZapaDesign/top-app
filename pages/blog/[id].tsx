import Link from 'next/link'
import { useRouter } from 'next/router'
import { witchLayout } from '../../layout/Layout'

function Post(post) {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <Link href="/blog">Go to Blog</Link>
            <h1>Post: {post.title}</h1>
        </>
    )
}

export default witchLayout(Post)

export async function getStaticProps({ params }: any) {
    const response = await fetch(process.env.NEXT_PUBLIC_API + '/post/' + params.id)
    const post = await response.json()
    return {
        props: { post },
    }
}
