import React from 'react'

type keys = 'container' | 'title' | 'button'
type Styles = Record<keys, React.CSSProperties>

export default function useStyles() {
    const styles: Styles = {
        container: {
            display: 'flex',
            marginBottom: '18px'
        },
        title: {
            fontSize: 20,
            marginRight: '5px'
        },
        button: {}
    }

    return styles
}
