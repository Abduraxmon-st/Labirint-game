export type Direction = "top" | "right" | "bottom" | "left";

export type Cell = {
  key: number;
  row: number;
  column: number;
  canMove: Direction[];
  type: string
  visited: boolean;
};

const directions = {
  top: { dr: -1, dc: 0, opposite: "bottom" },
  right: { dr: 0, dc: 1, opposite: "left" },
  bottom: { dr: 1, dc: 0, opposite: "top" },
  left: { dr: 0, dc: -1, opposite: "right" }
} as const;

export function generateMaze(rows: number, cols: number) {
  const grid: Cell[][] = [];
  let key = 1;

  // 1. Grid yaratish
  for (let r = 0; r < rows; r++) {
    const row: Cell[] = [];
    for (let c = 0; c < cols; c++) {
      row.push({
        key: key++,
        row: r,
        column: c,
        canMove: [],
        type: "block",
        visited: false
      });
    }
    grid.push(row);
  }

  // 2. DFS
  function dfs(r: number, c: number) {
    const cell = grid[r][c];
    cell.visited = true;

    const dirs = Object.keys(directions).sort(() => Math.random() - 0.5) as Direction[];

    for (const dir of dirs) {
      const { dr, dc, opposite } = directions[dir];
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        !grid[nr][nc].visited
      ) {
        // devorni ochamiz
        cell.canMove.push(dir);
        grid[nr][nc].canMove.push(opposite);

        dfs(nr, nc);
      }
    }
  }

  // start
  dfs(0, 0);

  // flatten + type qo‘shish
  const result = grid.flat().map((cell, index) => ({
    ...cell,
    type:
      index === 0
        ? "start"
        : index === rows * cols - 1
          ? "finish"
          : "block"
  }));

  return result;
}