import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames'
import MainNavigation from '../../components/MainNavigation/MainNavigation'

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            <div>LOGO</div>
            <MainNavigation />
        </div>
    )
}
