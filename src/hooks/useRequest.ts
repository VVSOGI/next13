'use client'
import { useCallback } from 'react'
import { useRefresh } from './useRefresh'

export function useRequest() {
    const { renewTokens } = useRefresh()

    const request = useCallback(async function <T>(
        method: 'get' | 'post' | 'patch' | 'delete',
        path: string,
        init?: RequestInit,
        body?: any
    ): Promise<T> {
        try {
            let response
            if (method === 'get' || method === 'delete') {
                response = await fetch(path, { method, ...init })
            } else {
                response = await fetch(path, { method, body: JSON.stringify(body), ...init })
            }

            if (!response.ok) throw new Error('Network response was not ok')

            const data = await response.json()
            return data
        } catch (err: any) {
            console.log(err)
            if (err.status === 401) {
                const { accessToken } = await renewTokens()
                const newInit = { ...init, headers: { ...init?.headers, Authorization: `Bearer ${accessToken}` } }
                let response
                if (method === 'get' || method === 'delete') {
                    response = await fetch(path, { method, ...newInit })
                } else {
                    response = await fetch(path, { method, body: JSON.stringify(body), ...newInit })
                }
                if (!response.ok) throw new Error('Network response was not ok')

                const data = await response.json()
                return data
            }
            throw err
        }
    },
    [])

    const get = useCallback(
        async function <T>(path: string, init?: RequestInit): Promise<T> {
            return request('get', path, init)
        },
        [request]
    )

    const post = useCallback(
        async function <T>(path: string, body: any, init?: RequestInit): Promise<T> {
            return request('post', path, init, body)
        },
        [request]
    )

    const patch = useCallback(
        async function <T>(path: string, body: any, init?: RequestInit): Promise<T> {
            return request('patch', path, init, body)
        },
        [request]
    )

    const deleteRequest = useCallback(
        async function <T>(path: string, init?: RequestInit): Promise<T> {
            return request('delete', path, init)
        },
        [request]
    )

    return { get, post, patch, deleteRequest }
}
