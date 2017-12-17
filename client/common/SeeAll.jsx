import styled from 'styled-components'
import React from 'react'
import arrowIcon from './assets/arrowIcon.svg'

const Text = styled.span`
  line-height: 1.25;
  font-size: .875em;
`

const Arrow = styled.img`
  width: 6px;
  height: 10px;
  margin: 0 6px;
`

const Link = styled.a`
  text-decoration: none;
`

function SeeAll (props) {
  return (
    <Link href={props.link}>
      <Text>See all</Text>
      <Arrow src={arrowIcon} alt='see all' />
    </Link>
  )
}

export default SeeAll
