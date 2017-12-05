const fs = require('fs');

let testIn = `0
3
0
1
-3`.split('\n').map( v => parseInt(v) ); //TEST input

let test2 = '2 3 2 3 -1'.split(' ').map( v => parseInt(v) );

let input = fs.readFileSync('day5_input.txt','utf8').split('\n').map( v => parseInt(v) ); //INPUT

function travelMaze(instructions, stepMod){
    let counter = 0;
    let pointer = 0;

    while(pointer >=0 && pointer < instructions.length){ //while pointer in the array
        //console.log(`AT ${pointer}`)
        const currentPointer = pointer;
        pointer += instructions[pointer]; // where to jump to next
        // console.log(`NEW ${pointer}`)
        instructions[currentPointer] = stepMod(instructions[currentPointer]); //increment instruction

        counter++;
    }
    // console.log(instructions)
    return counter
}

function part1(value){
    return value + 1
}

function part2(value){
    return (value >= 3) ? value -1 : value + 1;
}

// console.log(`Test maze: ${travelMaze(testIn, part1)}`);
// console.log(`PART 1: ${travelMaze(input, part1)}`);

console.log(`Test Part2: ${travelMaze(testIn,part2)}`);
console.log(`PART 2: ${travelMaze(input,part2)}`);