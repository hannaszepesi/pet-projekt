import AnimalImage from "../static/images/petcollage.png";
import {createTheme} from "@mui/material/styles";

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: 'rgba(252,158,69,1)'
        }, secondary: {
            main: 'rgba(159,38,124,1)'
        }
    }
})

export const responsiveWindow = {
    textAlign: "center", paddingTop: 10
}

export const starterBox = {
    height: {lg: "32em", md: "32em", sm: "32em", xs: "25em"},
    backgroundImage: `url(${AnimalImage})`,
    alignItems: "center",
    justifyContent: "center",
    display: {lg: "flex", md: "flex", sm: "flex", xs: "none"},
    opacity: 0.8
}

export const mainTypographyLg = {
    background: "linear-gradient(90deg, rgba(252,158,69,1) 21%, rgba(159,38,124,1) 80%);",
    textTransform: "uppercase",
    fontFamily: 'monospace',
    fontWeight: 700,
    padding: 5,
    borderRadius: 50,
    boxShadow: 3,
    display: {lg: "block", md: "block", sm: "none", xs: "none"}
}

export const mainTypographySm = {
    background: "linear-gradient(90deg, rgba(252,158,69,1) 21%, rgba(159,38,124,1) 80%);",
    textTransform: "uppercase",
    fontFamily: 'monospace',
    fontWeight: 700,
    padding: 2,
    boxShadow: 3,
    marginTop: {lg: 0, md: 0, sm: 0, xs: 3},
    display: {lg: "none", md: "none", sm: "block", xs: "block"}
}
export const navbarTypography = {
    mr: 2,
    display: {xs: 'none', sm: 'flex'},
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
}

export const animalsBox = {
    padding: 0,
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
    justifyContent: "space-around",
    borderRight: {lg: "5px solid rgba(159,38,124,1)"},
    borderLeft: {lg: "5px solid rgba(252,158,69,1)"}
}

export const detailedSearchBox = {
    border: {
        lg: "5px solid rgba(159,38,124,1)",
        md: "5px solid rgba(159,38,124,1)",
        sm: "5px solid rgba(159,38,124,1)",
        xs: "none"
    },
    borderTop: {xs: "5px solid rgba(159,38,124,1)"},
    borderBottom: {xs: "5px solid rgba(159,38,124,1)"},
    borderRadius: {lg: 3, md: 3, sm: 3, xs: 0},
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    maxWidth: 400,
    marginTop: 2,
    marginBottom: 2
}

export const animalCard = {
    margin: 2,
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "2px solid rgba(252,158,69,1)"
}

export const animalCardTypography = {
    margin: 2,
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "2px solid rgba(252,158,69,1)"
}

export const responsiveImage = {width: {xs: "auto", s: "auto", md: "400px", lg: "400px"}}