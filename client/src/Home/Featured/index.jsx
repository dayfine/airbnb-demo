import React from 'react'
import Card from './Card'
import Heading2 from '../../common/Heading2'
import SeeAll from '../../common/SeeAll'
import NextPage from '../../common/NextPage'

function Explore (props) {
  return (
    <section>
      <div className='row row-center'>
        <Heading2>Popular</Heading2>
        <SeeAll link='#' />
      </div>
      <div className='row'>
        <NextPage top='155px' />
      </div>
    </section>
  )
}

export default Explore
