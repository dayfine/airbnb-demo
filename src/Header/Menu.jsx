import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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

const MyLink = styled(Link)`
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
      <MyLink to='/'>Become a host</MyLink>
      <MyLink to='/'>Help</MyLink>
      <MyLink to='/'>Sign Up</MyLink>
      <MyLink to='/'>Log In</MyLink>
    </Nav>
  )
}

export default Menu
