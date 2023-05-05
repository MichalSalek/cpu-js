import { AppLink }          from '@/src/application/routing/routing.api'
import { ImageAtom }        from '@/src/core/layout/components/Image.atom'
import back                 from '@/src/core/layout/images/back.jpg'
import { GeneralPageProps } from '@/src/pages/_app'
import Container            from '@mui/material/Container'




const PAGE_TITLE = 'title'

export default function Page() {
    return <Container>

        <ImageAtom
            alt={'alt'}
            credits={'Template photo'}
            image={back}
        />

        <AppLink href={'subpage/studio'}>Studio preview page</AppLink>

    </Container>
}




export async function getStaticProps(): Promise<{ props: GeneralPageProps }> {
    return {
        props: {title: PAGE_TITLE} // will be passed to the page component as props
    }
}
