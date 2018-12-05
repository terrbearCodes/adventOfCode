const fs = require('fs')
const input = fs.readFileSync("./day4_input.txt", 'utf8');

dateSort = function(a,b){
    return new Date(a.substring(1,17)) - new Date(b.substring(1,17))
}

const sample = `[1518-11-01 00:00] Guard #10 begins shift
[1518-11-01 00:05] falls asleep
[1518-11-01 00:25] wakes up
[1518-11-01 00:30] falls asleep
[1518-11-01 00:55] wakes up
[1518-11-01 23:58] Guard #99 begins shift
[1518-11-02 00:40] falls asleep
[1518-11-02 00:50] wakes up
[1518-11-03 00:05] Guard #10 begins shift
[1518-11-03 00:24] falls asleep
[1518-11-03 00:29] wakes up
[1518-11-04 00:02] Guard #99 begins shift
[1518-11-04 00:36] falls asleep
[1518-11-04 00:46] wakes up
[1518-11-05 00:03] Guard #99 begins shift
[1518-11-05 00:45] falls asleep
[1518-11-05 00:55] wakes up`

function part1(input){
    const logs = input.split('\n').sort(dateSort);

    let guards = {}
    let lastGuard = null
    let lastSleep = null
    for(var i in logs){
        const log = logs[i]
        const timestamp = new Date(log.substring(1,17))
        if(log.indexOf('begins')>0){
            lastGuard = log.split(' ')[3]
            if(!guards[lastGuard]){
                guards[lastGuard] = []
            }
        }
        if(log.indexOf('falls')>0){
            lastSleep = timestamp.getMinutes()
            guards[lastGuard].push(lastSleep)
        }
        if(log.indexOf('wakes')>0){
            wakeup = timestamp.getMinutes()
            for(var t=lastSleep+1; t<wakeup;t++){
                guards[lastGuard].push(t)
            }
        }
        
    }

    maxSleep = {guard: 0, time: []}
    for(guard in guards){
        if(guards[guard].length > maxSleep.time.length){
            maxSleep.guard = guard
            maxSleep.time = guards[guard]
            let freqs = {}
            for(var i in maxSleep.time){
                freqs[maxSleep.time[i]] = (freqs[maxSleep.time[i]]) ? freqs[maxSleep.time[i]] + 1 : 1
            }
            maxSleep.freqs = freqs
        }
    }


    return maxSleep
}

function part2(input){
    const logs = input.split('\n').sort(dateSort);

    let guards = {}
    let lastGuard = null
    let lastSleep = null
    for(var i in logs){
        const log = logs[i]
        const timestamp = new Date(log.substring(1,17))
        if(log.indexOf('begins')>0){
            lastGuard = log.split(' ')[3]
            if(!guards[lastGuard]){
                guards[lastGuard] = {}
                guards[lastGuard].times = []
            }
        }
        if(log.indexOf('falls')>0){
            lastSleep = timestamp.getMinutes()
            guards[lastGuard].times.push(lastSleep)
        }
        if(log.indexOf('wakes')>0){
            wakeup = timestamp.getMinutes()
            for(var t=lastSleep+1; t<wakeup;t++){
                guards[lastGuard].times.push(t)
            }
        }
        
    }

    maxSleep = {guard: 0, minuteCount: 0, minute: ''}
    for(guard in guards){
        let freqs = {}
        for(var i in guards[guard].times){
            freqs[guards[guard].times[i]] = (freqs[guards[guard].times[i]]) ? freqs[guards[guard].times[i]] + 1 : 1
        }
        guards[guard].freqs = freqs
    }

    for(var guard in guards){
        for(var minute in guards[guard].freqs){
            if(guards[guard].freqs[minute] > maxSleep.minuteCount){
                maxSleep.minuteCount = guards[guard].freqs[minute]
                maxSleep.minute = minute
                maxSleep.guard = guard
            }
        }
    }


    return maxSleep
}

// console.log(part1(input))
strat2 = part2(input)
console.log(strat2)
console.log(parseInt(strat2.guard.substring(1)) * parseInt(strat2.minute))
