import StartBackground from '../start-background'
import StartButton from '../start-button'
import React, { Fragment } from 'react'

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  showOptionScreen() {}

  render() {
    return (
      <Fragment>
        <StartBackground />
        <div className="container">
          <div className="row">
            <div className="twelve columns">
              <StartButton
                name="Get Started"
                onClick={this.showOptionScreen()}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
