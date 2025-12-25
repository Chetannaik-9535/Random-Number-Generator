// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onRandomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="RandomNumberGenerator-bg-container">
        <div className="RandomNumberGenerator-card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.onRandomNumberGenerator}
          >
            Generate
          </button>
          <p className="Number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator

/*
  git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetannaik-9535
     git remote add origin https://github.com/Chetannaik-9535/Random-Number-Generator.git
*/