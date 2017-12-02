const fs = require('fs');
const input = fs.readFileSync('day4-input.txt','utf8');

//for test
// const input = `aaaaa-bbb-z-y-x-123[abxyz]
// a-b-c-d-e-f-g-h-987[abcde]
// not-a-real-room-404[oarel]
// totally-real-room-200[decoy]`

//part 2 test
// const input = 'qzmt-zixmtkozy-ivhz-343[zimth]'
const rooms = input.split('\n');

const shift = 'abcdefghijklmnopqrstuvwxyz';

let validSectors = [];

rooms.forEach( (roomId) => {
    const checksum = roomId.substr(roomId.indexOf('[')+1, 5);
    const sectorId = roomId.substring(roomId.lastIndexOf('-') + 1, roomId.indexOf('['));
    const roomName = roomId.substr(0, roomId.lastIndexOf('-')).replace(new RegExp('-','g'),'');

    let charMap = {}
    for(let i=0; i<roomName.length; i++){
        const thisChar = roomName[i];
        charMap[thisChar] = (charMap[thisChar]) ? charMap[thisChar] + 1 : 1;
    }
    let sortable = []
    for(var c in charMap){
        sortable.push([c, charMap[c]])
    };

    sortable.sort( (a,b) => {
        const countDiff = b[1] - a[1]
        if(countDiff !=0){
            return countDiff
        }else{
            return (a[0] > b[0]) ? 1 : -1;
        }
    })

    let check = '';
    for(var i=0; i<5; i++){ //first 5 only
        check += sortable[i][0];
    }

    if(check===checksum){
        const sector = parseInt(sectorId);
        const encrypted = roomId.substr(0, roomId.lastIndexOf('-'));
        validSectors.push(sector);
        const numToMove = sector % 26;
        let decrypted = ''
        for(var i = 0; i<encrypted.length; i++){
            const char = encrypted.charAt(i);
            const charIndex = shift.indexOf(char);
            if(charIndex > -1){
                const newIndex = (charIndex + numToMove) % 26
                decrypted += shift.charAt(newIndex);
            }else{
                decrypted += char;
            }
        }
        console.log(`${decrypted}-${sectorId}`);
    }
});

const sum = validSectors.reduce((a,b) => (a + b), 0);
console.log(sum);