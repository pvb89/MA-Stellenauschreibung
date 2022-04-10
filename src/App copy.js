import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import IconButton from "@mui/material/IconButton";

const steps = ["Allgemein", "Spezifisch", "Resumee"];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  const marks = [
    {
      value: 1,
      label: "1 Jahr",
    },
    {
      value: 2,
      label: "2 Jahre",
    },
    {
      value: 3,
      label: "3 Jahre",
    },
    {
      value: 4,
      label: "4 Jahre",
    },
    {
      value: 5,
      label: "5 Jahre",
    },
    {
      value: 6,
      label: "> 5 Jahre",
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = step => {
    return step === 1;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(previousOpen => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          component="img"
          sx={{
            maxWidth: 450,
            marginTop: 8,
          }}
          alt="The house from the offer."
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Technische_Hochschule_Brandenburg_Logo.svg/2000px-Technische_Hochschule_Brandenburg_Logo.svg.png"
        />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption">Optional</Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="funktionsbezeichnung"
                label="Funktionsbezeichnung"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="fachabteilung-label">Fachabteilung</InputLabel>
                <Select
                  required
                  labelId="fachabteilung-label"
                  id="fachabteilung"
                  value={age}
                  label="Fachabteilung"
                  onChange={handleChange}
                >
                  <MenuItem value="a">A</MenuItem>
                  <MenuItem value="b">B</MenuItem>
                  <MenuItem value="c">C</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="taetigkeitsbereich-label">
                  Quereinsteiger?
                </FormLabel>
                <RadioGroup
                  required
                  row
                  aria-labelledby="taetigkeitsbereich-label"
                  name="taetigkeitsbereich"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="hochschulabschluss-label">
                  Hochschulabschluss?
                </FormLabel>
                <RadioGroup
                  required
                  row
                  aria-labelledby="hochschulabschluss-label"
                  name="hochschulabschluss"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="taetigkeitsbereich-label">
                  Entspricht der zukuenftige Taetigkeitsbereich der
                  Studienrichtung?
                </FormLabel>
                <RadioGroup
                  required
                  row
                  aria-labelledby="taetigkeitsbereich-label"
                  name="taetigkeitsbereich"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel id="leitungsfunktion-label">
                  Leitungsfunktion vorhanden?
                </FormLabel>

                <Slider
                  aria-label="Always visible"
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  step={1}
                  marks={marks}
                  min={1}
                  max={6}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="leitungsfunktion-label">
                  Leitungsfunktion vorhanden?
                </FormLabel>
                <RadioGroup
                  required
                  row
                  aria-labelledby="leitungsfunktion-label"
                  name="leitungsfunktion"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>
                Wie viele Mitarbeiter sind direkt unterstellt?
              </InputLabel>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="fachabteilung-label">E10</InputLabel>
                <Select
                  required
                  labelId="fachabteilung-label"
                  id="fachabteilung"
                  value={age}
                  label="Fachabteilung"
                  onChange={handleChange}
                >
                  <MenuItem value="a">0</MenuItem>

                  <MenuItem value="a">1</MenuItem>
                  <MenuItem value="b">2</MenuItem>
                  <MenuItem value="c">3</MenuItem>
                  <MenuItem value="a">4</MenuItem>
                  <MenuItem value="b">+5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="fachabteilung-label">E11</InputLabel>
                <Select
                  required
                  labelId="fachabteilung-label"
                  id="fachabteilung"
                  value={age}
                  label="Fachabteilung"
                  onChange={handleChange}
                >
                  <MenuItem value="a">0</MenuItem>
                  <MenuItem value="a">1</MenuItem>
                  <MenuItem value="b">2</MenuItem>
                  <MenuItem value="c">3</MenuItem>
                  <MenuItem value="a">4</MenuItem>
                  <MenuItem value="b">+5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="fachabteilung-label">E12</InputLabel>
                <Select
                  required
                  labelId="fachabteilung-label"
                  id="fachabteilung"
                  value={age}
                  label="Fachabteilung"
                  onChange={handleChange}
                >
                  <MenuItem value="a">0</MenuItem>

                  <MenuItem value="a">1</MenuItem>
                  <MenuItem value="b">2</MenuItem>
                  <MenuItem value="c">3</MenuItem>
                  <MenuItem value="a">4</MenuItem>
                  <MenuItem value="b">+5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="fachkenntnisse"
                label="Fachkenntnisse"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="besondereAnforderungen"
                label="Besondere Anforderungen"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="arbeitsmittel"
                label="Arbeitsmittel"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="dienstlicheBeziehungen"
                label="Dienstliche Beziehungen"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="handlungsspielraum"
                label="Handlungspielraum"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="reichweiteAuswirkungen"
                label="Reichweite und Auswirkungen des Arbeitsverhaltens"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="vertretungen"
                label="Vertretungen "
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="arbeitsvorgang"
                label="Beschreibung der Taetigkeiten als ein Arbeitsvorgang"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="vertretungen"
                label="Vertretungen "
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="arbeitsvorgang"
                label="Beschreibung der Taetigkeiten als ein Arbeitsvorgang "
                multiline
                rows={4}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel id="arbeitsvorgangAnteil-label">
                  Zeitanteil des Arbeitsvorgangs in Prozent
                </FormLabel>

                <Slider
                  aria-label="Always visible"
                  defaultValue={5}
                  step={5}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  id="arbeitsvorgangAnteil"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="leitungsfunktion-label">
                  Sind fuer diese Taetigkeiten besondere Leistungen vorhanden?
                  <IconButton aria-label="Example" onClick={handleClick}>
                    <InfoRoundedIcon color="primary"></InfoRoundedIcon>
                  </IconButton>
                </FormLabel>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Box
                        sx={{
                          maxWidth: 350,
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                        }}
                      >
                        Sind fuer diese Taetigkeiten besondere Fachkenntnisse
                        und praktische Erfahrungen oder Fachliche
                        weisungsbefugniss notwending? Besondere Fachkenntnisse
                        beinhalten mehr als im Studium vermittelt wurde.
                      </Box>
                    </Fade>
                  )}
                </Popper>
                <RadioGroup
                  required
                  row
                  aria-labelledby="leitungsfunktion-label"
                  name="leitungsfunktion"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="leitungsfunktion-label">
                  Sind fuer diese Taetigkeiten besondere schwierigkeit und
                  Bedeutung vorhanden?
                  <IconButton aria-label="Example" onClick={handleClick}>
                    <InfoRoundedIcon color="primary"></InfoRoundedIcon>
                  </IconButton>
                </FormLabel>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Box
                        sx={{
                          maxWidth: 350,
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                        }}
                      >
                        Besondere schwierigkeit bezieht sich bspw. auf
                        gesteigerte Fachkenntnisse in Breite und Tiefe,
                        Spezialkenntnisse, ausergewoehnliche fachliche
                        Erfahrungen, sonstige gleichwertige Qualifikationen. Die
                        bedeutung bezieht sich auf die Auswirkungen der
                        Taetigkeiten, bspw. der groesse des aufgabengebiets, die
                        Tragweiter der zu bearbeitenden Materie oder die
                        Auswirkungen der Taetigkeiten auf den innerdienstlichen
                        Bereich, dritte oder die allgemeinheit.
                      </Box>
                    </Fade>
                  )}
                </Popper>
                <RadioGroup
                  required
                  row
                  aria-labelledby="leitungsfunktion-label"
                  name="leitungsfunktion"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="leitungsfunktion-label">
                  Liegen fuer diese Taetigkeiten Spezialaufgaben vor ?
                  <IconButton aria-label="Example" onClick={handleClick}>
                    <InfoRoundedIcon color="primary"></InfoRoundedIcon>
                  </IconButton>
                </FormLabel>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Box
                        sx={{
                          maxWidth: 350,
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                        }}
                      >
                        Besonderes Aufgabengebiet, das nicht teil des Studiums
                        war und fuer dessen Bearbeitung ausergewoehnliche,
                        spezielle Fachkenntnisse erforderlich sind.
                      </Box>
                    </Fade>
                  )}
                </Popper>
                <RadioGroup
                  required
                  row
                  aria-labelledby="leitungsfunktion-label"
                  name="leitungsfunktion"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="leitungsfunktion-label">
                  Ist fuer diese Taetigkeiten das Mass der Verantwortung
                  erfuellt?
                  <IconButton aria-label="Example" onClick={handleClick}>
                    <InfoRoundedIcon color="primary"></InfoRoundedIcon>
                  </IconButton>
                </FormLabel>
                <Popper id={id} open={open} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Box
                        sx={{
                          maxWidth: 350,
                          border: 1,
                          p: 1,
                          bgcolor: "background.paper",
                        }}
                      >
                        Besonders weitreichende, hohe Verantwortung, bspw. bei
                        Verantwortung fur mehrere Arbeitsgruppen oder bei
                        Bearbeitung schwieriger Grundsatzfragen mit
                        richtungsweisender bedeutung fuer nachgeordnete Bereiche
                        oder die allgemeinheit.
                      </Box>
                    </Fade>
                  )}
                </Popper>
                <RadioGroup
                  required
                  row
                  aria-labelledby="leitungsfunktion-label"
                  name="leitungsfunktion"
                >
                  <FormControlLabel value="ja" control={<Radio />} label="Ja" />
                  <FormControlLabel
                    value="nein"
                    control={<Radio />}
                    label="Nein"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>

            <Button
            fullWidth
            variant="contained"
          >
            Weiteren Arbeitsvorgang hinzufuegen
          </Button>
          </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
