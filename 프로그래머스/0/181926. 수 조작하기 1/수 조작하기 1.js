function solution(n, control) {
    const controlAry = control.split("")
    let N = n
    controlAry.map((c) => {
        switch (c) {
            case "w":
                N += 1
                break;
            case "s":
                N -= 1
                break;
            case "d":
                N += 10
                break;
            case "a":
                N -= 10
                break;
        }
    })
    return N
}