'use client'

import { Project } from '@/types/project'
import React from 'react'
import useStyles from './resource'

interface Props {
    projects: Project[]
}

export default function Projects({ projects }: Props) {
    const { container, title } = useStyles()

    return (
        <div>
            {projects.map((project) => {
                return (
                    <div key={project.id} style={{ ...container }}>
                        <span style={{ ...title }}>{project.title}</span>
                        <button>이동</button>
                    </div>
                )
            })}
        </div>
    )
}
