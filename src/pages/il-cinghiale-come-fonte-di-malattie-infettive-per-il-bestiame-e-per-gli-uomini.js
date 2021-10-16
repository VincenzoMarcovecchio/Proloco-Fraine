import React from "react"
import loadable from "@loadable/component"
const Cinghiali = loadable(() => import("../components/shitcontent/cinghio"))


const Runo = () => {
  return (
    <>
      <Cinghiali />
    </>
  )
}

export default Runo
