import React from 'react'
import { Content, Subheading, Picture } from './styled'

function Card (props) {
  return (

    <Content>
      <Picture
        src={props.lowRes}
        srcset={props.highRes}
        alt={props.alt}
        />
      <Subheading>{props.subheading}</Subheading>
    </Content>
  )
}

export default Card
