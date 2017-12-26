import styled from 'styled-components'
import { Image } from '../../common'

export const Picture = Image.extend`
  @media screen and (min-width: 990px) {
    height: 220px;
  }
`

export const Content = styled.div`
  max-width: 152px;
`
export const Subheading = styled.p`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  margin: 8px 0;
`
