require('./style.scss')
import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <button className="button-primary">{this.props.name}</button>
  }
}
