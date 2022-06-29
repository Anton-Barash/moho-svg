export const svgFish = (svg, fishValues, values) => {
    let s = []
    fishValues = fishValues.map((a, ind) => {
        return s[ind] = (values.map((b) => {
            return a[b]
        })).join(';')
    })
    return svg(fishValues)
}