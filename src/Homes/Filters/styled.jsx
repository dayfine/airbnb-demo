import styled from 'styled-components'

export const Heading = styled.h2`
  font-size: 14px;
  display: inline-flex;
  margin: 0;
`

export const Background = styled.div`
  position: fixed;
  z-index: 0;
  background-color: #ffffff;
  opacity: .8;
  width: 100%;
  height: 100vh;
`

export const Button = styled.button`
  padding: 7px 16px;
  border-style: solid;
  background: ${props => (props.isOpen ? '#008489' : '#ffffff')};
  border-width: 1px;
  border-color: ${props => (props.isOpen ? '#008489' : 'rgba(72, 72, 72, 0.2)')};
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  color: ${props => (props.isOpen ? '#ffffff' : '#383838')};
`

export const ApplyButton = styled.button`
  border: none;
  margin: 0;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  padding: 13px 0;
  width: 100%;
  text-align: center;
  background: #ff5a5f;

  @media screen and (min-width: 768px) {
    background: none;
    padding: 0 12px;
    display: inline-flex;
    color: #008489;
    width: auto;
  }
`

export const CancelButtonIcon = styled.i`
  border: none;
  margin: 0;
  cursor: pointer;
  padding: 13px 0;
  text-align: center;
`

export const TopContainer = styled.div`
  padding: 16px 8px;
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px .5px 0px rbga(72, 72, 72, .3)
`

export const ButtonsContainer = styled.div`
  padding: 8px;
  position: absolute;
  z-index: 15;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -1px 0px #d5d5d5;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: none;
    padding: 0;
    position: static;
  }
`

export const ResetButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-size: 14px;
  color: #0f7276;
  display: inline-flex;
`

export const Content = styled.div`
  padding: 8px;
  position: fixed;
  z-index: 15;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 40px;
    padding: 18px 12px;
    width: auto;
    height: auto;
    border: 1px solid rgba(72, 72, 72, .2);
    border-radius: 4px;
    box-shadow: 0px 2px 4px rbg(72, 72, 72, 0.08);g
  }
`

export const Container = styled.div`
  position: relative;
  margin-right: 16px;
  display: inline-flex;
`

export const InnerContainer = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    position: static;
    padding: 5px;
    min-width: 304px;
  }
`

export const OptionTable = styled.div`
  display: table;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 36px;
`

export const OptionCell = styled.div`
  display: table-cell;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
`

export const OptionName = styled.span`
  display: inline-block;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const OptionDescription = styled.span`
  display: inline-block;
  font-size: 14px;
  margin-top: 6px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
