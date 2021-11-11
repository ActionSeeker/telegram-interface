import './styles/main.sass'
import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { Parallax } from 'react-parallax'
import StartScreen from './components/big/start-screen'
import OptionScreen from './components/big/options-screen'
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <StartScreen />
        <OptionScreen />
      </Fragment>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
