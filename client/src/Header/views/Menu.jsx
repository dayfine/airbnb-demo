import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  margin-left:auto
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
`
const Item = styled.li`
  display: inline-block;
  max-width: 56px;
  margin-right: 8px;

  :first-of-type {
    min-width: 108px;
  }
`

const Link = styled.a`
  color: #383838;
  line-height: 1.5em;
  font-size: .875em;
  text-decoration: none;
`

function Menu (props) {
  return (
    <Nav className='col-4'>
      <List>
        <Item>
          <Link href='/'>Become a host</Link>
        </Item>
        <Item>
          <Link href='/'>Help</Link>
        </Item>
        <Item>
          <Link href='/'>Sign Up</Link>
        </Item>
        <Item>
          <Link href='/'>Log In</Link>
        </Item>
      </List>
    </Nav>
  )
}

export default Menu
