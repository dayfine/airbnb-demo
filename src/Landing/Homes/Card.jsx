import React from 'react'
import { Card, Rating } from '../../common'
import { Content, Heading, Picture, Description, Stats } from './styled'

function HomesCard (props) {
  return (
    <Card to={props.to}>
      <Picture
        src={props.highRes}
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
    </Card>
  )
}

export default HomesCard
