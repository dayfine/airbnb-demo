import React from 'react'
import styled from 'styled-components'

import Wrapper from '../../common/Wrapper'
import Search from './Search'
import Menu from './Menu'
import logo from '../assets/logo.svg'

const HeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 16px 0;
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
      <Wrapper>
        <div className='row row-center'>
          <div className='row row-center'>
            <Link href='#'>
              <Logo alt='Logo' src={logo} />
            </Link>
            <Search placeholder='Try "Miami"' type='text' />
          </div>
          <Menu />
        </div>
      </Wrapper>
    </HeaderWrapper>
  )
}

export default Header
