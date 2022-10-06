import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Puli from "../static/images/Puli.jpg";
import Bernathegyi from "../static/images/bernathegyi-kolyok.jpg";
import Grid from "@mui/material/Unstable_Grid2";
import Nemetjuhasz from "../static/images/nemetjuhasz.jpg";
import { animalCard, animalCardTypography } from "./Styles";

export default function AnimalCard() {
  const animals = [
    { name: "Bodri", picture: Puli },
    { name: "Beethoven", picture: Bernathegyi },
    {
      name: "Rex",
      picture: Nemetjuhasz,
    },
  ];

  const responsiveImage = {
    width: { xs: "auto", s: "auto", md: "400px", lg: "400px" },
  };
  return (
    <Grid container justifyContent="center" paddingTop="1em">
      {animals.map((animal) => {
        return (
          <Grid container sx={responsiveImage}>
            <Card sx={animalCard}>
              <CardActionArea>
                <CardMedia
                  height="250"
                  component="img"
                  image={animal.picture}
                  alt={animal.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={animalCardTypography}
                  >
                    {animal.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
