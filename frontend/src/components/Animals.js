import Grid from "@mui/material/Unstable_Grid2";
import AnimalCard from "./AnimalCard";
import Container from "@mui/material/Container";
import { Divider, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import FilterIcon from "@mui/icons-material/Tune";
import SortIcon from "@mui/icons-material/Sort";
import { useState } from "react";
import DetailedSearch from "./DetailedSearch";
import { animalsBox } from "./Styles";

export default function Animals() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [displayed, setDisplayed] = useState("none");

  const handleClick = () => {
    if (displayed === "none") {
      setDisplayed("flex");
    } else {
      setDisplayed("none");
    }
  };

  return (
    <Box sx={animalsBox}>
      <DetailedSearch displayed={displayed} />
      <Box sx={{ display: { lg: "none", xs: "flex" } }}>
        <Button
          variant="contained"
          onClick={handleClick}
          size="medium"
          sx={{
            margin: 1,
            backgroundColor: "rgba(159,38,124,1)",
            "&:hover": {
              backgroundColor: "rgba(159,38,124,1)",
            },
          }}
          endIcon={<FilterIcon />}
        >
          Részletes keresés
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{
            margin: 1,
            backgroundColor: "rgba(159,38,124,1)",
            "&:hover": {
              backgroundColor: "rgba(159,38,124,1)",
            },
          }}
          endIcon={<SortIcon />}
        >
          Rendezés
        </Button>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        flexDirection="column"
        margin={2}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "rgba(159,38,124,1)",
            display: { s: "none", xs: "none" },
          }}
          startIcon={<SortIcon />}
        >
          Rendezés
        </Button>
        <ThemeProvider theme={theme}>
          <Container>
            <Typography
              variant="h4"
              color="rgba(131,42,105,1)"
              sx={{
                textTransform: "uppercase",
                fontFamily: "monospace",
                fontWeight: 700,
                paddingTop: { xs: 0, lg: 2 },
                paddingBottom: 2,
              }}
            >
              Örökbefogadható állatok
            </Typography>
            <Divider
              sx={{
                height: 2,
                background:
                  "linear-gradient(90deg, rgba(252,158,69,1) 21%, rgba(159,38,124,1) 80%);",
              }}
            />
          </Container>
        </ThemeProvider>

        <AnimalCard />
      </Grid>
    </Box>
  );
}
