'use client'
import React, { useState } from 'react'
import { Title } from '@/components'

interface Props {
    title?: string
}

export default function Home(props: Props) {
    const { title } = props

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Title title={title} />
        </div>
    )
}
