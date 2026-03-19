import type React from "react"
import { ArrowIcon } from "../../assets/icons"

const NavigationButtons = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type="button" {...props}>
      <ArrowIcon />
    </button>
  )
}

export default NavigationButtons