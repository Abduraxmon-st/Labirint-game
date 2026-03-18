import { useEffect, useState } from "react";
import type { Cell } from "../../hooks/maze-build";

export const usePlayer = (maze: Cell[] | null) => {
  const [player, setPlayer] = useState({ row: 0, col: 0 });
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!maze || isFinished) return; // 🔴 STOP

      const current = maze.find(
        (c) => c.row === player.row && c.column === player.col
      );

      if (!current) return;

      let newPos = { ...player };

      if (e.key === "ArrowUp" && current.canMove.includes("top")) {
        newPos.row -= 1;
      }
      if (e.key === "ArrowDown" && current.canMove.includes("bottom")) {
        newPos.row += 1;
      }
      if (e.key === "ArrowLeft" && current.canMove.includes("left")) {
        newPos.col -= 1;
      }
      if (e.key === "ArrowRight" && current.canMove.includes("right")) {
        newPos.col += 1;
      }

      setPlayer(newPos);

      const isFinish = maze.find(
        (c) => c.row === newPos.row && c.column === newPos.col
      )?.type === "finish";

      if (isFinish) {
        setIsFinished(true)
        setTimeout(() => alert("You win 🎉"), 100);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [maze, player]);

  return player;
};