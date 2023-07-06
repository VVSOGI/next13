import React from 'react'
import Home from './page'
import { MainLayout } from '@/layout'

export default async function layout() {
    return (
        <MainLayout>
            <Home />
        </MainLayout>
    )
}
