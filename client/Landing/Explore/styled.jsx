import styled from 'styled-components'

export const Content = styled.div`
  position: relative;
  padding: 24px 120px 24px 0px;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, .2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, .1);
  border-radius: 4px;
  max-width: 30%;
  min-width: 300px
`
export const Text = styled.a`
  line-height: 1;
  font-size: 1em;
  color: #383838;
  text-decoration: none;
  margin-left: 112px
`

export const Picture = styled.img`
  width: 96px;
  height: 72px;
  position: absolute;
  top: -1px;
  left: -1px;
  border-radius: 4px 0 0 4px;
`
