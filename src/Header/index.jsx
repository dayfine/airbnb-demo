import React from 'react'
import styled from 'styled-components'

import Wrapper from '../common/Wrapper'
import Search from './Search'
import Menu, { MenuBtn } from './Menu'
import logo from './assets/logo.svg'

const HeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 8px 24px;
`

const Logo = styled.img`
  height: 32px;
  width: 30px;
`

const Link = styled.a`
  display: inline-block;
  margin: 0;
  margin-right: 5px;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin-right: 7px
  }

  @media screen and (min-width: 990px) {
    margin-right: 50px
  }
`

function Header (props) {
  return (
    <HeaderWrapper>
      <div className='container'>
        <div className='row between-xs middle-xs'>
          <div className='row start-xs middle-xs'>
            <Link href='#'>
              <Logo alt='Logo' src={logo} />
            </Link>
            <MenuBtn />
            <Search placeholder='Try "Miami"' type='text' />
          </div>
          <Menu />
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default Header
