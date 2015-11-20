import React from 'react'
import Link from 'react-router'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.props.history.replaceState(null, '/home')
  }

  render() {
    return (
      <div>
        <h1>Working app</h1>
      </div>
    )
  }
}

export default Home
