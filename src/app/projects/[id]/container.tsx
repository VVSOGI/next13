'use client'

import { Project } from '@/types/project'
import React from 'react'

interface Props {
    project: Project
}

export default function Container({ project }: Props) {
    return (
        <div>
            <h3>Project ID: {project.id}</h3>
            <span>Project Title: {project.title}</span>
        </div>
    )
}
