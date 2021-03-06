import React from 'react'

import { withStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
})

const Header = ({ classes, title }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Typography variant='title' color='inherit'>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
