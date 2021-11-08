require('../static/sass/main.scss')
const React = require('react')
const { Fragment } = React
const ReactDom = require('react-dom')

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div>
            <div className="heading1 text-white push-up absolute">
              Telegramska
            </div>
          </div>
          <div className="twelve columns">
            <div className="heading3 text-white">Telegramska</div>
            <div className="heading4 text-white">
              Your basic Telegram Bot helper
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
