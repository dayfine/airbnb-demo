import styled from 'styled-components'
import React from 'react'
import starIcon from './starIcon.svg'

const Stars = styled.div`
  display: inline-block;
`

const Star = styled.img`
  windth: 12px;
  height: 12x;
  margin-right: 4px;
`

function Rating (props) {
  return (
    <Stars>
      <Star src={starIcon} alt='Rating Star' />
      <Star src={starIcon} alt='Rating Star' />
      <Star src={starIcon} alt='Rating Star' />
      <Star src={starIcon} alt='Rating Star' />
      <Star src={starIcon} alt='Rating Star' />
    </Stars>
  )
}

export default Rating
