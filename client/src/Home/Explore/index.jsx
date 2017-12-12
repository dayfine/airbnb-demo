import React from 'react'
import Card from './Card'
import Heading2 from '../../common/Heading2'

import homesLow from './assets/homes.png'
import homesHigh from './assets/homes@2x.png'
import experiencesLow from './assets/experiences.png'
import experiencesHigh from './assets/experiences@2x.png'
import restaurantsLow from './assets/restaurants.png'
import restaurantsHigh from './assets/restaurants@2x.png'

function Explore (props) {
  return (
    <section>
      <div className='row row-center'>
        <Heading2>Explore Airbnb</Heading2>
      </div>
      <div className='row'>
        <Card
          alt='Homes'
          lowRes={homesLow}
          highRes={homesHigh}
          link='#'
          text='Homes'
        />
        <Card
          alt='Expriences'
          lowRes={experiencesLow}
          highRes={experiencesHigh}
          link='#'
          text='Expriences'
        />
        <Card
          alt='Restaurants'
          lowRes={restaurantsLow}
          highRes={restaurantsHigh}
          link='#'
          text='Restaurants'
        />
      </div>
    </section>
  )
}

export default Explore
