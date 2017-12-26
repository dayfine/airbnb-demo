import React from 'react'
import Card from './Card'
import { Heading2, SeeAll, CardsContainer, NextPage } from '../../common'

function toLow (str) {
  return str.toLowerCase().replace(/\s/, '')
}

const destinations = [
  'Cape Town',
  'Los Angeles',
  'Miami',
  'Paris',
  'Seoul',
  'Tokyo'
]

const pathToImages = require.context('./assets', true)

function Featured (props) {
  return (
    <section>
      <div className='row middle-xs'>
        <Heading2>Featured destinations</Heading2>
        <SeeAll to='#' />
      </div>
      <CardsContainer>
        <div className='row nowrap-xs'>
          {destinations.map(city => {
            const highRes = pathToImages(`./${toLow(city)}@2x.png`)
            return (
              <div className='col-xs-3 col-md-2' key={city}>
                <Card
                  highRes={highRes}
                  alt={city}
                  subheading={city}
                  to='#'
                />
              </div>
            )
          })}
          <NextPage />
        </div>
      </CardsContainer>
    </section>
  )
}

export default Featured
