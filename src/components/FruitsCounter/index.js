// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {countMango: 0, countBanana: 0}

  onCounterMango = () => {
    this.setState(prevState => ({
      countMango: prevState.countMango + 1,
      countBanana: prevState.countBanana,
    }))
  }

  onCounterBanana = () => {
    this.setState(prevState => ({
      countMango: prevState.countMango,
      countBanana: prevState.countBanana + 1,
    }))
  }

  render() {
    const {countMango, countBanana} = this.state
    return (
      <div className="main">
        <div className="box">
          <h1 className="head">
            Bob ate <span className="count">{countMango}</span> &nbsp; mangoes
            &nbsp;
            <span className="count">{countBanana}</span> &nbsp;bananas
          </h1>
          <div className="fruits">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button
                type="button"
                className="button"
                onClick={this.onCounterMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button
                type="button"
                className="button"
                onClick={this.onCounterBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
