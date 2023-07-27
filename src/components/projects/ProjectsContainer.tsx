import React from 'react'
import useStyles from './resource'
import { useRouter } from 'next/navigation'

interface Props {
    projects?: Project[]
}

export function ProjectsContainer({ projects }: Props) {
    const { container } = useStyles()
    const { push } = useRouter()

    return (
        <section style={{ ...container }}>
            {projects?.map((project) => {
                return (
                    <div key={project.id}>
                        <span>{project.title}</span>
                        <button onClick={() => push(`/projects/${project.id}`)}>click</button>
                    </div>
                )
            })}
        </section>
    )
}
