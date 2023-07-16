import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Error as ErrorComponents, ProjectsContainer } from '@/components'

describe('Projects', () => {
    const customFetch = jest.fn()

    const renderProjects = async (mockProjects: Project[] | Error) => {
        customFetch.mockResolvedValueOnce(mockProjects)
        const projects = await customFetch()

        if (projects instanceof Error) {
            return render(<ErrorComponents />)
        }

        return render(<ProjectsContainer projects={projects} />)
    }

    test('renders projects', async () => {
        const mockProjects: Project[] = [
            { id: 1, title: 'Project 1' },
            { id: 2, title: 'Project 2' }
        ]

        const { container } = await renderProjects(mockProjects)
        expect(container).toMatchSnapshot()
    })

    test('if projects is empty', async () => {
        const mockProjects: Project[] = []

        const { container } = await renderProjects(mockProjects)
        expect(container).toMatchSnapshot()
    })

    test('if projects api is error', async () => {
        const mockProjects = new Error('API is error')

        const { container } = await renderProjects(mockProjects)
        expect(container).toMatchSnapshot()
    })
})
