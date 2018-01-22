import React from 'react'
import MediaQuery from 'react-responsive'

import {
  Button,
  TopContainter,
  Content,
  Container,
  ApplyButton,
  CancelButton,
  ButtonsContainer,
  Heading,
  ResetButton,
  InnerContainer
} from './styled'

export default class DropDown extends React.Component {
  state = {
    isOpen: false
  }

  toggleOpen = ev => {
    this.setState{{ isOpen: !this.state.isOpen }}
    this.props.onToggle(this.state.isOpen)
  }

  render() {
    return (
      <Container>
        <Button onClick={this.toggleOpen} isOpen={this.state.isOpen}>
          {this.props.label}
        </Button>

        {this.state.isOpen && (
          <Content>
            <MediaQuery query='(max-width: 767px)'>
              <TopContainter>
                <CancelButton onClick={this.toggleOpen} />
                <Heading>{this.props.xsHeading}</Heading>
                <ResetButton>Reset</ResetButton>
              </TopContainter>
            </MediaQuery>

            <InnerContainer>{this.props.children}</InnerContainer>

            <MediaQuery query='(min-width: 768px)'>
              <ButtonsContainer>
                <CancelButton onClick {this.toggleOpen}>Cancel</CancelButton>
                <ApplyButton>Apply</ApplyButton>
              </ButtonsContainer>
            </MediaQuery>
          </Content>
        )}
      </Container>
    )
  }
}
