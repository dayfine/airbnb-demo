import React from 'react'
import { Text, TextContainer, Picture, FlexContainer } from './styled'
import { Card } from '../../common'

function ExploreCard (props) {
  return (
    <Card to={props.to}>
      <FlexContainer>
        <Picture
          src={props.highRes}
          alt={props.alt}
        />
        <TextContainer>
          <Text href={props.link}>
            {props.text}
          </Text>
        </TextContainer>
      </FlexContainer>
    </Card>
  )
}

export default ExploreCard
