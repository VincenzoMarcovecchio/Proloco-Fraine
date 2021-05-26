import React, { Component } from "react"
import { Bar, Pie } from "react-chartjs-2"

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: props.chartData,
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "Abruzzo",
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Totale patrimonio in Euro di" + this.props.location,
              fontSize: 25,
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
        {this.props.pie && (
          <Pie
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: "Totale patrimonio in Euro di" + this.props.location,
                fontSize: 25,
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition,
              },
            }}
          />
        )}
      </div>
    )
  }
}

export default Chart
