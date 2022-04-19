import getPrettyDayString from './getPrettyDayString'

describe('getPrettyDayString', () => {

    test('pluralizes single day', () => {
        const input = ['Sunday']
        const expected = 'Sundays'
        const actual = getPrettyDayString(input)
        expect(actual).toBe(expected)
    })

    test('ampersands and plural two days', () => {
        const input = ['Wednesday', 'Thursday']
        const expected = 'Wednesdays and Thursdays'
        const actual = getPrettyDayString(input)
        expect(actual).toBe(expected)
    })

    test('adds commas and ampersand for 2+ days', () => {
        const input = ['Monday', 'Wednesday', 'Sunday']
        const expected = 'Mondays, Wednesdays, and Sundays'
        const actual = getPrettyDayString(input)
        expect(actual).toBe(expected)
    })

    test('throws error on non existing day', () => {
        const input = ['Sndayg']
        expect(() => {
            getPrettyDayString(input)
        }).toThrow('INVALID_DAY')
    })

    test('throws error if more than 7 days', () => {
        const input = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']
        expect(() => {
            getPrettyDayString(input)
        }).toThrow('INVALID_NUMB_DAYS')
    })

    test('always prints days in correct order', () => {
        const input = ['Tuesday', 'Monday']
        const expected = 'Tuesdays and Mondays'
        const actual = getPrettyDayString(input)
        expect(actual).toBe(expected)
    })

})