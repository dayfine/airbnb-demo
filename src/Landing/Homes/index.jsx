import React from 'react'
import Card from './Card'
import { Heading2, SeeAll, CardsContainer, NextPage } from '../../common'

import salentinaHigh from './assets/salentina@2x.png'
import seeHigh from './assets/see@2x.png'
import tropicalHigh from './assets/tropical@2x.png'

function Homes (props) {
  return (
    <section>
      <div className='row middle-xs'>
        <Heading2>Homes</Heading2>
        <SeeAll to='#' />
      </div>
      <CardsContainer>
        <div className='row nowrap-xs'>
          <div className='col-xs-6 col-md-4'>
            <Card
              highRes={salentinaHigh}
              alt='La Salentina'
              price='$82'
              name='La Salentina, see, nature & relax'
              description='Entire house · 9 beds'
              stats='97 · Superhost'
              to='#'
            />
          </div>
          <div className='col-xs-6 col-md-4'>
            <Card
              highRes={seeHigh}
              alt='3 bedr.'
              price='$129'
              name='Your private 3 bedr. and exclusi...'
              description='Entire house · 5 beds'
              stats='161 · Superhost'
              to='#'
            />
          </div>
          <div className='col-xs-6 col-md-4'>
            <Card
              highRes={tropicalHigh}
              alt='Tropical Tree House'
              price='$200'
              name='Dreamy Tropical Tree House'
              description='Entire treehouse · 1 beds'
              stats='364 · Superhost'
              to='#'
            />
          </div>
          <NextPage />
        </div>
      </CardsContainer>
    </section>
  )
}

export default Homes
