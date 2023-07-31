import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    console.log('GET')
    return NextResponse.json({ data: 'GET METHOD WORKING' })
}

export async function POST(request: Request) {
    const data = await request.json()
    console.log('POST', data)
    return NextResponse.json({ data: 'POST METHOD WORKING' })
}

export async function PATCH(request: Request) {
    console.log('PATCH')
    return NextResponse.json({ data: 'PATCH METHOD WORKING' })
}

export async function DELETE(request: Request) {
    console.log('DELETE')
    return NextResponse.json({ data: 'DELETE METHOD WORKING' })
}
