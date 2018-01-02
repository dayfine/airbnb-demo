import React from 'react'
import Card from './Card'
import {
  Heading2,
  SeeAll,
  CardsContainer,
  NextPage,
  NextContainer
} from '../../common'
import forestHigh from './assets/forest@2x.png'
import mountainHigh from './assets/mountain@2x.png'
import salsaHigh from './assets/salsa@2x.png'
import whaleHigh from './assets/whale@2x.png'

const Next = NextPage.extend`top: 155px`

function Explore (props) {
  return (
    <section>
      <div className='row middle-xs'>
        <Heading2>Experiences</Heading2>
        <SeeAll to='#' />
      </div>
      <NextContainer>
        <CardsContainer>
          <div className='row nowrap-xs'>
            <div className='col-xs-6 col-md-4 col-lg-3'>
              <Card
                alt='Forest therapy'
                highRes={forestHigh}
                price='$29'
                to='#'
                text='Forest therapy'
                stats='44 reviews'
              />
            </div>
            <div className='col-xs-6 col-md-4 col-lg-3'>
              <Card
                alt='Table Mountain Summi, Cable Car Down'
                highRes={mountainHigh}
                price='$69'
                to='#'
                text='Table Mountain Summi, Cable Car Down'
                stats='812 reviews'
            />
            </div>
            <div className='col-xs-6 col-md-4 col-lg-3'>
              <Card
                alt='Salsa Night'
                highRes={salsaHigh}
                price='$49'
                to='#'
                text='Salsa Night'
                stats='124 reviews'
            />
            </div>
            <div className='col-xs-6 col-md-4 col-lg-3'>
              <Card
                alt='Whale watching'
                highRes={whaleHigh}
                price='$69'
                to='#'
                text='Whale watching'
                stats='72 reviews'
            />
            </div>

          </div>
        </CardsContainer>
        <Next />
      </NextContainer>
    </section>
  )
}

export default Explore
