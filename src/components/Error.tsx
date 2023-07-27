'use client'
import React from 'react'

interface Props {
    message: string
}

export function Error({ message }: Props) {
    return (
        <div>
            <h2>{message}</h2>
            <button>Try again</button>
        </div>
    )
}
