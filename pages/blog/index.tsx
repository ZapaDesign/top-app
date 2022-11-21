import { useEffect, useState } from 'react'
import { Button, Htag, P, Tag, Rating } from '../../components'
import { witchLayout } from '../../layout/Layout'
import axios from 'axios'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

function Blog({ posts }): JSX.Element {
    const [rating, setRating] = useState<number>(4)
    return (
        <main>
            <Htag tag="h1">Blog</Htag>
            <ul className="grid grid-cols-4 gap-4">
                {posts.map((post) => (
                    <li key={post.id} className="flex-1">
                        <img
                            className="mb-4 w-full h-48 rounded object-cover object-center"
                            src={process.env.NEXT_PUBLIC_DOMAIN + '/' + post.thumbnail}
                            alt=""
                        />
                        <Link href={`/blog/${post.id}`}>
                            <h3 className="font-bold text-xl">{post.title}</h3>
                        </Link>
                        <ReactMarkdown>{post.excerpt}</ReactMarkdown>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default witchLayout(Blog)

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
