import React from 'react'

import Wrapper from '../common/Wrapper'
import Explore from './Explore'
import Experiences from './Experiences'
import Featured from './Featured'

function Home (props) {
  return (
    <main>
      <Wrapper>
        <Explore />
        <Experiences />
        <Featured />
      </Wrapper>
    </main>
  )
}

export default Home
