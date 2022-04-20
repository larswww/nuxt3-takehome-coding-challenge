export type Show = {
    id: number
    name: string
    officialSite?: string
    genres: string[]
    network: Network
    schedule: {
        time: string
        days: string[] | undefined[]
    },
    image?: {
        original: string,
        medium: string
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

