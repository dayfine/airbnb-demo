import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
  color: #636363;
  display: block;
  margin-left: 12px
`

export default function Copyright () {
  return (
    <Text>© Airbnb Inc.</Text>
  )
}
