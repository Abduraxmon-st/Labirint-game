import { useEffect, useState } from "react";
import { generateMaze, type Cell, type Direction } from "../../hooks/maze-build";

const MazeDraw = ({ row, column }: { row: number, column: number }) => {
  const [maze, setMaze] = useState<Cell[] | null>(null);
  useEffect(() => {
    const stagedMaze = localStorage.getItem("maze-data")
    if (stagedMaze) {
      setMaze(JSON.parse(stagedMaze))
    } else {
      const mazedata = generateMaze(row, column)
      if (mazedata) {
        localStorage.setItem("maze-data", JSON.stringify(mazedata))
        setMaze(mazedata)
      }
    }
  }, [])
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${column}, 1fr)`,
        gridTemplateRows: `repeat(${row}, 1fr)`
      }}

      className={`w-max h-max border`}>
      {
        maze?.map((block) => {
          const hasMove = (dir: Direction) => block.canMove.includes(dir);
          const borders = `
            ${!hasMove("top") ? "border-t" : ""}
            ${!hasMove("right") ? "border-r" : ""}
            ${!hasMove("bottom") ? "border-b" : ""}
            ${!hasMove("left") ? "border-l" : ""}
          `;

          return (
            <div className={`${borders} size-20 
            ${block.type === "start" ? "bg-blue-500" :
                block.type === "finish" ? "bg-green-500" : ""
              }
            `}
              key={block.key}>
            </div>
          )
        })
      }
    </div>
  )
}

export default MazeDraw