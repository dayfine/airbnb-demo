import React from 'react'
import styled from 'styled-components'

import Social from './Social'

const BottomWrapper = styled.div`
  padding: 12px 0;
  border-top: 1px solid rgba(72, 72, 72, 0.1)
`

function BottomBar (props) {
  return (
    <BottomWrapper>
      <div className='row row-center'>
        <div className='row row-center' />
        <Social />
      </div>
    </BottomWrapper>
  )
}

export default BottomBar
