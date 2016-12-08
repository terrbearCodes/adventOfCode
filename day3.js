var fs = require('fs');

var input = fs.readFileSync('day3-data.txt', 'utf8');
var lines = input.split('\n');

var triples = []

var validTri = []
var impossibleTri = []

console.log(lines.length % 3)

//PART 1
// for(var i in lines){
//     triples.push( lines[i].split('  '))
// }

//PART2
var idx = 0
while(idx < lines.length){
    var sides1 = lines[idx].split('  ');
    var sides2 = lines[idx+1].split('  ');
    var sides3 = lines[idx+2].split('  ');

    triples.push([sides1[0], sides2[0], sides3[0]])
    triples.push([sides1[1], sides2[1], sides3[1]])
    triples.push([sides1[2], sides2[2], sides3[2]])

    idx += 3;
}

for(var i in triples){
    var sides = triples[i];
    var isTri = evalTriangle(parseInt(sides[0]), parseInt(sides[1]),parseInt(sides[2]));
    if(isTri){
        validTri.push(sides)
    }else{
        impossibleTri.push(sides);
    }
}

console.log(validTri.length);

function evalTriangle(side1, side2, side3) {
    if(side3 >= side1 + side2){
        return false;
    }
    if(side2 >= side1 + side3){
        return false;
    }
    if(side1 >= side2 + side3){
        return false
    }

    return true;
}