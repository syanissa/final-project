import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = "https://ibnux.github.io/BMKG-importer/cuaca/wilayah.json"

export async function GET(){
    const res = await fetch(DATA_SOURCE_URL)

    const index: Todo[] = await res.json()

    return NextResponse.json(index)
}
