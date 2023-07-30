import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Container from '../container'
import { useRouter } from 'next/navigation'
import ErrorComponents from '../error'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn() // useRouter 훅 모의화
}))

const customFetch = jest.fn()

describe('Projects', () => {
    test('should render projects', async () => {
        customFetch.mockResolvedValueOnce([
            {
                id: '1',
                title: 'title'
            }
        ])
        const projects = await customFetch()

        ;(useRouter as jest.Mock).mockReturnValue({
            push: `/${projects.id}`
        })

        const { container } = render(<Container projects={projects} />)
        expect(container).toMatchSnapshot('render projects')
    })

    test('Should return error when fetch failed projects', async () => {
        const networkError = JSON.stringify({
            error: 'NetworkError',
            message: 'The server could not be reached. Please check your network connection.',
            statusCode: 500
        })
        customFetch.mockResolvedValueOnce(networkError)

        const error = new Error(await customFetch())

        const { container } = render(<ErrorComponents error={error} reset={() => {}} />)
        expect(container).toMatchSnapshot('error')
    })
})
