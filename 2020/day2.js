function isValid(pwd){
    const tokens = pwd.match(/([0-9]+)\-([0-9]+) ([a-z])\: ([a-z]+)/);
    const min = parseInt(tokens[1]);
    const max = parseInt(tokens[2]);
    const check = tokens[3];
    
    let count = 0;
    
    tokens[4].split("").forEach( (n) => { if(n==check){count++}})
    if( count >= min && count <=max){
        return true
    }else{
        return false
    }
}

function isValid2(pwd){
    const tokens = pwd.match(/([0-9]+)\-([0-9]+) ([a-z])\: ([a-z]+)/);
    const pos1 = parseInt(tokens[1]) - 1;
    const pos2 = parseInt(tokens[2]) - 1;
    const check = tokens[3];
    
    if( (tokens[4][pos1]==check && tokens[4][pos2]!=check) || (tokens[4][pos1]!=check && tokens[4][pos2]==check)){
        return true
    }else{
        return false
    }
}
