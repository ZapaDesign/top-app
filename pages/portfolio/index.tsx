import { useEffect, useState } from 'react'
import { Button, Htag, P, Tag, Rating } from '../../components'
import { witchLayout } from '../../layout/Layout'
import axios from 'axios'
import { GetStaticProps } from 'next'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

function Portfolio({ portfolios }): JSX.Element {
    const [rating, setRating] = useState<number>(4)
    return (
        <main>
            <Htag tag="h1">Portfolio</Htag>
            <ul className="grid grid-cols-4 gap-4">
                {portfolios.map((portfolio) => (
                    <li key={portfolio.id} className="flex-1">
                        <img
                            className="mb-4 w-full h-48 rounded object-cover object-center"
                            src={process.env.NEXT_PUBLIC_DOMAIN + '/' + portfolio.thumbnail}
                            alt=""
                        />
                        <Link href={`/blog/${portfolio.id}`}>
                            <h3 className="font-bold text-xl">{portfolio.title}</h3>
                        </Link>
                        <ReactMarkdown>{portfolio.excerpt}</ReactMarkdown>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default witchLayout(Portfolio)

export const getStaticProps = async () => {
    // const { data: res } = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/posts')
    const res = await fetch(process.env.NEXT_PUBLIC_API + '/portfolios')
    const portfolios = await res.json()
    return {
        props: {
            portfolios,
        },
    }
}
