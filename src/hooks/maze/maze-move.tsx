import { useEffect, useState, useCallback } from "react";
import type { Cell, Direction } from "./maze-build";

export const usePlayer = (maze: Cell[] | null) => {
  // LocalStorage'dan boshlash
  const storedPath = localStorage.getItem("player-path");
  const initialPath = storedPath ? JSON.parse(storedPath) : [{ row: 0, col: 0 }];

  const [path, setPath] = useState<{ row: number; col: number }[]>(initialPath);
  const [player, setPlayer] = useState(path[path.length - 1]);
  const [isFinished, setIsFinished] = useState(false);

  const move = useCallback(
    (dir: Direction) => {
      if (!maze || isFinished) return;

      const current = maze.find(
        (c) => c.row === player.row && c.column === player.col
      );
      if (!current) return;

      let newPos = { ...player };

      if (dir === "top" && current.canMove.includes("top")) newPos.row -= 1;
      if (dir === "bottom" && current.canMove.includes("bottom")) newPos.row += 1;
      if (dir === "left" && current.canMove.includes("left")) newPos.col -= 1;
      if (dir === "right" && current.canMove.includes("right")) newPos.col += 1;

      setPlayer(newPos);

      // Path array-ga qo'shish
      setPath((prev) => {
        // Agar newPos allaqachon arrayda bo'lsa → remove undan keyin qolganlar
        const index = prev.findIndex(p => p.row === newPos.row && p.col === newPos.col);

        let newPath;
        if (index !== -1) {
          // oldingi pozitsiyadan qaytgan → arrayni filter qil
          newPath = prev.slice(0, index + 1);
        } else {
          // yangi pozitsiya → qo'sh
          newPath = [...prev, newPos];
        }

        localStorage.setItem("player-path", JSON.stringify(newPath));
        return newPath;
      });

      // Finish tekshirish
      const isFinish = maze.find(
        (c) => c.row === newPos.row && c.column === newPos.col
      )?.type === "finish";

      if (isFinish) {
        setIsFinished(true);
        setTimeout(() => alert("You win 🎉"), 300);
      }
    },
    [maze, player, isFinished]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") move("top");
      if (e.key === "ArrowDown") move("bottom");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowRight") move("right");
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [move]);

  return { player, move, path, isFinished };
};