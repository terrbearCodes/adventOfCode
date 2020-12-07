const fs = require('fs');
const input = fs.readFileSync("./input/day6.txt", 'utf8');

const test=`abc

a
b
c

ab
ac

a
a
a
a

b`;

//part 1
//yeses per group summed
function totalYeses(groups){
  let yesSum = 0;
  groups.forEach((group)=>{
    let groupYes = new Set();
    let persons = group.split('\n');
    persons.forEach((p)=>{
      p.split('').forEach((a)=>{groupYes.add(a)})
    })
    yesSum += groupYes.size
  })
  return yesSum;
}

//part 2
//yes samesies per group saved
function samesies(groups){
  let yesSum = 0;
  groups.forEach((group)=>{
    // console.log('New Group')
    let yesMap = {};
    const persons = group.split('\n');
    // console.log('Group Size', persons.length)
    persons.forEach((p)=>{
      // console.log('Checking Person: ', p)
      p.split('').forEach((a)=>{
        if(yesMap[a]){ yesMap[a].push(a) }
        else{ yesMap[a] = [a] }
      })
    });
    // console.log(yesMap)
    for(a in yesMap){
      if(yesMap[a].length == persons.length){
        yesSum++
      }
    }
  });
  return yesSum;
}

// console.log(`Test: ${totalYeses(test.split('\n\n'))}`);
console.log(`Part I: ${totalYeses(input.split('\n\n'))}`);

// console.log(`Test2: ${samesies(test.split("\n\n"))}`);
console.log('Part II:', samesies(input.split('\n\n')));