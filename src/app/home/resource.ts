import { useColors } from '@/theme/useColors'

interface Styles {
    [key: string]: React.CSSProperties
}

export default function useStyles() {
    const C = useColors()

    const styles: Styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
            backgroundColor: C.background,
            color: C.elements1
        }
    }

    return styles
}
