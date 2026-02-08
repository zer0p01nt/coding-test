function solution(sizes) {
    const filterSizes = sizes.map(size => {
        return size.sort((a,b) => b - a)
    })
    console.log(filterSizes)

    const maxWidth = filterSizes.map(size => {
        return size[0]
    }).sort((a,b) => b - a)[0]

    const maxHeight = filterSizes.map(size => {
        return size[1]
    }).sort((a,b) => b - a)[0]

    return maxWidth * maxHeight
}