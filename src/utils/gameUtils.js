
export const countNeighbors = (g, numRows, numCols, [i, k]) => {
    const neighborCoordinates = [
        [0, 1],
        [0, -1],
        [1, -1],
        [-1 ,1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0] 
    ]

    let neighbors = 0;
    neighborCoordinates.forEach(([x, y]) => {
        const newI = i + x;
        const newK = k + y;
        if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
          neighbors += g[newI][newK];
        }
      });

    return neighbors;
}