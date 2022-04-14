import stripHtmlTags from './stripHtmlTags'

describe('stripHtmlTags - remove < tag > etc from tvMaze api responses', () => {

    test('Removes starting and ending tag', () => {
        const input = '<p>Eighteen celebrities compete in a Limburg castle for 50 kilos of silver. Three of them are secretly Traitors and refuse to share that pot. The rest of the candidates are the Faithful, and they are doing everything they can to identify the Traitors in their midst before it\'s too late. Because the Traitors pit everyone against each other during the day and \'kill\' a fellow candidate every night.</p>'
        const expected = 'Eighteen celebrities compete in a Limburg castle for 50 kilos of silver. Three of them are secretly Traitors and refuse to share that pot. The rest of the candidates are the Faithful, and they are doing everything they can to identify the Traitors in their midst before it\'s too late. Because the Traitors pit everyone against each other during the day and \'kill\' a fellow candidate every night.'
        const actual = stripHtmlTags(input)
        expect(actual).toBe(expected)
    })

    test('Multiple tags in one description are removed', () => {
        const input = '<p><b>The Young and the Restless</b> revolves around the rivalries, romances, hopes and fears of the residents of the fictional Midwestern metropolis, Genoa City. The lives and loves of a wide variety of characters mingle through the generations, dominated by the Newman, Abbott, Chancellor, Baldwin and Winters families. ­ When The Young and the Restless premiered in 1973, it revolutionized the daytime drama. It continues to set the standard with strong characters, socially conscious storylines, romance and sensuality.</p>'
        const expected = 'The Young and the Restless revolves around the rivalries, romances, hopes and fears of the residents of the fictional Midwestern metropolis, Genoa City. The lives and loves of a wide variety of characters mingle through the generations, dominated by the Newman, Abbott, Chancellor, Baldwin and Winters families. ­ When The Young and the Restless premiered in 1973, it revolutionized the daytime drama. It continues to set the standard with strong characters, socially conscious storylines, romance and sensuality.'
        const actual = stripHtmlTags(input)
        expect(actual).toBe(expected)
    })

})