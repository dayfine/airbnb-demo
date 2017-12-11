import React, { Component } from 'react'
import Home from './Home'
import { views as Header } from './Header'
import { views as Footer } from './Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App
