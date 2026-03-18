import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GamesPage from "./pages/games/GamesPage";
import DefaultMazeGamePage from "./pages/games/pages/DefaultMazeGamePage";
import CircleMazeGamePage from "./pages/games/pages/CircleMazeGamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    index: true,
  },
  {
    path: "/games",
    element: <GamesPage />,
  },
  {
    path: "/games/maze",
    element: <DefaultMazeGamePage />,
  },
  {
    path: "/games/circle-maze",
    element: <CircleMazeGamePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;