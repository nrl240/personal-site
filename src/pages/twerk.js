import React, { Component } from 'react'
import styles from './work.module.css'

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  }

  render() {

    const modal = <div className="modal">Enter job description here</div>

    return (
      <div className="about">
        <div className="button" onClick={this.handleClick}>
          ENTER COMPANY, TITLE & DATES WITH IMG
        </div>
        {this.state.showModal ? modal : ''}
      </div>
    )
  }
}

export default Work
