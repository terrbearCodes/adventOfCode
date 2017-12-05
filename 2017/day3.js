
let visited = [ "0,0" ]; //start at 1st entry already in 
let part2 = { "0,0": 1 };

const turns = [
    [1,0], //RIGHT
    [0,1], //UP
    [-1, 0], //LEFT
    [0, -1] //DOWN
]

const inputVal = 277678;

function pathFromSquare(num){
    let shouldTurn = true;
    let currentTurn = -1;
    while(visited.length < num){
        if(shouldTurn){
            currentTurn = (currentTurn + 1) % turns.length
        }
        
        // visited.push(calcPlacement( turns[currentTurn] ));
        let position = calcPlacement( turns[currentTurn] );
        visited.push( position );
        console.log(position);
        part2[position] = calcSquareValue(position);
        console.log(`${position} : ${part2[position]}`);
        if(part2[position] > num){
            return part2[position];
        }

        shouldTurn = canTurn(turns[(currentTurn + 1) % turns.length])
        
    }
    return calcDistance(visited[visited.length-1])
}

function calcSquareValue(position){
    const posArray = position.split(',').map(v => parseInt(v));
    let adjacents = [
        [posArray[0] +1, posArray[1]],  // to the right
        [posArray[0] +1, posArray[1] +1], // rigth upper diag
        [posArray[0], posArray[1] + 1], // up
        [posArray[0] -1, posArray[1] + 1], // left upper diag
        [posArray[0] -1, posArray[1]],  // left
        [posArray[0] -1, posArray[1] -1], // left lower diag
        [posArray[0] , posArray[1] -1], // down
        [posArray[0] +1, posArray[1] -1], // right lower diag
    ]
    let sum = 0
    adjacents.forEach( v => {
        if(part2[v.join(',')]){
            sum += part2[v.join(',')];
        }
    })
    return sum;
}

function calcDistance(position){
    const asArray = position.split(',').map(v => parseInt(v));
    return asArray.reduce( (a,b) => Math.abs(a) + Math.abs(b), 0);
}

function calcPlacement(move){
    let lastMove = visited[visited.length-1].split(',').map( v => parseInt(v));
    let potentialNext = [ [lastMove[0] + move[0], lastMove[1] + move[1]] ].join(',')
    return potentialNext
}

function canTurn(move){
    let lastMove = visited[visited.length-1].split(',').map( v => parseInt(v));
    let potentialNext = [ [lastMove[0] + move[0], lastMove[1] + move[1]] ].join(',')
    return visited.indexOf( potentialNext ) < 0;
}

console.log(`PATH FOR 277678: ${pathFromSquare(277678)}`);
// console.log(pathFromSquare(100))