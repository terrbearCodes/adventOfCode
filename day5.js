const crypto = require('crypto');

const sample = 'abc';
const input = 'ojvtpuvg';

let incrementer = 1;
//PART 1
// let passCode = '';

// while(passCode.length < 8) {
//     const hash = crypto.createHash('md5').update(`${input}${incrementer}`).digest("hex");
//     if(hash.startsWith('00000')){
//         passCode += hash.charAt(5)
//     }
//     incrementer++;
// }

let passCode = ['_','_','_','_','_','_','_','_'];

while(passCode.indexOf('_') > -1) {
    const hash = crypto.createHash('md5').update(`${input}${incrementer}`).digest("hex");
    if(hash.startsWith('00000')){
        const passCodeIdx = parseInt(hash.charAt(5));
        if(passCodeIdx && passCodeIdx < 8){
            if(passCode[passCodeIdx] == '_'){
                passCode[passCodeIdx] = hash.charAt(6);
                console.log(passCode);
            }
        }
    }
    incrementer++;
}

console.log(passCode.join(''));