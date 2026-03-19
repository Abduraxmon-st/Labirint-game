import type { Direction } from "../../hooks/maze/maze-build";
import NavigationButtons from "./NavigationButtons"

const textColor = "#382b22";
const bgColor = "#fff0f0";
const hoverBgColor = "#ffe9e9";
const beforeBgColor = "#f9c4d2";
const borderColor = "#b18597";
const beforeShadow = "0_0_0_2px_#b18597,0_0.625em_0_0_#ffe3e2";
const hoverBeforeShadow = "0_0_0_2px_#b18597,0_0.5em_0_0_#ffe3e2";
const activeBeforeShadow = "0_0_0_4px_#b18597,0_0_#ffe3e2";

const buttonsClass = `
  relative inline-block
  cursor-pointer
  font-semibold uppercase
  text-[${textColor}]
  px-[2em] py-[1.25em]
  bg-[${bgColor}]
  border-2 border-[${borderColor}]
  rounded-[0.75em]
  [transform-style:preserve-3d]
  transition-all duration-150
  [transition-timing-function:cubic-bezier(0,0,0.58,1)]
  before:content-['']
  before:absolute before:inset-0
  before:bg-[${beforeBgColor}]
  before:rounded-[inherit]
  before:shadow-[${beforeShadow}]
  before:translate-y-[0.75em]
  before:[transform:translate3d(0,0.75em,-1em)]
  before:transition-all before:duration-150
  before:[transition-timing-function:cubic-bezier(0,0,0.58,1)]
  hover:bg-[${hoverBgColor}]
  hover:translate-y-[0.25em]
  hover:before:shadow-[${hoverBeforeShadow}]
  hover:before:[transform:translate3d(0,0.5em,-1em)]
  active:bg-[${hoverBgColor}]
  active:translate-y-[0.75em]
  active:before:shadow-[${activeBeforeShadow}]
  active:before:[transform:translate3d(0,0,-1em)]
`;


export const MovingButtons = ({ className, onMove }: { className?: string, onMove: (dir: Direction) => void; }) => {
  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      <NavigationButtons onClick={() => onMove("top")} className={`col-start-2 col-end-3 row-start-1 [&>svg]:rotate-90 ${buttonsClass}`} />
      <NavigationButtons onClick={() => onMove("left")} className={`col-start-1 col-end-2 row-start-2 [&>svg]:rotate-0 ${buttonsClass}`} />
      <NavigationButtons onClick={() => onMove("bottom")} className={`col-start-2 col-end-3 row-start-2 [&>svg]:rotate-270 ${buttonsClass}`} />
      <NavigationButtons onClick={() => onMove("right")} className={`col-start-3 col-end-4 row-start-2 [&>svg]:rotate-180 ${buttonsClass}`} />
    </div>
  )
}
