import React from 'react'

import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  icon: {
    fontSize: theme.custom.icon.error.size,
    marginBottom: theme.spacing.unit
  }
})

const IconPage = ({ classes, text, icon: Icon }) => (
  <React.Fragment>
    <Icon className={classes.icon} />
    <Typography variant='title' gutterBottom>
      {text}
    </Typography>
  </React.Fragment>
)

export default withStyles(styles)(IconPage)
