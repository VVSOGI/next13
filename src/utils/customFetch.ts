export async function customFetch<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, {
        cache: 'no-store',
        ...options
    })
    if (response.ok) {
        const data = await response.json()
        return data
    } else {
        const error = await response.json()
        throw error
    }
}
