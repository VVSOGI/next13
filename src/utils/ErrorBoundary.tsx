'use client'
import React, { ErrorInfo, ReactNode } from 'react'

interface State {
    hasError: boolean
}

interface Props {
    children: ReactNode
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log({ error, errorInfo })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button type="button" onClick={() => this.setState({ hasError: false })}>
                        Try again?
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
