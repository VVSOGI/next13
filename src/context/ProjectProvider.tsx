import React, { createContext, useEffect, useState } from 'react'

interface ProjectContextType {
    title: string | undefined
    setTitle: React.Dispatch<React.SetStateAction<undefined>>
}

const ProjectContext = createContext<ProjectContextType | null>(null)

export function ProjectProvider({ children }: { children: React.ReactElement }) {
    const [title, setTitle] = useState()

    return <ProjectContext.Provider value={{ title, setTitle }}>{children}</ProjectContext.Provider>
}

export default ProjectContext
