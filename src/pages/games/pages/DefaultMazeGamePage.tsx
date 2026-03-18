import MazeDraw from "../../../components/maze/MazeDraw"
const blocks = 10
const DefaultMazeGamePage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-dvh">
      <MazeDraw row={blocks} column={blocks} />
    </div>
  )
}

export default DefaultMazeGamePage