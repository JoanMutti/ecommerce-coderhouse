import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
    const [width, setWidth] = useState(window.outerWidth)

    useLayoutEffect(() => {
        const updateWidth = () => setWidth(window.outerWidth)
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth)
    }, [])

    return width
}
