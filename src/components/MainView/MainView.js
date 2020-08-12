import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

const mainViewStyles = makeStyles({
  mainViewContainer: {
    width: '100%',
    position: 'relative',
    marginTop: 140,
    height: 'calc(100vh - 160px)',
    overflow: 'scrollX'
  },
  moduleCard: {
    boxShadow: '0 0 0px 3px white',
    borderRadius: 8,
    minHeight: 200,
    transition: '0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      boxShadow: '0 0 0px 0px white',
      background: 'rgba(196, 196, 196, 0.5)'
    }
  },
  cardTitle: {
    display: 'inline-block',
    height: 50
  },  
  cardDescription: {
    display: 'inline-block',
    height: 90
  },
});

const linearProgressStyles = makeStyles({
  cardTitle: {
    fontWeight: 600,
  }
});

export function LinearProgressWithLabel(props) {
  const classes = linearProgressStyles(props);
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography color="primary" variant="body2">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export function MainView(props) {

  const classes = mainViewStyles(props);

  return (
    <div className={classes.mainViewContainer}>
      <Typography color="primary" variant="h1">{props.currentView.title}</Typography>
      <Typography color="primary" variant="subtitle1">{props.currentView.description}</Typography>
      <Grid container spacing={3}>
        {
          props.currentView.modules.map((mod) => (
            <Grid item xs={4}>
              <Card className={classes.moduleCard}>
                <CardContent>
                  <Typography className={classes.cardTitle} color="primary" variant="h3">{mod.title}</Typography>
                  <Typography className={classes.cardDescription} color="primary" variant="p">{mod.description}</Typography>
                  <LinearProgressWithLabel className={classes.moduleProgress} value={mod.completion} />
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}