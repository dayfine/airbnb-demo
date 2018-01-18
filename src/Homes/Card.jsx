import React from 'react'
import styled from 'styled-components'
import { Card, Image, Rating } from '../common'

const Heading = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 8px 0 4px 0;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 3px;
  }
`

const Description = styled.p`
  font-size: 12px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 3px;
  }
`

const Stats = styled.span`
  font-size: 12px;
  margin-left: 4px
`

export default props => (
  <Card to={props.to}>
    <Image src={props.highRes} alt={props.alt} />
    <Heading>
      {props.price} {props.name}
    </Heading>
    <Description>{props.description}</Description>
    <div>
      <Rating />
      <Stats>{props.stats}</Stats>
    </div>
  </Card>
)
