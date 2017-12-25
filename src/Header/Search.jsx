import React from 'react'
import styled from 'styled-components'
import searchIcon from './assets/searchIcon.svg'

const Input = styled.input`
  background: #ffffff url(${searchIcon}) no-repeat  10px 10px;
  box-sizing: border-box;
  min-width: 392px;
  line-height: normal;

  border: 1px solid rgba(72, 72, 72, .2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, .1);
  border-radius: 4px;

  padding-left: 53px;
  padding-top 12px;
  padding-bottom: 12px;

  font-size: .875em;

  ::placeholder {
    font-family: "CircularAir-Light", "Arial", sans-serif;
    color: #383838
    opacity: .7
  }
`

function Search (props) {
  return (
    <div className='col-sx-8 col-sm-6 col-md-4 col-lg-3'>
      <Input {...props} />
    </div>
  )
}

export default Search
