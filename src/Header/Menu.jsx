import React from 'react'
import styled from 'styled-components'
import arrowIcon from './assets/downArrow.svg'

export const MenuBtn = styled.button`
  padding: 0;
  margin: 0 12px;
  border: none;
  width: 14px;
  height: 7px;
  background: url(${arrowIcon}) no-repeat 0 0;
  background-size: cover;
  display: block;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    text-align: center;
  }
`

const Link = styled.a`
  display: inline-block;
  min-width: 56px;
  margin-right: 8px;
  line-height: 1.5em;
  font-size: .875em;
  text-decoration: none;
`

function Menu (props) {
  return (
    <Nav>
      <Link href='/'>Become a host</Link>
      <Link href='/'>Help</Link>
      <Link href='/'>Sign Up</Link>
      <Link href='/'>Log In</Link>
    </Nav>
  )
}

export default Menu
