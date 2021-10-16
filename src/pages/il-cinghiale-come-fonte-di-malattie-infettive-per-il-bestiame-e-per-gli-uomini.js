import React from "react"
import loadable from "@loadable/component"
const Cin = loadable(() => import("../components/shitcontent/cinghio"))


const Runo = () => {
  return (
    <>
      <Cin />
    </>
  )
}

export default Runo
