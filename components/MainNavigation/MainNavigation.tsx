import Link from 'next/link'
import styles from './MainNavigation.module.css'

export default function MainNavigation() {
    return (
        <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/blog/">Blog</Link>
        </nav>
    )
}
