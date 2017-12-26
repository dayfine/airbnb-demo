import React from 'react'
import Card from './Card'
import { CardsContainer, Heading2 } from '../../common'

import homesHigh from './assets/homes@2x.png'
import experiencesHigh from './assets/experiences@2x.png'
import restaurantsHigh from './assets/restaurants@2x.png'

function Explore (props) {
  return (
    <section>
      <div className='row row-center'>
        <Heading2>Explore Airbnb</Heading2>
      </div>
      <CardsContainer>
        <div className='row'>
          <div className='col-xs-4'>
            <Card
              alt='Homes'
              highRes={homesHigh}
              to='#'
              text='Homes'
            />
          </div>
          <div className='col-xs-4'>
            <Card
              alt='Expriences'
              highRes={experiencesHigh}
              to='#'
              text='Expriences'
            />
          </div>
          <div className='col-xs-4'>
            <Card
              alt='Restaurants'
              highRes={restaurantsHigh}
              to='#'
              text='Restaurants'
            />
          </div>
        </div>
      </CardsContainer>
    </section>
  )
}

export default Explore
