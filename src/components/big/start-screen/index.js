// import StartBackground from '../start-background'
import './style.sass'
import Button from '../../small/button'
import React, { Fragment } from 'react'

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  showOptionScreen() {
    const height = window.screen.height
    const TIME = 100
    const portionToScroll = height / TIME
    let elapsed = portionToScroll
    const interval = setInterval(() => {
      window.scrollTo(0, elapsed)
      elapsed += portionToScroll
      if (elapsed >= 2 * height) clearInterval(interval)
    }, portionToScroll)
  }

  render() {
    return (
      <Fragment>
        <div className="start-screen screen relative">
          <Button name="Get Started" onClick={this.showOptionScreen} />
        </div>
      </Fragment>
    )
  }
}
