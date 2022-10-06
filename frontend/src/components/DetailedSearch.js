import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ThemeProvider,
} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { colorTheme } from "./Styles";

const DetailedSearch = (props) => {
  const { displayed } = props;

  const cities = () => {
    return (
      <Autocomplete
        ListboxProps={{
          sx: { fontSize: 22 },
        }}
        disablePortal
        id="combo-box-demo"
        options={cityNames.map((option) => option.name)}
        sx={{ padding: 2, maxWidth: 300 }}
        renderInput={(params) => (
          <TextField placeholder="Összes" {...params} label="Település" />
        )}
      />
    );
  };

  const cityNames = [
    { id: 1, name: "Budapest" },
    { id: 2, name: "Dunaújváros" },
  ];

  const ageCheckBoxes = () => {
    return (
      <FormControl sx={{ padding: 2, alignItems: "flex-start" }}>
        <FormLabel>Kor</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Kölyök ( < 1 év)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Fiatal (1-3 év)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Felnőtt (3-8 év)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Idős (8- év)"
          />
        </FormGroup>
      </FormControl>
    );
  };

  const genderCheckBoxes = () => {
    return (
      <FormControl sx={{ padding: 2, alignItems: "flex-start" }}>
        <FormLabel>Nem</FormLabel>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Hím" />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Nőstény"
          />
        </FormGroup>
      </FormControl>
    );
  };

  const hairCheckBoxes = () => {
    return (
      <FormControl sx={{ padding: 2, alignItems: "flex-start" }}>
        <FormLabel>Szőr hossza</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Rövid"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Hosszú"
          />
        </FormGroup>
      </FormControl>
    );
  };

  const sizeCheckBoxes = () => {
    return (
      <FormControl sx={{ padding: 2, alignItems: "flex-start" }}>
        <FormLabel>Méret</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Kicsi (0-10 kg)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Közepes (10-15 kg)"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Nagy (15- kg)"
          />
        </FormGroup>
      </FormControl>
    );
  };

  const breedInput = () => {
    return (
      <Autocomplete
        sx={{ padding: 2, maxWidth: 300 }}
        multiple
        id="tags-breeds"
        options={breeds}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Fajta" />}
      />
    );
  };

  const breeds = [
    { id: 0, name: "Keverék" },
    { id: 1, name: "Husky" },
    { id: 2, name: "Labrador" },
  ];

  const attributeInput = () => {
    return (
      <Autocomplete
        sx={{ padding: 2, maxWidth: 300, fontSize: "2em" }}
        multiple
        id="tags-attributes"
        options={attributes}
        getOptionLabel={(option) => option.name}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label="Tulajdonságok" />
        )}
      />
    );
  };

  const attributes = [
    { id: 1, name: "Nyugodt" },
    { id: 2, name: "Energikus" },
    { id: 2, name: "Szobatiszta" },
  ];

  return (
    <Box
      sx={{
        border: {
          lg: "5px solid rgba(159,38,124,1)",
          md: "5px solid rgba(159,38,124,1)",
          sm: "5px solid rgba(159,38,124,1)",
          xs: "none",
        },
        borderTop: { xs: "5px solid rgba(159,38,124,1)" },
        borderBottom: { xs: "5px solid rgba(159,38,124,1)" },
        borderRadius: { lg: 3, md: 3, sm: 3, xs: 0 },
        display: { lg: "flex", s: displayed, xs: displayed, md: displayed },
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        maxWidth: 400,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <ThemeProvider theme={colorTheme}>
        <Container>
          <Typography
            color="rgba(159,38,124,1)"
            sx={{
              textTransform: "uppercase",
              fontFamily: "monospace",
              paddingTop: 2,
              fontWeight: "bold",
            }}
          >
            {" "}
            Részletes keresés{" "}
          </Typography>
          {cities()}

          {breedInput()}

          {attributeInput()}
        </Container>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          {ageCheckBoxes()}

          {genderCheckBoxes()}

          {sizeCheckBoxes()}

          {hairCheckBoxes()}
        </Container>
      </ThemeProvider>
      <Box sx={{ padding: 5 }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "rgba(159,38,124,1)",
            "&:hover": {
              backgroundColor: "rgba(252,158,69,1)",
            },
          }}
          startIcon={<SearchIcon />}
        >
          Keresés
        </Button>
      </Box>
    </Box>
  );
};

export default DetailedSearch;
