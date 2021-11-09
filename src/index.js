import '../static/sass/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import StartScreen from './components/big/start-screen'

class App extends React.Component {
  render() {
    return <StartScreen />
  }
}

ReactDom.render(<App />, document.getElementById('app'))
