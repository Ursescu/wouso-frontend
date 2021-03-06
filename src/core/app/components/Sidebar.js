import React from 'react'

import { withStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'

const styles = theme => ({
  drawerPaper: { width: theme.custom.drawer.width },
  toolbar: theme.mixins.toolbar
})

const Sidebar = ({ classes, children }) => (
  <Drawer
    classes={{ paper: classes.drawerPaper }}
    anchor='left'
    variant='permanent'
  >
    <div className={classes.toolbar} />
    {children}
  </Drawer>
)

export default withStyles(styles)(Sidebar)
