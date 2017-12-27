import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Dialog from 'material-ui/Dialog'

const styles = {
  root: {
    display: 'flex',
    padding: 28,
    color: 'white',
    backgroundColor: '#ff4f54',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: 420
  },
  title: {
    textTransform: 'uppercase',
    fontSize: '2em',
    marginBottom: 12,
    fontFamily: 'CircularAir-Bold, Arial, sans-serif;',

  },
  body: {
    fontSize: '1.075em'
  }
}

class Disclaimer extends React.Component {
  state = {
    open: true
  }

  onClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Dialog
          open={ this.state.open }
          onRequestClose={ this.onClose }
        >
          <div className={ classes.root }>
            <p className={ classes.title } >
              Disclaimer
            </p>
            <p className={ classes.body } >
              This site is built as a project for personal educational purpose only. It intends to provide information about the builder's web development skills.
              <br />
              <br />
               The site is not intended for and should not be used for commercial transactions.
               <br />
               <br />
               All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.

            </p>
             <Button
              color='inherit'
              raised
              onClick={ this.onClose }
              aria-label='Close'
            >
              GOT IT!
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapState = state => ({

})

const mapDispatch = ({})

export default  connect(mapState, mapDispatch)(
                withStyles(styles)(
                  Disclaimer
                ));
