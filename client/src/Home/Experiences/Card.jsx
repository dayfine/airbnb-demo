import React from 'react'
import Rating from '../../common/Rating'
import { Content, Picture, Text, Price, Stats } from './styled'

function Card (props) {
  return (
    <Content>
      <Picture
        src={props.lowRes}
        srcset={props.highRes}
        alt={props.alt}
      />
      <Text href={props.link}>
        <Price>{props.price}</Price> {props.text}
      </Text>
      <div>
        <Rating />
        <Stats>{props.stats}</Stats>
      </div>
    </Content>
  )
}

export default Card
