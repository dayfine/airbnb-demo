import React from 'react'
import Rating from '../../common/Rating'
import { Content, Heading, Picture, Description, Stats } from './styled'

function Card (props) {
  return (
    <Content>
      <Picture
        src={props.lowRes}
        srcset={props.highRes}
        alt={props.alt}
      />
      <Heading>
        {props.price} {props.name}
      </Heading>
      <Description>
        {props.description}
      </Description>
      <div>
        <Rating />
        <Stats>{props.stats}</Stats>
      </div>
    </Content>
  )
}

export default Card
