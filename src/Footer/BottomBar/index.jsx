import React from 'react'

import Wrapper from '../../common/Wrapper'
import BottomNav from './BottomNav'
import Social from './Social'
import { BottomWrapper, Logo, Copyright } from './styled'
import logo from '../assets/logo.svg'

function BottomBar (props) {
  return (
    <Wrapper>
      <BottomWrapper>
        <div className='row row-center'>
          <Logo src={logo} />
          <div className='row row-center flex'>
            <Copyright>© Airbnb Inc.</Copyright>
            <BottomNav />
          </div>
          <Social />
        </div>
      </BottomWrapper>
    </Wrapper>
  )
}

export default BottomBar
