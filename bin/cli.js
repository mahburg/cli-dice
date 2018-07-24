#! /usr/bin/env node

const [,, ...args] = process.argv

let n = args[0] || 1

cli(n)
//----------Function Declarations-----------
function cli (n){
    let tot = 0
    for (let i = 0; i < n; i++){
        let die = roll()
        tot += die.num
        console.log(die.string)
    }
    console.log(`Total: ${tot}`)
}

function roll() {
    let n = (~~(Math.random() * 6) + 1)
    return {string: ` ---------
| ${n>1?'*':' '}     ${n>3?'*':' '} |
| ${n>5?'*':' '}  ${n%2?'*':' '}  ${n>5?'*':' '} |
| ${n>3?'*':' '}     ${n>1?'*':' '} |
 ---------`, num: n}
}
//----------Exports-----------
module.exports = {
    roll: roll,
    rollN: cli
}