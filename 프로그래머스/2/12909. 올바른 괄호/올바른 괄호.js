function solution(s){
    let open = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
            continue;
        }
        if (!open) return false;
        open--;
    }
    return open ? false : true;
}