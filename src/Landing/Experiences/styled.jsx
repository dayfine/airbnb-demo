import styled from 'styled-components'
import { Image } from '../../common'

export const Content = styled.div`
  max-width: 229px;
`
export const Text = styled.a`
  line-height: normal;
  font-size: 1em;
  text-decoration: none;
  margin: 8px 0px 6px 0px;
`

export const Picture = Image.extend`
  border-radius: 4px;

  @media screen and (min-width: 990px) {
    height: 346px;
  }
`

export const Price = styled.span``

export const Stats = styled.span`
  line-height: normal;
  font-size: .75em;
  margin-left: 8px;
`
