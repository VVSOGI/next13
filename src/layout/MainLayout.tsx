import { Header } from '@/components'
import { Sidebar } from '@/components/Sidebar'
import styles from '../app/page.module.css'
import React from 'react'

interface Props {
    children: React.ReactNode
}

export function MainLayout({ children }: Props) {
    return (
        <section
            style={{
                height: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Header />
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    flex: 1
                }}
            >
                <Sidebar style={{ width: '250px', flex: 'none' }} />
                <div style={{ flex: 1, padding: '2rem' }}>{children}</div>
            </div>
        </section>
    )
}
