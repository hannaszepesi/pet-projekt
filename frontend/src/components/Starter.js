import Box from "@mui/material/Box";
import AnimalImageSmall from "../static/images/logo.png"

import Typography from "@mui/material/Typography";
import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import {Divider, ThemeProvider} from "@mui/material";
import Container from "@mui/material/Container";
import {mainTypographyLg, mainTypographySm, starterBox} from "./Styles";


export default function Starter() {
    let theme = createTheme();
    theme = responsiveFontSizes(theme);
    return (<ThemeProvider theme={theme}>
            <Box
                sx={starterBox}>
                <Typography variant="h3" sx={mainTypographyLg}>
                    Az összes mentett állat egy helyen!
                </Typography>
            </Box>
            <Box sx={{
                display: {xs: "flex", sm: "none"}, justifyContent: "center", padding: 2
            }}>
                <Box component="img" src={AnimalImageSmall} alt="page_logo" width="100%" sx={{
                    display: {xs: "flex", sm: "none"}, maxWidth: "10em"
                }}></Box>
            </Box>
            <Typography variant="h3" sx={mainTypographySm}>
                Az összes mentett állat egy helyen!
            </Typography>
            <Container>
                <Typography variant="h1" sx={{
                    textTransform: "uppercase", fontFamily: 'monospace', fontWeight: 700, padding: 5,
                }}>
                    Ne vásárolj, fogadj örökbe!
                </Typography>
                <Divider sx={{borderBottomWidth: 5, borderColor: "rgba(159,38,124,1)"}}/>
                <Box sx={{
                    display: {xs: "none", sm: "flex"}, justifyContent: "center", padding: 2
                }}>
                    <Box component="img" src={AnimalImageSmall} alt="page_logo" width="100%" sx={{
                        display: {xs: "none", sm: "flex"}, maxWidth: "10em"
                    }}></Box>
                </Box>
                <Typography variant="h2" sx={{
                    textTransform: "uppercase", fontFamily: 'monospace', fontWeight: 700, padding: 5,
                }}>
                    Miről szól a Pet Projekt?
                </Typography>
                <Typography variant="h3" sx={{
                    textTransform: "uppercase", fontFamily: 'monospace', padding: 5,
                }}>
                    ...
                </Typography>
            </Container>
        </ThemeProvider>

    )
}