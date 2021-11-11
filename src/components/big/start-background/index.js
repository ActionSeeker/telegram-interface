import React, { Fragment } from 'react'
import './main.scss'

export default class StartBackground extends React.Component {
  state = { drawn: 0, radius: 10 }

  constructor(props) {
    super(props)
    this.canvas = null
    this.setCanvasRef = (element) => (this.canvas = element)
  }

  componentDidMount() {
    if (this.canvas) {
      this.styleCanvas()
      this.animateCanvas()
    }
  }

  styleCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.canvas.style.position = 'absolute'
    this.canvas.style.top = '0'
    this.canvas.style.left = '0'
  }

  drawCanvas(radius) {
    const context = this.canvas.getContext('2d')
    context.beginPath()
    // Move to center
    context.arc(
      window.innerWidth / 2,
      window.innerHeight / 2,
      radius,
      0,
      2 * Math.PI
    )
    context.stroke()
  }

  // animateCanvas() {}

  render() {
    return (
      <Fragment>
        <canvas ref={this.setCanvasRef} />
      </Fragment>
    )
  }
}
