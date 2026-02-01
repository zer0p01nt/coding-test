function solution(id_pw, db) {
    let arr = []
    db.map((l) => {
        if (l[0] === id_pw[0]) {
            if (l[1] === id_pw[1]) {
                arr.push("login")
            } else {
                arr.push("wrong")
            }
        } else {
            arr.push("fail")
        }
    })
    return arr.includes("login") ? "login" : arr.includes("wrong") ? "wrong pw" : "fail"
}