import React, { useState } from 'react'

interface Props {
    title: string
    changeTitle: (title: string) => void
}

export function Title({ title, changeTitle }: Props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {title}
            <input
                style={{ width: '400px', padding: '1rem', marginTop: '1rem' }}
                placeholder="Enter your home title"
                type="text"
                onChange={(e) => changeTitle(e.target.value)}
            />
        </div>
    )
}
