import React from 'react'
import Card from './Card'
import Heading2 from '../../common/Heading2'
import SeeAll from '../../common/SeeAll'
import NextPage from '../../common/NextPage'

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
      <div className='row row-center'>
        <Heading2>Featured destinations</Heading2>
        <SeeAll link='#' />
      </div>
      <div className='row'>
        {destinations.map(city => {
          const lowRes = pathToImages(`./${toLow(city)}.png`)
          const highRes = pathToImages(`./${toLow(city)}@2x.png`)
          return (
            <Card
              key={city}
              lowRes={lowRes}
              highRes={highRes}
              alt={city}
              subheading={city}
            />
          )
        })}
        <NextPage top='90px' />
      </div>
    </section>
  )
}

export default Featured
