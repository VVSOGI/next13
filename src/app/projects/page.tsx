import { ProjectsContainer } from '@/components'
import { customFetch } from '@/utils'
import Error from './error'

export default async function Page() {
    try {
        const projects = await customFetch<Project[]>('http://localhost:4000/projects', {
            method: 'GET'
        })
        return <ProjectsContainer projects={projects} />
    } catch (error: any) {
        return <Error error={error} />
    }
}

/**
 * Error 처리가 안 되어있음.
 * 이전 layout.tsx에서 ErrorBoundary를 처리한다면?
 * - 근데 page.tsx가 서버 컴포넌트라 불가능할듯.
 * - 왜? -> 서버 컴포넌트에서 발생한 에러를 상위의 ErrorBoundary로 전달할 수 없음.
 *
 * 가장 확실한 방법은 page에서 에러를 처리하는 것.
 */
