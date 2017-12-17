import React from 'react'
import styled from 'styled-components'

import Wrapper from '../common/Wrapper'
import Search from './Search'
import Menu from './Menu'
import logo from './assets/logo.svg'

const HeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 12px 0;
`

const Logo = styled.img`
  height: 32px;
  width: 30px;
`

const Link = styled.a`
  display: inline-block;
  margin: 0;
  margin-right: 51px;
  padding: 0;
`

function Header (props) {
  return (
    <HeaderWrapper>
      <div className='container'>
        <div className='row between-xs middle-xs'>
          <div className='row between-xs middle-xs'>
            <Link href='#'>
              <Logo alt='Logo' src={logo} />
            </Link>
            <Search placeholder='Try "Miami"' type='text' />
          </div>
          <Menu />
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
