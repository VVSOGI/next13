'use client'

import { Project } from '@/types/project'
import React, { useState } from 'react'
import { ChangeTitleButton, ChangeTitleInput, ChangeTitleWrapper, Contents, ProjectId, Title } from './resource'

interface Props {
    project: Project
}

export default function Container({ project }: Props) {
    const [title, setTitle] = useState(project.title)

    return (
        <Contents>
            <ProjectId>Project ID: {project.id}</ProjectId>
            <Title>Project Title: {project.title}</Title>
            <ChangeTitleWrapper>
                <ChangeTitleInput value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                <ChangeTitleButton>Change Title</ChangeTitleButton>
            </ChangeTitleWrapper>
        </Contents>
    )
}
