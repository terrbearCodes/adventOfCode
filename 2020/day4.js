const fs = require('fs');
const input = fs.readFileSync("./input/day4.txt", 'utf8');

const test = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

const reqs = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const passports = input.split('\n\n').map( (p) => {
  return JSON.parse('{"' +
    p.replace(/\n/g,',').replace(/\ /g,',').replace(/\:/g,'":"').replace(/\,/g,'","') + 
    '"}');
});

function getValidPassPorts(passports){
  console.log(`Eval ${passports.length} passports`)
  let valids = [];
  passports.forEach((p) => {
    let isValid = true
    for(let i=0; i<reqs.length; i++){
      if(!(reqs[i] in p)){
        isValid = false;
        break;
      }
    }
    if(isValid)
      valids.push(p);
  });
  return valids;
}

function howManyExtraValid(passports){
  let count = 0;
  passports.forEach((p)=>{
    let isValid = true;
    for(let i=0; i<reqs.length;i++){
      const field = reqs[i];
      const value = p[field]
      if(!validateField(field,value)){
        isValid = false;
        break;
      }
    }
    if(isValid)
      count++
  })
  return count;
}

function validateField(field, value){
  switch(field){
    case "byr":
      const byr = parseInt(value);
      return byr >= 1920 && byr <=2002;
    case "iyr":
      const iyr = parseInt(value);
      return iyr >= 2010 && iyr <=2020;
    case "eyr":
      const eyr = parseInt(value);
      return eyr >=2020 && eyr <=2030;
    case "pid":
      return value.match(/^\d{9}$/) != null;
    case "ecl":
      const colors = ['amb','blu','brn','gry','grn','hzl','oth'];
      return colors.indexOf(value) >= 0;
    case "hcl":
      return value.match(/^#([a-f0-9]{3}){2}$/)!=null;
    case "hgt":
      const hgt = value.match(/^([0-9]+)(in|cm)$/);
      if(!hgt){
        return false;
      }else{
        const hVal = parseInt(hgt[1]);
        if(hgt[2]=='in'){
          return hVal>=59 && hVal<=76;
        }else if(hgt[2]=='cm'){
          return hVal>=150 && hVal<=193;
        }else{
          return false;
        }
      }
  }
}

console.log(`Part 1: ${getValidPassPorts(passports).length}`);

console.log(`Part 2: ${howManyExtraValid(getValidPassPorts(passports))}`);