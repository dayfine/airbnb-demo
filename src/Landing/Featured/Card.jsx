import React from 'react'
import { Content, Subheading, Picture } from './styled'
import { Card } from '../../common'

function FeaturedCard (props) {
  return (
    <Card to={props.to}>
      <Picture
        src={props.highRes}
        alt={props.alt}
        />
      <Subheading>{props.subheading}</Subheading>
    </Card>
  )
}

export default FeaturedCard
