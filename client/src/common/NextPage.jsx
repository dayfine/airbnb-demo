import styled from 'styled-components'
import React from 'react'
import arrowIcon from './assets/arrowIcon.svg'

const Button = styled.button.attrs({
  top: props => props.top
})`
  padding: 0;
  margin: 0;
  border: 1px solid rgba(72, 72, 72, .1);
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  right: -15px;
  z-index: 100;
  width: 40px;
  height: 40px;
`
const IconWrapper = styled.span`
  position: absolute;
  top: 10px;
  left: 11px;
`

const Arrow = styled.img`
  width: 20px;
  height: 20px;
`

function NextPage (props) {
  return (
    <Button top={props.top}>
      <IconWrapper>
        <Arrow src={arrowIcon} alt='next' />
      </IconWrapper>
    </Button>
  )
}

export default NextPage
