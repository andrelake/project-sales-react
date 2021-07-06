export const round = (value: number, precision: number) => {
    let multi = Math.pow(10, precision || 0)
    return Math.round(value * multi) / multi
}
