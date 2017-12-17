import React from 'react'
import styled from 'styled-components'
import arrowIcon from '../assets/downArrow.svg'

const Div = styled.div`
  position: relative;
  margin-top: 16px;
`

const Select = styled.select`
  padding: 12px 16px 12px 9px;
  width: 100%;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 4px
`
const Arrow = styled.span`
  position: absolute;
  top: 20px;
  right: 16px;
  line-height: 0;
  display: block;
  width: 15px;
  height: 9px;
  background: url(${arrowIcon}) no-repeat;
  background-size: contain;
  pointer-events: none;
  z-index: 10;
`

export default function Option (props) {
  return (
    <Div>
      <Select name={props.id}>
        {props.options.map(o => (
          <option value={o.code} key={o.code}>{o.name}</option>
        ))}
      </Select>
      <Arrow />
    </Div>
  )
}
