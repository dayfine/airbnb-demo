import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
`
const Item = styled.li`
  display: inline-block;
  min-width: 56px;
  margin-right: 8px;

  :first-of-type {
    min-width: 108px;
  }
`

const Link = styled.a`
  line-height: 1.5em;
  font-size: .875em;
  text-decoration: none;
`

function Menu (props) {
  return (
    <nav>
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
    </nav>
  )
}

export default Menu
