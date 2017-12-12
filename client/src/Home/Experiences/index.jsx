import React from 'react'
import Card from './Card'
import Heading2 from '../../common/Heading2'
import SeeAll from '../../common/SeeAll'
import NextPage from '../../common/NextPage'

import forestLow from './assets/forest.png'
import forestHigh from './assets/forest@2x.png'
import mountainLow from './assets/mountain.png'
import mountainHigh from './assets/mountain@2x.png'
import salsaLow from './assets/salsa.png'
import salsaHigh from './assets/salsa@2x.png'
import whaleLow from './assets/whale.png'
import whaleHigh from './assets/whale@2x.png'

function Explore (props) {
  return (
    <section>
      <div className='row row-center'>
        <Heading2>Experiences</Heading2>
        <SeeAll link='#' />
      </div>
      <div className='row'>
        <Card
          alt='Forest therapy'
          lowRes={forestLow}
          highRes={forestHigh}
          price='$29'
          link='#'
          text='Forest therapy'
          stats='44 reviews'
        />
        <Card
          alt='Table Mountain Summi, Cable Car Down'
          lowRes={mountainLow}
          highRes={mountainHigh}
          price='$69'
          link='#'
          text='Table Mountain Summi, Cable Car Down'
          stats='812 reviews'
        />
        <Card
          alt='Salsa Night'
          lowRes={salsaLow}
          highRes={salsaHigh}
          price='$49'
          link='#'
          text='Salsa Night'
          stats='124 reviews'
        />
        <Card
          alt='Whale watching'
          lowRes={whaleLow}
          highRes={whaleHigh}
          price='$69'
          link='#'
          text='Whale watching'
          stats='72 reviews'
        />
        <NextPage top='155px' />
      </div>
    </section>
  )
}

export default Explore
