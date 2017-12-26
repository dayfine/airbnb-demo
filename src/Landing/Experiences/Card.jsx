import React from 'react'
import { Rating, Card } from '../../common'
import { Content, Picture, Text, Price, Stats } from './styled'

function ExperienceCard (props) {
  return (
    <Card to={props.to}>
      <Picture
        src={props.highRes}
        alt={props.alt}
      />
      <Text href={props.link}>
        <Price>{props.price}</Price> {props.text}
      </Text>
      <div>
        <Rating />
        <Stats>{props.stats}</Stats>
      </div>
    </Card>
  )
}

export default ExperienceCard
