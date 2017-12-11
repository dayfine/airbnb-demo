import React from 'react'

import Wrapper from '../common/Wrapper'
import Explore from './Explore'
import Experiences from './Experiences'

function Home (props) {
  return (
    <main>
      <Wrapper>
        <Explore />
        <Experiences />
      </Wrapper>
    </main>
  )
}

export default Home
