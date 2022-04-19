const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export default (input: string[]|undefined[]): string => {
    if (!input || !input.length || !input[0]) return '' //TODO could mean no more future shows, or should return 'Unknown'
    if (input.length > allDays.length) throw new Error('INVALID_NUMB_DAYS')
    for (const day of input) {
        if (!allDays.includes(day)) throw new Error('INVALID_DAY')
    }
    const days = input.map(x => x += 's')
    const sortedInDaysOrderJustInCase = days.sort((a, b) => allDays.indexOf(a) - allDays.indexOf(b))
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
    //@ts-ignore https://github.com/microsoft/TypeScript/issues/46907
    return new Intl.ListFormat('en', { style: 'long', type: 'conjunction' }).format(sortedInDaysOrderJustInCase)


}