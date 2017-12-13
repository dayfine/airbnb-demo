import React from 'react'
import Wrapper from '../common/Wrapper'
import Options from './Options'
import { List, Item, Heading } from './Menu/styled'
import menuConfig from './Menu/menuConfig'

function Footer (props) {
  return (
    <Wrapper>
      <div className='row row-full'>
        <Options />
        {menuConfig.map(list => (
          <div className='col-3' key={list.title}>
            <Heading title={list.title} />
            <List>
              {list.items.map(item => (<Item {...item} key={item.text} />))}
            </List>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default Footer
