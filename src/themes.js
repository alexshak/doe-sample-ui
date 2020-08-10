import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const MinimalTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: green[500],
        },
        text: {
            primary: "#FFFFFF"
        },
        background: {
            paper: 'rgba(196, 196, 196, 0.3)'
        },
        spacing: 4
    },
});