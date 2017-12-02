def input = 'R4, R3, L3, L2, L1, R1, L1, R2, R3, L5, L5, R4, L4, R2, R4, L3, R3, L3, R3, R4, R2, L1, R2, L3, L2, L1, R3, R5, L1, L4, R2, L4, R3, R1, R2, L5, R2, L189, R5, L5, R52, R3, L1, R4, R5, R1, R4, L1, L3, R2, L2, L3, R4, R3, L2, L5, R4, R5, L2, R2, L1, L3, R3, L4, R4, R5, L1, L1, R3, L5, L2, R76, R2, R2, L1, L3, R189, L3, L4, L1, L3, R5, R4, L1, R1, L1, L1, R2, L4, R2, L5, L5, L5, R2, L4, L5, R4, R4, R5, L5, R3, L1, L3, L1, L1, L3, L4, R5, L3, R5, R3, R3, L5, L5, R3, R4, L3, R3, R1, R3, R2, R2, L1, R1, L3, L3, L3, L1, R2, L1, R4, R4, L1, L1, R3, R3, R4, R1, L5, L2, R2, R3, R2, L3, R4, L5, R1, R4, R5, R4, L4, R1, L3, R1, R3, L2, L3, R1, L2, R3, L3, L1, L3, R4, L4, L5, R3, R5, R4, R1, L2, R3, R5, L5, L4, L1, L1'

// def input = 'R8, R4, R4, R8'

def coords = [x:0, y: 0];

def currentDir = "n"; //start out facing north
def directionMultiplier = [
    n: 1,
    e: 1,
    s: -1,
    w: -1
]
def visited = []
visited << [coords.x, coords.y]
input.split(', ').eachWithIndex{ val, idx ->
    def moveAmount = Integer.parseInt(val.substring(1));
    currentDir = turn(currentDir, val);
    def coordToUpdate = (idx % 2 ==0) ? "x" : "y";
    (1..moveAmount).each{
        coords[coordToUpdate] = coords[coordToUpdate] + directionMultiplier[currentDir]
        def dropPoint = [coords.x, coords.y]
        if(visited.contains(dropPoint)){
            println dropPoint
        }

        visited << dropPoint
    }
}

//get new direction
def turn (currentDir, cmd){
    def newDirectionMap = [
        L: [
            n: "w",
            e: "n",
            s: "e",
            w: "s"
        ],
        R: [
            n: "e",
            e: "s",
            s: "w",
            w: "n"
        ]
    ]
    def turn = cmd.charAt(0)

    return newDirectionMap."${turn}"."${currentDir}"
}