import styled from 'styled-components'
import { Image } from '../../common'

export const Content = styled.div`
  max-width: 310px;
`

export const Heading = styled.p`
  font-family: "CircularAir-Bold", "Arial Bold", sans-serif;
  margin: 8px 0;
`

export const Picture = Image.extend`
  border-radius: 4px;

  @media screen and (min-width: 990px) {
    height: 204px;
  }
`

export const Description = styled.p`
  font-family: "CircularAir-Light", "Arial Light", sans-serif;
  margin: 4px 0;
`

export const Stats = styled.span`
  line-height: normal;
  font-size: .75em;
  margin-left: 4px;
`
