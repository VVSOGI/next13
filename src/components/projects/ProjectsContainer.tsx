import React, { useEffect } from 'react'
import useModel from './model'
import useStyles from './resource'

interface Props {
    projects?: Project[]
}

export function ProjectsContainer({ projects }: Props) {
    const { changeTitle } = useModel()
    const { container } = useStyles()

    return (
        <section style={{ ...container }}>
            {projects?.map((project) => {
                return <div key={project.id}>{project.title}</div>
            })}
        </section>
    )
}
