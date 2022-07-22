const mohoSvg = (svg, fishValues, framesNumbers) => {
    // svg- рыба свг
    // fishValues - матрица из данных для рыбы
    // values номера фреймов
    let s = []
    fishValues = fishValues.map((a, ind) => {
        return s[ind] = (framesNumbers.map((b) => {
            return a[b]
        })).join(';')
    })
    return svg(fishValues)
}



const hexInterpolation = (nowFrameNumber, fps, hex1, hex2) => {


    let hex = ''

    hex1 = hex1.slice(1)
    hex2 = hex2.slice(1)

    hex1 = hex1.match(/../mig)
    hex1 = hex1.map((c) => {
        return "0x" + c
    })

    hex2 = hex2.match(/../mig)
    hex2 = hex2.map((c) => {
        return "0x" + c
    })

    hex = hex1.map((a, ind) => {

        return (Math.round(Number(a) + ((Number(hex2[ind] - Number(a))) / fps) * nowFrameNumber)).toString(16)
    })


    return "#" + hex.join("")

}






const pathInterpolation = (nowFrameNumber, fps, arr1, arr2) => {

    return (arr1.map((a, i) => Number(a) ? Math.round((Number(a) + ((arr2[i] - Number(a)) / fps) * nowFrameNumber) * 1000) / 1000 : a)).join(' ')

}

const interpolation = (svgValuesArr, nowFrameNumber, fps, fromFrame, toFrame) => {


    if (typeof svgValuesArr !== 'array') {
        throw new TypeError('Expected a array');
    }

    // fps- количество кадров в секунду
    return svgValuesArr.map((a) => {
        //console.log(a)
        // если хекс то разабьем на матрицу

        //  проверим совпадают ли значения
        if (a[fromFrame] === a[toFrame]) {

            return a[toFrame]
        }

        // проверяем, елси хекс то делем интерполяцию по хекс
        else if (/#/.test(a[fromFrame])) {
            return hexInterpolation(nowFrameNumber, fps, a[fromFrame], a[toFrame])
        }
        else {
            let arr1 = a[fromFrame].match(/[^\s]+/mig)
            let arr2 = a[toFrame].match(/[^\s]+/mig)
            //  console.log(arr1, arr2)
            return pathInterpolation(nowFrameNumber, fps, arr1, arr2)
        }

    })

}

module.exports =mohoSvg, interpolation