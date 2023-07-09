'use client'

import { Header } from '@/components'
import { Sidebar } from '@/components/Sidebar'
import React from 'react'
import useStyles from './resource'

interface Props {
    children: React.ReactNode
}

export function MainLayout({ children }: Props) {
    const { container, contents, sidebar, main } = useStyles()

    return (
        <section style={container}>
            <Header />
            <div style={contents}>
                <Sidebar style={sidebar} />
                <div style={main}>{children}</div>
            </div>
        </section>
    )
}
