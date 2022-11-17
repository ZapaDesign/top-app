import { useEffect, useState } from 'react'
import { Button, Htag, P, Tag, Rating } from '../components'

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4)
    return (
        <main>
            <Htag tag="h1">Home</Htag>
            <section>
                <h2>Buttons</h2>
                <Button appearance="primary" arrow="down" onClick={() => setCounter((x) => x + 1)}>
                    Click me!
                </Button>
                <Button appearance="ghost" arrow="right">
                    Click me!
                </Button>
            </section>
            <section>
                <h2>Paragraphs</h2>
                <P size="s">
                    <b>Samll</b> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, aliquam eos
                    ipsum alias obcaecati voluptatum repudiandae odit debitis vero perspiciatis, labore ducimus modi
                    reiciendis doloremque in id blanditiis quaerat.
                </P>
                <P size="m">
                    <b>Medium</b> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, aliquam eos
                    ipsum alias obcaecati voluptatum repudiandae odit debitis vero perspiciatis, labore ducimus modi
                    reiciendis doloremque in id blanditiis quaerat.
                </P>
                <P>
                    <b>Without size</b> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, aliquam
                    eos ipsum alias obcaecati voluptatum repudiandae odit debitis vero perspiciatis, labore ducimus modi
                    reiciendis doloremque in id blanditiis quaerat.
                </P>
                <P size="l">
                    <b>lLarge</b> -Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vel, aliquam eos
                    ipsum alias obcaecati voluptatum repudiandae odit debitis vero perspiciatis, labore ducimus modi
                    reiciendis doloremque in id blanditiis quaerat.
                </P>
            </section>
            <section style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                <h2>Tags</h2>
                <div>
                    <Tag href="http://google.com">Small Red</Tag>
                </div>
                <div>
                    <Tag size="s" color="red">
                        Small Red
                    </Tag>
                    <Tag size="s" color="green">
                        Small Green
                    </Tag>
                    <Tag size="s" color="gray">
                        Small Gray
                    </Tag>
                    <Tag size="s" color="ghost">
                        Small Ghost
                    </Tag>
                    <Tag size="s" color="primary">
                        Small Primary
                    </Tag>
                </div>
                <div>
                    <Tag size="m" color="red">
                        Small Red
                    </Tag>
                    <Tag size="m" color="green">
                        Small Green
                    </Tag>
                    <Tag size="m" color="gray">
                        Small Gray
                    </Tag>
                    <Tag size="m" color="ghost">
                        Small Shost
                    </Tag>
                    <Tag size="m" color="primary">
                        Small Primary
                    </Tag>
                </div>
            </section>
            <section>
                <h2>Rating</h2>
                <Rating rating={rating} isEditable setRating={setRating} />
            </section>
        </main>
    )
}
