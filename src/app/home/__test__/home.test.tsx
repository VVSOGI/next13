import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Title } from '@/components'

describe('Home', () => {
    test('renders a No Title Props', () => {
        const screen = render(<Title />)

        expect(screen.container).toMatchSnapshot()
    })

    test('renders a Title Props', () => {
        const screen = render(<Title title="Test Title" />)

        const input = screen.getByPlaceholderText('Enter your home title')
        fireEvent.change(input, { target: { value: 'Test Title1' } })

        expect(screen.container).toMatchSnapshot()
    })
})
