import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  padding: 0;
  text-align: left;
`

const Link = styled.a`
  display: inline-block;
  color: #636363;
  font-size: .6667em;
  text-decoration: none;
  margin-right: .6667em
`

function BottomNav (props) {
  return (
    <nav>
      <Container>
        <Link href='#'>Terms</Link>
        <Link href='#'>Privacy</Link>
        <Link href='#'>Site Map</Link>
      </Container>
    </nav>
  )
}

export default BottomNav
