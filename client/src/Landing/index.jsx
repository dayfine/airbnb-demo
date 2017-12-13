import React from 'react'

import Wrapper from '../common/Wrapper'
import Explore from './Explore'
import Experiences from './Experiences'
import Featured from './Featured'
import Homes from './Homes'

function Landing (props) {
  return (
    <main>
      <Wrapper>
        <Explore />
        <Experiences />
        <Featured />
        <Homes />
      </Wrapper>
    </main>
  )
}

export default Landing
