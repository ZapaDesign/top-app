import { useEffect, useState } from 'react'
import { Button, Htag, P, Tag, Rating } from '../components'
import { witchLayout } from '../layout/Layout'
import axios from 'axios'
import { GetStaticProps } from 'next'

function Home({ menu, firstCategory }): JSX.Element {
    const [rating, setRating] = useState<number>(4)
    return (
        <main>
            <Htag tag="h1">Home</Htag>
            <ul>
                {menu.map((m) => (
                    <li key={}>{m}</li>
                ))}
            </ul>
        </main>
    )
}

export default witchLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0
    const { data: menu } = await axios.post(process.env.NEXT_PUBLIC_DOMAIN + '/jokes/programming/ten')
    return {
        props: {
            menu,
            firstCategory,
        },
    }
}

interface HomeProps extends Record<string, unknown> {
    menu: string[]
    firstCategory: number
}
