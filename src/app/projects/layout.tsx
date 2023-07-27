import React, { Suspense } from 'react'
import { MainLayout } from '@/layout'

export default function layout({ children }: any) {
    return (
        <MainLayout>
            <Suspense fallback={<div>...</div>}>{children}</Suspense>
        </MainLayout>
    )
}
