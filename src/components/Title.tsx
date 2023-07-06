import React from 'react'

interface Props {
    title?: string
}

export function Title({ title = 'Please, Enter title contents.' }: Props) {
    return <div>{title}</div>
}
