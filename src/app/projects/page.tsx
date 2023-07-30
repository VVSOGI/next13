import React from 'react'
import Projects from './projects'
import { fetchData } from '@/utils/fetchData'
import { Project } from '@/types/project'

export default async function Page() {
    const projects = await fetchData<Project[]>('http://localhost:4000/projects', {
        cache: 'no-store'
    })

    return <Projects projects={projects} />
}
