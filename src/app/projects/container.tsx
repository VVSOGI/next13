'use client'

import { Project } from '@/types/project'
import React from 'react'
import { Button, Contents, Title } from './resource'
import { useRouter } from 'next/navigation'

interface Props {
    projects: Project[]
}

export default function Container({ projects }: Props) {
    const router = useRouter()

    return (
        <div>
            {projects.map((project) => {
                return (
                    <Contents key={project.id}>
                        <Title>{project.title}</Title>
                        <Button onClick={() => router.push(`/projects/${project.id}`)}>이동</Button>
                    </Contents>
                )
            })}
        </div>
    )
}
