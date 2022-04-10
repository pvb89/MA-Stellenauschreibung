import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

export default function Allgemein(props) {
  const [fachabteilung, setFachabteilung] = React.useState("");

  console.log("test", props.data);

  const handleChange = event => {
    setFachabteilung(event.target.value);
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

  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="funktionsbezeichnung"
          label="Funktionsbezeichnung"
          value={props.data.allg_funktionsbezeichnung.value}
          onChange={e =>
            props.setData({
              ...props.data,
              allg_funktionsbezeichnung: { value: e.target.value },
            })
          }
        />
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="fachabteilung-label">Fachabteilung</InputLabel>
          <Select
            labelId="fachabteilung-label"
            id="fachabteilung"
            label="Fachabteilung"
            value={fachabteilung}
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
          <FormLabel id="quereinsteiger-label">Quereinsteiger?</FormLabel>
          <RadioGroup
                        value={props.data.allg_quereinsteiger.value}
            required
            row
            aria-labelledby="quereinsteiger-label"
            name="quereinsteiger"
            onChange={(e) => props.setData({...props.data, allg_quereinsteiger: {value: e.target.value}})}
          >
            <FormControlLabel value={true} control={<Radio />} label="Ja" />
            <FormControlLabel value={false} control={<Radio />} label="Nein" />
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
            value={props.data.allg_hochschulabschluss.value}

            aria-labelledby="hochschulabschluss-label"
            name="hochschulabschluss"
            onChange={(e) => props.setData({...props.data, allg_hochschulabschluss: {value: e.target.value}})}
          >
            <FormControlLabel value={true} control={<Radio />} label="Ja" />
            <FormControlLabel value={false} control={<Radio />} label="Nein" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="taetigkeitsbereich-label">
            Entspricht der zukuenftige Taetigkeitsbereich der Studienrichtung?
          </FormLabel>
          <RadioGroup
            value={false}
            required
            row
            aria-labelledby="taetigkeitsbereich-label"
            name="taetigkeitsbereich"
          >
            <FormControlLabel value={true} control={<Radio />} label="Ja" />
            <FormControlLabel value={false} control={<Radio />} label="Nein" />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <FormLabel id="leitungsfunktion-label">Berufserfahrung</FormLabel>
          <Box sx={{ marginLeft: 3, marginRight: 3, marginTop: 1 }}>
            <Slider
              required
              aria-label="Always visible"
              defaultValue={0}
              getAriaValueText={valuetext}
              step={1}
              marks={marks}
              min={1}
              max={6}
              onChange={(e) => props.setData({...props.data, allg_berufserfahrung: { value: e.target.value > 3 ? true : false}})}
            />
          </Box>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="leitungsfunktion-label">
            Leitungsfunktion vorhanden?
          </FormLabel>
          <RadioGroup
                      value={props.data.allg_leitungsfunktion.value}
            required
            row
            aria-labelledby="leitungsfunktion-label"
            name="leitungsfunktion"
            onChange={(e) => props.setData({...props.data, allg_leitungsfunktion: {value: e.target.value === "true" ? true : false}})}
          >
            <FormControlLabel value={true} control={<Radio />} label="Ja" />
            <FormControlLabel value={false} control={<Radio />} label="Nein" />
          </RadioGroup>
        </FormControl>
      </Grid>

      {props.data.allg_leitungsfunktion.value && (
        <>
          <Grid item xs={12}>
            <InputLabel>
              Wie viele Mitarbeiter sind direkt unterstellt?
            </InputLabel>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="e10-label">E10</InputLabel>
              <Select
                required
                label="EG10"
                value={props.data.allg_EG10.value}
                onChange={e =>
                  props.setData({
                    ...props.data,
                    allg_EG10: { value: e.target.value },
                  })
                }
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>+5</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="fachabteilung-label">E11</InputLabel>
              <Select
                required
                label="EG11"
                value={props.data.allg_EG11.value}
                onChange={e =>
                  props.setData({
                    ...props.data,
                    allg_EG11: { value: e.target.value },
                  })
                }
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>+5</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="fachabteilung-label">E12</InputLabel>
              <Select
                required
                label="EG12"
                value={props.data.allg_EG12.value}
                onChange={e =>
                  props.setData({
                    ...props.data,
                    allg_EG12: { value: e.target.value },
                  })
                }
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>+5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </>
      )}
    </>
  );
}
