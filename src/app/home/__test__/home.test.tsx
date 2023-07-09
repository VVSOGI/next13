import { fireEvent, render, renderHook } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Title } from '@/components'
import useModel from '../model'

describe('Home', () => {
    const hooks = renderHook(() => useModel(), {})
    const {
        result: {
            current: { changeTitle }
        }
    } = hooks

    test('renders a No Title Props', () => {
        const screen = render(<Title title="Test Title1" changeTitle={changeTitle} />)

        expect(screen.container).toMatchSnapshot()
    })

    test('renders a Title Props', () => {
        const screen = render(<Title title="Test Title2" changeTitle={changeTitle} />)

        const input = screen.getByPlaceholderText('Enter your home title')
        fireEvent.change(input, { target: { value: 'Test Title1' } })

        expect(screen.container).toMatchSnapshot()
    })
})
