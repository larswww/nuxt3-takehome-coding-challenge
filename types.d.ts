export type Show = {
    id: number
    name: string
    officialSite?: string
    genres: string[]
    network: Network
    schedule: {
    time: string
    days: string[] | undefined[]
    }
}

export type Network = {
    id: number,
    name: string,
    officialSite?: string
    country: {
        code: string
        name: string
        timezone: string
    }
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

