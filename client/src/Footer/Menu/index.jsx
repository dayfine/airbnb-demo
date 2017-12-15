import React from 'react'
import styled from 'styled-components'

import { List, Item, Heading } from './styled'
import menuConfig from './menuConfig'

const MenuColumn = styled.div`
  margin-left: 24px;
  padding-bottom: 36px
`

function Menu (props) {
  return (
    <div className='row row-full'>
      { menuConfig.map(list => (
        <div className='col-3' key={list.title}>
          <MenuColumn>
            <Heading title={list.title} />
            <List>
              {list.items.map(item => (<Item {...item} key={item.text} />))}
            </List>
          </MenuColumn>
        </div>
      ))}
    </div>
  )
}

export default Menu
