import React from 'react'
import styled from 'styled-components'

import Wrapper from '../common/Wrapper'
import Options from './Options'
import Menu from './Menu'
import BottomBar from './BottomBar'

const FooterWrapper = styled.div`
  padding-top: 24px
`

function Footer (props) {
  return (
    <FooterWrapper>
      <Wrapper>
        <div className='row row-full'>
          <div className='col-3'>
            <Options />
          </div>
          <div className='col-9'>
            <Menu />
          </div>
        </div>
        <BottomBar />
      </Wrapper>
    </FooterWrapper>
  )
}

export default Footer
