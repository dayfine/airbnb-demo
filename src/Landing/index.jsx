import React from 'react'
import styled from 'styled-components'

import Wrapper from '../common/Wrapper'
import Explore from './Explore'
import Experiences from './Experiences'
import Featured from './Featured'
import Homes from './Homes'

const LandingWrapper = styled.main`
  width: 100%;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  padding: 12px 0;
`

function Landing (props) {
  return (
    <LandingWrapper>
      <Wrapper>
        <div className='container'>
          <Explore />
          <Experiences />
          <Featured />
          <Homes />
        </div>
      </Wrapper>
    </LandingWrapper>
  )
}

export default Landing
