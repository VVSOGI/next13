import { useColors } from '@/theme/useColors'

type keys = 'container' | 'contents' | 'sidebar' | 'main'
type Styles = Record<keys, React.CSSProperties>

export default function useStyles() {
    const C = useColors()

    const styles: Styles = {
        container: {
            height: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: C.background,
            color: C.elements1
        },
        contents: {
            position: 'relative',
            display: 'flex',
            flex: 1
        },
        sidebar: { width: '250px', flex: 'none' },
        main: { flex: 1, padding: '2rem' }
    }

    return styles
}
