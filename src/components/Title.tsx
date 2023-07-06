import React, { useState } from 'react'

interface Props {
    title?: string
}

export function Title({ title = 'Please, Enter title contents.' }: Props) {
    const [homeTitle, setHomeTitle] = useState(title)

    return (
        <div>
            <input placeholder="Enter your home title" type="text" onChange={(e) => setHomeTitle(e.target.value)} />
            {homeTitle}
        </div>
    )
}
