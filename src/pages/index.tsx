import { AppLink }          from '@/src/application/routing/routing.api'
import { GeneralPageProps } from '@/src/pages/_app'
import { Typography }       from '@mui/material'
import Container            from '@mui/material/Container'




const PAGE_TITLE = 'title'

export default function Page() {
    return <Container>

        <Typography variant={'h1'}>{PAGE_TITLE}</Typography>

        home

        <AppLink href={'subpage'}>Subpage</AppLink>

    </Container>
}




export async function getStaticProps(): Promise<{ props: GeneralPageProps }> {
    return {
        props: {title: PAGE_TITLE} // will be passed to the page component as props
    }
}
