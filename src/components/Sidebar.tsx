import React from 'react'

interface Props {
    style?: React.CSSProperties
}

export function Sidebar({ style }: Props) {
    return (
        <div
            style={{
                ...style,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                borderRight: '1px solid #eaeaea'
            }}
        >
            Sidebar
        </div>
    )
}
