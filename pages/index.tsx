import { useEffect, useState } from 'react'
import { Button, Htag, P, Tag, Rating } from '../components'
import { witchLayout } from '../layout/Layout'
import axios from 'axios'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'

function Home({ posts }): JSX.Element {
    const [rating, setRating] = useState<number>(4)
    return (
        <main>
            <Htag tag="h1">Home</Htag>
            <Htag tag="h2">Last Blog posts</Htag>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default witchLayout(Home)

export const getStaticProps = async () => {
    // const { data: res } = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/posts')
    const res = await fetch(process.env.NEXT_PUBLIC_API + '/posts')
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}
