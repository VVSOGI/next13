'use client'
import React, { useState } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    const [receiveError] = useState(JSON.parse(error.message))

    return (
        <div>
            <p>{receiveError.statusCode}</p>
            <p>{receiveError.message}</p>
        </div>
    )
}
