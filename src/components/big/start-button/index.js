import React from 'react'
import Button from '../../small/button'

export default class StartButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Button name={this.props.name} />
  }
}
