import grey from "@material-ui/core/colors/grey";
import orange from "@material-ui/core/colors/orange";
import cyan from "@material-ui/core/colors/cyan";
import { createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";
// A theme with custom primary and secondary color.
// It's optional.
export const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#9175f3",
            main: "#392776",
            dark: "#16083d",
        },
        secondary: {
            light: "#ffe94d",
            main: "#FDB702",
            dark: "#c58800",
        },
        text: {
            secondary: grey[600],
        },
        background: {
            default: "#fff",
            paper: grey[50],
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    shape: {
        borderRadius: 2,
    },
});
