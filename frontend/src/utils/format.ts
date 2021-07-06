import { format } from 'date-fns'

export const round = (value: number, precision: number) => {
    let multi = Math.pow(10, precision || 0)
    return Math.round(value * multi) / multi
}

export const formatDate = (date: string, pattern: string) => {
    const dt = new Date(date)
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000)
    return format(dtDateOnly, pattern)
}
