import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';

export default function Taetigkeiten() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(previousOpen => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <>

<Button variant="contained" sx={{marginLeft: 2}}>
        <AddIcon></AddIcon>
      </Button>

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
                  Sind fuer diese Taetigkeiten besondere Fachkenntnisse und
                  praktische Erfahrungen oder Fachliche weisungsbefugniss
                  notwending? Besondere Fachkenntnisse beinhalten mehr als im
                  Studium vermittelt wurde.
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
            <FormControlLabel value="nein" control={<Radio />} label="Nein" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="leitungsfunktion-label">
            Sind fuer diese Taetigkeiten besondere schwierigkeit und Bedeutung
            vorhanden?
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
                  Besondere schwierigkeit bezieht sich bspw. auf gesteigerte
                  Fachkenntnisse in Breite und Tiefe, Spezialkenntnisse,
                  ausergewoehnliche fachliche Erfahrungen, sonstige
                  gleichwertige Qualifikationen. Die bedeutung bezieht sich auf
                  die Auswirkungen der Taetigkeiten, bspw. der groesse des
                  aufgabengebiets, die Tragweiter der zu bearbeitenden Materie
                  oder die Auswirkungen der Taetigkeiten auf den
                  innerdienstlichen Bereich, dritte oder die allgemeinheit.
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
            <FormControlLabel value="nein" control={<Radio />} label="Nein" />
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
                  Besonderes Aufgabengebiet, das nicht teil des Studiums war und
                  fuer dessen Bearbeitung ausergewoehnliche, spezielle
                  Fachkenntnisse erforderlich sind.
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
            <FormControlLabel value="nein" control={<Radio />} label="Nein" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="leitungsfunktion-label">
            Ist fuer diese Taetigkeiten das Mass der Verantwortung erfuellt?
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
                  Verantwortung fur mehrere Arbeitsgruppen oder bei Bearbeitung
                  schwieriger Grundsatzfragen mit richtungsweisender bedeutung
                  fuer nachgeordnete Bereiche oder die allgemeinheit.
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
            <FormControlLabel value="nein" control={<Radio />} label="Nein" />
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );
}
