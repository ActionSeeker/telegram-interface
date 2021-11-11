// import StartBackground from '../start-background'
import './style.sass'
import Button from '../../small/button'
import React, { Fragment } from 'react'

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <div className="start-screen screen relative">
          <Button name="Get Started" />
        </div>
      </Fragment>
    )
  }
}
