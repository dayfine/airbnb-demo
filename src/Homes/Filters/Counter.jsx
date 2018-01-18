import React from 'react'
import styled from 'styled-components'

const Value = styled.span`
  display: inline-block;
  margin: 0 18px;
`

const Button = styled.button`
  border: 1px solid #008489;
  box-sizing: border-box;
  border-radius: 22px;
  width: 32px;
  height: 32px;
  background: none;
  text-align: center;
  line-height: 32px;
  position: relative;
  opacity: ${props => (props.disabled ? '0.5' : '1.0')}
`

const Counter = styled.div`
  display: flex;
  flex-direction: row;
  row-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`

const ButtonIcon = styled.i`
  width: 24px;
  height: 24px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`

export default props => (
  <Counter>
    <Button disabled>
      <ButtonIcon className='fa fa-plus' aria-hidden='true' />
    </Button>
    <Value>1</Value>
    <Button>
      <ButtonIcon className='fa fa-minus' aria-hidden='true' />
    </Button>
  </Counter>
)
