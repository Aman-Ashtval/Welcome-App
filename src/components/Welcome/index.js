import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSub: false, val1: 'Subscribe'}

  renderBtn = () => {
    this.setState(prevState => {
      if (prevState.isSub === true) {
        return {isSub: false, val1: 'Subscribe'}
      }
      return {isSub: true, val1: 'Subscribed'}
    })
  }

  render() {
    const {val1} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="p">Thank you! Happy Learning.</p>
        <button type="button" className="btn" onClick={this.renderBtn}>
          {val1}
        </button>
      </div>
    )
  }
}

export default Welcome
