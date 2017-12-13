import React from 'react'
import Card from './Card'
import Heading2 from '../../common/Heading2'
import SeeAll from '../../common/SeeAll'
import NextPage from '../../common/NextPage'

import salentinaLow from './assets/salentina.png'
import salentinaHigh from './assets/salentina@2x.png'
import seeLow from './assets/see.png'
import seeHigh from './assets/see@2x.png'
import tropicalLow from './assets/tropical.png'
import tropicalHigh from './assets/tropical@2x.png'

function Homes (props) {
  return (
    <section>
      <div className='row row-center'>
        <Heading2>Homes</Heading2>
        <SeeAll link='#' />
      </div>
      <div className='row'>
        <Card
          lowRes={salentinaLow}
          highRes={salentinaHigh}
          alt='La Salentina'
          price='$82'
          name='La Salentina, see, nature & relax'
          description='Entire house · 9 beds'
          stats='97 · Superhost'
        />
        <Card
          lowRes={seeLow}
          highRes={seeHigh}
          alt='3 bedr.'
          price='$129'
          name='Your private 3 bedr. and exclusi...'
          description='Entire house · 5 beds'
          stats='161 · Superhost'
        />
        <Card
          lowRes={tropicalLow}
          highRes={tropicalHigh}
          alt='Tropical Tree House'
          price='$200'
          name='Dreamy Tropical Tree House'
          description='Entire treehouse · 1 beds'
          stats='364 · Superhost'
        />
        <NextPage top='80px' />
      </div>
    </section>
  )
}

export default Homes
