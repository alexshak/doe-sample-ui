import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backdrop from '../../assets/backdrop.jpg';

const mediaBackdropStyles = makeStyles({
  mediaContainer: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundImage: props => 'url(' + (props.source === 'backdrop' ? backdrop : '') + ')'
    ,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  overlay: {
    backgroundColor: props => props.overlayColor,
    opacity: props => props.overlayOpacity,
    top: 0,
    position: 'fixed',
    height: '100%',
    width: '100%'
  }
});

export function MediaBackdrop(props) {

  const classes = mediaBackdropStyles(props);

  return (
    <div className={classes.mediaContainer}>
      <div className={classes.overlay}></div>
    </div>
  )
}
