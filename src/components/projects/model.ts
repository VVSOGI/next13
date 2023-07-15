import React, { useEffect, useState } from 'react'

export default function useModel() {
    const [homeTitle, setHomeTitle] = useState<string>()

    const changeTitle = (text: string) => {
        setHomeTitle(text)
    }

    return { homeTitle, changeTitle }
}
