import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Disclaimer from './common/Disclaimer'
import Header from './Header'
import Landing from './Landing'
import Homes from './Homes'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Disclaimer />
        <Header />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/homes' component={Homes} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
