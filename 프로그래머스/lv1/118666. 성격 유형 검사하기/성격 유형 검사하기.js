function solution(survey, choices) {
    const score = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3}
    let states = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0}
    let basic = 'RCJA'
    for (let i=0; i<survey.length; i++) {
        choices[i] > 4 ? states[survey[i][1]] += score[choices[i]] : states[survey[i][0]] += score[choices[i]]
    }
    if (states.T > states.R) basic = basic.replace('R', 'T')
    if (states.F > states.C) basic = basic.replace('C', 'F')
    if (states.M > states.J) basic = basic.replace('J', 'M')
    if (states.N > states.A) basic = basic.replace('A', 'N')
    
    return basic
}