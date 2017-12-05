
let visited = [ "0,0" ]; //start at 1st entry already in 

const turns = [
    [1,0], //RIGHT
    [0,1], //UP
    [-1, 0], //LEFT
    [0, -1] //DOWN
]


function pathFromSquare(num){
    let shouldTurn = true;
    let currentTurn = -1;
    while(visited.length < num){
        if(shouldTurn){
            currentTurn = (currentTurn + 1) % turns.length
        }
        
        visited.push(calcPlacement( turns[currentTurn] ));

        shouldTurn = canTurn(turns[(currentTurn + 1) % turns.length])
        
    }
    return calcDistance(visited[visited.length-1])
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
// console.log(pathFromSquare(1024))