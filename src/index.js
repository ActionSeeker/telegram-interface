require('../static/sass/main.scss')
const React = require('react')
const { Fragment } = React
const ReactDom = require('react-dom')

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div class="heading1">Finally</div>
      </Fragment>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
