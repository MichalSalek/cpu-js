import { AppRoutes } from '@/src/application/routing/routing.config'
import Link          from 'next/link'
import { ReactNode } from 'react'




type Props = {
    href: AppRoutes
    children: ReactNode
}
export const AppLink = ({href, children}: Props): JSX.Element => {

    return <Link href={href}> {children} </Link>
}
