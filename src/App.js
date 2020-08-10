import React from 'react';
import logo from './assets/logo.svg';
import './App.css';
import clsx from 'clsx';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import NotesIcon from '@material-ui/icons/Notes';
import MapIcon from '@material-ui/icons/Map';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { MediaBackdrop } from './components/MediaBackdrop/MediaBackdrop';
import { MinimalTheme } from './themes';

const sideMenuWidth = 340;

const MainStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {

    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${sideMenuWidth}px)`,
    marginLeft: sideMenuWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: sideMenuWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: sideMenuWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -sideMenuWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listItem: { 
    padding: '16px',
    '&:hover': { 
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
    }
  }
}));

export default function App() {
  const classes = MainStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <ThemeProvider theme={MinimalTheme}>
        <AppBar
          position="fixed"
          color="transparent"
          elevation={0}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              size="medium"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <img src={logo} className={classes.brandLogo} alt="logo" />
          </Toolbar>
        </AppBar>

        <MediaBackdrop type="img" overlayOpacity="0.5" overlayColor="#202020" source="backdrop" />

        {/* Side Menu Component */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronRightIcon fontSize="large" color="primary" />
            </IconButton>
          </div>
          <List>
            {['Info', 'Notes', 'Map', 'Sign Out'].map((text, index) => (
              <ListItem button key={text} className={classes.listItem}>
                <ListItemIcon>
                    { 
                      text === 'Info' ? <InfoIcon color="primary" fontSize="medium" /> : 
                      text === 'Notes' ? <NotesIcon  color="primary" fontSize="medium" /> : 
                      text === 'Map' ? <MapIcon  color="primary" fontSize="medium" /> : 
                      <ExitToAppIcon  color="primary" fontSize="medium" />
                    }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
 
      </ThemeProvider>
    </div>
  );
}
