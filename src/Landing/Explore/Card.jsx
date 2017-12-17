import React from 'react'
import { Content, Picture, Text } from './styled'

function Card (props) {
  return (
    <Content>
      <Picture
        src={props.lowRes}
        srcset={props.highRes}
        alt={props.alt}
      />
      <Text href={props.link}>
        {props.text}
      </Text>
    </Content>
  )
}

export default Card
