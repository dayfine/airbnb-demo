import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import arrowIcon from './assets/arrowIcon.svg'

const Text = styled.span`
  line-height: 1.25;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px
  }
`

const Arrow = styled.img`
  width: 6px;
  height: 10px;
  margin: 0 6px;
`

const MyLink = styled(Link)`
  text-decoration: none;
`

function SeeAll (props) {
  return (
    <MyLink to={props.to}>
      <Text>See all</Text>
      <Arrow src={arrowIcon} alt='see all' />
    </MyLink>
  )
}

export default SeeAll
