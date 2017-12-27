import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Disclaimer from './common/Disclaimer'
import Landing from './Landing'
import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Disclaimer />
        <Header />
        <Landing />
        <Footer />
      </div>
    )
  }
}

export default App
