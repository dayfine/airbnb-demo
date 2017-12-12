import React from 'react'
import { List, Item, Heading } from './styled'
import menuConfig from './menuConfig'

function Menu (props) {
  return (
    <div className='row' >
      {menuConfig.map(list => (
        <div className='col-4' key={list.title}>
          <Heading title={list.title} />
          <List>
            {list.items.map(item => (
              <Item {...item} key={item.text} />
          ))}
          </List>
        </div>
      ))}
    </div>
  )
}

export default Menu
