import { useEffect, useState } from 'react'
import { schemes } from '.'

type Theme = 'dark' | 'light'

function getStoredTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) || 'light'
}

export function useColors() {
    const [theme] = useState<Theme>(getStoredTheme)
    const [scheme, setScheme] = useState(schemes[theme])

    useEffect(() => {
        setScheme(schemes[getStoredTheme()])
    }, [])

    return scheme
}
