import './style.sass'
import Button from '../../small/button'
import React, { Fragment } from 'react'

export default class OptionScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <div className="option-screen screen">
          <Button name="Get Started" />
        </div>
      </Fragment>
    )
  }
}
