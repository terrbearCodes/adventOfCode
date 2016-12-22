const fs = require('fs');
const input = fs.readFileSync('day6-input.txt','utf8');

//sample input
// const input = `eedadn
// drvtee
// eandsr
// raavrd
// atevrs
// tsrnev
// sdttsa
// rasrtv
// nssdts
// ntnada
// svetve
// tesnvt
// vntsnd
// vrdear
// dvrsen
// enarar`;


const rows = input.split('\n');

let columnMap = {}

rows.forEach( (line) => {
    for(let i=0; i<line.length; i++){
        let colSoFar  = columnMap[i] || {};
        const currChar = line.charAt(i);
        // console.log(i, currChar, colSoFar)

        colSoFar[currChar] = (colSoFar[currChar]) ? colSoFar[currChar] + 1 : 1;
        columnMap[i] = colSoFar;
    }
})

console.log(columnMap)

const message = Object.keys(columnMap).reduce((previous, column) => {
    const options = columnMap[column];
    const nextLetter = Object.keys(options).reduce((previous, letter) => {
        return (options[letter] < previous.count) ? {char: letter, count: options[letter]} : previous;
    }, {char: '', count: 100000000});
    return previous + nextLetter.char;
}, '')

console.log(message);