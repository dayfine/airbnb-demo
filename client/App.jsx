import React, { Component } from 'react'
import Landing from './Landing'
import { views as Header } from './Header'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Landing />
        <Footer />
      </div>
    )
  }
}

export default App
