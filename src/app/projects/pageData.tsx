import { Project } from '@/types/project'
import { fetchData } from '@/utils/fetchData'

export async function pageData() {
    const projects = await fetchData<Project[]>('http://localhost:4000/projects', {
        cache: 'no-store'
    })

    return { projects }
}
