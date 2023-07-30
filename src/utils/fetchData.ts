export async function fetchData<T>(url: string, init?: RequestInit): Promise<T> {
    try {
        const response = await fetch(url, init)

        if (!response.ok) {
            const cause = JSON.stringify(await response.json())
            throw new Error(cause)
        }

        const text = await response.text() // 응답을 텍스트로 받아옵니다.

        if (!text) {
            return null as T
        }

        return JSON.parse(text) as T
    } catch (error: any) {
        if (error.message === 'fetch failed') {
            const networkError = JSON.stringify({
                error: 'NetworkError',
                message: 'The server could not be reached. Please check your network connection.',
                statusCode: 500
            })
            throw new Error(networkError)
        }

        throw new Error(error.message)
    }
}
