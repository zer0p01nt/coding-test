function solution(todo_list, finished) {
    let remain = []
    todo_list.map((todo, i) => {
        if (!finished[i]) {
            remain.push(todo)
        }
    })
    return remain
}