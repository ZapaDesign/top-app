import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <span>zapaDEV© 2020 - {new Date().getFullYear()} All rights reserved</span>
            <a href="#" target="_blank">
                Terms of use
            </a>
            <a href="#" target="_blank">
                Privacy Policy
            </a>
        </footer>
    )
}
