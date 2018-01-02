import styled from 'styled-components'
import React from 'react'
import arrowIcon from './assets/arrowIcon.svg'

export default styled.button`
  display: none;

  @media screen and (min-width: 990px) {
    display: block;
    padding: 0;
    margin: 0;
    border: 1px solid rgba(72, 72, 72, .1);
    border-radius: 50%;
    position: absolute;
    right: -20px;
    z-index: 130;
    width: 40px;
    height: 40px;
    background: url(${arrowIcon}) no-repeat 14px 6px,
    rgb(255, 255, 255);
    background-size: 40%;
  }
`

export const NextContainer = styled.div`
    position: relative;
`
