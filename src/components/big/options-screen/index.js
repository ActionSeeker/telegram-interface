import './style.sass'
import React, { Fragment } from 'react'
import Option from './options'

export default class OptionScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <div
          className="option-screen screen"
          style={{ opacity: this.props.percentage }}
        >
          <div className="container">
            <div className="row">
              <div className="four columns">
                <Option />
              </div>
              <div className="four columns">
                <Option />
              </div>
              <div className="four columns">
                <Option />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
