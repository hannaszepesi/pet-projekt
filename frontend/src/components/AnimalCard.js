import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import Puli from '../static/images/Puli.jpg';
import Bernathegyi from '../static/images/bernathegyi-kolyok.jpg'
import Grid from "@mui/material/Unstable_Grid2";
import Nemetjuhasz from '../static/images/nemetjuhasz.jpg'
import {animalCard, animalCardTypography} from "./Styles";

export default function AnimalCard() {
    const responsiveImage = {width: {xs: "auto", s: "auto", md: "400px", lg: "400px"}}
    return (
        <Grid container justifyContent="center" paddingTop="1em">
            <Grid container sx={responsiveImage}>
                <Card sx={animalCard}>
                    <CardActionArea>
                        <CardMedia
                            height="250"
                            component="img"
                            image={Puli}
                            alt="puli"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={animalCardTypography}>
                                Bodri
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>


            <Grid container sx={responsiveImage}>
                <Card sx={animalCard}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={Bernathegyi}
                            alt="bernathegyi"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={animalCardTypography}>
                                Beethowen
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>


            <Grid container sx={responsiveImage}>
                <Card sx={animalCard}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={Nemetjuhasz}
                            alt="nemetjuhasz"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={animalCardTypography}>
                                Rex
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}