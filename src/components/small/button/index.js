import React from 'react'
import classnames from 'classnames'
export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button
        className={classnames('button-primary', this.props.className)}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    )
  }
}
