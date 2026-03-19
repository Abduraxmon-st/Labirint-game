import { useEffect, useState } from "react";
import { generateMaze, type Cell, type Direction } from "../../hooks/maze/maze-build";
import { usePlayer } from "../../hooks/maze/maze-move";
import { MovingButtons } from "../button/MovingButtons";

const MazeDraw = ({ row, column }: { row: number, column: number }) => {
  const blockSize = 25
  const storedPath = localStorage.getItem("player-path");
  const initialPath = storedPath ? JSON.parse(storedPath) : [{ row: 0, col: 0 }];
  const [maze, setMaze] = useState<Cell[] | null>(null);
  const { player, move } = usePlayer(maze)
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
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${column}, 1fr)`,
          gridTemplateRows: `repeat(${row}, 1fr)`
        }}

        className="w-max h-max border border-gray-600 relative">
        {
          maze?.map((block) => {
            const hasMove = (dir: Direction) => block.canMove.includes(dir);
            const borders = `
            ${!hasMove("top") ? "border-t" : ""}
            ${!hasMove("right") ? "border-r" : ""}
            ${!hasMove("bottom") ? "border-b" : ""}
            ${!hasMove("left") ? "border-l" : ""}
          `;
            const moved = initialPath.find((b: { row: number, col: number }) => b.row === block.row && b.col === block.column)
            return (
              <div
                style={{
                  width: blockSize,
                  height: blockSize,
                }}
                className={`${borders} ${moved ? "bg-red-100" : "bg-transparent"} border-gray-600 
            ${block.type === "start" ? "bg-blue-500!" :
                    block.type === "finish" ? "bg-green-500!" : ""
                  }
             transition-colors duration-300`}
                key={block.key} />
            )
          })
        }
        <div
          style={{
            width: blockSize,
            height: blockSize,
            left: player.col * blockSize,
            top: player.row * blockSize,
          }}
          className={`absolute flex items-center justify-center transition-all duration-200`}>
          <div
            style={{
              width: blockSize * 0.7, // 10% kichikroq
              height: blockSize * 0.7,
            }}
            className="rounded-full bg-red-500" />
        </div>
      </div>
      <MovingButtons className="absolute top-1/2 -translate-y-1/2 right-15" onMove={move} />
    </div>
  )
}

export default MazeDraw