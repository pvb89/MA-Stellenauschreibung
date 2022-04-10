import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Spezifisch() {
  return (
    <>
      <Grid item xs={12}>
        <TextField fullWidth id="fachkenntnisse" label="Fachkenntnisse" />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          id="besondereAnforderungen"
          label="Besondere Anforderungen"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField fullWidth id="arbeitsmittel" label="Arbeitsmittel" />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          id="dienstlicheBeziehungen"
          label="Dienstliche Beziehungen"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          id="handlungsspielraum"
          label="Handlungspielraum"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          id="reichweiteAuswirkungen"
          label="Reichweite und Auswirkungen des Arbeitsverhaltens"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField fullWidth id="vertretungen" label="Vertretungen " />
      </Grid>
    </>
  );
}
