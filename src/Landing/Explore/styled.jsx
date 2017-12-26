import styled from 'styled-components'
import { Image } from '../../common'

export const Text = styled.a`
  text-decoration: none;
  line-height: 14px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    line-height: 1;
    font-size: 1em;
  }
`

export const TextContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;

  background: #fff;
  border: 1px solid rgba(72, 72, 72, .2);
  border-top: none;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, .1);
  border-radius: 0 0 4px 4px;

  @media screen and (min-width: 768px) {
    padding: 24px 12px;
    border-left: none;
    border-radius: 0 4px 4px 0;
  }
`

export const Picture = Image.extend`
  border-radius: 4px 4px 0 0;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, .1);

  @media screen and (min-width: 768px) {
    width: 96px;
    height: 72px;
    border-radius: 4px 0 0 4px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`
