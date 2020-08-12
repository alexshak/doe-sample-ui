import { createMuiTheme } from '@material-ui/core/styles';

export const MinimalTheme = createMuiTheme({
    typography: { 
        h1: { 
            fontSize: '3rem',
            fontWeight: 500,
        },
        h3: { 
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.1rem'
        },
        subtitle1: { 
            fontWeight: 500, 
            fontSize: '1.2rem',
            marginBottom: '1.2rem'
        }
    },
    palette: {
        primary: {
            main: "#FFFFFF",
        },
        secondary: {
            main: "#202020",
        },
        text: {
            primary: "#FFFFFF"
        },
        background: {
            paper: 'rgba(196, 196, 196, 0.3)'
        },
    },
    overrides: { 
        MuiLinearProgress: { 
            root: { 
                height: '8px'
            }, 
            colorPrimary: { 
                backgroundColor: 'rgba(196, 196, 196, 0.3)'
            },
            barColorPrimary: { 
                backgroundColor: '#00C35A'
            }
        },
        MuiListItemText: { 
            primary: { 
                fontSize: '1.1rem', 
                fontWeight:500
            }
        }
    }
});