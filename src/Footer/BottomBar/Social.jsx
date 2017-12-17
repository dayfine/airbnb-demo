import React from 'react'
import styled from 'styled-components'
import fbIcon from '../assets/fbIcon.svg'
import twIcon from '../assets/twIcon.svg'
import igIcon from '../assets/igIcon.svg'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: right;
`

const Item = styled.li`
  display: inline-block;
  margin-left: 16px;
`

const Link = styled.a`
  text-decoration: none;
`

const Icon = styled.i`
  width: 24px;
  height: 24px;
  color: #000;
`

function Social (props) {
  return (
    <nav>
      <List>
        <Item>
          <Link href='#'>
            <Icon className='fa fa-facebook' aria-hidden='true' />
          </Link>
        </Item>
        <Item>
          <Link href='#'>
            <Icon className='fa fa-twitter' aria-hidden='true' />
          </Link>
        </Item>
        <Item>
          <Link href='#'>
            <Icon className='fa fa-instagram' aria-hidden='true' />
          </Link>
        </Item>
      </List>
    </nav>
  )
}

export default Social
