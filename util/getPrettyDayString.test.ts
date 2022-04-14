import getPrettyDayString from './getPrettyDayString.ts'

describe('getPrettyDayString', () => {

    test('pluralizes single day', () => {
        const input = ['Sunday']
        const expected = 'Sundays'
        const actual = getPrettyDayString(input)
        expect(expected).toBe(actual)
    })

    test('ampersands and plural two days', () => {
        const input = ['Wednesday', 'Thursday']
        const expected = 'Wednesdays & Thursdays'
        const actual = getPrettyDayString(input)
        expect(expected).toBe(actual)
    })

    test('adds commas and ampersand for 2+ days', () => {
        const input = ['Monday, Wednesday, Sunday']
        const expected = 'Mondays, Wednesdays & Sundays'
        const actual = getPrettyDayString(input)
        expect(expected).toBe(actual)
    })

    test('throws error on non existing day', () => {
        const input = ['Sndayg']
        const expected = 'Sundays'
        const actual = getPrettyDayString(input)
        expect(expected).toBe(actual)
    })

    test('throws error if more than 7 days', () => {
        const input = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday']
        expect(() => {
            getPrettyDayString(input)
        }).toThrow('INVALID_NUMB_DAYS')
    })

    test('always prints days in correct order', () => {
        const input = ['Tuesday', 'Monday']
        const expected = 'Tuesdays & Mondays'
        const actual = getPrettyDayString(input)
        expect(actual).toBe(expected)
    })

})