import React, { useRef, useEffect, useState } from "react"
import { select } from "d3"
import newData from "../data/nuovo.json"

console.log(newData)

function App() {
  const [data, setData] = useState(newData)
  const svgRef = useRef()
  // useEffect(() => {
  //   const svg = select(svgRef.current)
  //   svg
  //     .selectAll("circle")
  //     .data(data.NIncidenti)
  //     .join("circle")
  //     .attr("r", value => value)
  //     .attr("cx", value => value * 2)
  //     .attr("cy", value => value * 2)
  //     .attr("stroke", "red")
  // }, [data])
  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map(value => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter(value => value < 35))}>
        Filter data
      </button>
    </React.Fragment>
  )
}

export default App
