import React from 'react'
import Container from './container'
import { pageData } from './pageData'

export default async function Page() {
    const { projects } = await pageData()
    return <Container projects={projects} />
}
