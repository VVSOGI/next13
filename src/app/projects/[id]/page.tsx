import { Project } from '@/types/project'
import { fetchData } from '@/utils/fetchData'
import React from 'react'
import Container from './container'

interface Props {
    params: {
        id: string
    }
}

export default async function Page({ params }: Props) {
    const { id } = params
    const project = await fetchData<Project>(`http://localhost:4000/projects/${id}`, {
        cache: 'no-store'
    })
    return <Container project={project} />
}
