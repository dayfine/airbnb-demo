import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: inline-block
`

const Input = styled.input`
  background: #fffff no-repeat 15px 12px;
  box-sizing: border-box;
  min-width: 392px;
  line-height: 24px;

  border: 1px solid rgba(72, 72, 72, .2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, .8);
  border-radius: 4px;

  padding-left: 53px;
  padding-top 12px;
  padding-bottom: 12px;

  ::placeholder {
    color: #383838
    line-height: 1.5em;
    opacity: .7
  }
`

function Search (props) {
  return (
    <Div>
      <Input {...props} />
    </Div>
  )
}

export default Search
