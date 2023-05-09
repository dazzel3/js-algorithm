function solution(s, skip, index) {
    skip = skip.split('').map(v => v.charCodeAt(0));
    s = s.split('').map(v => {
        let code = v.charCodeAt(0);
        for (let i = 0; i < index; i++) {
            code += 1;
            while (skip.includes(code)) code += 1;
            
            if (code === 'z'.charCodeAt(0) + 1) code = 'a'.charCodeAt(0);
            while (skip.includes(code)) code += 1;
        }
        return code;
    });
    return s.map(v => String.fromCharCode(v)).join('');
}