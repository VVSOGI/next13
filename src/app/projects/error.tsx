'use client'

import { useEffect, useState } from 'react'

export default function Error({ error }: { error: any }) {
    const [isDisconnected, setIsDisconnected] = useState(false)

    useEffect(() => {
        if (error.cause) {
            setIsDisconnected(true)
        }
    }, [error])

    if (isDisconnected) {
        return <h1>Unable to connect to the server.</h1>
    }

    return (
        <div>
            <h1>
                Error code: {error.error} {error.statusCode}
            </h1>
            <h5>Error message: {error.message}</h5>
        </div>
    )
}
