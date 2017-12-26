import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Heading2 from './Heading2'

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`

export const Card = styled(Link)`
  display: block;
  text-decoration: none;
  color: #383838;
`

export const CardsContainer = styled.div`
  position: relative;
  overflow-x: scroll;
  margin: 0 -8px;
  box-sizing: border-bosx;
`

export { Heading2 }
