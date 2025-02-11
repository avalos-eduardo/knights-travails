export function knightMoves(start, end){
    const moves = [
        [2,1], [2,-1], [-2,1], [-2,-1],
        [1,2], [1,-2], [-1,2], [-1,-2]
    ];

    function isValid(x,y){
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    const queue = [[start, [start]]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0){
        const [current, path]  = queue.shift();
        const [x, y] = current;

        if (current[0] === end[0] && current[1] === end[1]){
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            return path;
        }

        for (const [dx, dy] of moves){
            const newX = x + dx;
            const newY = y + dy;
            const newPosition = [newX, newY];

            if (isValid(newX, newY) && !visited.has(newPosition.toString())){
                visited.add(newPosition.toString());
                queue.push([newPosition, [...path, newPosition]]);
            }
        }
    }

    return [];
}