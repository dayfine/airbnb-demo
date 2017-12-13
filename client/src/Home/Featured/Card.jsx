import React from 'react'
import { Content, Subheading, Picture } from './styled'

function Card (props) {
  return (
    <div className='col-2'>
      <Content>
        <Picture
          src={props.lowRes}
          srcset={props.highRes}
          alt={props.alt}
        />
        <Subheading>{props.subheading}</Subheading>
      </Content>
    </div>
  )
}

export default Card
