function solution(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    const alpha = /[a-z]/
    const alphaTest = (str, arr) => {
        for (let i=0; i<str.length-1; i++) {
            if (alpha.test(str[i]) && alpha.test(str[i+1])) {
                arr.push(str[i] + str[i+1])
            }
        }
        return arr
    }
    
    let arr1 = alphaTest(str1, [])
    let arr2 = alphaTest(str2, [])
    
    const SIMILAR_NUM = 65536
    
    if (!arr1.length && !arr2.length) return SIMILAR_NUM
    if (!arr1.length || !arr2.length) return 0
    
    let unionTotal = arr1.length, intersectionTotal = 0

    for (let i=0; i<arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            const idx = arr2.indexOf(arr1[i])
            arr2 = arr2.filter((v, i) => i !== idx)
            intersectionTotal += 1
        }
    }
    unionTotal += arr2.length
    return Math.floor((intersectionTotal / unionTotal) * SIMILAR_NUM)
}