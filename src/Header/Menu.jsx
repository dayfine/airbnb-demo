import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  display: none;
  @media screen and (min-width: 990px) {
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
