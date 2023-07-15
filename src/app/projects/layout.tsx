import React, { Suspense } from 'react'
import Page from './page'
import { MainLayout } from '@/layout'

export default function layout() {
    return (
        <MainLayout>
            <Suspense fallback={<div>...</div>}>
                <Page />
            </Suspense>
        </MainLayout>
    )
}
