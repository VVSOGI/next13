import { Error, ProjectsContainer } from '@/components'
import { customFetch } from '@/utils'

export default async function Page() {
    try {
        const projects = await customFetch<Project[]>('http://localhost:4000/projects', {
            method: 'GET'
        })
        return <ProjectsContainer projects={projects} />
    } catch (err: any) {
        return <Error />
    }
}
