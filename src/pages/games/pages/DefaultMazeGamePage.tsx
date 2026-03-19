import MazeDraw from "../../../components/maze/MazeDraw"
const blocks = 30
const DefaultMazeGamePage = () => {
  return (
    <div className="w-screen h-dvh">
      <MazeDraw row={blocks} column={blocks} />
    </div>
  )
}

export default DefaultMazeGamePage