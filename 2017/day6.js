let test1 = '0 2 7 0'.split(' ').map( v => parseInt(v) );
let input = '5	1	10	0	1	7	13	14	3	12	8	10	7	12	0	6'.split('	').map( v => parseInt(v) );
let visited=[];

function stepsToInfinity(memory){
    visited.push(test1.join(','));
    let counter = 0;
    while(true){
        let startAt = indexOfMax(memory);
        const newMem = redistribute(memory, startAt);
        counter++;
        if(visited.indexOf(newMem.join(',')) > -1){
            return {
                counter: counter,
                loopSize: visited.slice( visited.indexOf( newMem.join(',') ) ).length
            }
            break;
        }else{
            visited.push(newMem.join(','));
        }
    }
    // return counter;
}

function redistribute(memory, startAt){
    let value = memory[startAt];
    memory[startAt] = 0;
    while(value>0){
        const nextMemBlock = (++startAt) % memory.length;
        memory[nextMemBlock] = memory[nextMemBlock] + 1
        value--;
    }
    // console.log(memory)
    return memory;
}

function indexOfMax(memory){
    let maxIndex=0, maxValue = 0;
    for(var i=0; i<memory.length; i++){
        if(memory[i] > maxValue){
            maxValue = memory[i];
            maxIndex = i
        }
    }
    return maxIndex
}


console.log(`TEST:
**STEPS: ${stepsToInfinity(test1).counter} 
**LOOP SIZE: ${stepsToInfinity(test1).loopSize}`);
console.log(`INPUT:
**STEPS: ${stepsToInfinity(input).counter}
**LOOP SIZE: ${stepsToInfinity(input).loopSize}`);