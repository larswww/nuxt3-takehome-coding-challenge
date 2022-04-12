export type Show = {
    id: number
    name: string
    officialSite?: string
    genre: string[]
}

export type Episode = {
    id: number
    name: string
    season: number
    number: number
    airdate: string
    airtime: string
    image?: string
    show: Show
}

