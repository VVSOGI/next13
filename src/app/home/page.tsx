'use client'
import useModel from './model'
import useStyles from './resource'
import { Title } from '@/components'

interface Props {
    title?: string
}

export default function Home(props: Props) {
    const { title } = props
    const { changeTitle } = useModel()
    const { container } = useStyles()

    return (
        <div style={{ ...container }}>
            <Title title={title} changeTitle={changeTitle} />
        </div>
    )
}
