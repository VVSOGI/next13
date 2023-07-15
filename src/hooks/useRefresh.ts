'use client'

export interface Tokens {
    accessToken: string
    refreshToken: string
}

export function useRefresh() {
    const oldRefreshToken = window.localStorage.getItem('refreshToken')

    const renewTokens = async () => {
        try {
            const response = await fetch(`/api/auth/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refreshToken: oldRefreshToken
                })
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }

            const data = await response.json()
            const { accessToken, refreshToken } = data

            localStorage.setItem('accessToken', accessToken)
            localStorage.setItem('refreshToken', refreshToken)

            return { accessToken, refreshToken }
        } catch (err) {
            throw err
        }
    }

    return { renewTokens }
}
