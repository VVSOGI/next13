import 'server-only'

export async function getData() {
    const response = await fetch('http://localhost:4000', {
        method: 'GET'
    })
    const data = await response.json()
    return data
}
