import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  font-size: .75em;
  text-decoration: none;
  color: #636363
`
const Li = styled.li`
  margin: 4px 0
`

export function Item (props) {
  return (
    <Li>
      <Link href={props.link}>{props.text}</Link>
    </Li>
  )
}

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Title = styled.h4`
  margin: 16px 0px 12px 0px;
`

export function Heading (props) {
  return (
    <Title>{props.title}</Title>
  )
}
