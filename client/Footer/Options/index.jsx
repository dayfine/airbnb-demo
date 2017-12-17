import React from 'react'
import Option from './Option'

import { languages, currencies } from './optionConfig'

function Options (props) {
  return (
    <div>
      <Option id='language-selector' options={languages} />
      <Option id='currency-selector' options={currencies} />
    </div>
  )
}

export default Options
