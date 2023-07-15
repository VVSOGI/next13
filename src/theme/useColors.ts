'use client'
import { useEffect, useState } from 'react'
import { schemes } from '.'

type Theme = 'dark' | 'light'

function getStoredTheme(): Theme {
    if (typeof window !== 'undefined') {
        return (localStorage.getItem('theme') as Theme) || 'light'
    } else {
        return 'light'
    }
}

export function useColors() {
    const [theme] = useState<Theme>(getStoredTheme)
    const [scheme, setScheme] = useState(schemes[theme])

    useEffect(() => {
        setScheme(schemes[getStoredTheme()])
    }, [])

    return scheme
}
